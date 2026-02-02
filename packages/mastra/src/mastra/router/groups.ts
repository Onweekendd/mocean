import { registerApiRoute } from "@mastra/core/server";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  createGroup,
  createGroupSchema,
  deleteGroup,
  getGroupById,
  getGroupsByProvider,
  idParamSchema,
  providerParamSchema,
  updateGroup,
  updateGroupSchema
} from "../server/group";

/**
 * 获取指定提供商的所有分组的路由处理器
 * @description 通过提供商ID获取对应的分组列表，包含模型数量统计
 * @param c - Mastra上下文对象，包含请求信息
 */
const getGroupsByProviderRouter = registerApiRoute(
  `${PREFIX}/groups/provider/:providerId`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        // 参数校验
        const { providerId } = providerParamSchema.parse({
          providerId: c.req.param("providerId")
        });

        const groups = await getGroupsByProvider(providerId);
        return new Response(JSON.stringify(groups), {
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
          JSON.stringify({ error, message: "获取分组列表失败" }),
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
 * 根据ID获取单个分组的路由处理器
 * @description 通过分组ID获取分组详细信息，包含关联的模型
 * @param c - Mastra上下文对象，包含请求信息
 */
const getGroupByIdRouter = registerApiRoute(`${PREFIX}/groups/:id`, {
  method: "GET",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id")
      });

      const group = await getGroupById(id);

      if (!group) {
        return new Response(JSON.stringify({ error: "分组不存在" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response(JSON.stringify(group), {
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
      return new Response(JSON.stringify({ error, message: "获取分组失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 创建新分组的路由处理器
 * @description 接收分组数据并在系统中创建新的分组
 * @param c - Mastra上下文对象，包含请求信息
 */
const createGroupRouter = registerApiRoute(`${PREFIX}/groups`, {
  method: "POST",
  handler: async (c) => {
    try {
      // 参数校验
      const groupData = createGroupSchema.parse(await c.req.json());

      const newGroup = await createGroup(groupData);
      return new Response(JSON.stringify(newGroup), {
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

      // 处理业务逻辑错误（如分组名称已存在）
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "CREATE_GROUP_ERROR"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "创建分组失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 更新分组的路由处理器
 * @description 接收分组ID和更新数据，修改指定分组的信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const updateGroupRouter = registerApiRoute(`${PREFIX}/groups/:id`, {
  method: "PUT",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id")
      });

      const groupData = updateGroupSchema.parse(await c.req.json());

      const updatedGroup = await updateGroup(id, groupData);
      return new Response(JSON.stringify(updatedGroup), {
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

      // 处理业务逻辑错误（如默认分组不能修改、名称已存在）
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "UPDATE_GROUP_ERROR"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "更新分组失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

/**
 * 删除分组的路由处理器
 * @description 根据分组ID删除指定的分组，模型将被移至默认分组
 * @param c - Mastra上下文对象，包含请求信息
 */
const deleteGroupRouter = registerApiRoute(`${PREFIX}/groups/:id`, {
  method: "DELETE",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id")
      });

      const deletedGroup = await deleteGroup(id);
      return new Response(JSON.stringify(deletedGroup), {
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

      // 处理业务逻辑错误（如默认分组不能删除）
      if (error instanceof Error) {
        return new Response(
          JSON.stringify({
            error: error.message,
            code: "DELETE_GROUP_ERROR"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(JSON.stringify({ error: "删除分组失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
});

// 导出所有路由
const groupsRouter = [
  getGroupsByProviderRouter,
  getGroupByIdRouter,
  createGroupRouter,
  updateGroupRouter,
  deleteGroupRouter
];

export { groupsRouter };
