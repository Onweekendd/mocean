import { RequestContext } from "@mastra/core/request-context";

import type { AssistantDetailResult } from "../server/assistant";

export type CommonRunTimeType = {
  assistant: AssistantDetailResult;
};

export const createCommonRunTime = ({ assistant }: CommonRunTimeType): RequestContext => {
  const context = new RequestContext();

  (context as any).set("assistant", assistant);

  return context;
};
