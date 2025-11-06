import { createOpenAI } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { RuntimeContext } from "@mastra/core/di";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";

import { CommonRunTimeType } from "../runtime/CommonRunTime";

export const DynamicAgent = new Agent({
  name: "DynamicAgent",

  instructions: ({ runtimeContext }) => {
    const assistant = (runtimeContext as RuntimeContext<CommonRunTimeType>).get(
      "assistant",
    );

    return assistant.prompt;
  },

  model: ({ runtimeContext }) => {
    const assistant = (runtimeContext as RuntimeContext<CommonRunTimeType>).get(
      "assistant",
    );

    const provider = assistant.provider;

    const providerType = provider.type;

    console.log(provider.apiHost, provider.apiKey);
    const openaiProvider = createOpenAI({
      baseURL: provider.apiHost,
      apiKey: provider.apiKey,
    });

    const model = openaiProvider.chat(assistant.model.id);

    return model;
  },

  memory: new Memory({
    storage: new LibSQLStore({
      url: `file:${process.env.MASTRA_DATABASE_URL}`,
    }),
    options: {
      lastMessages: 10,
      semanticRecall: false,
      threads: {
        generateTitle: {
          model() {
            const openaiProvider = createOpenAI({
              baseURL: process.env.OPENAI_API_BASE_URL,
              apiKey: process.env.OPENAI_API_KEY,
            });

            const model = openaiProvider(
              process.env.OPENAI_API_MODEL ?? "gpt-4o",
            );

            return model;
          },
          instructions() {
            return `你是一个专业的聊天标题生成助手。你的任务是根据用户的聊天内容生成一个简洁、准确、有吸引力的标题。

                   请遵循以下规则：
                   1. 标题长度控制在10-20个字符以内
                   2. 标题要准确反映聊天的主要内容或主题
                   3. 使用简洁明了的语言，避免过于复杂的词汇
                   4. 如果聊天内容涉及技术问题，使用相关的技术术语
                   5. 如果聊天内容涉及日常对话，使用通俗易懂的表达
                   6. 标题要有一定的吸引力，但不能过于夸张
                   7. 只返回标题内容，不要添加任何解释或额外文字

                  请根据用户的聊天内容生成合适的标题。`;
          },
        },
      },
    },
  }),
});
