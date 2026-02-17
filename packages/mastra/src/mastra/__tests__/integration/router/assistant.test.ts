import { ApiRoute } from "@mastra/core/server";
import type { Assistant } from "generated/prisma/client";
import { assistantsRouter } from "src/mastra/router/assistants";
import { beforeEach, describe, expect, it } from "vitest";

import { modelFactory, providerFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

describe("Assistants Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(assistantsRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  describe("创建助理", () => {
    it("应该成功创建一个新的助理", async () => {
      // 1. 创建提供商和分组
      const provider = await providerFactory.create(prisma);
      const group = provider.groups[0];

      // 2. 创建模型
      const model = await modelFactory.create(prisma, group.id);

      // 3. 构造请求体
      const requestBody: Omit<Assistant, "id" | "createdAt" | "updatedAt"> = {
        name: "Test Assistant",
        description: "A test assistant",
        modelId: model.id,
        providerId: provider.id,
        prompt: "You are a helpful assistant",
        type: "assistant",
        emoji: "🤖",
        enableWebSearch: false,
        defaultModelId: model.id,
        webSearchProviderId: null,
        enableGenerateImage: false,
        knowledgeRecognition: "off"
      };

      // 4. 发送请求
      const response = await app.request("/customApi/assistants", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json"
        }
      });

      expect(response.status).toBe(201);
    });
  });
});
