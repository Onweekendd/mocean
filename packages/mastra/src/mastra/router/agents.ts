import { registerApiRoute } from "@mastra/core/server";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
import {
  createAgent,
  createAgentSchema,
  deleteAgent,
  getAgentByGroup,
  getAgentById,
  getAgents,
  groupParamSchema,
  idParamSchema,
  updateAgent,
  updateAgentSchema,
} from "../server/agent";

/**
 * 获取所有智能体的路由处理器
 * @description 返回系统中所有可用的智能体列表
 */
const getAgentsRouter = registerApiRoute(`${PREFIX}/agents`, {
  method: "GET",
  handler: async () => {
    try {
      const agents = await getAgents();
      return new Response(JSON.stringify(agents), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error, message: "获取智能体列表失败" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
});

/**
 * 根据ID获取单个智能体的路由处理器
 * @description 通过智能体ID获取特定智能体的详细信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const getAgentByIdRouter = registerApiRoute(`${PREFIX}/agents/:id`, {
  method: "GET",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const agent = await getAgentById(id);

      if (!agent) {
        return new Response(JSON.stringify({ error: "智能体不存在" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify(agent), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(
        JSON.stringify({ error, message: "获取智能体失败" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
});

/**
 * 创建新智能体的路由处理器
 * @description 接收智能体数据并在系统中创建新的智能体
 * @param c - Mastra上下文对象，包含请求信息
 */
const createAgentRouter = registerApiRoute(`${PREFIX}/agents`, {
  method: "POST",
  handler: async (c) => {
    try {
      const rawData = await c.req.json();

      // 参数校验
      const agentData = createAgentSchema.parse(rawData);

      const newAgent = await createAgent(agentData);
      return new Response(JSON.stringify(newAgent), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(JSON.stringify({ error: "创建智能体失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 更新智能体的路由处理器
 * @description 接收智能体ID和更新数据，修改指定智能体的信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const updateAgentRouter = registerApiRoute(`${PREFIX}/agents/:id`, {
  method: "PUT",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const rawData = await c.req.json();
      const agentData = updateAgentSchema.parse(rawData);

      const updatedAgent = await updateAgent(id, agentData);
      return new Response(JSON.stringify(updatedAgent), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(JSON.stringify({ error: "更新智能体失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 删除智能体的路由处理器
 * @description 根据智能体ID删除指定的智能体
 * @param c - Mastra上下文对象，包含请求信息
 */
const deleteAgentRouter = registerApiRoute(`${PREFIX}/agents/:id`, {
  method: "DELETE",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const deletedAgent = await deleteAgent(id);
      return new Response(JSON.stringify(deletedAgent), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(
          JSON.stringify({
            error: "参数校验失败",
            details: error.issues,
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      return new Response(JSON.stringify({ error: "删除智能体失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

const getAgentByGroupRouter = registerApiRoute(
  `${PREFIX}/agents/group/:group`,
  {
    method: "GET",
    handler: async (c) => {
      try {
        const { group } = groupParamSchema.parse(c.req.param("group"));
        const agents = await getAgentByGroup(group);
        if (!agents) {
          return new Response(JSON.stringify({ error: "分组不存在" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        }
        return new Response(JSON.stringify(agents), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error, message: "获取智能体失败" }),
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
  getAgentByGroupRouter,
];
