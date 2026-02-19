/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { beforeEach, describe, expect, it } from "vitest";

import { providersRouter } from "../../../router/providers";
import { modelFactory, providerFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

describe("Providers Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(providersRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  describe("GET /customApi/providers", () => {
    it("should return 200 and empty array when no providers exist", async () => {
      const response = await app.request("/customApi/providers");

      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toContain(
        "application/json"
      );

      const data = await response.json();
      expect(data).toEqual([]);
    });

    it("should return 200 and all providers", async () => {
      await providerFactory.create(prisma, { name: "Provider 1" });
      await providerFactory.create(prisma, { name: "Provider 2" });

      const response = await app.request("/customApi/providers");

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(2);
    });
  });

  describe("GET /customApi/providers/with-models", () => {
    it("should return providers with models array", async () => {
      const provider = await providerFactory.create(prisma);
      const group = provider.groups[0];
      await modelFactory.create(prisma, group.id, { name: "gpt-4" });

      const response = await app.request("/customApi/providers/with-models");

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(1);
      expect(data[0].models).toBeDefined();
      expect(data[0].models).toHaveLength(1);
    });
  });

  describe("GET /customApi/providers/enabled", () => {
    it("should return only enabled providers", async () => {
      await providerFactory.create(prisma, { name: "Enabled", enabled: true });
      await providerFactory.create(prisma, {
        name: "Disabled",
        enabled: false
      });

      const response = await app.request("/customApi/providers/enabled");

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(1);
      expect(data[0].enabled).toBe(true);
    });
  });

  describe("GET /customApi/providers/enabled/with-models", () => {
    it("should return only enabled providers with models", async () => {
      const enabled = await providerFactory.create(prisma, {
        name: "Enabled",
        enabled: true
      });
      await providerFactory.create(prisma, {
        name: "Disabled",
        enabled: false
      });

      const group = enabled.groups[0];
      await modelFactory.create(prisma, group.id, { name: "gpt-4" });

      const response = await app.request(
        "/customApi/providers/enabled/with-models"
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(1);
    });
  });

  describe("GET /customApi/providers/:id", () => {
    it("should return 200 and provider by id", async () => {
      const provider = await providerFactory.create(prisma, {
        name: "Test Provider"
      });

      const response = await app.request(`/customApi/providers/${provider.id}`);

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.id).toBe(provider.id);
      expect(data.name).toBe("Test Provider");
    });

    it("should return 404 for non-existent provider", async () => {
      const response = await app.request(
        "/customApi/providers/non-existent-id"
      );

      expect(response.status).toBe(404);
      const text = await response.text();
      expect(text).toContain("不存在");
    });
  });

  describe("GET /customApi/providers/:id/with-models", () => {
    it("should return provider with models by id", async () => {
      const provider = await providerFactory.create(prisma);
      const group = provider.groups[0];
      await modelFactory.create(prisma, group.id, { name: "gpt-4" });

      const response = await app.request(
        `/customApi/providers/${provider.id}/with-models`
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.id).toBe(provider.id);
      expect(data._count?.models).toBe(1);
    });
  });

  describe("GET /customApi/providers/type/:type", () => {
    it("should return providers filtered by type", async () => {
      await providerFactory.create(prisma, { type: "openai", name: "OpenAI" });
      await providerFactory.create(prisma, {
        type: "anthropic",
        name: "Anthropic"
      });
      await providerFactory.create(prisma, {
        type: "openai",
        name: "OpenAI 2"
      });

      const response = await app.request("/customApi/providers/type/openai");

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(2);
      expect(data.every((p: unknown) => p.type === "openai")).toBe(true);
    });
  });

  describe("GET /customApi/providers/type/:type/with-models", () => {
    it("should return providers with models filtered by type", async () => {
      const openai = await providerFactory.create(prisma, {
        type: "openai",
        name: "OpenAI"
      });
      await providerFactory.create(prisma, {
        type: "anthropic",
        name: "Anthropic"
      });

      const group = openai.groups[0];
      await modelFactory.create(prisma, group.id, { name: "gpt-4" });

      const response = await app.request(
        "/customApi/providers/type/openai/with-models"
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(1);
      expect(data[0].type).toBe("openai");
      expect(data[0].models).toHaveLength(1);
    });
  });

  describe("POST /customApi/providers", () => {
    it("should return 201 and create new provider", async () => {
      const body = {
        type: "openai",
        name: "OpenAI",
        apiKey: "sk-test",
        apiHost: "https://api.openai.com",
        enabled: true,
        isSystem: false,
        isAuthed: true
      };

      const response = await app.request("/customApi/providers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      expect(response.status).toBe(201);
      const data = await response.json();
      expect(data.name).toBe("OpenAI");
      expect(data.id).toBeDefined();
      expect(data.groups).toHaveLength(1);
      expect(data.groups[0].name).toBe("默认");
    });

    it("should return 400 for invalid apiHost", async () => {
      const body = {
        type: "openai",
        name: "Invalid Provider",
        apiKey: "test",
        apiHost: "not-a-valid-url",
        enabled: true
      };

      const response = await app.request("/customApi/providers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      expect(response.status).toBe(400);
    });
  });

  describe("PUT /customApi/providers/:id", () => {
    it("should return 200 and update provider", async () => {
      const provider = await providerFactory.create(prisma, {
        name: "Old Name"
      });

      const body = {
        id: provider.id,
        name: "New Name",
        type: provider.type,
        apiKey: provider.apiKey,
        apiHost: provider.apiHost,
        enabled: true,
        isSystem: provider.isSystem,
        isAuthed: provider.isAuthed
      };

      const response = await app.request(
        `/customApi/providers/${provider.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.name).toBe("New Name");
    });
  });

  describe("DELETE /customApi/providers/:id", () => {
    it("should return 200 and delete provider", async () => {
      const provider = await providerFactory.create(prisma);

      const response = await app.request(
        `/customApi/providers/${provider.id}`,
        {
          method: "DELETE"
        }
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.id).toBe(provider.id);
    });

    it("should return 409 when deleting provider with models", async () => {
      const provider = await providerFactory.create(prisma);
      const group = provider.groups[0];
      await modelFactory.create(prisma, group.id);

      const response = await app.request(
        `/customApi/providers/${provider.id}`,
        {
          method: "DELETE"
        }
      );

      expect(response.status).toBe(409);
      const text = await response.text();
      expect(text).toContain("无法删除提供商");
    });
  });

  describe("PUT /customApi/providers/:id/toggle", () => {
    it("should return 200 and toggle provider enabled status", async () => {
      const provider = await providerFactory.create(prisma, { enabled: true });

      const response = await app.request(
        `/customApi/providers/${provider.id}/toggle`,
        {
          method: "PUT"
        }
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.enabled).toBe(false);
    });

    it("should return 404 for non-existent provider", async () => {
      const response = await app.request(
        "/customApi/providers/non-existent/toggle",
        {
          method: "PUT"
        }
      );

      expect(response.status).toBe(404);
    });
  });

  describe("GET /customApi/providers/by-model/:modelId", () => {
    it("should return providers that have the specified model", async () => {
      const provider1 = await providerFactory.create(prisma, {
        name: "Provider 1"
      });
      await providerFactory.create(prisma, { name: "Provider 2" });

      const group1 = provider1.groups[0];
      const model = await modelFactory.create(prisma, group1.id, {
        name: "shared-model"
      });

      const response = await app.request(
        `/customApi/providers/by-model/${model.id}`
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(1);
      expect(data[0].id).toBe(provider1.id);
    });
  });

  describe("GET /customApi/providers/by-model/:modelId/with-models", () => {
    it("should return providers with models for specified model", async () => {
      const provider1 = await providerFactory.create(prisma, {
        name: "Provider 1"
      });
      await providerFactory.create(prisma, { name: "Provider 2" });

      const group1 = provider1.groups[0];
      const model = await modelFactory.create(prisma, group1.id, {
        name: "shared-model"
      });

      const response = await app.request(
        `/customApi/providers/by-model/${model.id}/with-models`
      );

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data).toHaveLength(1);
      expect(data[0].id).toBe(provider1.id);
      expect(data[0].models).toBeDefined();
    });
  });
});
