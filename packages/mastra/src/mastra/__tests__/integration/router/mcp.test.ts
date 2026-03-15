import { beforeEach, describe, expect, it } from "vitest";

import { mcpRouter } from "../../../router/mcp";
import { mcpServerFactory, mcpToolFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

const BASE = "/customApi/mcp/servers";

describe("MCP Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(mcpRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  function buildCreateBody(overrides?: Partial<Record<string, unknown>>) {
    return {
      name: "Test MCP Server",
      type: "stdio",
      command: "npx",
      argsJson: ["-y", "@test/mcp-server"],
      isActive: true,
      ...overrides
    };
  }

  async function createViaApi(overrides?: Partial<Record<string, unknown>>) {
    const res = await app.request(BASE, {
      method: "POST",
      body: JSON.stringify(buildCreateBody(overrides)),
      headers: { "Content-Type": "application/json" }
    });
    return { res, body: (await res.json()) as Record<string, unknown> };
  }

  // ─── GET 列表 ─────────────────────────────────────────
  describe("获取列表", () => {
    it("没有数据时应返回空数组", async () => {
      const res = await app.request(BASE);
      expect(res.status).toBe(200);
      expect(await res.json()).toEqual([]);
    });

    it("应返回所有已创建的服务器", async () => {
      await mcpServerFactory.create(prisma, { name: "Server A" });
      await mcpServerFactory.create(prisma, { name: "Server B" });

      const res = await app.request(BASE);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Array<Record<string, unknown>>;
      expect(body).toHaveLength(2);
      expect(body.map((x) => x.name)).toContain("Server A");
    });
  });

  // ─── GET 单个 ─────────────────────────────────────────
  describe("根据 ID 获取", () => {
    it("应返回服务器详情（含 tools/prompts/resources）", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`);
      expect(res.status).toBe(200);

      const body = (await res.json()) as Record<string, unknown>;
      expect(body.id).toBe(id);
      expect(body).toHaveProperty("tools");
      expect(body).toHaveProperty("prompts");
      expect(body).toHaveProperty("resources");
    });

    it("不存在的 ID 应返回 null", async () => {
      const res = await app.request(`${BASE}/non-existent-id`);
      expect(res.status).toBe(200);
      expect(await res.json()).toBeNull();
    });
  });

  // ─── POST 创建 ────────────────────────────────────────
  describe("创建", () => {
    it("应成功创建并返回 201", async () => {
      const { res, body } = await createViaApi();

      expect(res.status).toBe(201);
      expect(body).toMatchObject({ name: "Test MCP Server" });
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
  });

  // ─── PUT 更新 ─────────────────────────────────────────
  describe("更新", () => {
    it("应成功更新字段", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name: "Updated Server" }),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.name).toBe("Updated Server");
    });
  });

  // ─── DELETE ──────────────────────────────────────────
  describe("删除", () => {
    it("应成功删除并返回被删除的数据", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}`, { method: "DELETE" });

      expect(res.status).toBe(200);
      expect(((await res.json()) as Record<string, unknown>).id).toBe(id);
    });

    it("删除后列表不再包含该服务器", async () => {
      const { body: created } = await createViaApi();
      const id = created.id as string;

      await app.request(`${BASE}/${id}`, { method: "DELETE" });

      const listRes = await app.request(BASE);
      const list = (await listRes.json()) as Array<Record<string, unknown>>;
      expect(list.find((s) => s.id === id)).toBeUndefined();
    });
  });

  // ─── PUT toggle server ────────────────────────────────
  describe("切换服务器启用状态", () => {
    it("应切换 isActive 状态", async () => {
      const { body: created } = await createViaApi({ isActive: true });
      const id = created.id as string;

      const res = await app.request(`${BASE}/${id}/toggle`, {
        method: "PUT",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.isActive).toBe(false);
    });

    it("再次切换应恢复原状态", async () => {
      const { body: created } = await createViaApi({ isActive: true });
      const id = created.id as string;

      await app.request(`${BASE}/${id}/toggle`, {
        method: "PUT",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" }
      });

      const res = await app.request(`${BASE}/${id}/toggle`, {
        method: "PUT",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" }
      });

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.isActive).toBe(true);
    });
  });

  // ─── PUT toggle tool ──────────────────────────────────
  describe("切换工具启用状态", () => {
    it("应切换工具的 isEnabled 状态", async () => {
      const server = await mcpServerFactory.create(prisma);
      await mcpToolFactory.create(prisma, server.id, {
        name: "my_tool",
        isEnabled: true
      });

      const res = await app.request(
        `${BASE}/${server.id}/tools/my_tool/toggle`,
        {
          method: "PUT",
          body: JSON.stringify({}),
          headers: { "Content-Type": "application/json" }
        }
      );

      expect(res.status).toBe(200);
      const body = (await res.json()) as Record<string, unknown>;
      expect(body.isEnabled).toBe(false);
    });

    it("不存在的工具应返回 500", async () => {
      const server = await mcpServerFactory.create(prisma);

      const res = await app.request(
        `${BASE}/${server.id}/tools/nonexistent/toggle`,
        {
          method: "PUT",
          body: JSON.stringify({}),
          headers: { "Content-Type": "application/json" }
        }
      );

      expect(res.status).toBe(500);
    });
  });
});
