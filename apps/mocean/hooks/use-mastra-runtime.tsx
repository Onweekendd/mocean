"use client";

import { useChat } from "@ai-sdk/react";
import { useVercelUseChatRuntime } from "@assistant-ui/react-ai-sdk";
import { UIMessage, generateId } from "ai";

import { useStore } from "@/app/store/useStore";

import { useAssistantThreadsSWR } from "./useAssistantsSWR";

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
  body,
  initialMessages = [],
}: {
  api: string;
  body?: object;
  adapter?: VercelUseChatAdapter;
  initialMessages?: UIMessage[];
}) {
  const { activeThread, activeAssistant, setActiveThread } = useStore();

  const { refresh } = useAssistantThreadsSWR(activeAssistant?.id || null);

  const chat = useChat({
    api,
    initialMessages,
    body,

    onFinish() {
      setTimeout(() => {
        refresh();
      }, 5000);
    },

    experimental_prepareRequestBody: ({
      id,
      messages,
      requestData,
      requestBody,
    }) => {
      const assistantId = useStore.getState().activeAssistant?.id;

      // 确保 activeThread 存在，如果不存在则创建新的并更新状态
      if (!activeThread) {
        setActiveThread(generateId());
      }

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
