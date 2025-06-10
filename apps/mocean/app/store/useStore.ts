import { AgentModel, TopicModel } from "@mocean/mastra/prismaType";
import { create } from "zustand";

export type Store = {
  /**
   * @description 助手列表
   */
  agentList: AgentModel[];
  setAgentList: (agents: AgentModel[]) => void;

  /**
   * @description 当前助手
   */
  activeAgent: AgentModel | null;
  setActiveAgent: (agent: AgentModel) => void;

  /**
   * @description 话题列表
   */
  topicList: TopicModel[];
  setTopicList: (topics: TopicModel[]) => void;

  /**
   * @description 当前话题
   */
  activeTopic: TopicModel | null;
  setActiveTopic: (topic: TopicModel) => void;
};

const useStore = create<Store>((set) => ({
  agentList: [] as AgentModel[],
  setAgentList: (agents: AgentModel[]) => set({ agentList: agents }),

  activeAgent: null as AgentModel | null,
  setActiveAgent: (agent: AgentModel) => set({ activeAgent: agent }),

  topicList: [] as TopicModel[],
  setTopicList: (topics: TopicModel[]) => set({ topicList: topics }),

  activeTopic: null as TopicModel | null,
  setActiveTopic: (topic: TopicModel) => set({ activeTopic: topic }),
}));

export { useStore };
