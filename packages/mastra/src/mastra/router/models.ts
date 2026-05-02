import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  createModelSchema,
  modelProviderRelationSchema,
  updateModelSchema
} from "../schema/model";
import {
  addModelProviderRelation,
  createManyModels,
  createModel,
  deleteModel,
  getModelById,
  getModelProviderRelations,
  getModelWithProvidersById,
  getModels,
  getModelsByGroup,
  getModelsByGroupWithProviders,
  getModelsByProvider,
  getModelsByProviderWithProviders,
  getModelsWithProviders,
  removeModelProviderRelation,
  updateModel
} from "../server/model";

export const modelsRouter = new Hono()
  .get("/", async (c) => {
    const result = await getModels();
    return c.json(result);
  })
  .get("/with-providers", async (c) => {
    const result = await getModelsWithProviders();
    return c.json(result);
  })
  .get("/by-provider/:providerId", async (c) => {
    const result = await getModelsByProvider(c.req.param("providerId"));
    return c.json(result);
  })
  .get("/by-provider/:providerId/with-providers", async (c) => {
    const result = await getModelsByProviderWithProviders(
      c.req.param("providerId")
    );
    return c.json(result);
  })
  .get("/group/:group", async (c) => {
    const result = await getModelsByGroup(c.req.param("group"));
    return c.json(result);
  })
  .get("/group/:group/with-providers", async (c) => {
    const result = await getModelsByGroupWithProviders(c.req.param("group"));
    return c.json(result);
  })
  .post(
    "/relations",
    zValidator("json", modelProviderRelationSchema),
    async (c) => {
      const result = await addModelProviderRelation(c.req.valid("json"));
      return c.json(result, 201);
    }
  )
  .delete(
    "/relations",
    zValidator(
      "json",
      modelProviderRelationSchema.pick({ modelId: true, providerId: true })
    ),
    async (c) => {
      const result = await removeModelProviderRelation(c.req.valid("json"));
      return c.json(result);
    }
  )
  .post("/batch", zValidator("json", createModelSchema.array()), async (c) => {
    try {
      const result = await createManyModels(c.req.valid("json"));
      return c.json(result, 201);
    } catch (error) {
      throw new HTTPException(500, {
        message: (error as Error)?.message || "服务器内部错误"
      });
    }
  })
  .get("/:id/with-providers", async (c) => {
    const model = await getModelWithProvidersById(c.req.param("id"));
    if (!model) throw new HTTPException(404, { message: "模型不存在" });
    return c.json(model);
  })
  .get("/:id/relations", async (c) => {
    const result = await getModelProviderRelations(c.req.param("id"));
    return c.json(result);
  })
  .get("/:id", async (c) => {
    const model = await getModelById(c.req.param("id"));
    if (!model) throw new HTTPException(404, { message: "模型不存在" });
    return c.json(model);
  })
  .post("/", zValidator("json", createModelSchema), async (c) => {
    try {
      const result = await createModel(c.req.valid("json"));
      return c.json(result, 201);
    } catch (error) {
      throw new HTTPException(500, {
        message: (error as Error)?.message || "服务器内部错误"
      });
    }
  })
  .put("/:id", zValidator("json", updateModelSchema), async (c) => {
    try {
      const result = await updateModel(c.req.param("id"), c.req.valid("json"));
      return c.json(result);
    } catch (error) {
      throw new HTTPException(500, {
        message: (error as Error)?.message || "服务器内部错误"
      });
    }
  })
  .delete("/:id", async (c) => {
    const result = await deleteModel(c.req.param("id"));
    return c.json(result);
  });
