import { aihubmix } from "@aihubmix/ai-sdk-provider";
import { Agent } from "@mastra/core/agent";
import type { RequestContext } from "@mastra/core/request-context";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";

import { QUICK_MODELS } from "../constants/model";
import {
  AgentTaskEnum,
  type CommonRunTimeType
} from "../runtime/CommonRunTime";

/**
 * 转换 modelId 格式
 * 将 "zhipuai&GLM-4.5-Flash" 转换为 "zhipuai/glm-4.5-flash"
 * 将 "openai&gpt-4o" 转换为 "openai/gpt-4o"
 */
function normalizeModelId(modelId: string): `${string}/${string}` {
  // 如果已经包含 /，直接返回
  if (modelId.includes("/")) {
    return modelId as `${string}/${string}`;
  }
  // 按 & 分割并转换为小写，用 / 连接
  const [provider, model] = modelId.split("&");
  if (!provider || !model) {
    return modelId as `${string}/${string}`;
  }
  return `${provider.toLowerCase()}/${model.toLowerCase()}`;
}

export const DynamicAgent = new Agent({
  id: "dynamic-agent",
  name: "DynamicAgent",

  instructions: ({
    requestContext
  }: {
    requestContext: RequestContext<CommonRunTimeType>;
  }) => {
    const assistant = requestContext.get("assistant");

    return assistant.prompt;
  },

  model: ({ requestContext }) => {
    const assistant = (requestContext as RequestContext<CommonRunTimeType>).get(
      "assistant"
    );

    const task = (requestContext as RequestContext<CommonRunTimeType>).get(
      "task"
    );

    if (task === AgentTaskEnum.GENERATE_TITLE) {
      return aihubmix(QUICK_MODELS);
    }

    const provider = assistant.provider;

    if (provider.isSystem) {
      /**
       * providerId&modelId
       */
      const model = assistant.model;

      if (!provider || !provider.apiHost || !provider.apiKey) {
        throw new Error("Provider not configured");
      }

      return {
        url: provider.apiHost,
        apiKey: provider.apiKey,
        id: normalizeModelId(model.id)
      };
    }
  },

  memory: new Memory({
    storage: new LibSQLStore({
      id: "dynamic-agent-memory-storage",
      url: `file:${process.env.MASTRA_DATABASE_URL}`
    }),
    options: {
      lastMessages: 10,
      semanticRecall: false
    }
  })
});
