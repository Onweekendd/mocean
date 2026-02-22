import { RequestContext } from "@mastra/core/request-context";

import type { FullAssistantType } from "../schema/assistant";

export type CommonRunTimeType = {
  assistant: FullAssistantType;
};

export const createCommonRunTime = ({ assistant }: CommonRunTimeType) => {
  const context = new RequestContext<CommonRunTimeType>();

  context.set("assistant", assistant);

  return context;
};
