/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import { beforeEach, describe, expect, it, vi } from "vitest";

import { createProviderService } from "../../../server/provider";

/**
 * 创建 mock Prisma provider 模型
 */
function createMockPrisma() {
  return {
    provider: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    }
  };
}

describe("Provider Service - Unit Tests", () => {
  let mockPrisma: ReturnType<typeof createMockPrisma>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let service: any;

  beforeEach(() => {
    mockPrisma = createMockPrisma();
    service = createProviderService(mockPrisma);
  });

  describe("deleteProvider", () => {
    it("should throw when provider has associated models", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue({
        id: "p1",
        groups: [{ _count: { models: 2 } }, { _count: { models: 1 } }]
      });

      await expect(service.deleteProvider("p1")).rejects.toThrow(
        "无法删除提供商：仍有 3 个关联的模型"
      );
      expect(mockPrisma.provider.delete).not.toHaveBeenCalled();
    });

    it("should delete when all groups have zero models", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue({
        id: "p1",
        groups: [{ _count: { models: 0 } }, { _count: { models: 0 } }]
      });
      mockPrisma.provider.delete.mockResolvedValue({ id: "p1" });

      const result = await service.deleteProvider("p1");

      expect(result.id).toBe("p1");
      expect(mockPrisma.provider.delete).toHaveBeenCalledWith({
        where: { id: "p1" }
      });
    });

    it("should delete when provider has no groups", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue({
        id: "p1",
        groups: []
      });
      mockPrisma.provider.delete.mockResolvedValue({ id: "p1" });

      const result = await service.deleteProvider("p1");

      expect(result.id).toBe("p1");
    });

    it("should delete when provider does not exist (findUnique returns null)", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue(null);
      mockPrisma.provider.delete.mockResolvedValue({ id: "p1" });

      const result = await service.deleteProvider("p1");

      expect(result.id).toBe("p1");
    });
  });

  describe("toggleProviderEnabled", () => {
    it("should toggle from true to false", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue({ enabled: true });
      mockPrisma.provider.update.mockResolvedValue({
        id: "p1",
        enabled: false,
        groups: []
      });

      const result = await service.toggleProviderEnabled("p1");

      expect(result.enabled).toBe(false);
      expect(mockPrisma.provider.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ enabled: false })
        })
      );
    });

    it("should toggle from false to true", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue({ enabled: false });
      mockPrisma.provider.update.mockResolvedValue({
        id: "p1",
        enabled: true,
        groups: []
      });

      const result = await service.toggleProviderEnabled("p1");

      expect(result.enabled).toBe(true);
      expect(mockPrisma.provider.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ enabled: true })
        })
      );
    });

    it("should throw for non-existent provider", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue(null);

      await expect(
        service.toggleProviderEnabled("non-existent")
      ).rejects.toThrow("提供商不存在");
      expect(mockPrisma.provider.update).not.toHaveBeenCalled();
    });
  });

  describe("extractModelsFromGroups (via getProvidersWithModels)", () => {
    it("should flatten models from multiple groups", async () => {
      const model1 = { id: "m1", name: "Model 1" };
      const model2 = { id: "m2", name: "Model 2" };
      const model3 = { id: "m3", name: "Model 3" };

      mockPrisma.provider.findMany.mockResolvedValue([
        {
          id: "p1",
          name: "Provider",
          groups: [
            { id: "g1", models: [model1, model2] },
            { id: "g2", models: [model3] }
          ]
        }
      ]);

      const result = await service.getProvidersWithModels();

      expect(result).toHaveLength(1);
      expect(result[0].models).toHaveLength(3);
      expect(result[0].models).toEqual([model1, model2, model3]);
      expect(result[0]._count.models).toBe(3);
    });

    it("should return empty models array when groups have no models", async () => {
      mockPrisma.provider.findMany.mockResolvedValue([
        {
          id: "p1",
          name: "Provider",
          groups: [{ id: "g1", models: [] }]
        }
      ]);

      const result = await service.getProvidersWithModels();

      expect(result[0].models).toEqual([]);
      expect(result[0]._count.models).toBe(0);
    });

    it("should return empty models when no groups exist", async () => {
      mockPrisma.provider.findMany.mockResolvedValue([
        {
          id: "p1",
          name: "Provider",
          groups: []
        }
      ]);

      const result = await service.getProvidersWithModels();

      expect(result[0].models).toEqual([]);
      expect(result[0]._count.models).toBe(0);
    });
  });

  describe("getProviderWithModelsById", () => {
    it("should return null for non-existent provider", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue(null);

      const result = await service.getProviderWithModelsById("non-existent");

      expect(result).toBeNull();
    });

    it("should return provider with _count when found", async () => {
      mockPrisma.provider.findUnique.mockResolvedValue({
        id: "p1",
        name: "Test",
        groups: [{ id: "g1", models: [{ id: "m1" }, { id: "m2" }] }]
      });

      const result = await service.getProviderWithModelsById("p1");

      expect(result).not.toBeNull();
      expect(result.id).toBe("p1");
      expect(result._count.models).toBe(2);
    });
  });
});
