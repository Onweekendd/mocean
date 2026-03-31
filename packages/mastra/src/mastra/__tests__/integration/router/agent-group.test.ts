import { agentsRouter } from "src/mastra/router/agents";
import { beforeEach, describe, expect, it } from "vitest";

import { agentFactory, agentGroupFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

const BASE = "/customApi/agents";

describe("AgentGroup Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(agentsRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  /** 通过 API 创建一个 AgentGroup */
  async function createGroupViaApi(
    overrides?: Record<string, unknown>
  ) {
    const res = await app.request(`${BASE}/groups`, {
      method: "POST",
      body: JSON.stringify({
        name: `group-${Date.now()}`,
        label: "测试分组",
        ...overrides
      }),
      headers: { "Content-Type": "application/json" }
    });
    return { res, body: (await res.json()) as Record<string, unknown> };
  }

  /** 通过 API 创建一个 Agent */
  async function createAgentViaApi(
    overrides?: Record<string, unknown>
  ) {
    const res = await app.request(BASE, {
      method: "POST",
      body: JSON.stringify({
        name: "Test Agent",
        prompt: "You are a helpful agent",
        type: "agent",
        ...overrides
      }),
      headers: { "Content-Type": "application/json" }
    });
    return { res, body: (await res.json()) as Record<string, unknown> };
  }

  // ─── 创建 AgentGroup ─────────────────────────────
  describe("创建智能体分组", () => {
    it("应成功创建新分组", async () => {
      const { res, body } = await createGroupViaApi({
        name: "featured",
        label: "精选"
      });

      expect(res.status).toBe(201);
      expect(body).toMatchObject({
        name: "featured",
        label: "精选"
      });
      expect(body.id).toBeDefined();
      expect(body.createdAt).toBeDefined();
    });

    it("名称为空时应返回 400", async () => {
      const { res } = await createGroupViaApi({ name: "" });

      expect(res.status).toBe(400);
    });

    it("标签为空时应返回 400", async () => {
      const { res } = await createGroupViaApi({ label: "" });

      expect(res.status).toBe(400);
    });

    it("名称重复时应返回 409", async () => {
      await createGroupViaApi({ name: "duplicate-name", label: "第一个" });
      const { res } = await createGroupViaApi({
        name: "duplicate-name",
        label: "第二个"
      });

      expect(res.status).toBe(409);
    });
  });

  // ─── 更新 AgentGroup ─────────────────────────────
  describe("更新智能体分组", () => {
    it("应成功更新分组标签", async () => {
      const { body: created } = await createGroupViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/groups/${id}`, {
        method: "PUT",
        body: JSON.stringify({ label: "更新后的标签" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.label).toBe("更新后的标签");
    });

    it("应成功更新分组名称", async () => {
      const { body: created } = await createGroupViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/groups/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: "new-name" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.name).toBe("new-name");
    });

    it("不存在的 ID 应返回 500 (Prisma 错误)", async () => {
      const res = await app.request(`${BASE}/groups/non-existent-id`, {
        method: "PUT",
        body: JSON.stringify({ label: "测试" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(500);
    });
  });

  // ─── 删除 AgentGroup ─────────────────────────────
  describe("删除智能体分组", () => {
    it("应成功删除空分组", async () => {
      const { body: created } = await createGroupViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/groups/${id}`, {
        method: "DELETE"
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(id);
    });

    it("删除后应无法再获取该分组", async () => {
      const { body: created } = await createGroupViaApi();
      const id = created.id as string;

      await app.request(`${BASE}/groups/${id}`, { method: "DELETE" });

      // 验证数据库中已不存在
      const group = await prisma.agentGroup.findUnique({ where: { id } });
      expect(group).toBeNull();
    });

    it("删除不存在的分组应返回 404", async () => {
      const res = await app.request(`${BASE}/groups/non-existent-id`, {
        method: "DELETE"
      });

      expect(res.status).toBe(404);
    });

    it("删除有关联 Agent 的分组应返回 409", async () => {
      // 创建分组和 Agent 并关联
      const group = await agentGroupFactory.create(prisma);
      const agent = await agentFactory.create(prisma);

      await prisma.agentAgentGroup.create({
        data: { agentId: agent.id, agentGroupId: group.id }
      });

      const res = await app.request(`${BASE}/groups/${group.id}`, {
        method: "DELETE"
      });

      expect(res.status).toBe(409);
    });
  });

  // ─── Agent-Group 关系管理 ─────────────────────────
  describe("将智能体添加到分组", () => {
    it("应成功将 Agent 添加到分组", async () => {
      const { body: agentBody } = await createAgentViaApi();
      const agentId = agentBody.id as string;
      const group = await agentGroupFactory.create(prisma);

      const res = await app.request(`${BASE}/group-relations`, {
        method: "POST",
        body: JSON.stringify({ agentId, groupId: group.id }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(agentId);

      // 验证关联已建立
      const relations = await prisma.agentAgentGroup.findMany({
        where: { agentId }
      });
      expect(relations).toHaveLength(1);
      expect(relations[0].agentGroupId).toBe(group.id);
    });

    it("Agent 不存在时应返回 404", async () => {
      const group = await agentGroupFactory.create(prisma);

      const res = await app.request(`${BASE}/group-relations`, {
        method: "POST",
        body: JSON.stringify({
          agentId: "non-existent-agent",
          groupId: group.id
        }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(404);
    });

    it("分组不存在时应返回 404", async () => {
      const { body: agentBody } = await createAgentViaApi();

      const res = await app.request(`${BASE}/group-relations`, {
        method: "POST",
        body: JSON.stringify({
          agentId: agentBody.id,
          groupId: "non-existent-group"
        }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(404);
    });

    it("重复添加同一关系应返回 409 (唯一约束)", async () => {
      const { body: agentBody } = await createAgentViaApi();
      const agentId = agentBody.id as string;
      const group = await agentGroupFactory.create(prisma);

      // 第一次添加
      await app.request(`${BASE}/group-relations`, {
        method: "POST",
        body: JSON.stringify({ agentId, groupId: group.id }),
        headers: { "Content-Type": "application/json" }
      });

      // 第二次添加
      const res = await app.request(`${BASE}/group-relations`, {
        method: "POST",
        body: JSON.stringify({ agentId, groupId: group.id }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(409);
    });

    it("缺少必填字段应返回 400", async () => {
      const res = await app.request(`${BASE}/group-relations`, {
        method: "POST",
        body: JSON.stringify({ agentId: "" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(400);
    });
  });

  // ─── 移除 Agent-Group 关系 ────────────────────────
  describe("将智能体从分组中移除", () => {
    it("应成功将 Agent 从分组中移除", async () => {
      const { body: agentBody } = await createAgentViaApi();
      const agentId = agentBody.id as string;
      const group = await agentGroupFactory.create(prisma);

      // 先添加
      await prisma.agentAgentGroup.create({
        data: { agentId, agentGroupId: group.id }
      });

      const res = await app.request(`${BASE}/group-relations`, {
        method: "DELETE",
        body: JSON.stringify({ agentId, groupId: group.id }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(agentId);

      // 验证关联已移除
      const relations = await prisma.agentAgentGroup.findMany({
        where: { agentId }
      });
      expect(relations).toHaveLength(0);
    });

    it("关系不存在时应返回 404", async () => {
      const { body: agentBody } = await createAgentViaApi();
      const group = await agentGroupFactory.create(prisma);

      const res = await app.request(`${BASE}/group-relations`, {
        method: "DELETE",
        body: JSON.stringify({
          agentId: agentBody.id,
          groupId: group.id
        }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(500);
    });

    it("缺少必填字段应返回 400", async () => {
      const res = await app.request(`${BASE}/group-relations`, {
        method: "DELETE",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(400);
    });
  });
});
