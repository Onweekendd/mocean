import { RequestContext } from "@mastra/core/request-context";

import type { FullAssistantType } from "../schema/assistant";

export enum AgentTaskEnum {
  CHAT = "chat",
  GENERATE_TITLE = "generateTitle"
}

export type CommonRunTimeType = {
  assistant: FullAssistantType;
  task?: AgentTaskEnum;
};

export const createCommonRunTime = ({ assistant, task }: CommonRunTimeType) => {
  const context = new RequestContext<CommonRunTimeType>();

  context.set("assistant", assistant);
  context.set("task", task ?? AgentTaskEnum.CHAT);

  return context;
};
