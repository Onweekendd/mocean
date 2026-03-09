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
    <ThreadPrimitive.Root className="jc box-border flex h-full w-full flex-col items-center overflow-hidden">
      <ChatToolbar />
      <ThreadPrimitive.Viewport className="scrollbar-no-arrows mr-2 flex min-h-0 flex-1 flex-col items-center self-stretch overflow-y-auto scroll-smooth bg-inherit">
        <div className="flex min-h-full w-3/4 flex-col items-center">
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
        </div>
      </ThreadPrimitive.Viewport>

      <ThreadScrollToBottom />
      <div className="flex w-full justify-center">
        <div className="flex h-[10.5rem] w-2/3 flex-col gap-[0.5rem] rounded-t-2xl border border-brand-slate-200 bg-brand-slate/30 px-2 py-3 shadow-sm">
          <Composer />
          <ComposerExtras />
        </div>
      </div>
    </ThreadPrimitive.Root>
  );
};
