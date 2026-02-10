import { createRoute } from "@mastra/server/server-adapter";
import { HTTPException } from "hono/http-exception";

import {
  createAgentSchema,
  groupParamSchema,
  idParamSchema,
  updateAgentSchema
} from "../schema/agent";
import {
  createAgent,
  deleteAgent,
  getAgentByGroup,
  getAgentById,
  getAgents,
  updateAgent
} from "../server/agent";
import { agentRoutes } from "./type";

/**
 * 获取所有智能体的路由处理器
 * @description 返回系统中所有可用的智能体列表
 */
const getAgentsRouter = createRoute({
  method: "GET",
  path: agentRoutes.getAgents.path,
  responseType: "json",
  responseSchema: agentRoutes.getAgents.responseSchema,
  summary: "获取所有智能体",
  description: "返回系统中所有可用的智能体列表",
  tags: ["Agents"],
  handler: async () => {
    return await getAgents();
  }
});

/**
 * 根据ID获取单个智能体的路由处理器
 * @description 通过智能体ID获取特定智能体的详细信息
 */
const getAgentByIdRouter = createRoute({
  method: "GET",
  path: agentRoutes.getAgentById.path,
  responseType: "json",
  responseSchema: agentRoutes.getAgentById.responseSchema,
  pathParamSchema: idParamSchema,
  summary: "根据ID获取单个智能体",
  description: "通过智能体ID获取特定智能体的详细信息",
  tags: ["Agents"],
  handler: async ({ id }) => {
    const agent = await getAgentById(id);

    if (!agent) {
      throw new HTTPException(404, { message: "智能体不存在" });
    }

    return agent;
  }
});

/**
 * 创建新智能体的路由处理器
 * @description 接收智能体数据并在系统中创建新的智能体
 */
const createAgentRouter = createRoute({
  method: "POST",
  path: agentRoutes.createAgent.path,
  responseType: "json",
  bodySchema: createAgentSchema,
  responseSchema: agentRoutes.createAgent.responseSchema,
  summary: "创建新智能体",
  description: "接收智能体数据并在系统中创建新的智能体",
  tags: ["Agents"],
  handler: async (data) => {
    return await createAgent(data);
  }
});

/**
 * 更新智能体的路由处理器
 * @description 接收智能体ID和更新数据，修改指定智能体的信息
 */
const updateAgentRouter = createRoute({
  method: "PUT",
  path: agentRoutes.updateAgent.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  bodySchema: updateAgentSchema,
  responseSchema: agentRoutes.updateAgent.responseSchema,
  summary: "更新智能体信息",
  description: "接收智能体ID和更新数据，修改指定智能体的信息",
  tags: ["Agents"],
  handler: async ({ id }, data) => {
    return await updateAgent(id, data);
  }
});

/**
 * 删除智能体的路由处理器
 * @description 根据智能体ID删除指定的智能体
 */
const deleteAgentRouter = createRoute({
  method: "DELETE",
  path: agentRoutes.deleteAgent.path,
  responseType: "json",
  pathParamSchema: idParamSchema,
  responseSchema: agentRoutes.deleteAgent.responseSchema,
  summary: "删除智能体",
  description: "根据智能体ID删除指定的智能体",
  tags: ["Agents"],
  handler: async ({ id }) => {
    return await deleteAgent(id);
  }
});

/**
 * 根据分组获取智能体的路由处理器
 * @description 通过分组获取特定分组的所有智能体
 */
const getAgentByGroupRouter = createRoute({
  method: "GET",
  path: agentRoutes.getAgentByGroup.path,
  responseType: "json",
  responseSchema: agentRoutes.getAgentByGroup.responseSchema,
  pathParamSchema: groupParamSchema,
  summary: "根据分组获取智能体",
  description: "通过分组获取特定分组的所有智能体",
  tags: ["Agents"],
  handler: async ({ group }) => {
    const agents = await getAgentByGroup(group);

    if (!agents) {
      throw new HTTPException(404, { message: "分组不存在" });
    }

    return agents;
  }
});

/**
 * 智能体相关路由的导出数组
 * @description 包含所有智能体相关API路由的数组，用于在应用程序中注册这些路由
 */
export const agentsRouter = [
  getAgentsRouter,
  getAgentByIdRouter,
  createAgentRouter,
  updateAgentRouter,
  deleteAgentRouter,
  getAgentByGroupRouter
];
