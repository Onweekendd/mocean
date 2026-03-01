"use client";

import { useRef } from "react";

import {
  AssistantChatTransport,
  useChatRuntime
} from "@assistant-ui/react-ai-sdk";
import type { StorageThreadType } from "@mocean/mastra/apiClient";
import { useAssistantsApi } from "@mocean/mastra/apiClient";
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

async function* streamTitle(response: Response) {
  const reader = (response.body as ReadableStream<Uint8Array>).getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    yield decoder.decode(value);
  }
}

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

  const newThreadId = useRef<string | null>(null);

  const { refresh } = useAssistantThreadsSWR(activeAssistantId || null);
  const { generateTitleWithAssistant } = useAssistantsApi();
  const { setStreamingTitle } = useStore();

  /**
   * 新建的对话第一次完成
   */
  const onNewThreadFirstFinish: ChatOnFinishCallback<UIMessage> = (
    _options
  ) => {
    if (!activeAssistantIdRef.current || !newThreadId.current) {
      return;
    }

    const threadId = newThreadId.current;
    const assistantId = activeAssistantIdRef.current;

    const newThread: StorageThreadType = {
      id: threadId,
      resourceId: assistantId,
      title: "",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setStreamingTitle(assistantId, newThread);
    void (async () => {
      const response = await generateTitleWithAssistant({
        assistantId,
        threadId
      });

      for await (const chunk of streamTitle(response)) {
        console.log(chunk);
      }
    })();
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
          newThreadId.current = generateId();

          return {
            ...rest,
            body: {
              ...(body || {}),
              threadId: newThreadId.current,
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
