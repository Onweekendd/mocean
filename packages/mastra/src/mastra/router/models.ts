import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  CreateManyModelsResponseSchema,
  ModelProviderRelationResponseSchema,
  ModelResponseSchema,
  ModelWithProvidersResponseSchema,
  ModelsResponseSchema
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
import { modelRoutes } from "./type";

/**
 * 获取所有模型的路由处理器（基础版本）
 * @description 返回系统中所有可用的模型列表，不包含关联信息
 */
const getModelsRouter = registerApiRoute(modelRoutes.getModels.path, {
  method: "GET",
  openapi: {
    summary: "获取所有模型",
    tags: ["Models"],
    responses: {
      200: {
        description: "返回系统中所有可用的模型列表，不包含关联信息",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: ModelsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    return c.json(await getModels(), 200);
  }
});

/**
 * 获取所有模型的路由处理器（包含提供商信息）
 * @description 返回系统中所有可用的模型列表，包含关联的提供商信息
 */
const getModelsWithProvidersRouter = registerApiRoute(
  modelRoutes.getModelsWithProviders.path,
  {
    method: "GET",
    openapi: {
      summary: "获取所有模型（包含提供商信息）",
      tags: ["Models"],
      responses: {
        200: {
          description: "返回系统中所有可用的模型列表，包含关联的提供商信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.array(ModelWithProvidersResponseSchema)
            }
          }
        }
      }
    },
    handler: async (c) => {
      return c.json(await getModelsWithProviders(), 200);
    }
  }
);

/**
 * 根据ID获取单个模型的路由处理器（基础版本）
 * @description 通过模型ID获取特定模型的详细信息，不包含关联信息
 */
const getModelByIdRouter = registerApiRoute(modelRoutes.getModelById.path, {
  method: "GET",
  openapi: {
    summary: "根据ID获取单个模型",
    tags: ["Models"],
    responses: {
      200: {
        description: "通过模型ID获取特定模型的详细信息，不包含关联信息",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: ModelResponseSchema.nullable()
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "模型ID不能为空" });
    }
    const model = await getModelById(id);
    if (!model) {
      throw new HTTPException(404, { message: "模型不存在" });
    }
    return c.json(model, 200);
  }
});

/**
 * 根据ID获取单个模型的路由处理器（包含提供商信息）
 * @description 通过模型ID获取特定模型的详细信息，包含关联的提供商
 */
const getModelWithProvidersByIdRouter = registerApiRoute(
  modelRoutes.getModelWithProvidersById.path,
  {
    method: "GET",
    openapi: {
      summary: "根据ID获取单个模型（包含提供商信息）",
      tags: ["Models"],
      responses: {
        200: {
          description: "通过模型ID获取特定模型的详细信息，包含关联的提供商",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ModelWithProvidersResponseSchema.nullable()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const id = c.req.param("id");
      if (!id) {
        throw new HTTPException(400, { message: "模型ID不能为空" });
      }
      const model = await getModelWithProvidersById(id);
      if (!model) {
        throw new HTTPException(404, { message: "模型不存在" });
      }
      return c.json(model, 200);
    }
  }
);

/**
 * 根据提供商ID获取模型的路由处理器（基础版本）
 * @description 通过提供商ID获取对应的模型列表，不包含关联信息
 */
const getModelsByProviderRouter = registerApiRoute(
  modelRoutes.getModelsByProvider.path,
  {
    method: "GET",
    openapi: {
      summary: "根据提供商ID获取模型列表",
      tags: ["Models"],
      responses: {
        200: {
          description: "通过提供商ID获取对应的模型列表，不包含关联信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const providerId = c.req.param("providerId");
      if (!providerId) {
        throw new HTTPException(400, { message: "提供商ID不能为空" });
      }
      return c.json(await getModelsByProvider(providerId), 200);
    }
  }
);

/**
 * 根据提供商ID获取模型的路由处理器（包含提供商信息）
 * @description 通过提供商ID获取对应的模型列表，包含关联的提供商
 */
const getModelsByProviderWithProvidersRouter = registerApiRoute(
  modelRoutes.getModelsByProviderWithProviders.path,
  {
    method: "GET",
    openapi: {
      summary: "根据提供商ID获取模型列表（包含提供商信息）",
      tags: ["Models"],
      responses: {
        200: {
          description: "通过提供商ID获取对应的模型列表，包含关联的提供商",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.array(ModelWithProvidersResponseSchema)
            }
          }
        }
      }
    },
    handler: async (c) => {
      const providerId = c.req.param("providerId");
      if (!providerId) {
        throw new HTTPException(400, { message: "提供商ID不能为空" });
      }
      return c.json(await getModelsByProviderWithProviders(providerId), 200);
    }
  }
);

/**
 * 根据分组获取模型的路由处理器（基础版本）
 * @description 通过模型分组获取对应的模型列表，不包含关联信息
 */
const getModelsByGroupRouter = registerApiRoute(
  modelRoutes.getModelsByGroup.path,
  {
    method: "GET",
    openapi: {
      summary: "根据分组获取模型列表",
      tags: ["Models"],
      responses: {
        200: {
          description: "通过模型分组获取对应的模型列表，不包含关联信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const group = c.req.param("group");
      if (!group) {
        throw new HTTPException(400, { message: "分组不能为空" });
      }
      return c.json(await getModelsByGroup(group), 200);
    }
  }
);

/**
 * 根据分组获取模型的路由处理器（包含提供商信息）
 * @description 通过模型分组获取对应的模型列表，包含关联的提供商
 */
const getModelsByGroupWithProvidersRouter = registerApiRoute(
  modelRoutes.getModelsByGroupWithProviders.path,
  {
    method: "GET",
    openapi: {
      summary: "根据分组获取模型列表（包含提供商信息）",
      tags: ["Models"],
      responses: {
        200: {
          description: "通过模型分组获取对应的模型列表，包含关联的提供商",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.array(ModelWithProvidersResponseSchema)
            }
          }
        }
      }
    },
    handler: async (c) => {
      const group = c.req.param("group");
      if (!group) {
        throw new HTTPException(400, { message: "分组不能为空" });
      }
      return c.json(await getModelsByGroupWithProviders(group), 200);
    }
  }
);

/**
 * 创建新模型的路由处理器
 * @description 接收模型数据并在系统中创建新的模型
 */
const createModelRouter = registerApiRoute(modelRoutes.createModel.path, {
  method: "POST",
  openapi: {
    summary: "创建新模型",
    tags: ["Models"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: modelRoutes["createModel"]["requestSchema"]
        }
      }
    },
    responses: {
      201: {
        description: "接收模型数据并在系统中创建新的模型",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: ModelWithProvidersResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    try {
      const body = modelRoutes["createModel"]["requestSchema"].parse(await c.req.json());
      return c.json(await createModel(body), 201);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, { message: error.message });
      }

      throw new HTTPException(500, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: error?.message || "服务器内部错误"
      });
    }
  }
});

/**
 * 批量创建模型的路由处理器
 * @description 接收模型数据数组并批量创建模型
 */
const createManyModelsRouter = registerApiRoute(
  modelRoutes.createManyModels.path,
  {
    method: "POST",
    openapi: {
      summary: "批量创建模型",
      tags: ["Models"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: modelRoutes["createManyModels"]["requestSchema"]
          }
        }
      },
      responses: {
        201: {
          description: "接收模型数据数组并批量创建模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: CreateManyModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      try {
        const body = modelRoutes["createManyModels"]["requestSchema"].parse(await c.req.json());
        return c.json(await createManyModels(body), 201);
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new HTTPException(400, { message: error.message });
        }

        throw new HTTPException(500, {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          message: error?.message || "服务器内部错误"
        });
      }
    }
  }
);

/**
 * 更新模型的路由处理器
 * @description 接收模型ID和更新数据，修改指定模型的信息
 */
const updateModelRouter = registerApiRoute(modelRoutes.updateModel.path, {
  method: "PUT",
  openapi: {
    summary: "更新模型信息",
    tags: ["Models"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: modelRoutes["updateModel"]["requestSchema"]
        }
      }
    },
    responses: {
      200: {
        description: "接收模型ID和更新数据，修改指定模型的信息",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: ModelWithProvidersResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "模型ID不能为空" });
    }
    try {
      const body = modelRoutes["updateModel"]["requestSchema"].parse(await c.req.json());
      return c.json(await updateModel(id, body), 200);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, { message: error.message });
      }

      throw new HTTPException(500, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: error?.message || "服务器内部错误"
      });
    }
  }
});

/**
 * 删除模型的路由处理器
 * @description 根据模型ID删除指定的模型
 */
const deleteModelRouter = registerApiRoute(modelRoutes.deleteModel.path, {
  method: "DELETE",
  openapi: {
    summary: "删除模型",
    tags: ["Models"],
    responses: {
      200: {
        description: "根据模型ID删除指定的模型",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: ModelResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "模型ID不能为空" });
    }
    return c.json(await deleteModel(id), 200);
  }
});

/**
 * 添加模型与提供商关联的路由处理器
 * @description 为指定模型添加与提供商的关联关系
 */
const addModelProviderRelationRouter = registerApiRoute(
  modelRoutes.addModelProviderRelation.path,
  {
    method: "POST",
    openapi: {
      summary: "添加模型与提供商关联",
      tags: ["Models"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: modelRoutes["addModelProviderRelation"]["requestSchema"]
          }
        }
      },
      responses: {
        201: {
          description: "为指定模型添加与提供商的关联关系",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ModelProviderRelationResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const body = await c.req.json();
      return c.json(await addModelProviderRelation(body), 201);
    }
  }
);

/**
 * 移除模型与提供商关联的路由处理器
 * @description 移除指定模型与提供商的关联关系
 */
const removeModelProviderRelationRouter = registerApiRoute(
  modelRoutes.removeModelProviderRelation.path,
  {
    method: "DELETE",
    openapi: {
      summary: "移除模型与提供商关联",
      tags: ["Models"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: modelRoutes["removeModelProviderRelation"]["requestSchema"]
          }
        }
      },
      responses: {
        200: {
          description: "移除指定模型与提供商的关联关系",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ModelProviderRelationResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const body = await c.req.json();
      return c.json(await removeModelProviderRelation(body), 200);
    }
  }
);

/**
 * 获取模型与提供商关联列表的路由处理器
 * @description 获取指定模型的所有提供商关联关系
 */
const getModelProviderRelationsRouter = registerApiRoute(
  modelRoutes.getModelProviderRelations.path,
  {
    method: "GET",
    openapi: {
      summary: "获取模型与提供商关联列表",
      tags: ["Models"],
      responses: {
        200: {
          description: "获取指定模型的所有提供商关联关系",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.array(ModelProviderRelationResponseSchema)
            }
          }
        }
      }
    },
    handler: async (c) => {
      const id = c.req.param("id");
      if (!id) {
        throw new HTTPException(400, { message: "模型ID不能为空" });
      }
      return c.json(await getModelProviderRelations(id), 200);
    }
  }
);

// 导出所有路由
export const modelsRouter = [
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
