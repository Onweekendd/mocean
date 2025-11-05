"use client";

import {
  AssistantChatTransport,
  useChatRuntime,
} from "@assistant-ui/react-ai-sdk";
import { UIMessage } from "ai";

import { useStore } from "@/app/store/useStore";

import { useAssistantThreadsSWR } from "./useAssistantsSWR";

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
  initialMessages?: UIMessage[];
}) {
  const { activeThread, activeAssistant, setActiveThread } = useStore();

  const { refresh } = useAssistantThreadsSWR(activeAssistant?.id || null);

  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api,
    }),
    initialMessages,
    onFinish() {
      setTimeout(() => {
        refresh();
      }, 5000);
    },

    // experimental_prepareRequestBody: ({
    //   id,
    //   messages,
    //   requestData,
    //   requestBody,
    // }) => {
    //   const assistantId = useStore.getState().activeAssistant?.id;

    //   // 确保 activeThread 存在，如果不存在则创建新的并更新状态
    //   if (!activeThread) {
    //     setActiveThread(generateId());
    //   }

    //   return Object.assign(
    //     { id },
    //     requestBody,
    //     requestData,
    //     { threadId: activeThread },
    //     { messages: [messages[messages.length - 1]] },
    //     { assistantId },
    //   );
    // },
  });

  return runtime;
}
