import { registerApiRoute } from "@mastra/core/server";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  ModelResponseSchema,
  ModelWithProvidersResponseSchema,
  ModelsResponseSchema,
  addModelProviderRelation,
  createManyModels,
  createModel,
  createModelSchema,
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
  groupParamSchema,
  idParamSchema,
  modelProviderRelationSchema,
  providerParamSchema,
  removeModelProviderRelation,
  updateModel,
  updateModelSchema
} from "../server/model";

/**
 * 获取所有模型的路由处理器（基础版本）
 * @description 返回系统中所有可用的模型列表，不包含关联信息
 */
const getModelsRouter = registerApiRoute(`${PREFIX}/models`, {
  method: "GET",
  handler: async () => {
    try {
      const models = await getModels();
      return new Response(JSON.stringify(models), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error, message: "获取模型列表失败" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
  }
});

/**
 * 获取所有模型的路由处理器（包含提供商信息）
 * @description 返回系统中所有可用的模型列表，包含关联的提供商信息
 */
const getModelsWithProvidersRouter = registerApiRoute(
  `${PREFIX}/models/with-providers`,
  {
    method: "GET",
    handler: async () => {
      try {
        const models = await getModelsWithProviders();
        return new Response(JSON.stringify(models), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error, message: "获取模型列表失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 根据ID获取单个模型的路由处理器（基础版本）
 * @description 通过模型ID获取特定模型的详细信息，不包含关联信息
 */
const getModelByIdRouter = registerApiRoute(`${PREFIX}/models/:id`, {
  method: "GET",
  handler: async (c) => {
    try {
      const { id } = idParamSchema.parse({
        id: c.req.param("id")
      });

      const model = await getModelById(id);

      if (!model) {
        return new Response(JSON.stringify({ error: "模型不存在" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response(JSON.stringify(model), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      return new Response(JSON.stringify({ error, message: "获取模型失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 根据ID获取单个模型的路由处理器（包含提供商信息）
 * @description 通过模型ID获取特定模型的详细信息，包含关联的提供商
 */
const getModelWithProvidersByIdRouter = registerApiRoute(
  `${PREFIX}/models/:id/with-providers`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        const { id } = idParamSchema.parse({
          id: c.req.param("id")
        });

        const model = await getModelWithProvidersById(id);

        if (!model) {
          return new Response(JSON.stringify({ error: "模型不存在" }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
          });
        }

        return new Response(JSON.stringify(model), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.issues
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取模型失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 根据提供商ID获取模型的路由处理器（基础版本）
 * @description 通过提供商ID获取对应的模型列表，不包含关联信息
 */
const getModelsByProviderRouter = registerApiRoute(
  `${PREFIX}/models/by-provider/:providerId`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        const { providerId } = providerParamSchema.parse({
          providerId: c.req.param("providerId")
        });

        const models = await getModelsByProvider(providerId);
        return new Response(JSON.stringify(models), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.issues
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取模型失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 根据提供商ID获取模型的路由处理器（包含提供商信息）
 * @description 通过提供商ID获取对应的模型列表，包含关联的提供商
 */
const getModelsByProviderWithProvidersRouter = registerApiRoute(
  `${PREFIX}/models/by-provider/:providerId/with-providers`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        const { providerId } = providerParamSchema.parse({
          providerId: c.req.param("providerId")
        });

        const models = await getModelsByProviderWithProviders(providerId);
        return new Response(JSON.stringify(models), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.issues
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取模型失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 根据分组获取模型的路由处理器（基础版本）
 * @description 通过模型分组获取对应的模型列表，不包含关联信息
 */
const getModelsByGroupRouter = registerApiRoute(
  `${PREFIX}/models/group/:group`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        const { group } = groupParamSchema.parse({
          group: c.req.param("group")
        });

        const models = await getModelsByGroup(group);
        return new Response(JSON.stringify(models), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.issues
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取模型失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 根据分组获取模型的路由处理器（包含提供商信息）
 * @description 通过模型分组获取对应的模型列表，包含关联的提供商
 */
const getModelsByGroupWithProvidersRouter = registerApiRoute(
  `${PREFIX}/models/group/:group/with-providers`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        const { group } = groupParamSchema.parse({
          group: c.req.param("group")
        });

        const models = await getModelsByGroupWithProviders(group);
        return new Response(JSON.stringify(models), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.issues
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取模型失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 创建新模型的路由处理器
 * @description 接收模型数据并在系统中创建新的模型
 * @param c - Mastra上下文对象，包含请求信息
 */
const createModelRouter = registerApiRoute(`${PREFIX}/models`, {
  method: "POST",
  handler: async (c) => {
    try {
      const rawData = await c.req.json();

      // 参数校验
      const modelData = createModelSchema.parse(rawData);

      const newModel = await createModel(modelData);
      return new Response(JSON.stringify(newModel), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      // 处理业务逻辑错误
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "CREATE_MODEL_ERROR"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "创建模型失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 批量创建模型的路由处理器
 * @description 接收模型数据数组并批量创建模型
 * @param c - Mastra上下文对象，包含请求信息
 */
const createManyModelsRouter = registerApiRoute(`${PREFIX}/models/batch`, {
  method: "POST",
  handler: async (c) => {
    try {
      const rawData = await c.req.json();

      // 参数校验
      const batchSchema = z.array(createModelSchema);
      const modelsData = batchSchema.parse(rawData);

      const result = await createManyModels(modelsData);
      return new Response(JSON.stringify(result), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      // 处理业务逻辑错误
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "BATCH_CREATE_MODEL_ERROR"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "批量创建模型失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 更新模型的路由处理器
 * @description 接收模型ID和更新数据，修改指定模型的信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const updateModelRouter = registerApiRoute(`${PREFIX}/models/:id`, {
  method: "PUT",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id")
      });

      const rawData = await c.req.json();
      const modelData = updateModelSchema.parse(rawData);

      const updatedModel = await updateModel(id, modelData);
      return new Response(JSON.stringify(updatedModel), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      // 处理业务逻辑错误
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "UPDATE_MODEL_ERROR"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "更新模型失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 删除模型的路由处理器
 * @description 根据模型ID删除指定的模型
 * @param c - Mastra上下文对象，包含请求信息
 */
const deleteModelRouter = registerApiRoute(`${PREFIX}/models/:id`, {
  method: "DELETE",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id")
      });

      const deletedModel = await deleteModel(id);
      return new Response(JSON.stringify(deletedModel), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      // 处理业务逻辑错误（如有关联记录无法删除）
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "DELETE_CONSTRAINT_ERROR"
          }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "删除模型失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 添加模型与提供商关联的路由处理器
 * @description 为指定模型添加与提供商的关联关系
 */
const addModelProviderRelationRouter = registerApiRoute(
  `${PREFIX}/models/relations`,
  {
    method: "POST",
    handler: async (c) => {
      try {
        const body = await c.req.json();
        const relation = modelProviderRelationSchema.parse(body);
        const result = await addModelProviderRelation(relation);
        return new Response(JSON.stringify(result), {
          status: 201,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: error.issues,
              message: "请求参数验证失败"
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "添加模型与提供商关联失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 移除模型与提供商关联的路由处理器
 * @description 移除指定模型与提供商的关联关系
 */
const removeModelProviderRelationRouter = registerApiRoute(
  `${PREFIX}/models/relations`,
  {
    method: "DELETE",
    handler: async (c) => {
      try {
        const body = await c.req.json();
        const relation = modelProviderRelationSchema.parse(body);
        const result = await removeModelProviderRelation(relation);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: error.issues,
              message: "请求参数验证失败"
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "移除模型与提供商关联失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

/**
 * 获取模型与提供商关联列表的路由处理器
 * @description 获取指定模型的所有提供商关联关系
 */
const getModelProviderRelationsRouter = registerApiRoute(
  `${PREFIX}/models/:id/relations`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        // 参数校验
        const { id } = idParamSchema.parse({
          id: c.req.param("id")
        });

        const relations = await getModelProviderRelations(id);
        return new Response(JSON.stringify(relations), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: error.issues,
              message: "请求参数验证失败"
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" }
            }
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取模型关联列表失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
  }
);

// 导出所有路由
const modelsRouter = [
  // 基础版本（不包含关联信息）
  getModelsRouter,
  getModelByIdRouter,
  getModelsByProviderRouter,
  getModelsByGroupRouter,
  // WithProviders 版本（包含提供商信息）
  getModelsWithProvidersRouter,
  getModelWithProvidersByIdRouter,
  getModelsByProviderWithProvidersRouter,
  getModelsByGroupWithProvidersRouter,
  // 写操作
  createModelRouter,
  createManyModelsRouter,
  updateModelRouter,
  deleteModelRouter,
  // 关联操作
  addModelProviderRelationRouter,
  removeModelProviderRelationRouter,
  getModelProviderRelationsRouter
];

// 导出 route 定义（path + responseSchema）供 client 使用
export const modelRoutes = {
  // 基础版本
  getModels: {
    path: `${PREFIX}/models`,
    responseSchema: ModelsResponseSchema
  },
  getModelById: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelResponseSchema
  },
  getModelsByProvider: {
    path: `${PREFIX}/models/by-provider/:providerId`,
    responseSchema: ModelsResponseSchema
  },
  getModelsByGroup: {
    path: `${PREFIX}/models/group/:group`,
    responseSchema: ModelsResponseSchema
  },
  // WithProviders 版本
  getModelsWithProviders: {
    path: `${PREFIX}/models/with-providers`,
    responseSchema: ModelsResponseSchema
  },
  getModelWithProvidersById: {
    path: `${PREFIX}/models/:id/with-providers`,
    responseSchema: ModelWithProvidersResponseSchema
  },
  getModelsByProviderWithProviders: {
    path: `${PREFIX}/models/by-provider/:providerId/with-providers`,
    responseSchema: ModelsResponseSchema
  },
  getModelsByGroupWithProviders: {
    path: `${PREFIX}/models/group/:group/with-providers`,
    responseSchema: ModelsResponseSchema
  },
  // 写操作
  createModel: {
    path: `${PREFIX}/models`,
    responseSchema: ModelWithProvidersResponseSchema
  },
  updateModel: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelWithProvidersResponseSchema
  },
  deleteModel: {
    path: `${PREFIX}/models/:id`,
    responseSchema: ModelResponseSchema
  }
} as const;

export { modelsRouter };
