"use client";

import { useRef, useState } from "react";

import { Assistant } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAssistantSWR } from "@/hooks/useAssistantsSWR";

import ThreadSelect from "./ThreadSelect";
import AssistantSelect from "./assistant/Assistant";

const ChatConfig = () => {
  const tabsConfig = [
    {
      value: "assistant",
      label: "助手",
    },
    {
      value: "topic",
      label: "话题",
    },
    {
      value: "setting",
      label: "设置",
    },
  ];

  const { activeAssistant, setActiveAssistant } = useStore();
  const { getAssistantById } = useAssistantSWR(activeAssistant?.id || null);

  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig[0]?.value || "assistant",
  );

  const selectedAssistantId = useRef<string | null>(null);

  const onAssistantSelect = async (assistant: Assistant) => {
    setActiveTab(tabsConfig[1]?.value || "topic");
    selectedAssistantId.current = assistant.id;

    // 使用新添加的方法获取助手详情
    const assistantDetail = await getAssistantById(assistant.id);
    if (assistantDetail) {
      setActiveAssistant(assistantDetail);
    }
  };
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="flex w-[400px] flex-col px-2"
    >
      <TabsList className="w-full">
        {tabsConfig.map((tab) => (
          <TabsTrigger className="flex-1" key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="assistant" className="h-0 flex-1">
        <AssistantSelect
          onClick={(assistant) => void onAssistantSelect(assistant)}
        />
      </TabsContent>

      <TabsContent value="topic" className="h-0 flex-1">
        <ThreadSelect isActive={activeTab === "topic"} />
      </TabsContent>

      <TabsContent value="setting">Change your setting here.</TabsContent>
    </Tabs>
  );
};

export default ChatConfig;
