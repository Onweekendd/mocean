"use client";

import { useCallback, useEffect } from "react";

import { useParams, useRouter } from "next/navigation";

import { AssistantModel } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { useAssistantsSWR } from "@/hooks/useAssistantsSWR";

import ChatConfig from "./components/ChatConfig";

const DEFAULT_ASSISTANT_ID = "1";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { setAssistantList, setActiveAssistant } = useStore();
  const { assistants, isLoading, error } = useAssistantsSWR();
  const params = useParams();
  const id = params.id as string;

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

  // 根据ID激活对应的助手
  const onActiveAssistantById = useCallback(
    (id: string, assistantList: AssistantModel[]) => {
      if (id && assistantList.length > 0) {
        const assistant = assistantList.find((item) => item.id === id);
        if (assistant) {
          setActiveAssistant(assistant);
        }
      }
    },
    [setActiveAssistant],
  );

  // 统一处理助手数据和激活状态
  useEffect(() => {
    const currentAssistants = onAssistantListUpdate(
      assistants,
      isLoading,
      error,
    );
    onActiveAssistantById(id || DEFAULT_ASSISTANT_ID, currentAssistants);
    router.replace(`/${id}`);
  }, [
    assistants,
    isLoading,
    error,
    id,
    onAssistantListUpdate,
    onActiveAssistantById,
    router,
  ]);

  return (
    <div className="flex h-full pt-2">
      <ChatConfig />
      {children}
    </div>
  );
};

export default ChatLayout;
