/// <reference lib="dom" />
import type { StorageThreadType } from "@mastra/core/memory";
import type { UIMessage } from "ai";
import type { z } from "zod";

import { assistantRoutes } from "../router/type";
import type {
  CreateAssistantInputType,
  UpdateAssistantInputType,
  assistantThreadIdParamSchema
} from "../schema/assistant";
import type { ApiClientConfig, ApiResponse } from "./base-client";
import { BaseApiClient } from "./base-client";

/**
 * 助手 API 客户端类
 * @description 提供类型安全的助手相关 API 调用方法
 */
export class AssistantsApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  /**
   * 获取所有助手
   * @description 获取系统中所有可用的助手列表
   */
  async getAssistants(): Promise<
    ApiResponse<
      z.infer<(typeof assistantRoutes)["getAssistants"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof assistantRoutes)["getAssistants"]["responseSchema"]>
    >(assistantRoutes.getAssistants.path);
  }

  /**
   * 根据ID获取单个助手
   * @description 通过助手ID获取特定助手的详细信息
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantById(
    assistantId: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof assistantRoutes)["getAssistantById"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof assistantRoutes)["getAssistantById"]["responseSchema"]>
    >(
      assistantRoutes.getAssistantById.path.replace(":assistantId", assistantId)
    );
  }

  /**
   * 根据ID获取完整助手信息
   * @description 通过助手ID获取完整助手信息，包括模型、供应商、设置、主题、知识库、MCP服务器等
   * @param assistantId - 助手的唯一标识符
   */
  async getFullAssistantById(
    assistantId: string
  ): Promise<
    ApiResponse<
      z.infer<
        (typeof assistantRoutes)["getFullAssistantById"]["responseSchema"]
      >
    >
  > {
    return this.get<
      z.infer<
        (typeof assistantRoutes)["getFullAssistantById"]["responseSchema"]
      >
    >(
      assistantRoutes.getFullAssistantById.path.replace(
        ":assistantId",
        assistantId
      )
    );
  }

  /**
   * 创建新助手
   * @description 在系统中创建一个新的助手
   * @param assistant - 包含助手信息的对象
   */
  async createAssistant(
    assistant: CreateAssistantInputType
  ): Promise<
    ApiResponse<
      z.infer<(typeof assistantRoutes)["createAssistant"]["responseSchema"]>
    >
  > {
    return this.post<
      z.infer<(typeof assistantRoutes)["createAssistant"]["responseSchema"]>
    >(assistantRoutes.createAssistant.path, assistant);
  }

  /**
   * 更新助手信息
   * @description 更新指定助手的信息
   * @param assistantId - 助手的唯一标识符
   * @param assistant - 包含更新信息的对象
   */
  async updateAssistant(
    assistantId: string,
    assistant: UpdateAssistantInputType
  ): Promise<
    ApiResponse<
      z.infer<(typeof assistantRoutes)["updateAssistant"]["responseSchema"]>
    >
  > {
    return this.put<
      z.infer<(typeof assistantRoutes)["updateAssistant"]["responseSchema"]>
    >(
      assistantRoutes.updateAssistant.path.replace(":assistantId", assistantId),
      assistant
    );
  }

  /**
   * 删除助手
   * @description 删除指定的助手
   * @param assistantId - 助手的唯一标识符
   */
  async deleteAssistant(
    assistantId: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof assistantRoutes)["deleteAssistant"]["responseSchema"]>
    >
  > {
    return this.delete<
      z.infer<(typeof assistantRoutes)["deleteAssistant"]["responseSchema"]>
    >(
      assistantRoutes.deleteAssistant.path.replace(":assistantId", assistantId)
    );
  }

  /**
   * 获取助手的对话线程
   * @param assistantId - 助手的唯一标识符
   * @returns 包含对话线程信息的响应对象
   */
  async getAssistantThreads(
    assistantId: string
  ): Promise<ApiResponse<StorageThreadType[]>> {
    return this.get<StorageThreadType[]>(
      assistantRoutes.getAssistantThreads.path.replace(
        ":assistantId",
        assistantId
      )
    );
  }

  /**
   * 获取助手线程中的UI消息
   * @param param
   * @param param.assistantId - 助手的唯一标识符
   * @param param.threadId - 线程的唯一标识符
   * @returns  包含UI消息的响应对象
   */
  async getAssistantUIMessageByThreadId({
    assistantId,
    threadId
  }: z.infer<typeof assistantThreadIdParamSchema>): Promise<
    ApiResponse<UIMessage>
  > {
    return this.get<UIMessage>(
      assistantRoutes.getAssistantUIMessageByThreadId.path
        .replace(":assistantId", assistantId)
        .replace(":threadId", threadId)
    );
  }

  /**
   *
   * @param param0
   * @param param0.assistantId - 助手的唯一标识符
   * @param param0.threadId - 线程的唯一标识符
   * @param param0.messages - 要发送的消息数组
   * @returns 消息流
   */
  async chatWithAssistant({
    assistantId,
    threadId,
    messages
  }: Omit<
    z.infer<typeof assistantRoutes.chatWithAssistant.requestSchema>,
    "messages"
  > & { messages: UIMessage[] }): Promise<Response> {
    return this.postStream(assistantRoutes.chatWithAssistant.path, {
      assistantId,
      threadId,
      messages
    });
  }
}

/**
 * 默认的助手 API 客户端实例
 */
export const assistantsApi = new AssistantsApiClient();

/**
 * 便捷的函数式 API 调用方法
 * @description 提供更简洁的函数调用方式
 */
export const assistantsApiMethods = {
  getAssistants: () => assistantsApi.getAssistants(),
  getAssistantById: (assistantId: string) =>
    assistantsApi.getAssistantById(assistantId),
  getFullAssistantById: (assistantId: string) =>
    assistantsApi.getFullAssistantById(assistantId),
  createAssistant: (assistant: CreateAssistantInputType) =>
    assistantsApi.createAssistant(assistant),
  updateAssistant: (assistantId: string, assistant: UpdateAssistantInputType) =>
    assistantsApi.updateAssistant(assistantId, assistant),
  deleteAssistant: (assistantId: string) =>
    assistantsApi.deleteAssistant(assistantId),
  getAssistantThreadsRouter: (assistantId: string) =>
    assistantsApi.getAssistantThreads(assistantId),
  getAssistantUIMessageByThreadId: ({
    assistantId,
    threadId
  }: z.infer<typeof assistantThreadIdParamSchema>) =>
    assistantsApi.getAssistantUIMessageByThreadId({ assistantId, threadId }),
  chatWithAssistantRouter: ({
    assistantId,
    threadId,
    messages
  }: {
    assistantId: string;
    threadId?: string;
    messages: UIMessage[];
  }) => assistantsApi.chatWithAssistant({ assistantId, threadId, messages })
};

/**
 * React Hook 风格的 API 调用方法返回类型
 * @description 从 AssistantsApiClient 类中提取方法类型，自动保持类型同步
 */
export type UseAssistantsApiReturn = Pick<
  AssistantsApiClient,
  | "getAssistants"
  | "getAssistantById"
  | "getFullAssistantById"
  | "createAssistant"
  | "updateAssistant"
  | "deleteAssistant"
  | "getAssistantThreads"
  | "getAssistantUIMessageByThreadId"
  | "chatWithAssistant"
>;

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 *
 * @returns 绑定了 this 上下文的 API 方法对象
 *
 * @example
 * const api = useAssistantsApi();
 * const response = await api.getAssistants();
 */
export const useAssistantsApi = (): UseAssistantsApiReturn => {
  return {
    getAssistants: assistantsApi.getAssistants.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["getAssistants"],
    getAssistantById: assistantsApi.getAssistantById.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["getAssistantById"],
    getFullAssistantById: assistantsApi.getFullAssistantById.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["getFullAssistantById"],
    createAssistant: assistantsApi.createAssistant.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["createAssistant"],
    updateAssistant: assistantsApi.updateAssistant.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["updateAssistant"],
    deleteAssistant: assistantsApi.deleteAssistant.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["deleteAssistant"],
    getAssistantThreads: assistantsApi.getAssistantThreads.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["getAssistantThreads"],
    getAssistantUIMessageByThreadId:
      assistantsApi.getAssistantUIMessageByThreadId.bind(
        assistantsApi
      ) as UseAssistantsApiReturn["getAssistantUIMessageByThreadId"],
    chatWithAssistant: assistantsApi.chatWithAssistant.bind(
      assistantsApi
    ) as UseAssistantsApiReturn["chatWithAssistant"]
  };
};
