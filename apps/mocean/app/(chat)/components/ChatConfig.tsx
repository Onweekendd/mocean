"use client";

import { useState } from "react";

import { AssistantModel } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const { setActiveAssistant } = useStore();

  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig[0]?.value || "assistant",
  );

  const onAssistantSelect = (assistant: AssistantModel) => {
    setActiveTab(tabsConfig[1]?.value || "topic");
    setActiveAssistant(assistant);
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
        <AssistantSelect onClick={onAssistantSelect} />
      </TabsContent>

      <TabsContent value="topic" className="h-0 flex-1">
        <ThreadSelect isActive={activeTab === "topic"} />
      </TabsContent>

      <TabsContent value="setting">Change your setting here.</TabsContent>
    </Tabs>
  );
};

export default ChatConfig;
