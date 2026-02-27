"use client";

import { useRef } from "react";

import {
  AssistantChatTransport,
  useChatRuntime
} from "@assistant-ui/react-ai-sdk";
import type { ChatOnFinishCallback, UIMessage } from "ai";
import { generateId } from "ai";

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
  initialMessages = []
}: {
  api: string;
  initialMessages?: UIMessage[];
}) {
  const { activeThreadId, activeAssistantId } = useStore();

  // 用 ref 保存最新值，避免 prepareSendMessagesRequest 闭包过期问题
  const activeAssistantIdRef = useRef(activeAssistantId);
  activeAssistantIdRef.current = activeAssistantId;
  const activeThreadIdRef = useRef(activeThreadId);
  activeThreadIdRef.current = activeThreadId;

  const { refresh } = useAssistantThreadsSWR(activeAssistantId || null);

  /**
   * 新建的对话第一次完成
   */
  const onNewThreadFirstFinish: ChatOnFinishCallback<UIMessage> = (options) => {
    console.log(options);
  };

  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api,
      prepareSendMessagesRequest: (requestParams) => {
        const currentAssistantId = activeAssistantIdRef.current;
        const currentThread = activeThreadIdRef.current;

        if (!currentAssistantId) {
          return {
            ...requestParams,
            body: {
              ...(requestParams.body || {})
            }
          };
        }

        const { body, ...rest } = requestParams;
        if (!currentThread) {
          return {
            ...rest,
            body: {
              ...(body || {}),
              threadId: generateId(),
              assistantId: currentAssistantId,
              messages: requestParams.messages
            }
          };
        }

        return {
          ...rest,
          body: {
            ...(body || {}),
            threadId: currentThread,
            assistantId: currentAssistantId,
            messages: requestParams.messages
          }
        };
      }
    }),
    messages: initialMessages,
    onFinish: onNewThreadFirstFinish
  });

  return runtime;
}
