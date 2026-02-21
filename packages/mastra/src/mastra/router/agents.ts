import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  AgentGroupsResponseSchema,
  AgentResponseSchema,
  AgentWithSettingsResponseSchema,
  AgentsResponseSchema,
  groupParamSchema,
  idParamSchema
} from "../schema/agent";
import {
  createAgent,
  deleteAgent,
  getAgentByGroup,
  getAgentById,
  getAgentGroups,
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
 * 获取所有智能体分组的路由处理器
 * @description 返回系统中所有不重复的智能体分组名称列表
 */
const getAgentGroupsRouter = registerApiRoute(agentRoutes.getAgentGroups.path, {
  method: "GET",
  openapi: {
    summary: "获取所有智能体分组",
    tags: ["Agents"],
    responses: {
      200: {
        description: "返回所有不重复的智能体分组名称列表",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: AgentGroupsResponseSchema
          }
        }
      }
    }
  },
  handler: async (c) => {
    return c.json(await getAgentGroups(), 200);
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
    const params = idParamSchema.parse({ id: c.req.param("id") });
    const agent = await getAgentById(params.id);
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
          schema: agentRoutes["createAgent"]["requestSchema"]
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
    try {
      const body = agentRoutes["createAgent"]["requestSchema"].parse(await c.req.json());
      return c.json(await createAgent(body), 201);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, { message: error.message });
      } else {
        throw new HTTPException(500, {
          message: error instanceof Error ? error.message : String(error)
        });
      }
    }
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
          schema: agentRoutes["updateAgent"]["requestSchema"]
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
    try {
      const params = idParamSchema.parse({ id: c.req.param("id") });
      const body = agentRoutes["updateAgent"]["requestSchema"].parse(await c.req.json());
      return c.json(await updateAgent(params.id, body), 200);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, { message: error.message });
      } else {
        throw new HTTPException(500, {
          message: error instanceof Error ? error.message : String(error)
        });
      }
    }
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
    const params = idParamSchema.parse({ id: c.req.param("id") });
    return c.json(await deleteAgent(params.id), 200);
  }
});

/**
 * 根据分组获取智能体的路由处理器
 * @description 通过分组获取特定分组的所有智能体
 */
const getAgentByGroupRouter = registerApiRoute(
  agentRoutes.getAgentByGroup.path,
  {
    method: "GET",
    openapi: {
      summary: "根据分组获取智能体",
      tags: ["Agents"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: groupParamSchema
          }
        }
      },
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
      const params = groupParamSchema.parse({
        groupId: c.req.param("groupId")
      });
      const agents = await getAgentByGroup(params.groupId);
      if (!agents) {
        throw new HTTPException(404, { message: "分组不存在" });
      }
      return c.json(agents, 200);
    }
  }
);

/**
 * 智能体相关路由的导出数组
 * @description 包含所有智能体相关API路由的数组，用于在应用程序中注册这些路由
 */
export const agentsRouter = [
  getAgentsRouter,
  getAgentGroupsRouter,
  getAgentByIdRouter,
  createAgentRouter,
  updateAgentRouter,
  deleteAgentRouter,
  getAgentByGroupRouter
];
