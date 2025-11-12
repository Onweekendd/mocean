"use client";

import {
  AssistantChatTransport,
  useChatRuntime,
} from "@assistant-ui/react-ai-sdk";
import { UIMessage, generateId } from "ai";

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
  initialMessages = [],
}: {
  api: string;
  initialMessages?: UIMessage[];
}) {
  const { activeThread, activeAssistant } = useStore();

  const { refresh } = useAssistantThreadsSWR(activeAssistant?.id || null);

  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api,
      prepareSendMessagesRequest: (requestParams) => {
        if (!activeAssistant) {
          return {
            ...requestParams,
            body: {
              ...(requestParams.body || {}),
            },
          };
        }

        console.log(requestParams.messages, requestParams.body);

        const { body, ...rest } = requestParams;
        if (!activeThread) {
          return {
            ...rest,
            body: {
              ...(body || {}),
              threadId: generateId(),
              assistantId: activeAssistant.id,
              messages: requestParams.messages,
            },
          };
        }

        return {
          ...rest,
          body: {
            ...(body || {}),
            threadId: activeThread,
            assistantId: activeAssistant.id,
            messages: requestParams.messages,
          },
        };
      },
    }),
    messages: initialMessages,
    onFinish() {
      setTimeout(() => {
        console.log("finish");
        void refresh();
      }, 5000);
    },
  });

  return runtime;
}
