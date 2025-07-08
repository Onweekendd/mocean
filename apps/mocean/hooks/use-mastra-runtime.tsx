"use client";

import { useChat } from "@ai-sdk/react";
import { useVercelUseChatRuntime } from "@assistant-ui/react-ai-sdk";
import { UIMessage, generateId } from "ai";

import { useStore } from "@/app/store/useStore";

import { useAssistantUIMessageSWR } from "./useAssistantsSWR";

// 提取 useVercelUseChatRuntime 的第二个参数类型
type VercelUseChatAdapter = Parameters<typeof useVercelUseChatRuntime>[1];

// 提取 experimental_prepareRequestBody 返回值类型
export type PrepareRequestBodyReturnType = {
  id: string;
  threadId: string;
  messages: UIMessage[];
  assistantId?: string;
  requestBody: Record<string, unknown>;
  requestData: Record<string, unknown>;
};

/**
 * mastra的兼容
 * @param param0
 * @returns
 */
export function useMastraRuntime({
  api,
  adapter,
  onCreateThread,
  body,
}: {
  api: string;
  body?: object;
  onCreateThread?: (threadId: string) => void;
  adapter?: VercelUseChatAdapter;
}) {
  const { activeThread, activeAssistant, setActiveThread } = useStore();

  const { messages } = useAssistantUIMessageSWR(
    activeAssistant?.id || null,
    activeThread || null,
  );

  const chat = useChat({
    api,
    initialMessages: messages ?? [],
    body,

    onFinish() {
      if (!activeThread) {
        setActiveThread(generateId());

        if (!activeThread || !onCreateThread) {
          return;
        }

        onCreateThread(activeThread);
      }
    },

    experimental_prepareRequestBody: ({
      id,
      messages,
      requestData,
      requestBody,
    }) => {
      const assistantId = useStore.getState().activeAssistant?.id;
      return Object.assign(
        { id },
        requestBody,
        requestData,
        { threadId: activeThread },
        { messages: [messages[messages.length - 1]] },
        { assistantId },
      );
    },
  });

  const runtime = useVercelUseChatRuntime(chat, adapter);

  return runtime;
}
