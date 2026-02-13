import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  AssistantFullResponseSchema,
  AssistantResponseSchema,
  AssistantWithModelsResponseSchema,
  AssistantsResponseSchema,
  assistantIdParamSchema,
  assistantThreadIdParamSchema,
  chatWithAssistantSchema,
  createAssistantSchema,
  updateAssistantSchema
} from "../schema/assistant";
import {
  createAssistant,
  deleteAssistant,
  executeChatWithAssistant,
  getAssistantById,
  getAssistants,
  getThreadsByAssistantId,
  getUIMessagesByThreadId,
  updateAssistant
} from "../server/assistant";
import { assistantRoutes } from "./type";

/**
 * 获取所有助手的路由处理器
 * @description 返回系统中所有可用的助手列表
 */
const getAssistantsRouter = registerApiRoute(
  assistantRoutes.getAssistants.path,
  {
    method: "GET",
    openapi: {
      summary: "获取所有助手",
      tags: ["Assistants"],
      responses: {
        200: {
          description: "返回系统中所有可用的助手列表",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AssistantsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      return c.json(await getAssistants(), 200);
    }
  }
);

/**
 * 根据ID获取单个助手的路由处理器
 * @description 通过助手ID获取特定助手的详细信息
 */
const getAssistantByIdRouter = registerApiRoute(
  assistantRoutes.getAssistantById.path,
  {
    method: "GET",
    openapi: {
      summary: "根据ID获取单个助手",
      tags: ["Assistants"],
      responses: {
        200: {
          description: "通过助手ID获取特定助手的详细信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AssistantFullResponseSchema.nullable()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const assistantId = c.req.param("assistantId");
      if (!assistantId) {
        throw new HTTPException(400, { message: "助手ID不能为空" });
      }
      const assistant = await getAssistantById(assistantId);
      if (!assistant) {
        throw new HTTPException(404, { message: "助手不存在" });
      }
      return c.json(assistant, 200);
    }
  }
);

/**
 * 创建新助手的路由处理器
 * @description 接收助手数据并在系统中创建新的助手
 */
const createAssistantRouter = registerApiRoute(
  assistantRoutes.createAssistant.path,
  {
    method: "POST",
    openapi: {
      summary: "创建新助手",
      tags: ["Assistants"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: createAssistantSchema
          }
        }
      },
      responses: {
        201: {
          description: "接收助手数据并在系统中创建新的助手",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AssistantWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const body = await c.req.json();
      return c.json(await createAssistant(body), 201);
    }
  }
);

/**
 * 更新助手的路由处理器
 * @description 接收助手ID和更新数据，修改指定助手的信息
 */
const updateAssistantRouter = registerApiRoute(
  assistantRoutes.updateAssistant.path,
  {
    method: "PUT",
    openapi: {
      summary: "更新助手信息",
      tags: ["Assistants"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: updateAssistantSchema
          }
        }
      },
      responses: {
        200: {
          description: "接收助手ID和更新数据，修改指定助手的信息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AssistantWithModelsResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const assistantId = c.req.param("assistantId");
      if (!assistantId) {
        throw new HTTPException(400, { message: "助手ID不能为空" });
      }
      const body = await c.req.json();
      return c.json(await updateAssistant(assistantId, body), 200);
    }
  }
);

/**
 * 删除助手的路由处理器
 * @description 根据助手ID删除指定的助手
 */
const deleteAssistantRouter = registerApiRoute(
  assistantRoutes.deleteAssistant.path,
  {
    method: "DELETE",
    openapi: {
      summary: "删除助手",
      tags: ["Assistants"],
      responses: {
        200: {
          description: "根据助手ID删除指定的助手",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: AssistantResponseSchema
            }
          }
        }
      }
    },
    handler: async (c) => {
      const assistantId = c.req.param("assistantId");
      if (!assistantId) {
        throw new HTTPException(400, { message: "助手ID不能为空" });
      }
      return c.json(await deleteAssistant(assistantId), 200);
    }
  }
);

/**
 * 与助手聊天的路由处理器
 * @description 与指定助手进行对话
 */
const chatWithAssistantRouter = registerApiRoute(
  assistantRoutes.chatWithAssistant.path,
  {
    method: "POST",
    openapi: {
      summary: "与助手聊天",
      tags: ["Assistants"],
      requestBody: {
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
            schema: chatWithAssistantSchema
          }
        }
      },
      responses: {
        200: {
          description: "与指定助手进行对话",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.any()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const body = await c.req.json();
      return c.json(
        await executeChatWithAssistant(
          body.assistantId,
          body.messages,
          body.threadId
        ),
        200
      );
    }
  }
);

/**
 * 获取助手聊天记录的路由处理器
 * @description 获取指定助手的所有对话线程
 */
const getAssistantThreadsRouter = registerApiRoute(
  assistantRoutes.getAssistantThreads.path,
  {
    method: "GET",
    openapi: {
      summary: "获取助手聊天记录",
      tags: ["Assistants"],
      responses: {
        200: {
          description: "获取指定助手的所有对话线程",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.any()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const assistantId = c.req.param("assistantId");
      if (!assistantId) {
        throw new HTTPException(400, { message: "助手ID不能为空" });
      }
      return c.json(await getThreadsByAssistantId(assistantId), 200);
    }
  }
);

/**
 * 获取助手线程消息的路由处理器
 * @description 获取指定线程中的所有UI消息
 */
const getAssistantUIMessageByThreadIdRouter = registerApiRoute(
  assistantRoutes.getAssistantUIMessageByThreadId.path,
  {
    method: "GET",
    openapi: {
      summary: "获取助手线程消息",
      tags: ["Assistants"],
      responses: {
        200: {
          description: "获取指定线程中的所有UI消息",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: z.any()
            }
          }
        }
      }
    },
    handler: async (c) => {
      const assistantId = c.req.param("assistantId");
      const threadId = c.req.param("threadId");
      if (!assistantId || !threadId) {
        throw new HTTPException(400, { message: "助手ID和线程ID不能为空" });
      }
      return c.json(await getUIMessagesByThreadId(assistantId, threadId), 200);
    }
  }
);

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
  chatWithAssistantRouter,
  getAssistantThreadsRouter,
  getAssistantUIMessageByThreadIdRouter
];
