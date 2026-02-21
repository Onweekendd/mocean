"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import type { Assistant } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ThreadSelect from "./ThreadSelect";
import AssistantSelect from "./assistant/Assistant";

const ChatConfig: React.FC = () => {
  const router = useRouter();
  const tabsConfig = [
    {
      value: "assistant",
      label: "助手"
    },
    {
      value: "topic",
      label: "话题"
    },
    {
      value: "setting",
      label: "设置"
    }
  ];

  const { setActiveAssistantId } = useStore();

  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig[0]?.value || "assistant"
  );

  const onAssistantSelect = (assistant: Assistant) => {
    setActiveTab(tabsConfig[1]?.value || "topic");
    setActiveAssistantId(assistant.id);

    router.push(`/${assistant.id}`);
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
