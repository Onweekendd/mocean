import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  AgentGroupResponseSchema,
  AgentGroupsResponseSchema,
  AgentResponseSchema,
  AgentWithSettingsResponseSchema,
  AgentsResponseSchema,
  groupParamSchema,
  idParamSchema
} from "../schema/agent";
import {
  addAgentToGroup,
  createAgent,
  createAgentGroup,
  deleteAgent,
  deleteAgentGroup,
  getAgentByGroup,
  getAgentById,
  getAgentGroups,
  getAgents,
  removeAgentFromGroup,
  updateAgent,
  updateAgentGroup
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
              schema: AgentsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const params = groupParamSchema.parse({
        group: c.req.param("group")
      });
      const agents = await getAgentByGroup(params.group);
      return c.json(agents, 200);
    }
  }
);

/**
 * 创建新智能体分组的路由处理器
 */
const createAgentGroupRouter = registerApiRoute(
  agentRoutes.createAgentGroup.path,
  {
    method: "POST",
    openapi: {
      summary: "创建智能体分组",
      tags: ["Agents"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: agentRoutes["createAgentGroup"]["requestSchema"]
          }
        }
      },
      responses: {
        201: {
          description: "创建成功，返回新分组信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AgentGroupResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      try {
        const body = agentRoutes["createAgentGroup"]["requestSchema"].parse(
          await c.req.json()
        );
        return c.json(await createAgentGroup(body), 201);
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new HTTPException(400, { message: error.message });
        }
        if (
          error instanceof Error &&
          "code" in error &&
          (error as Error & { code: string }).code === "P2002"
        ) {
          throw new HTTPException(409, { message: "分组名称已存在" });
        }
        throw new HTTPException(500, {
          message: error instanceof Error ? error.message : String(error)
        });
      }
    }
  }
);

/**
 * 更新智能体分组的路由处理器
 */
const updateAgentGroupRouter = registerApiRoute(
  agentRoutes.updateAgentGroup.path,
  {
    method: "PUT",
    openapi: {
      summary: "更新智能体分组",
      tags: ["Agents"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: agentRoutes["updateAgentGroup"]["requestSchema"]
          }
        }
      },
      responses: {
        200: {
          description: "更新成功，返回更新后的分组信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AgentGroupResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      try {
        const params = idParamSchema.parse({ id: c.req.param("id") });
        const body = agentRoutes["updateAgentGroup"]["requestSchema"].parse(
          await c.req.json()
        );
        return c.json(await updateAgentGroup(params.id, body), 200);
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new HTTPException(400, { message: error.message });
        }
        throw new HTTPException(500, {
          message: error instanceof Error ? error.message : String(error)
        });
      }
    }
  }
);

/**
 * 删除智能体分组的路由处理器
 */
const deleteAgentGroupRouter = registerApiRoute(
  agentRoutes.deleteAgentGroup.path,
  {
    method: "DELETE",
    openapi: {
      summary: "删除智能体分组",
      tags: ["Agents"],
      responses: {
        200: {
          description: "删除成功，返回被删除的分组信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AgentGroupResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const params = idParamSchema.parse({ id: c.req.param("id") });
      try {
        return c.json(await deleteAgentGroup(params.id), 200);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message.includes("不存在")) {
            throw new HTTPException(404, { message: error.message });
          }
          throw new HTTPException(409, { message: error.message });
        }
        throw error;
      }
    }
  }
);

/**
 * 将智能体添加到分组的路由处理器
 */
const addAgentToGroupRouter = registerApiRoute(
  agentRoutes.addAgentToGroup.path,
  {
    method: "POST",
    openapi: {
      summary: "将智能体添加到分组",
      tags: ["Agents"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: agentRoutes["addAgentToGroup"]["requestSchema"]
          }
        }
      },
      responses: {
        200: {
          description: "添加成功，返回更新后的智能体信息",
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
        const body = agentRoutes["addAgentToGroup"]["requestSchema"].parse(
          await c.req.json()
        );
        return c.json(await addAgentToGroup(body.agentId, body.groupId), 200);
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new HTTPException(400, { message: error.message });
        }
        if (
          error instanceof Error &&
          "code" in error &&
          (error as Error & { code: string }).code === "P2002"
        ) {
          throw new HTTPException(409, { message: "该智能体已在此分组中" });
        }
        if (error instanceof Error) {
          throw new HTTPException(404, { message: error.message });
        }
        throw error;
      }
    }
  }
);

/**
 * 将智能体从分组中移除的路由处理器
 */
const removeAgentFromGroupRouter = registerApiRoute(
  agentRoutes.removeAgentFromGroup.path,
  {
    method: "DELETE",
    openapi: {
      summary: "将智能体从分组中移除",
      tags: ["Agents"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: agentRoutes["removeAgentFromGroup"]["requestSchema"]
          }
        }
      },
      responses: {
        200: {
          description: "移除成功，返回更新后的智能体信息",
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
        const body =
          agentRoutes["removeAgentFromGroup"]["requestSchema"].parse(
          await c.req.json()
        );
        return c.json(
          await removeAgentFromGroup(body.agentId, body.groupId),
          200
        );
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new HTTPException(400, { message: error.message });
        }
        if (error instanceof Error) {
          throw new HTTPException(404, { message: error.message });
        }
        throw error;
      }
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
  createAgentGroupRouter,
  getAgentByIdRouter,
  createAgentRouter,
  updateAgentRouter,
  deleteAgentRouter,
  getAgentByGroupRouter,
  updateAgentGroupRouter,
  deleteAgentGroupRouter,
  addAgentToGroupRouter,
  removeAgentFromGroupRouter
];
