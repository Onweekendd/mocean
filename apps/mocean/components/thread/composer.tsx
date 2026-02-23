"use client";

import type { FC } from "react";

import { ComposerPrimitive, ThreadPrimitive } from "@assistant-ui/react";
import { CameraIcon, PaperclipIcon, SendHorizontalIcon } from "lucide-react";

import { TooltipIconButton } from "@/components/tooltip-icon-button";

import { AdvanceInput } from "../custom/advance-input";
import { CircleStopIcon } from "./shared";

export const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className="flex w-full flex-col rounded-xl border bg-brand-main px-[0.375rem] shadow-sm transition-colors ease-in focus-within:border-ring/20">
      <ComposerPrimitive.Input asChild>
        <AdvanceInput
          rows={2}
          autoFocus
          placeholder="有什么可以帮你的吗..."
          className="max-h-40 flex-grow resize-none border-none bg-transparent text-sm shadow-none outline-none placeholder:text-muted-foreground focus:ring-0 focus-visible:ring-0 disabled:cursor-not-allowed"
        />
      </ComposerPrimitive.Input>
      <ComposerToolbar />
    </ComposerPrimitive.Root>
  );
};

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

export const ComposerExtras: FC = () => {
  return (
    <div className="flex items-center gap-1 px-1">
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
      >
        <CameraIcon />
      </TooltipIconButton>
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
