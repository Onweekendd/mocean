import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";

import {
  GroupResponseSchema,
  GroupWithModelsResponseSchema,
  GroupsResponseSchema,
  createGroupSchema,
  idParamSchema,
  providerParamSchema,
  updateGroupSchema
} from "../schema/group";
import {
  createGroup,
  deleteGroup,
  getGroupById,
  getGroupsByProvider,
  updateGroup
} from "../server/group";
import { groupRoutes } from "./type";

/**
 * 获取指定提供商的所有分组的路由处理器
 * @description 通过提供商ID获取对应的分组列表，包含模型数量统计
 */
const getGroupsByProviderRouter = registerApiRoute(
  groupRoutes.getGroupsByProvider.path,
  {
    method: "GET",
    openapi: {
      summary: "获取指定提供商的所有分组",
      tags: ["Groups"],
      responses: {
        200: {
          description: "通过提供商ID获取对应的分组列表，包含模型数量统计",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: GroupsResponseSchema
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
      return c.json(await getGroupsByProvider(providerId), 200);
    }
  }
);

/**
 * 根据ID获取单个分组的路由处理器
 * @description 通过分组ID获取分组详细信息，包含关联的模型
 */
const getGroupByIdRouter = registerApiRoute(groupRoutes.getGroupById.path, {
  method: "GET",
  openapi: {
    summary: "根据ID获取单个分组",
    tags: ["Groups"],
    responses: {
      200: {
        description: "通过分组ID获取分组详细信息，包含关联的模型",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: GroupWithModelsResponseSchema.nullable()
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "分组ID不能为空" });
    }
    const group = await getGroupById(id);
    if (!group) {
      throw new HTTPException(404, { message: "分组不存在" });
    }
    return c.json(group, 200);
  }
});

/**
 * 创建新分组的路由处理器
 * @description 接收分组数据并在系统中创建新的分组
 */
const createGroupRouter = registerApiRoute(groupRoutes.createGroup.path, {
  method: "POST",
  openapi: {
    summary: "创建新分组",
    tags: ["Groups"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: createGroupSchema
        }
      }
    },
    responses: {
      201: {
        description: "接收分组数据并在系统中创建新的分组",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: GroupWithModelsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const body = await c.req.json();
    return c.json(await createGroup(body), 201);
  }
});

/**
 * 更新分组的路由处理器
 * @description 接收分组ID和更新数据，修改指定分组的信息
 */
const updateGroupRouter = registerApiRoute(groupRoutes.updateGroup.path, {
  method: "PUT",
  openapi: {
    summary: "更新分组信息",
    tags: ["Groups"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: updateGroupSchema
        }
      }
    },
    responses: {
      200: {
        description: "接收分组ID和更新数据，修改指定分组的信息",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: GroupWithModelsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "分组ID不能为空" });
    }
    const body = await c.req.json();
    return c.json(await updateGroup(id, body), 200);
  }
});

/**
 * 删除分组的路由处理器
 * @description 根据分组ID删除指定的分组，模型将被移至默认分组
 */
const deleteGroupRouter = registerApiRoute(groupRoutes.deleteGroup.path, {
  method: "DELETE",
  openapi: {
    summary: "删除分组",
    tags: ["Groups"],
    responses: {
      200: {
        description: "根据分组ID删除指定的分组，模型将被移至默认分组",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: GroupResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "分组ID不能为空" });
    }
    return c.json(await deleteGroup(id), 200);
  }
});

// 导出所有路由
export const groupsRouter = [
  getGroupsByProviderRouter,
  getGroupByIdRouter,
  createGroupRouter,
  updateGroupRouter,
  deleteGroupRouter
];
