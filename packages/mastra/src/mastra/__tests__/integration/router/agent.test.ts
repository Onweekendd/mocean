import type { Agent } from "generated/prisma/client";
import { agentsRouter } from "src/mastra/router/agents";
import { beforeEach, describe, expect, it } from "vitest";

import { agentFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

const BASE = "/customApi/agents";

describe("Agents Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(agentsRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  /** 构造创建 Agent 的请求体 */
  function buildCreateBody(
    overrides?: Partial<
      Omit<Agent, "id" | "createdAt" | "updatedAt" | "groupJson">
    >
  ) {
    return {
      name: "Test Agent",
      prompt: "You are a helpful agent",
      type: "agent",
      emoji: "🤖",
      description: "A test agent",
      ...overrides
    };
  }

  /** 通过 API 创建一个 Agent 并返回响应体 */
  async function createViaApi(
    overrides?: Partial<
      Omit<Agent, "id" | "createdAt" | "updatedAt" | "groupJson">
    >
  ) {
    const res = await app.request(BASE, {
      method: "POST",
      body: JSON.stringify(buildCreateBody(overrides)),
      headers: { "Content-Type": "application/json" }
    });
    return { res, body: (await res.json()) as Record<string, unknown> };
  }

  /** 创建测试用的 AgentGroup 并关联到 Agent */
  async function createAgentWithGroups(
    groupLabels: string[]
  ): Promise<{ id: string }> {
    // 将中文标签映射为 AgentGroup name
    const labelToName: Record<string, string> = {
      精选: "featured",
      工具: "tools",
      编程: "programming",
      写作: "writing",
      创意: "creative",
      设计: "design",
      职业: "career"
    };

    const groupNames = groupLabels
      .map((label) => labelToName[label])
      .filter((name): name is string => name != null);

    // 创建 AgentGroup
    const groupIds: string[] = [];
    for (const name of groupNames) {
      const group = await prisma.agentGroup.upsert({
        where: { name },
        update: {},
        create: { name, label: groupLabels[groupNames.indexOf(name)] }
      });
      groupIds.push(group.id);
    }

    // 创建 Agent 并关联 groups
    const agent = await prisma.agent.create({
      data: {
        name: `Agent with ${groupLabels.join(", ")}`,
        prompt: "Test agent",
        type: "agent",
        groups: {
          create: groupIds.map((agentGroupId) => ({ agentGroupId }))
        }
      }
    });

    return agent;
  }

  // ─── 获取所有 Agents ─────────────────────────────────
  describe("获取所有智能体", () => {
    it("没有 Agent 时应返回空数组", async () => {
      const res = await app.request(BASE);

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body).toEqual([]);
    });

    it("应返回所有已创建的 Agent", async () => {
      await agentFactory.create(prisma, { name: "Agent A" });
      await agentFactory.create(prisma, { name: "Agent B" });

      const res = await app.request(BASE);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Array<Record<string, unknown>>;
      expect(body).toHaveLength(2);

      const names = body.map((a) => a.name);
      expect(names).toContain("Agent A");
      expect(names).toContain("Agent B");
    });
  });

  // ─── 获取所有分组 ─────────────────────────────────
  describe("获取所有智能体分组", () => {
    it("没有 Agent 时应返回空数组", async () => {
      const res = await app.request(`${BASE}/groups`);

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body).toEqual([]);
    });

    it("应返回所有不重复的分组名称", async () => {
      await createAgentWithGroups(["精选", "工具"]);
      await createAgentWithGroups(["工具", "编程"]);
      await createAgentWithGroups(["精选"]);

      const res = await app.request(`${BASE}/groups`);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Array<{ name: string }>;
      expect(body).toHaveLength(3);
      expect(body.map((g) => g.name)).toContain("featured");
      expect(body.map((g) => g.name)).toContain("tools");
      expect(body.map((g) => g.name)).toContain("programming");
    });

    it("应正确返回单个分组的名称", async () => {
      await createAgentWithGroups(["写作"]);

      const res = await app.request(`${BASE}/groups`);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Array<{ name: string }>;
      expect(body.map((g) => g.name)).toContain("writing");
    });
  });

  // ─── 根据 ID 获取 Agent ─────────────────────────────
  describe("根据 ID 获取智能体", () => {
    it("应返回指定 Agent 的详细信息", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(id);
      expect(body.name).toBe("Test Agent");
      expect(body).toHaveProperty("topics");
    });

    it("不存在的 ID 应返回 404", async () => {
      const res = await app.request(`${BASE}/non-existent-id`);
      expect(res.status).toBe(404);
    });
  });

  // ─── 创建 Agent ─────────────────────────────────────
  describe("创建智能体", () => {
    it("应该成功创建一个新的 Agent", async () => {
      const { res, body } = await createViaApi();

      expect(res.status).toBe(201);
      expect(body).toMatchObject({
        name: "Test Agent",
        prompt: "You are a helpful agent",
        type: "agent"
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

    it("type 应有默认值 agent", async () => {
      const { body } = await createViaApi({ type: undefined });
      expect(body.type).toBe("agent");
    });

    it("应接受可选字段", async () => {
      const { res, body } = await createViaApi({
        emoji: "🎨",
        description: "Creative agent"
      });

      expect(res.status).toBe(201);
      expect(body).toMatchObject({
        emoji: "🎨",
        description: "Creative agent"
      });
    });
  });

  // ─── 更新 Agent ─────────────────────────────────────
  describe("更新智能体", () => {
    it("应成功更新 Agent 名称", async () => {
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
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: "New Name",
          prompt: "New prompt",
          description: "New description"
        }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body).toMatchObject({
        name: "New Name",
        prompt: "New prompt",
        description: "New description"
      });
    });
  });

  // ─── 删除 Agent ─────────────────────────────────────
  describe("删除智能体", () => {
    it("应成功删除 Agent", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "DELETE"
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(id);
    });

    it("删除后应无法再获取该 Agent", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      await app.request(`${BASE}/${id}`, { method: "DELETE" });

      const getRes = await app.request(`${BASE}/${id}`);
      expect(getRes.status).toBe(404);
    });

    it("删除不存在的 Agent 应返回 500", async () => {
      const res = await app.request(`${BASE}/non-existent-id`, {
        method: "DELETE"
      });

      // Prisma delete on non-existent record throws
      expect(res.status).toBe(500);
    });
  });

  // ─── 根据分组获取 Agent ─────────────────────────────
  describe("根据分组获取智能体", () => {
    beforeEach(async () => {
      // 创建测试数据
      await createAgentWithGroups(["精选"]);
      await createAgentWithGroups(["工具"]);
      await createAgentWithGroups(["精选", "工具"]);
    });

    it("应返回指定分组的所有 Agent", async () => {
      const res = await app.request(`${BASE}/group/featured`);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Array<Record<string, unknown>>;
      expect(body).toHaveLength(2);
    });

    it("不存在的分组应返回空数组", async () => {
      const res = await app.request(`${BASE}/group/nonexistent`);
      expect(res.status).toBe(200);

      const body = await res.json();
      expect(body).toEqual([]);
    });
  });
});
