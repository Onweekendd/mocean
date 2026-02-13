import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";

import {
  AgentResponseSchema,
  AgentWithSettingsResponseSchema,
  AgentsResponseSchema,
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
const getAgentsRouter = registerApiRoute(agentRoutes.getAgents.path, {
  method: "GET",
  openapi: {
    summary: "获取所有智能体",
    tags: ["Agents"],
    responses: {
      200: {
        description: "返回系统中所有可用的智能体列表",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    return c.json(await getAgents(), 200);
  }
});

/**
 * 根据ID获取单个智能体的路由处理器
 * @description 通过智能体ID获取特定智能体的详细信息
 */
const getAgentByIdRouter = registerApiRoute(agentRoutes.getAgentById.path, {
  method: "GET",
  openapi: {
    summary: "根据ID获取单个智能体",
    tags: ["Agents"],
    responses: {
      200: {
        description: "通过智能体ID获取特定智能体的详细信息",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentWithSettingsResponseSchema.nullable()
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "智能体ID不能为空" });
    }
    const agent = await getAgentById(id);
    if (!agent) {
      throw new HTTPException(404, { message: "智能体不存在" });
    }
    return c.json(agent, 200);
  }
});

/**
 * 创建新智能体的路由处理器
 * @description 接收智能体数据并在系统中创建新的智能体
 */
const createAgentRouter = registerApiRoute(agentRoutes.createAgent.path, {
  method: "POST",
  openapi: {
    summary: "创建新智能体",
    tags: ["Agents"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: createAgentSchema
        }
      }
    },
    responses: {
      201: {
        description: "接收智能体数据并在系统中创建新的智能体",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentWithSettingsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const body = await c.req.json();
    return c.json(await createAgent(body), 201);
  }
});

/**
 * 更新智能体的路由处理器
 * @description 接收智能体ID和更新数据，修改指定智能体的信息
 */
const updateAgentRouter = registerApiRoute(agentRoutes.updateAgent.path, {
  method: "PUT",
  openapi: {
    summary: "更新智能体信息",
    tags: ["Agents"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: updateAgentSchema
        }
      }
    },
    responses: {
      200: {
        description: "接收智能体ID和更新数据，修改指定智能体的信息",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentWithSettingsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "智能体ID不能为空" });
    }
    const body = await c.req.json();
    return c.json(await updateAgent(id, body), 200);
  }
});

/**
 * 删除智能体的路由处理器
 * @description 根据智能体ID删除指定的智能体
 */
const deleteAgentRouter = registerApiRoute(agentRoutes.deleteAgent.path, {
  method: "DELETE",
  openapi: {
    summary: "删除智能体",
    tags: ["Agents"],
    responses: {
      200: {
        description: "根据智能体ID删除指定的智能体",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    const id = c.req.param("id");
    if (!id) {
      throw new HTTPException(400, { message: "智能体ID不能为空" });
    }
    return c.json(await deleteAgent(id), 200);
  }
});

/**
 * 根据分组获取智能体的路由处理器
 * @description 通过分组获取特定分组的所有智能体
 */
const getAgentByGroupRouter = registerApiRoute(agentRoutes.getAgentByGroup.path, {
  method: "GET",
  openapi: {
    summary: "根据分组获取智能体",
    tags: ["Agents"],
    responses: {
      200: {
        description: "通过分组获取特定分组的所有智能体",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentsResponseSchema.nullable()
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
    const agents = await getAgentByGroup(group);
    if (!agents) {
      throw new HTTPException(404, { message: "分组不存在" });
    }
    return c.json(agents, 200);
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
