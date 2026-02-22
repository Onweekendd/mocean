import type { FC } from "react";
import { ComposerPrimitive, ThreadPrimitive } from "@assistant-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import { TooltipIconButton } from "@/components/tooltip-icon-button";
import { Textarea } from "../ui/textarea";
import { CircleStopIcon } from "./shared";

export const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className="flex w-full flex-wrap items-end rounded-lg border bg-inherit shadow-sm transition-colors ease-in focus-within:border-ring/20">
      <ComposerPrimitive.Input asChild>
        <Textarea
          rows={1}
          autoFocus
          placeholder="有什么可以帮你的吗..."
          className="max-h-40 flex-grow resize-none border-none bg-transparent p-2 text-sm shadow-none outline-none placeholder:text-muted-foreground focus:ring-0 focus-visible:ring-0 disabled:cursor-not-allowed"
        />
      </ComposerPrimitive.Input>
      <ComposerAction />
    </ComposerPrimitive.Root>
  );
};

const ComposerAction: FC = () => {
  return (
    <div className="flex w-full items-center justify-end px-2">
      <ThreadPrimitive.If running={false}>
        <ComposerPrimitive.Send asChild>
          <TooltipIconButton
            tooltip="Send"
            variant="default"
            className="my-2.5 size-8 bg-brand-primary p-2 transition-opacity ease-in hover:bg-brand-primary/90"
          >
            <SendHorizontalIcon />
          </TooltipIconButton>
        </ComposerPrimitive.Send>
      </ThreadPrimitive.If>
      <ThreadPrimitive.If running>
        <ComposerPrimitive.Cancel asChild>
          <TooltipIconButton
            tooltip="Cancel"
            variant="default"
            className="my-2.5 size-8 bg-brand-primary p-2 transition-opacity ease-in hover:bg-brand-primary/90"
          >
            <CircleStopIcon />
          </TooltipIconButton>
        </ComposerPrimitive.Cancel>
      </ThreadPrimitive.If>
    </div>
  );
};
