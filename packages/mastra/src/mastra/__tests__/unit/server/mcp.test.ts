import { beforeEach, describe, expect, it, vi } from "vitest";

import { createMcpService } from "../../../server/mcp";

function createMockPrisma() {
  return {
    mCPServer: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    },
    mCPTool: {
      findFirst: vi.fn(),
      update: vi.fn()
    }
  };
}

describe("MCP Service - 单元测试", () => {
  let mockPrisma: ReturnType<typeof createMockPrisma>;
  let service: ReturnType<typeof createMcpService>;

  beforeEach(() => {
    mockPrisma = createMockPrisma();
    // @ts-expect-error mock prisma client
    service = createMcpService(mockPrisma);
  });

  describe("getMcpServers", () => {
    it("应调用 findMany 并返回结果", async () => {
      const servers = [{ id: "s1", name: "Server 1" }];
      mockPrisma.mCPServer.findMany.mockResolvedValue(servers);

      const result = await service.getMcpServers();

      expect(result).toEqual(servers);
      expect(mockPrisma.mCPServer.findMany).toHaveBeenCalledWith({
        orderBy: { createdAt: "desc" }
      });
    });
  });

  describe("getMcpServerById", () => {
    it("应调用 findUnique 并返回结果", async () => {
      const server = { id: "s1", name: "Server 1", tools: [], prompts: [] };
      mockPrisma.mCPServer.findUnique.mockResolvedValue(server);

      const result = await service.getMcpServerById("s1");

      expect(result).toEqual(server);
      expect(mockPrisma.mCPServer.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: "s1" } })
      );
    });

    it("不存在时应返回 null", async () => {
      mockPrisma.mCPServer.findUnique.mockResolvedValue(null);

      const result = await service.getMcpServerById("nonexistent");
      expect(result).toBeNull();
    });
  });

  describe("createMcpServer", () => {
    it("应调用 create 并返回结果", async () => {
      const input = { name: "New Server", type: "stdio", command: "npx" };
      const created = { id: "s1", ...input };
      mockPrisma.mCPServer.create.mockResolvedValue(created);

      const result = await service.createMcpServer(input);

      expect(result).toEqual(created);
      expect(mockPrisma.mCPServer.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ name: "New Server" })
        })
      );
    });
  });

  describe("toggleMcpServer", () => {
    it("isActive 为 true 时应切换为 false", async () => {
      mockPrisma.mCPServer.findUnique.mockResolvedValue({ isActive: true });
      mockPrisma.mCPServer.update.mockResolvedValue({
        id: "s1",
        isActive: false
      });

      const result = await service.toggleMcpServer("s1");

      expect(result.isActive).toBe(false);
      expect(mockPrisma.mCPServer.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ isActive: false })
        })
      );
    });

    it("服务器不存在时应抛出错误", async () => {
      mockPrisma.mCPServer.findUnique.mockResolvedValue(null);

      await expect(service.toggleMcpServer("nonexistent")).rejects.toThrow(
        "MCP 服务器不存在"
      );
    });
  });

  describe("toggleMcpTool", () => {
    it("isEnabled 为 true 时应切换为 false", async () => {
      mockPrisma.mCPTool.findFirst.mockResolvedValue({
        id: "t1",
        isEnabled: true
      });
      mockPrisma.mCPTool.update.mockResolvedValue({
        id: "t1",
        isEnabled: false
      });

      const result = await service.toggleMcpTool("s1", "my_tool");

      expect(result.isEnabled).toBe(false);
      expect(mockPrisma.mCPTool.findFirst).toHaveBeenCalledWith({
        where: { serverId: "s1", name: "my_tool" }
      });
    });

    it("工具不存在时应抛出错误", async () => {
      mockPrisma.mCPTool.findFirst.mockResolvedValue(null);

      await expect(
        service.toggleMcpTool("s1", "nonexistent")
      ).rejects.toThrow('工具 "nonexistent" 不存在');
    });
  });

  describe("deleteMcpServer", () => {
    it("应调用 delete 并返回结果", async () => {
      mockPrisma.mCPServer.delete.mockResolvedValue({ id: "s1" });

      const result = await service.deleteMcpServer("s1");

      expect(result.id).toBe("s1");
      expect(mockPrisma.mCPServer.delete).toHaveBeenCalledWith({
        where: { id: "s1" }
      });
    });
  });
});
