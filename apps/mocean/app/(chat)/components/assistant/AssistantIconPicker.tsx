"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import data from "@emoji-mart/data";
import EmojiPicker from "@emoji-mart/react";
import { uploadsClient } from "@mocean/mastra/apiClient";
import { Bot, ImagePlus, Loader2, Smile } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface AssistantIconPickerProps {
  value?: string | null;
  onChange: (value: string | null) => void;
  className?: string;
}

/** 判断是否为图片（base64 或 URL） */
export function isImage(val: string | null | undefined): boolean {
  if (!val) return false;
  return val.startsWith("data:image/") || val.startsWith("http");
}

/** 判断是否为本地 URL，不走 Next.js 图片优化 */
function isUnoptimized(val: string): boolean {
  return val.startsWith("data:") || val.startsWith("http://localhost");
}

/** 将 File 压缩裁剪为 128×128 WebP Blob */
async function compressImageToBlob(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const size = 128;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("canvas context unavailable"));
      const min = Math.min(img.width, img.height);
      const sx = (img.width - min) / 2;
      const sy = (img.height - min) / 2;
      ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error("toBlob 失败"));
          resolve(blob);
        },
        "image/webp",
        0.85
      );
    };
    img.onerror = reject;
    img.src = objectUrl;
  });
}

/** 图标预览（emoji / 图片 / 默认占位） */
export const IconPreview: React.FC<{
  value?: string | null;
  size?: string;
}> = ({ value, size = "h-16 w-16" }) => {
  if (isImage(value) && value) {
    return (
      <div className={cn("relative overflow-hidden rounded-lg", size)}>
        <Image
          src={value}
          alt="icon"
          fill
          className="object-cover"
          unoptimized={isUnoptimized(value)}
        />
      </div>
    );
  }
  if (value) {
    return (
      <span className={cn("flex items-center justify-center text-xl", size)}>
        {value}
      </span>
    );
  }
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-lg bg-muted text-muted-foreground",
        size
      )}
    >
      <Bot className="h-1/2 w-1/2" />
    </span>
  );
};

const AssistantIconPicker: React.FC<AssistantIconPickerProps> = ({
  value,
  onChange,
  className
}) => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEmojiSelect = (emoji: { native: string }) => {
    onChange(emoji.native);
    setOpen(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const blob = await compressImageToBlob(file);
      const compressed = new File(
        [blob],
        file.name.replace(/\.[^.]+$/, ".webp"),
        { type: "image/webp" }
      );
      const record = await uploadsClient.upload(compressed, "avatars");
      onChange(uploadsClient.getFileUrl(record.id));
      setOpen(false);
    } catch {
      // ignore
    } finally {
      setUploading(false);
    }
    e.target.value = "";
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "group relative flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-input bg-background transition-colors hover:border-foreground/30",
            className
          )}
        >
          <IconPreview value={value} size="h-12 w-12" />

          {/* clear badge */}
          {value && (
            <span
              role="button"
              aria-label="清除图标"
              className="absolute -right-1.5 -top-1.5 hidden h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-muted text-[10px] text-muted-foreground group-hover:flex"
              onClick={handleClear}
            >
              ✕
            </span>
          )}

          {/* hover overlay */}
          <span className="absolute inset-0 rounded-lg bg-black/0 transition-colors group-hover:bg-black/[0.06]" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-0"
        align="start"
        side="bottom"
        sideOffset={6}
      >
        <Tabs defaultValue={isImage(value) ? "image" : "emoji"}>
          <TabsList className="m-2 mb-0 w-[calc(100%-1rem)]">
            <TabsTrigger value="emoji" className="flex-1 gap-1.5">
              <Smile className="h-3.5 w-3.5" />
              Emoji
            </TabsTrigger>
            <TabsTrigger value="image" className="flex-1 gap-1.5">
              <ImagePlus className="h-3.5 w-3.5" />
              图片
            </TabsTrigger>
          </TabsList>

          {/* Emoji Tab */}
          <TabsContent value="emoji" className="m-0">
            <div onWheel={(e) => e.stopPropagation()}>
              <EmojiPicker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                locale="zh"
                theme="light"
                previewPosition="none"
                skinTonePosition="search"
              />
            </div>
          </TabsContent>

          {/* Image Tab */}
          <TabsContent value="image" className="w-64 space-y-3 p-4">
            {isImage(value) && (
              <div className="flex justify-center">
                <IconPreview value={value} size="h-20 w-20" />
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => void handleFileChange(e)}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full gap-2"
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
            >
              {uploading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  上传中...
                </>
              ) : (
                <>
                  <ImagePlus className="h-3.5 w-3.5" />
                  选择图片
                </>
              )}
            </Button>
            <p className="text-center text-[11px] text-muted-foreground">
              支持 JPG、PNG、WebP，自动裁剪为 128×128
            </p>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default AssistantIconPicker;
