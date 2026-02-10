import { createRoute } from "@mastra/server/server-adapter";
import { HTTPException } from "hono/http-exception";

import { PREFIX } from "../api/base-client";
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
const getGroupsByProviderRouter = createRoute({
  method: "GET",
  path: groupRoutes.getGroupsByProvider.path,
  responseType: "json",
  responseSchema: groupRoutes.getGroupsByProvider.responseSchema,
  pathParamSchema: providerParamSchema,
  summary: "获取指定提供商的所有分组",
  description: "通过提供商ID获取对应的分组列表，包含模型数量统计",
  tags: ["Groups"],
  handler: async ({ providerId }) => {
    return await getGroupsByProvider(providerId);
  }
});

/**
 * 根据ID获取单个分组的路由处理器
 * @description 通过分组ID获取分组详细信息，包含关联的模型
 */
const getGroupByIdRouter = createRoute({
  method: "GET",
  path: groupRoutes.getGroupById.path,
  responseType: "json",
  responseSchema: groupRoutes.getGroupById.responseSchema,
  pathParamSchema: idParamSchema,
  summary: "根据ID获取单个分组",
  description: "通过分组ID获取分组详细信息，包含关联的模型",
  tags: ["Groups"],
  handler: async ({ id }) => {
    const group = await getGroupById(id);

    if (!group) {
      throw new HTTPException(404, { message: "分组不存在" });
    }

    return group;
  }
});

/**
 * 创建新分组的路由处理器
 * @description 接收分组数据并在系统中创建新的分组
 */
const createGroupRouter = createRoute({
  method: "POST",
  path: groupRoutes.createGroup.path,
  responseType: "json",
  bodySchema: createGroupSchema,
  responseSchema: groupRoutes.createGroup.responseSchema,
  summary: "创建新分组",
  description: "接收分组数据并在系统中创建新的分组",
  tags: ["Groups"],
  handler: async (data) => {
    return await createGroup(data);
  }
});

/**
 * 更新分组的路由处理器
 * @description 接收分组ID和更新数据，修改指定分组的信息
 */
const updateGroupRouter = createRoute({
  method: "PUT",
  path: groupRoutes.updateGroup.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  bodySchema: updateGroupSchema,
  responseSchema: groupRoutes.updateGroup.responseSchema,
  summary: "更新分组信息",
  description: "接收分组ID和更新数据，修改指定分组的信息",
  tags: ["Groups"],
  handler: async ({ id }, data) => {
    return await updateGroup(id, data);
  }
});

/**
 * 删除分组的路由处理器
 * @description 根据分组ID删除指定的分组，模型将被移至默认分组
 */
const deleteGroupRouter = createRoute({
  method: "DELETE",
  path: groupRoutes.deleteGroup.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: groupRoutes.deleteGroup.responseSchema,
  summary: "删除分组",
  description: "根据分组ID删除指定的分组，模型将被移至默认分组",
  tags: ["Groups"],
  handler: async ({ id }) => {
    return await deleteGroup(id);
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
