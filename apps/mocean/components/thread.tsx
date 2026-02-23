import type { FC } from "react";

import { ThreadPrimitive } from "@assistant-ui/react";

import { ChatToolbar } from "@/app/(chat)/components/ChatToolbar";

import { AssistantMessage } from "./thread/assistant-message";
import { Composer, ComposerExtras } from "./thread/composer";
import { ThreadScrollToBottom } from "./thread/shared";
import { ThreadWelcome } from "./thread/thread-welcome";
import { EditComposer, UserMessage } from "./thread/user-message";

export const Thread: FC = () => {
  return (
    <ThreadPrimitive.Root className="box-border flex h-full flex-col overflow-hidden bg-background">
      <ChatToolbar />
      <ThreadPrimitive.Viewport className="flex min-h-0 flex-1 flex-col items-center overflow-y-scroll scroll-smooth bg-inherit px-4">
        <ThreadWelcome />

        <ThreadPrimitive.Messages
          components={{
            UserMessage: UserMessage,
            EditComposer: EditComposer,
            AssistantMessage: AssistantMessage
          }}
        />

        <ThreadPrimitive.If empty={false}>
          <div className="min-h-8 flex-grow" />
        </ThreadPrimitive.If>
      </ThreadPrimitive.Viewport>

      <ThreadScrollToBottom />
      <div className="flex w-full justify-center">
        <div className="flex h-[10.5rem] w-[43.25rem] flex-col gap-[0.5rem] rounded-t-2xl border border-x-greyscale-200 bg-greyscale-white px-2 py-3 shadow-sm">
          <Composer />
          <ComposerExtras />
        </div>
      </div>
    </ThreadPrimitive.Root>
  );
};
