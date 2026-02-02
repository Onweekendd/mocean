import { RequestContext } from "@mastra/core/request-context";

import type { AssistantDetailResult } from "../server/assistant";

export type CommonRunTimeType = {
  assistant: AssistantDetailResult;
};

export const createCommonRunTime = ({ assistant }: CommonRunTimeType) => {
  const context = new RequestContext<CommonRunTimeType>();

  context.set("assistant", assistant);

  return context;
};
