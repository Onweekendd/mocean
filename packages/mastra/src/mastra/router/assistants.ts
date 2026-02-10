import { createRoute } from "@mastra/server/server-adapter";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import { PREFIX } from "../api/base-client";
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
const getAssistantsRouter = createRoute({
  method: "GET",
  path: assistantRoutes.getAssistants.path,
  responseType: "json",
  responseSchema: assistantRoutes.getAssistants.responseSchema,
  summary: "获取所有助手",
  description: "返回系统中所有可用的助手列表",
  tags: ["Assistants"],
  handler: async () => {
    return await getAssistants();
  }
});

/**
 * 根据ID获取单个助手的路由处理器
 * @description 通过助手ID获取特定助手的详细信息
 */
const getAssistantByIdRouter = createRoute({
  method: "GET",
  path: assistantRoutes.getAssistantById.path,
  responseType: "json",
  responseSchema: assistantRoutes.getAssistantById.responseSchema,
  pathParamSchema: assistantIdParamSchema,
  summary: "根据ID获取单个助手",
  description: "通过助手ID获取特定助手的详细信息",
  tags: ["Assistants"],
  handler: async ({ assistantId }) => {
    const assistant = await getAssistantById(assistantId);

    if (!assistant) {
      throw new HTTPException(404, { message: "助手不存在" });
    }

    return assistant;
  }
});

/**
 * 创建新助手的路由处理器
 * @description 接收助手数据并在系统中创建新的助手
 */
const createAssistantRouter = createRoute({
  method: "POST",
  path: assistantRoutes.createAssistant.path,
  responseType: "json",
  bodySchema: createAssistantSchema,
  responseSchema: assistantRoutes.createAssistant.responseSchema,
  summary: "创建新助手",
  description: "接收助手数据并在系统中创建新的助手",
  tags: ["Assistants"],
  handler: async (data) => {
    return await createAssistant(data);
  }
});

/**
 * 更新助手的路由处理器
 * @description 接收助手ID和更新数据，修改指定助手的信息
 */
const updateAssistantRouter = createRoute({
  method: "PUT",
  path: assistantRoutes.updateAssistant.path,
  responseType: "json",
  pathParamSchema: assistantIdParamSchema,
  bodySchema: updateAssistantSchema,
  responseSchema: assistantRoutes.updateAssistant.responseSchema,
  summary: "更新助手信息",
  description: "接收助手ID和更新数据，修改指定助手的信息",
  tags: ["Assistants"],
  handler: async ({
    assistantId,
    name,
    prompt,
    type,
    enableWebSearch,
    enableGenerateImage,
    description,
    emoji,
    webSearchProviderId,
    knowledgeRecognition,
    modelId,
    defaultModelId
  }) => {
    return await updateAssistant(assistantId, {
      name,
      prompt,
      type,
      enableWebSearch,
      enableGenerateImage,
      description,
      emoji,
      webSearchProviderId,
      knowledgeRecognition,
      modelId,
      defaultModelId
    });
  }
});

/**
 * 删除助手的路由处理器
 * @description 根据助手ID删除指定的助手
 */
const deleteAssistantRouter = createRoute({
  method: "DELETE",
  path: assistantRoutes.deleteAssistant.path,
  responseType: "json",
  pathParamSchema: assistantIdParamSchema,
  responseSchema: assistantRoutes.deleteAssistant.responseSchema,
  summary: "删除助手",
  description: "根据助手ID删除指定的助手",
  tags: ["Assistants"],
  handler: async ({ assistantId }) => {
    return await deleteAssistant(assistantId);
  }
});

/**
 * 与助手聊天的路由处理器
 * @description 与指定助手进行对话
 */
const chatWithAssistantRouter = createRoute({
  method: "POST",
  path: assistantRoutes.chatWithAssistant.path,
  responseType: "json",
  bodySchema: chatWithAssistantSchema,
  responseSchema: assistantRoutes.chatWithAssistant.responseSchema,
  summary: "与助手聊天",
  description: "与指定助手进行对话",
  tags: ["Assistants"],
  handler: async ({ assistantId, messages, threadId }) => {
    return await executeChatWithAssistant(assistantId, messages, threadId);
  }
});

/**
 * 获取助手聊天记录的路由处理器
 * @description 获取指定助手的所有对话线程
 */
const getAssistantThreadsRouter = createRoute({
  method: "GET",
  path: assistantRoutes.getAssistantThreads.path,
  responseType: "json",
  responseSchema: assistantRoutes.getAssistantThreads.responseSchema,
  pathParamSchema: assistantIdParamSchema,
  summary: "获取助手聊天记录",
  description: "获取指定助手的所有对话线程",
  tags: ["Assistants"],
  handler: async ({ assistantId }) => {
    return await getThreadsByAssistantId(assistantId);
  }
});

/**
 * 获取助手线程消息的路由处理器
 * @description 获取指定线程中的所有UI消息
 */
const getAssistantUIMessageByThreadIdRouter = createRoute({
  method: "GET",
  path: assistantRoutes.getAssistantUIMessageByThreadId.path,
  responseType: "json",
  responseSchema:
    assistantRoutes.getAssistantUIMessageByThreadId.responseSchema,
  pathParamSchema: assistantThreadIdParamSchema,
  summary: "获取助手线程消息",
  description: "获取指定线程中的所有UI消息",
  tags: ["Assistants"],
  handler: async ({ assistantId, threadId }) => {
    return await getUIMessagesByThreadId(assistantId, threadId);
  }
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
  chatWithAssistantRouter,
  getAssistantThreadsRouter,
  getAssistantUIMessageByThreadIdRouter
];
