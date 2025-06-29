import { RuntimeContext } from "@mastra/core/di";
import { registerApiRoute } from "@mastra/core/server";
import { z } from "zod";

import { DynamicAgent } from "../agents/dynamicAgent";
import { PREFIX } from "../api/base-client";
import config from "../config";
import {
  chatWithAssistantSchema,
  createAssistant,
  createAssistantSchema,
  deleteAssistant,
  getAssistantById,
  getAssistantWithModelByAssistantId,
  getAssistants,
  idParamSchema,
  updateAssistant,
  updateAssistantSchema,
} from "../prisma/assistant";
import { createCommonRunTime } from "../runtime/CommonRunTime";

/**
 * 获取所有助手的路由处理器
 * @description 返回系统中所有可用的助手列表
 */
const getAssistantsRouter = registerApiRoute(`${PREFIX}/assistants`, {
  method: "GET",
  handler: async () => {
    try {
      const assistants = await getAssistants();
      return new Response(JSON.stringify(assistants), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error, message: "获取助手列表失败" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  },
});

/**
 * 根据ID获取单个助手的路由处理器
 * @description 通过助手ID获取特定助手的详细信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const getAssistantByIdRouter = registerApiRoute(`${PREFIX}/assistants/:id`, {
  method: "GET",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const assistant = await getAssistantById(id);

      if (!assistant) {
        return new Response(JSON.stringify({ error: "助手不存在" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify(assistant), {
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
      return new Response(JSON.stringify({ error, message: "获取助手失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 创建新助手的路由处理器
 * @description 接收助手数据并在系统中创建新的助手
 * @param c - Mastra上下文对象，包含请求信息
 */
const createAssistantRouter = registerApiRoute(`${PREFIX}/assistants`, {
  method: "POST",
  handler: async (c) => {
    try {
      const rawData = await c.req.json();

      // 参数校验
      const assistantData = createAssistantSchema.parse(rawData);

      const newAssistant = await createAssistant(assistantData);
      return new Response(JSON.stringify(newAssistant), {
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
      return new Response(JSON.stringify({ error: "创建助手失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 更新助手的路由处理器
 * @description 接收助手ID和更新数据，修改指定助手的信息
 * @param c - Mastra上下文对象，包含请求信息
 */
const updateAssistantRouter = registerApiRoute(`${PREFIX}/assistants/:id`, {
  method: "PUT",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const rawData = await c.req.json();
      const assistantData = updateAssistantSchema.parse(rawData);

      const updatedAssistant = await updateAssistant(id, assistantData);
      return new Response(JSON.stringify(updatedAssistant), {
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
      return new Response(JSON.stringify({ error: "更新助手失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 删除助手的路由处理器
 * @description 根据助手ID删除指定的助手
 * @param c - Mastra上下文对象，包含请求信息
 */
const deleteAssistantRouter = registerApiRoute(`${PREFIX}/assistants/:id`, {
  method: "DELETE",
  handler: async (c) => {
    try {
      // 参数校验
      const { id } = idParamSchema.parse({
        id: c.req.param("id"),
      });

      const deletedAssistant = await deleteAssistant(id);
      return new Response(JSON.stringify(deletedAssistant), {
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
      return new Response(JSON.stringify({ error: "删除助手失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 与助手聊天的路由处理器
 * @description 与指定助手进行对话
 * @param c - Mastra上下文对象，包含请求信息
 */
const chatWithAssistant = registerApiRoute(`${PREFIX}/assistants/chat`, {
  method: "POST",
  handler: async (c) => {
    try {
      const rawData = await c.req.json();

      // 参数校验
      const { assistantId, messages, threadId } =
        chatWithAssistantSchema.parse(rawData);

      const assistant = await getAssistantWithModelByAssistantId(assistantId);

      if (!assistant) {
        return new Response(JSON.stringify({ error: "助手不存在" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      const stream = await DynamicAgent.stream(messages, {
        threadId,
        resourceId: config.resourceId,
        runtimeContext: createCommonRunTime({
          name: assistant.name,
          instructions: assistant.prompt,
          model: assistant.model.name,
        }) as RuntimeContext,
      });

      return stream.toTextStreamResponse();
    } catch (error) {
      console.error(error);
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
      return new Response(JSON.stringify({ message: "聊天请求失败", error }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});

/**
 * 助手相关路由的导出数组
 * @description 包含所有助手相关API路由的数组，用于在应用程序中注册这些路由
 */
export const assistantsRouter = [
  getAssistantsRouter,
  getAssistantByIdRouter,
  createAssistantRouter,
  updateAssistantRouter,
  deleteAssistantRouter,
  chatWithAssistant,
];
