"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FC } from "react";

import Image from "next/image";

import {
  ComposerPrimitive,
  ThreadPrimitive,
  useAttachmentRuntime,
  useAui,
  useAuiState
} from "@assistant-ui/react";
import { CameraIcon, PaperclipIcon, SendHorizontalIcon, X } from "lucide-react";

import { TooltipIconButton } from "@/components/tooltip-icon-button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { AdvanceInput } from "../custom/advance-input";
import { CircleStopIcon } from "./shared";

// ─── ComposerImageAttachment ──────────────────────────────────────────────────

const ComposerImageAttachment: FC = () => {
  const attachmentRuntime = useAttachmentRuntime();
  const state = attachmentRuntime.getState();
  const file = "file" in state ? state.file : null;
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!objectUrl) return null;

  return (
    <>
      <div className="group relative h-16 w-16">
        <Image
          src={objectUrl}
          alt={state.name}
          fill
          unoptimized
          className="cursor-pointer rounded-md object-cover"
          onClick={() => setShowPreview(true)}
        />
        <button
          type="button"
          onClick={() => void attachmentRuntime.remove()}
          className="absolute -right-1.5 -top-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-black/70 text-white group-hover:flex"
        >
          <X className="h-2.5 w-2.5" />
        </button>
      </div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">图片预览</DialogTitle>
          <Image
            src={objectUrl}
            alt="图片预览"
            width={1200}
            height={900}
            unoptimized
            className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

// ─── Composer ─────────────────────────────────────────────────────────────────

export const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className="flex w-full flex-col gap-2">
      {/* 附件缩略图区域（输入框上方） */}
      <div className="flex flex-wrap gap-2 px-1 empty:hidden">
        <ComposerPrimitive.Attachments
          components={{ Image: ComposerImageAttachment }}
        />
      </div>

      {/* 白色输入框 */}
      <div className="flex flex-col rounded-xl border border-brand-slate-200 bg-brand-slate-100 px-[0.375rem] shadow-sm transition-colors ease-in focus-within:border-ring/20">
        <ComposerPrimitive.Input asChild>
          <AdvanceInput
            rows={2}
            autoFocus
            placeholder="有什么可以帮你的吗..."
            className="flex-grow resize-none border-none bg-transparent text-sm shadow-none outline-none placeholder:text-muted-foreground focus:ring-0 focus-visible:ring-0 disabled:cursor-not-allowed"
          />
        </ComposerPrimitive.Input>
        <ComposerToolbar />
      </div>
    </ComposerPrimitive.Root>
  );
};

// ─── ComposerExtras ───────────────────────────────────────────────────────────

export const ComposerExtras: FC = () => {
  const aui = useAui();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? []);
      for (const file of files) {
        void aui.composer().addAttachment(file);
      }
      e.target.value = "";
    },
    [aui]
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
  const text = useAuiState((s) => s.composer.text);
  return (
    <div className="flex w-full items-center justify-end px-3 pb-2">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">
          {text.length}/1000
        </span>
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
