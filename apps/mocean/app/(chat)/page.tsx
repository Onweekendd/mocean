"use client";

import { useEffect } from "react";

import { useAssistantsApi } from "@mocean/mastra/apiClient";
import { AssistantModel } from "@mocean/mastra/prismaType";

import { Thread } from "@/components/thread";

import { useStore } from "../store/useStore";

export default function Chat() {
  const { getAssistants } = useAssistantsApi();
  const { setAssistantList } = useStore();

  const defaultAssistant: AssistantModel = {
    id: "1",
    name: "默认助手",
    description: "我是默认助手，你可以和我对话",
    prompt: "",
    type: "assistant",
    emoji: "",
    enableWebSearch: false,
    webSearchProviderId: "",
    enableGenerateImage: false,
    knowledgeRecognition: "",
    modelId: "",
    defaultModelId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  useEffect(() => {
    getAssistants().then((res) => {
      if (!res.data) {
        return;
      }

      setAssistantList([...res.data, defaultAssistant]);
    });
  }, []);

  // 直接返回聊天界面，不再进行跳转
  return (
    <div className="h-full flex-1">
      <Thread />
    </div>
  );
}
