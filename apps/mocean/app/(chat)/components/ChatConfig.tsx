"use client";

import { useState } from "react";

import { AssistantModel } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AssistantSelect from "./Assistant";
import TopicSelect from "./TopicSelect";

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

  const { setActiveAssistant } = useStore();

  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig[0]?.value || "assistant",
  );

  const onAssistantSelect = (assistant: AssistantModel) => {
    setActiveTab(tabsConfig[1]?.value || "topic");
    setActiveAssistant(assistant);
  };
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px] px-2 flex flex-col">
      <TabsList className="w-full">
        {tabsConfig.map((tab) => (
          <TabsTrigger className="flex-1" key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="assistant" className="flex-1">
        <AssistantSelect onClick={onAssistantSelect} />
      </TabsContent>
      <TabsContent value="topic">
        <TopicSelect />
      </TabsContent>
      <TabsContent value="setting">Change your setting here.</TabsContent>
    </Tabs>
  );
};

export default ChatConfig;
