"use client";

import { useEffect } from "react";

import { useAgentsApi } from "@mocean/mastra/apiClient";
import { AgentModel } from "@mocean/mastra/prismaType";

import { useStore } from "../store/useStore";

export default function Chat() {
  const { getAgents } = useAgentsApi();
  const { setAgentList } = useStore();

  const defaultAssistant: AgentModel = {
    id: "1",
    name: "默认助手",
    description: "我是默认助手，你可以和我对话",
    prompt: "",
    type: "assistant",
    emoji: "",
    groupJson: {},
    enableWebSearch: false,
    webSearchProviderId: "",
    enableGenerateImage: false,
    knowledgeRecognition: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  useEffect(() => {
    getAgents().then((res) => {
      if (!res.data) {
        return;
      }

      setAgentList([...res.data, defaultAssistant]);
    });
  }, []);

  // 直接返回聊天界面，不再进行跳转
  return <div>Chat</div>;
}
