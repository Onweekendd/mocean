"use client";

import { useCallback, useEffect, useRef } from "react";

import { useParams, useRouter } from "next/navigation";

import { AssistantModel } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { useAssistantsSWR } from "@/hooks/useAssistantsSWR";

import ChatConfig from "./components/ChatConfig";

const DEFAULT_ASSISTANT_ID = "1";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { setAssistantList, activeAssistant } = useStore();
  const { assistants, isLoading, error } = useAssistantsSWR();
  const params = useParams();
  const hasInitialized = useRef(false);

  // 处理助手列表数据更新
  const onAssistantListUpdate = useCallback(
    (
      assistants: AssistantModel[] | undefined,
      isLoading: boolean,
      error: Error | null | undefined,
    ) => {
      if (error) {
        console.error("获取助手列表失败:", error);
        setAssistantList([]);
        return [];
      } else if (assistants && assistants.length > 0) {
        setAssistantList(assistants);
        return assistants;
      } else if (!isLoading) {
        setAssistantList([]);
        return [];
      }
      return assistants || [];
    },
    [setAssistantList],
  );

  // 统一处理助手数据和初始化路由
  useEffect(() => {
    const currentAssistants = onAssistantListUpdate(
      assistants,
      isLoading,
      error,
    );

    // 只在首次加载且没有路由参数时才跳转到默认助手
    // activeAssistant 由具体的页面组件负责设置
    if (
      !hasInitialized.current &&
      !activeAssistant &&
      !isLoading &&
      currentAssistants.length > 0
    ) {
      router.replace(`/${DEFAULT_ASSISTANT_ID}`);
      hasInitialized.current = true;
    }
  }, [
    assistants,
    isLoading,
    error,
    params.assistantId,
    onAssistantListUpdate,
    router,
    activeAssistant,
  ]);

  return (
    <div className="flex h-full pt-2">
      <ChatConfig />
      {children}
    </div>
  );
};

export default ChatLayout;
