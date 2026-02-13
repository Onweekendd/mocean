import { registerApiRoute } from "@mastra/core/server";
import type { ProviderType } from "generated/prisma/enums";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  ProviderResponseSchema,
  ProviderWithModelsResponseSchema,
  ProvidersResponseSchema,
  ProvidersWithModelsResponseSchema,
  createProviderSchema,
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
  toggleProviderEnabled,
  updateProvider
} from "../server/provider";
import { providerRoutes } from "./type";

/**
 * 获取所有提供商的路由处理器（基础版本）
 * @description 返回系统中所有可用的提供商列表，不包含关联模型
 */
const getProvidersRouter = registerApiRoute(providerRoutes.getProviders.path, {
  method: "GET",
  openapi: {
    summary: "获取所有提供商",
    tags: ["Providers"],
    responses: {
      200: {
        description: "返回系统中所有可用的提供商列表，不包含关联模型",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: ProvidersResponseSchema
          }
        }
      },
      404: {
        description: "未找到提供商"
      }
    }
  },
  handler: async (c) => {
    return c.json(await getProviders(), 200);
  }
});

/**
 * 获取所有提供商的路由处理器（包含模型列表）
 * @description 返回系统中所有可用的提供商列表，包含关联的模型信息
 */
const getProvidersWithModelsRouter = registerApiRoute(
  providerRoutes.getProvidersWithModels.path,
  {
    method: "GET",
    openapi: {
      summary: "获取所有提供商（包含模型列表）",
      tags: ["Providers"],
      responses: {
        200: {
          description: "返回系统中所有可用的提供商列表，包含关联的模型信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      return c.json(await getProvidersWithModels(), 200);
    }
  }
);

/**
 * 获取启用的提供商的路由处理器（基础版本）
 * @description 返回系统中所有启用状态的提供商列表，不包含关联模型
 */
const getEnabledProvidersRouter = registerApiRoute(
  providerRoutes.getEnabledProviders.path,
  {
    method: "GET",
    openapi: {
      summary: "获取启用的提供商",
      tags: ["Providers"],
      responses: {
        200: {
          description: "返回系统中所有启用状态的提供商列表，不包含关联模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      return c.json(await getEnabledProviders(), 200);
    }
  }
);

/**
 * 获取启用的提供商的路由处理器（包含模型列表）
 * @description 返回系统中所有启用状态的提供商列表，包含关联的模型
 */
const getEnabledProvidersWithModelsRouter = registerApiRoute(
  providerRoutes.getEnabledProvidersWithModels.path,
  {
    method: "GET",
    openapi: {
      summary: "获取启用的提供商（包含模型列表）",
      tags: ["Providers"],
      responses: {
        200: {
          description: "返回系统中所有启用状态的提供商列表，包含关联的模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      return c.json(await getEnabledProvidersWithModels(), 200);
    }
  }
);

/**
 * 根据ID获取单个提供商的路由处理器（基础版本）
 * @description 通过提供商ID获取特定提供商的详细信息，不包含关联模型
 */
const getProviderByIdRouter = registerApiRoute(
  providerRoutes.getProviderById.path,
  {
    method: "GET",
    openapi: {
      summary: "根据ID获取单个提供商",
      tags: ["Providers"],
      responses: {
        200: {
          description: "通过提供商ID获取特定提供商的详细信息，不包含关联模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProviderResponseSchema.nullable()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const id = c.req.param("id");
      if (!id) {
        throw new HTTPException(400, { message: "提供商ID不能为空" });
      }
      const provider = await getProviderById(id);
      if (!provider) {
        throw new HTTPException(404, { message: "提供商不存在" });
      }
      return c.json(provider, 200);
    }
  }
);

/**
 * 根据ID获取单个提供商的路由处理器（包含模型列表）
 * @description 通过提供商ID获取特定提供商的详细信息，包含关联的模型
 */
const getProviderWithModelsByIdRouter = registerApiRoute(
  providerRoutes.getProviderWithModelsById.path,
  {
    method: "GET",
    openapi: {
      summary: "根据ID获取单个提供商（包含模型列表）",
      tags: ["Providers"],
      responses: {
        200: {
          description: "通过提供商ID获取特定提供商的详细信息，包含关联的模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProviderWithModelsResponseSchema.nullable()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const id = c.req.param("id");
      if (!id) {
        throw new HTTPException(400, { message: "提供商ID不能为空" });
      }
      const provider = await getProviderWithModelsById(id);
      if (!provider) {
        throw new HTTPException(404, { message: "提供商不存在" });
      }
      return c.json(provider, 200);
    }
  }
);

/**
 * 根据类型获取提供商的路由处理器（基础版本）
 * @description 通过提供商类型获取对应的提供商列表，不包含关联模型
 */
const getProvidersByTypeRouter = registerApiRoute(
  providerRoutes.getProvidersByType.path,
  {
    method: "GET",
    openapi: {
      summary: "根据类型获取提供商",
      tags: ["Providers"],
      responses: {
        200: {
          description: "通过提供商类型获取对应的提供商列表，不包含关联模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const type = c.req.param("type");
      if (!type) {
        throw new HTTPException(400, { message: "提供商类型不能为空" });
      }
      return c.json(await getProvidersByType(type as ProviderType), 200);
    }
  }
);

/**
 * 根据类型获取提供商的路由处理器（包含模型列表）
 * @description 通过提供商类型获取对应的提供商列表，包含关联的模型
 */
const getProvidersByTypeWithModelsRouter = registerApiRoute(
  providerRoutes.getProvidersByTypeWithModels.path,
  {
    method: "GET",
    openapi: {
      summary: "根据类型获取提供商（包含模型列表）",
      tags: ["Providers"],
      responses: {
        200: {
          description: "通过提供商类型获取对应的提供商列表，包含关联的模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const type = c.req.param("type");
      if (!type) {
        throw new HTTPException(400, { message: "提供商类型不能为空" });
      }
      return c.json(
        await getProvidersByTypeWithModels(type as ProviderType),
        200
      );
    }
  }
);

/**
 * 创建新提供商的路由处理器
 * @description 接收提供商数据并在系统中创建新的提供商
 */
const createProviderRouter = registerApiRoute(
  providerRoutes.createProvider.path,
  {
    method: "POST",
    openapi: {
      summary: "创建新提供商",
      tags: ["Providers"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: createProviderSchema
          }
        }
      },
      responses: {
        201: {
          description: "创建成功，返回新创建的提供商信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProviderWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      try {
        const body = createProviderSchema.parse(await c.req.json());
        const newProvider = await createProvider(body);
        return c.json(newProvider, 201);
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new HTTPException(400, {
            message: error.message
          });
        }
      }
    }
  }
);

/**
 * 更新提供商的路由处理器
 * @description 接收提供商ID和更新数据，修改指定提供商的信息
 */
const updateProviderRouter = registerApiRoute(
  providerRoutes.updateProvider.path,
  {
    method: "PUT",
    openapi: {
      summary: "更新提供商信息",
      tags: ["Providers"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: updateProviderSchema
          }
        }
      },
      responses: {
        200: {
          description: "更新成功，返回更新后的提供商信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProviderWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const body = updateProviderSchema.parse(await c.req.json());
      const updatedProvider = await updateProvider(body);
      return c.json(updatedProvider, 200);
    }
  }
);

/**
 * 删除提供商的路由处理器
 * @description 根据提供商ID删除指定的提供商
 */
const deleteProviderRouter = registerApiRoute(
  providerRoutes.deleteProvider.path,
  {
    method: "DELETE",
    openapi: {
      summary: "删除提供商",
      tags: ["Providers"],
      responses: {
        200: {
          description: "删除成功，返回被删除的提供商信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProviderResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const id = c.req.param("id");
      if (!id) {
        throw new HTTPException(400, { message: "提供商ID不能为空" });
      }
      try {
        const deletedProvider = await deleteProvider(id);
        return c.json(deletedProvider, 200);
      } catch (error) {
        // 处理业务逻辑错误（如有关联模型无法删除）
        if (error instanceof Error) {
          throw new HTTPException(409, {
            message: error.message
          });
        }
        throw error;
      }
    }
  }
);

/**
 * 切换提供商启用状态的路由处理器
 * @description 切换提供商的启用/禁用状态
 */
const toggleProviderEnabledRouter = registerApiRoute(
  providerRoutes.toggleProviderEnabled.path,
  {
    method: "PUT",
    openapi: {
      summary: "切换提供商启用状态",
      tags: ["Providers"],
      responses: {
        200: {
          description: "切换成功，返回更新后的提供商信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProviderWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const id = c.req.param("id");
      if (!id) {
        throw new HTTPException(400, { message: "提供商ID不能为空" });
      }
      try {
        const updatedProvider = await toggleProviderEnabled(id);
        return c.json(updatedProvider, 200);
      } catch (error) {
        // 处理业务逻辑错误
        if (error instanceof Error) {
          throw new HTTPException(404, { message: error.message });
        }
        throw error;
      }
    }
  }
);

/**
 * 根据模型ID获取提供商列表的路由处理器（基础版本）
 * @description 获取与指定模型关联的所有提供商，不包含关联模型
 */
const getProvidersByModelRouter = registerApiRoute(
  providerRoutes.getProvidersByModel.path,
  {
    method: "GET",
    openapi: {
      summary: "根据模型ID获取提供商列表",
      tags: ["Providers"],
      responses: {
        200: {
          description: "获取与指定模型关联的所有提供商，不包含关联模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const modelId = c.req.param("modelId");
      if (!modelId) {
        throw new HTTPException(400, { message: "模型ID不能为空" });
      }
      return c.json(await getProvidersByModel(modelId), 200);
    }
  }
);

/**
 * 根据模型ID获取提供商列表的路由处理器（包含模型列表）
 * @description 获取与指定模型关联的所有提供商，包含关联的模型
 */
const getProvidersByModelWithModelsRouter = registerApiRoute(
  providerRoutes.getProvidersByModelWithModels.path,
  {
    method: "GET",
    openapi: {
      summary: "根据模型ID获取提供商列表（包含模型列表）",
      tags: ["Providers"],
      responses: {
        200: {
          description: "获取与指定模型关联的所有提供商，包含关联的模型",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: ProvidersWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const modelId = c.req.param("modelId");
      if (!modelId) {
        throw new HTTPException(400, { message: "模型ID不能为空" });
      }
      return c.json(await getProvidersByModelWithModels(modelId), 200);
    }
  }
);

// 导出所有路由
const providersRouter = [
  // 基础版本（不包含关联模型）
  getProvidersRouter,
  getEnabledProvidersRouter,
  getProviderByIdRouter,
  getProvidersByTypeRouter,
  getProvidersByModelRouter,
  // WithModels 版本（包含模型列表）
  getProvidersWithModelsRouter,
  getEnabledProvidersWithModelsRouter,
  getProviderWithModelsByIdRouter,
  getProvidersByTypeWithModelsRouter,
  getProvidersByModelWithModelsRouter,
  // 写操作
  createProviderRouter,
  updateProviderRouter,
  deleteProviderRouter,
  toggleProviderEnabledRouter
];

export { providersRouter };
