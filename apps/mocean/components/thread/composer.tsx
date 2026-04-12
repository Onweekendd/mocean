"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";
import type { FC } from "react";

import Image from "next/image";

import { ComposerPrimitive, ThreadPrimitive } from "@assistant-ui/react";
import { CameraIcon, PaperclipIcon, SendHorizontalIcon, X } from "lucide-react";

import { TooltipIconButton } from "@/components/tooltip-icon-button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { AdvanceInput } from "../custom/advance-input";
import { CircleStopIcon } from "./shared";

// ─── Types ────────────────────────────────────────────────────────────────────

type PastedImage = {
  id: string;
  dataUrl: string;
};

// ─── Context ──────────────────────────────────────────────────────────────────

type ComposerImagesContextValue = {
  images: PastedImage[];
  previewUrl: string | null;
  addImages: (files: File[]) => void;
  removeImage: (id: string) => void;
  setPreviewUrl: (url: string | null) => void;
};

const ComposerImagesContext = createContext<ComposerImagesContextValue | null>(
  null
);

const useComposerImages = () => {
  const ctx = useContext(ComposerImagesContext);
  if (!ctx)
    throw new Error(
      "useComposerImages must be used within ComposerImagesProvider"
    );
  return ctx;
};

export const ComposerImagesProvider: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [images, setImages] = useState<PastedImage[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const addImages = useCallback((files: File[]) => {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setImages((prev) => [...prev, { id: crypto.randomUUID(), dataUrl }]);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }, []);

  return (
    <ComposerImagesContext.Provider
      value={{ images, previewUrl, addImages, removeImage, setPreviewUrl }}
    >
      {children}
    </ComposerImagesContext.Provider>
  );
};

// ─── PastedImageList ──────────────────────────────────────────────────────────

const PastedImageList: FC = () => {
  const { images, removeImage, setPreviewUrl } = useComposerImages();

  if (images.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 px-1 pb-1">
      {images.map((img) => (
        <div key={img.id} className="group relative h-16 w-16">
          <Image
            src={img.dataUrl}
            alt="粘贴的图片"
            fill
            unoptimized
            className="cursor-pointer rounded-md object-cover"
            onClick={() => setPreviewUrl(img.dataUrl)}
          />
          <button
            type="button"
            onClick={() => removeImage(img.id)}
            className="absolute -right-1.5 -top-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-black/70 text-white group-hover:flex"
          >
            <X className="h-2.5 w-2.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

// ─── Composer ─────────────────────────────────────────────────────────────────

export const Composer: FC = () => {
  const { addImages, previewUrl, setPreviewUrl } = useComposerImages();

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      const imageFiles: File[] = [];
      for (const item of Array.from(items)) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) imageFiles.push(file);
        }
      }
      if (imageFiles.length > 0) addImages(imageFiles);
    },
    [addImages]
  );

  return (
    <>
      <PastedImageList />
      <ComposerPrimitive.Root className="flex w-full flex-col rounded-xl border border-brand-slate-200 bg-brand-slate-100 px-[0.375rem] shadow-sm transition-colors ease-in focus-within:border-ring/20">
        <ComposerPrimitive.Input asChild>
          <AdvanceInput
            rows={2}
            autoFocus
            placeholder="有什么可以帮你的吗..."
            className="flex-grow resize-none border-none bg-transparent text-sm shadow-none outline-none placeholder:text-muted-foreground focus:ring-0 focus-visible:ring-0 disabled:cursor-not-allowed"
            onPaste={handlePaste}
          />
        </ComposerPrimitive.Input>
        <ComposerToolbar />
      </ComposerPrimitive.Root>

      <Dialog open={!!previewUrl} onOpenChange={() => setPreviewUrl(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">图片预览</DialogTitle>
          {previewUrl && (
            <Image
              src={previewUrl}
              alt="图片预览"
              width={1200}
              height={900}
              unoptimized
              className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

// ─── ComposerExtras ───────────────────────────────────────────────────────────

export const ComposerExtras: FC = () => {
  const { addImages } = useComposerImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? []);
      if (files.length > 0) addImages(files);
      e.target.value = "";
    },
    [addImages]
  );

  return (
    <div className="flex items-center gap-1 px-1">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <TooltipIconButton
        tooltip="附件"
        variant="ghost"
        className="border-1 size-8 rounded-full border-greyscale-100 p-1.5 text-greyscale-800 shadow-sm hover:bg-greyscale-100 hover:text-greyscale-black"
      >
        <PaperclipIcon />
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="图片"
        variant="ghost"
        className="border-1 size-8 rounded-full border-greyscale-100 p-1.5 text-greyscale-800 shadow-sm hover:bg-greyscale-100 hover:text-greyscale-black"
        onClick={() => fileInputRef.current?.click()}
      >
        <CameraIcon />
      </TooltipIconButton>
    </div>
  );
};

// ─── Toolbar & Action ─────────────────────────────────────────────────────────

const ComposerToolbar: FC = () => {
  return (
    <div className="flex w-full items-center justify-end px-3 pb-2">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">0/1000</span>
        <ComposerAction />
      </div>
    </div>
  );
};

const ComposerAction: FC = () => {
  return (
    <>
      <ThreadPrimitive.If running={false}>
        <ComposerPrimitive.Send asChild>
          <TooltipIconButton
            tooltip="发送"
            variant="default"
            className="size-8 rounded-full bg-brand-primary p-2 transition-opacity ease-in hover:bg-brand-primary/90"
          >
            <SendHorizontalIcon />
          </TooltipIconButton>
        </ComposerPrimitive.Send>
      </ThreadPrimitive.If>
      <ThreadPrimitive.If running>
        <ComposerPrimitive.Cancel asChild>
          <TooltipIconButton
            tooltip="取消"
            variant="default"
            className="size-8 rounded-full bg-brand-primary p-2 transition-opacity ease-in hover:bg-brand-primary/90"
          >
            <CircleStopIcon />
          </TooltipIconButton>
        </ComposerPrimitive.Cancel>
      </ThreadPrimitive.If>
    </>
  );
};
