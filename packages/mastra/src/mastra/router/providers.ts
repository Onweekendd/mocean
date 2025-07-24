import { registerApiRoute } from "@mastra/core/server";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  createProvider,
  createProviderSchema,
  deleteProvider,
  getEnabledProviders,
  getProviderById,
  getProviders,
  getProvidersByModel,
  getProvidersByType,
  idParamSchema,
  toggleProviderEnabled,
  typeParamSchema,
  updateProvider,
  updateProviderSchema,
} from "../prisma/provider";

/**
 * 获取所有提供商的路由处理器
 * @description 返回系统中所有可用的提供商列表
 */
const getProvidersRouter = registerApiRoute(`${PREFIX}/providers`, {
  method: "GET",
  handler: async () => {
    try {
      const providers = await getProviders();
      return new Response(JSON.stringify(providers), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error, message: "获取提供商列表失败" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
});

/**
 * 获取启用的提供商的路由处理器
 * @description 返回系统中所有启用状态的提供商列表
 */
const getEnabledProvidersRouter = registerApiRoute(
  `${PREFIX}/providers/enabled`,
  {
    method: "GET",
    handler: async () => {
      try {
        const providers = await getEnabledProviders();
        return new Response(JSON.stringify(providers), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error, message: "获取启用提供商列表失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    },
  },
);

/**
 * 根据ID获取单个提供商的路由处理器
 * @description 通过提供商ID获取特定提供商的详细信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const getProviderByIdRouter = registerApiRoute(`${PREFIX}/providers/:id`, {
  method: "GET",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const provider = await getProviderById(id);

      if (!provider) {
        return new Response(JSON.stringify({ error: "提供商不存在" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify(provider), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.errors,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(
        JSON.stringify({ error, message: "获取提供商失败" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
});

/**
 * 根据类型获取提供商的路由处理器
 * @description 通过提供商类型获取对应的提供商列表
 * @param c - Mastra上下文对象，包含请求信息
 */
const getProvidersByTypeRouter = registerApiRoute(
  `${PREFIX}/providers/type/:type`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        // 参数校验
        const { type } = typeParamSchema.parse({
          type: c.req.param("type"),
        });

        const providers = await getProvidersByType(type);
        return new Response(JSON.stringify(providers), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.errors,
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
        return new Response(
          JSON.stringify({ error, message: "获取提供商失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    },
  },
);

/**
 * 创建新提供商的路由处理器
 * @description 接收提供商数据并在系统中创建新的提供商
 * @param c - Mastra上下文对象，包含请求信息
 */
const createProviderRouter = registerApiRoute(`${PREFIX}/providers`, {
  method: "POST",
  handler: async (c) => {
    try {
      const rawData = await c.req.json();

      // 参数校验
      const providerData = createProviderSchema.parse(rawData);

      const newProvider = await createProvider(providerData);
      return new Response(JSON.stringify(newProvider), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.errors,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(JSON.stringify({ error: "创建提供商失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 更新提供商的路由处理器
 * @description 接收提供商ID和更新数据，修改指定提供商的信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const updateProviderRouter = registerApiRoute(`${PREFIX}/providers/:id`, {
  method: "PUT",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const rawData = await c.req.json();
      const providerData = updateProviderSchema.parse(rawData);

      const updatedProvider = await updateProvider(id, providerData);
      return new Response(JSON.stringify(updatedProvider), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.errors,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(JSON.stringify({ error: "更新提供商失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 删除提供商的路由处理器
 * @description 根据提供商ID删除指定的提供商
 * @param c - Mastra上下文对象，包含请求信息
 */
const deleteProviderRouter = registerApiRoute(`${PREFIX}/providers/:id`, {
  method: "DELETE",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const deletedProvider = await deleteProvider(id);
      return new Response(JSON.stringify(deletedProvider), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.errors,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      // 处理业务逻辑错误（如有关联模型无法删除）
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "DELETE_CONSTRAINT_ERROR",
          }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      return new Response(JSON.stringify({ error: "删除提供商失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 切换提供商启用状态的路由处理器
 * @description 切换提供商的启用/禁用状态
 * @param c - Mastra上下文对象，包含请求信息
 */
const toggleProviderEnabledRouter = registerApiRoute(
  `${PREFIX}/providers/:id/toggle`,
  {
    method: "PUT",
    handler: async (c) => {
      try {
        console.log("toggleProviderEnabledRouter");
        // 参数校验
        const { id } = idParamSchema.parse({
          id: c.req.param("id"),
        });

        const updatedProvider = await toggleProviderEnabled(id);
        return new Response(JSON.stringify(updatedProvider), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(
            JSON.stringify({
              error: "参数校验失败",
              details: error.errors,
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        // 处理业务逻辑错误
        if (error instanceof Error) {
          return new Response(
            JSON.stringify({
              error: error.message,
              code: "TOGGLE_PROVIDER_ERROR",
            }),
            {
              status: 404,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        return new Response(JSON.stringify({ error: "切换提供商状态失败" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    },
  },
);

/**
 * 根据模型ID获取提供商列表的路由处理器
 * @description 获取与指定模型关联的所有提供商
 */
const getProvidersByModelRouter = registerApiRoute(
  `${PREFIX}/providers/by-model/:modelId`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        // 参数校验
        const modelId = c.req.param("modelId");
        if (!modelId) {
          return new Response(JSON.stringify({ error: "模型ID不能为空" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const providers = await getProvidersByModel(modelId);
        return new Response(JSON.stringify(providers), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error, message: "获取关联提供商列表失败" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    },
  },
);

// 导出所有路由
const providersRouter = [
  getProvidersRouter,
  getEnabledProvidersRouter,
  getProviderByIdRouter,
  getProvidersByTypeRouter,
  getProvidersByModelRouter,
  createProviderRouter,
  updateProviderRouter,
  deleteProviderRouter,
  toggleProviderEnabledRouter,
];

export { providersRouter };
