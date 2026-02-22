import type { FC } from "react";

import { ThreadPrimitive } from "@assistant-ui/react";

import { ChatToolbar } from "@/app/(chat)/components/ChatToolbar";

import { AssistantMessage } from "./thread/assistant-message";
import { Composer } from "./thread/composer";
import { ThreadScrollToBottom } from "./thread/shared";
import { ThreadWelcome } from "./thread/thread-welcome";
import { EditComposer, UserMessage } from "./thread/user-message";

export const Thread: FC = () => {
  return (
    <ThreadPrimitive.Root className="box-border flex h-full flex-col overflow-hidden bg-background">
      <ChatToolbar />
      <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-scroll scroll-smooth bg-inherit px-4 pt-8">
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

        <div className="sticky bottom-0 mt-3 flex w-full flex-col items-center justify-end rounded-t-lg bg-inherit pb-4">
          <ThreadScrollToBottom />
          <Composer />
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
};
