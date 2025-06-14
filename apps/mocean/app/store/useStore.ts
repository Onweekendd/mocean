import { AssistantModel, TopicModel } from "@mocean/mastra/prismaType";
import { create } from "zustand";

export type Store = {
  /**
   * @description 助手列表
   */
  assistantList: AssistantModel[];
  setAssistantList: (assistants: AssistantModel[]) => void;

  /**
   * @description 当前助手
   */
  activeAssistant: AssistantModel | null;
  setActiveAssistant: (assistant: AssistantModel) => void;

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
  assistantList: [] as AssistantModel[],
  setAssistantList: (assistants: AssistantModel[]) =>
    set({ assistantList: assistants }),

  activeAssistant: null as AssistantModel | null,
  setActiveAssistant: (assistant: AssistantModel) =>
    set({ activeAssistant: assistant }),

  topicList: [] as TopicModel[],
  setTopicList: (topics: TopicModel[]) => set({ topicList: topics }),

  activeTopic: null as TopicModel | null,
  setActiveTopic: (topic: TopicModel) => set({ activeTopic: topic }),
}));

export { useStore };
