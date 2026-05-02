import { zValidator } from "@hono/zod-validator";
import type { ProviderType } from "generated/prisma/enums";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  createProviderSchema,
  testProviderConnectionSchema,
  updateProviderSchema
} from "../schema/provider";
import {
  createProvider,
  deleteProvider,
  getEnabledProviders,
  getEnabledProvidersWithModels,
  getProviderById,
  getProviderWithModelsById,
  getProviders,
  getProvidersByModel,
  getProvidersByModelWithModels,
  getProvidersByType,
  getProvidersByTypeWithModels,
  getProvidersWithModels,
  testProviderConnection,
  toggleProviderEnabled,
  updateProvider
} from "../server/provider";

export const providersRouter = new Hono()
  .get("/", async (c) => {
    const result = await getProviders();
    return c.json(result);
  })
  .get("/with-models", async (c) => {
    const result = await getProvidersWithModels();
    return c.json(result);
  })
  .get("/enabled", async (c) => {
    const result = await getEnabledProviders();
    return c.json(result);
  })
  .get("/enabled/with-models", async (c) => {
    const result = await getEnabledProvidersWithModels();
    return c.json(result);
  })
  .get("/type/:type", async (c) => {
    const result = await getProvidersByType(
      c.req.param("type") as ProviderType
    );
    return c.json(result);
  })
  .get("/type/:type/with-models", async (c) => {
    const result = await getProvidersByTypeWithModels(
      c.req.param("type") as ProviderType
    );
    return c.json(result);
  })
  .get("/by-model/:modelId", async (c) => {
    const result = await getProvidersByModel(c.req.param("modelId"));
    return c.json(result);
  })
  .get("/by-model/:modelId/with-models", async (c) => {
    const result = await getProvidersByModelWithModels(c.req.param("modelId"));
    return c.json(result);
  })
  .post(
    "/test-connection",
    zValidator("json", testProviderConnectionSchema),
    async (c) => {
      const result = await testProviderConnection(c.req.valid("json"));
      return c.json(result);
    }
  )
  .post("/", zValidator("json", createProviderSchema), async (c) => {
    const result = await createProvider(c.req.valid("json"));
    return c.json(result, 201);
  })
  .get("/:id/with-models", async (c) => {
    const provider = await getProviderWithModelsById(c.req.param("id"));
    if (!provider) throw new HTTPException(404, { message: "提供商不存在" });
    return c.json(provider);
  })
  .get("/:id", async (c) => {
    const provider = await getProviderById(c.req.param("id"));
    if (!provider) throw new HTTPException(404, { message: "提供商不存在" });
    return c.json(provider);
  })
  .put("/:id/toggle", async (c) => {
    try {
      const result = await toggleProviderEnabled(c.req.param("id"));
      return c.json(result);
    } catch (error) {
      if (error instanceof Error)
        throw new HTTPException(404, { message: error.message });
      throw error;
    }
  })
  .put("/:id", zValidator("json", updateProviderSchema), async (c) => {
    const result = await updateProvider(c.req.valid("json"));
    return c.json(result);
  })
  .delete("/:id", async (c) => {
    try {
      const result = await deleteProvider(c.req.param("id"));
      return c.json(result);
    } catch (error) {
      if (error instanceof Error)
        throw new HTTPException(409, { message: error.message });
      throw error;
    }
  });
