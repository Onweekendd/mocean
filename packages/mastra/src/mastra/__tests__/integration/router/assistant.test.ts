import type { Assistant } from "generated/prisma/client";
import { assistantsRouter } from "src/mastra/router/assistants";
import { beforeEach, describe, expect, it } from "vitest";

import { modelFactory, providerFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

const BASE = "/customApi/assistants";

describe("Assistants Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(assistantsRouter);

  // 复用的测试前置数据
  let provider: Awaited<ReturnType<typeof providerFactory.create>>;
  let model: Awaited<ReturnType<typeof modelFactory.create>>;

  beforeEach(async () => {
    prisma = await getTestPrisma();

    // 每个测试前创建基础数据：提供商 + 分组 + 模型
    provider = await providerFactory.create(prisma);
    const group = provider.groups[0];
    model = await modelFactory.create(prisma, group.id);
  });

  /** 构造创建助理的请求体 */
  function buildCreateBody(
    overrides?: Partial<Omit<Assistant, "id" | "createdAt" | "updatedAt">>
  ) {
    console.log("overrides", overrides);
    return {
      name: "Test Assistant",
      description: "A test assistant",
      modelId: model.id,
      providerId: provider.id,
      prompt: "You are a helpful assistant",
      type: "assistant",
      emoji: "🤖",
      enableWebSearch: false,
      webSearchProviderId: null,
      enableGenerateImage: false,
      knowledgeRecognition: "off",
      ...overrides
    };
  }

  /** 通过 API 创建一个助理并返回响应体 */
  async function createViaApi(
    overrides?: Partial<Omit<Assistant, "id" | "createdAt" | "updatedAt">>
  ) {
    const res = await app.request(BASE, {
      method: "POST",
      body: JSON.stringify(buildCreateBody(overrides)),
      headers: { "Content-Type": "application/json" }
    });
    const resClone = res.clone();
    try {
      const body = (await res.json()) as Record<string, unknown>;
      return { res, body };
    } catch (e) {
      const error = await resClone.text();
    }
  }

  // ─── 创建 ───────────────────────────────────────────────
  describe("创建助理", () => {
    it("应该成功创建一个新的助理", async () => {
      const { res, body } = await createViaApi();

      expect(res.status).toBe(201);
      expect(body).toMatchObject({
        name: "Test Assistant",
        prompt: "You are a helpful assistant",
        modelId: model.id,
        providerId: provider.id
      });
      expect(body.id).toBeDefined();
      expect(body.createdAt).toBeDefined();
    });

    it("名称为空时应返回 400", async () => {
      const res = await app.request(BASE, {
        method: "POST",
        body: JSON.stringify(buildCreateBody({ name: "" })),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(400);
    });

    it("提示词为空时应返回 400", async () => {
      console.log("提示词为空时应返回 400123");
      const res = await app.request(BASE, {
        method: "POST",
        body: JSON.stringify(buildCreateBody({ prompt: "" })),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(400);
    });

    it("缺少必填字段时应返回 400", async () => {
      const res = await app.request(BASE, {
        method: "POST",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(400);
    });

    it("type 应有默认值 assistant", async () => {
      const { body } = await createViaApi({ type: undefined, name: "12345" });
      expect(body.type).toBe("assistant");
    });

    it("使用前端的agent参数来创建 assistant", async () => {
      const agent = {
        name: "诗人 - Poet",
        prompt:
          "I want you to act as a poet. You will create poems that evoke emotions and have the power to stir people's soul. Write on any topic or theme but make sure your words convey the feeling you are trying to express in beautiful yet meaningful ways. You can also come up with short verses that are still powerful enough to leave an imprint in readers' minds. My first request is \"I need a poem about love.\"",
        type: "agent",
        emoji: "🖋️",
        description:
          "创作打动人心的诗歌，表达情感和主题。\\nCreate emotionally stirring poems that express feelings and themes.",
        enableWebSearch: false,
        webSearchProviderId: null,
        enableGenerateImage: false,
        knowledgeRecognition: "off"
      };

      const res = await app.request(BASE, {
        method: "POST",
        body: JSON.stringify(agent),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(201);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBeDefined();
    });
  });

  // ─── 查询列表 ──────────────────────────────────────────
  describe("获取助理列表", () => {
    it("没有助理时应返回空数组", async () => {
      const res = await app.request(BASE);

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body).toEqual([]);
    });

    it("应返回所有已创建的助理", async () => {
      await createViaApi({ name: "Assistant A" });
      await createViaApi({ name: "Assistant B" });

      const res = await app.request(BASE);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Array<Record<string, unknown>>;
      expect(body).toHaveLength(2);

      const names = body.map((a) => a.name);
      expect(names).toContain("Assistant A");
      expect(names).toContain("Assistant B");
    });
  });

  // ─── 查询单个 ──────────────────────────────────────────
  describe("根据 ID 获取助理", () => {
    it("应返回指定助理的详细信息", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(id);
      expect(body.name).toBe("Test Assistant");
      // FullAssistantSchema 应包含关联字段
      expect(body).toHaveProperty("topics");
      expect(body).toHaveProperty("knowledgeBases");
      expect(body).toHaveProperty("mcpServers");
    });

    it("不存在的 ID 应返回 404", async () => {
      const res = await app.request(`${BASE}/non-existent-id`);
      expect(res.status).toBe(404);
    });
  });

  // ─── 更新 ───────────────────────────────────────────────
  describe("更新助理", () => {
    it("应成功更新助理名称", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: "Updated Name" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.name).toBe("Updated Name");
    });

    it("应成功更新多个字段", async () => {
      console.log("应成功更新多个字段 test");
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: "New Name",
          prompt: "New prompt",
          description: "New description",
          enableWebSearch: true
        }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body).toMatchObject({
        name: "New Name",
        prompt: "New prompt",
        description: "New description",
        enableWebSearch: true
      });
    });

    it("更新名称为空字符串时应返回 400", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: "" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(400);
    });
  });

  // ─── 删除 ───────────────────────────────────────────────
  describe("删除助理", () => {
    it("应成功删除助理", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "DELETE"
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(id);
    });

    it("删除不存在的助理应返回 500", async () => {
      const res = await app.request(`${BASE}/non-existent-id`, {
        method: "DELETE"
      });

      // Prisma delete on non-existent record throws
      expect(res.status).toBe(500);
    });
  });
});
