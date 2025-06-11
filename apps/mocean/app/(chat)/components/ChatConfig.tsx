"use client";

import { AgentModel } from "@mocean/mastra/prismaType";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AgentSelect from "./Agent";
import TopicSelect from "./TopicSelect";

const ChatConfig = ({ agentList }: { agentList: AgentModel[] }) => {
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
  return (
    <Tabs defaultValue={tabsConfig?.[0]?.value} className="w-[400px] px-2">
      <TabsList className="w-full">
        {tabsConfig.map((tab) => (
          <TabsTrigger className="flex-1" key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="assistant">
        <AgentSelect agentList={agentList} />
      </TabsContent>
      <TabsContent value="topic">
        <TopicSelect />
      </TabsContent>
      <TabsContent value="setting">Change your setting here.</TabsContent>
    </Tabs>
  );
};

export default ChatConfig;
