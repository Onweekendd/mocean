/// <reference lib="dom" />
import { StorageThreadType } from "@mastra/core";
import { UIMessage } from "ai";

import {
  CreateAssistantInput,
  UpdateAssistantInput,
  createAssistant as createAssistantPrisma,
  deleteAssistant as deleteAssistantPrisma,
  getAssistantById as getAssistantByIdPrisma,
  getAssistants as getAssistantsPrisma,
  updateAssistant as updateAssistantPrisma,
} from "../prisma/assistant";
import { ApiClientConfig, ApiResponse, BaseApiClient } from "./base-client";

/**
 * Prisma 数据库操作返回类型
 */
export type AssistantsListResult = Awaited<
  ReturnType<typeof getAssistantsPrisma>
>;
export type AssistantDetailResult = Awaited<
  ReturnType<typeof getAssistantByIdPrisma>
>;
export type AssistantCreateResult = Awaited<
  ReturnType<typeof createAssistantPrisma>
>;
export type AssistantUpdateResult = Awaited<
  ReturnType<typeof updateAssistantPrisma>
>;
export type AssistantDeleteResult = Awaited<
  ReturnType<typeof deleteAssistantPrisma>
>;
export type AssistantThreadsResult = StorageThreadType[];
export type AssistantUIMessagesResult = UIMessage[];

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
  async getAssistants(): Promise<ApiResponse<AssistantsListResult>> {
    return this.get<AssistantsListResult>("/assistants");
  }

  /**
   * 根据ID获取单个助手
   * @description 通过助手ID获取特定助手的详细信息
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantById(
    assistantId: string,
  ): Promise<ApiResponse<AssistantDetailResult>> {
    return this.get<AssistantDetailResult>(`/assistants/${assistantId}`);
  }

  /**
   * 创建新助手
   * @description 在系统中创建一个新的助手
   * @param assistantData - 助手信息对象
   */
  async createAssistant(
    assistantData: CreateAssistantInput,
  ): Promise<ApiResponse<AssistantCreateResult>> {
    return this.post<AssistantCreateResult>("/assistants", assistantData);
  }

  /**
   * 更新助手信息
   * @description 更新指定助手的信息
   * @param assistantId - 助手的唯一标识符
   * @param assistantData - 更新的助手信息
   */
  async updateAssistant(
    assistantId: string,
    assistantData: UpdateAssistantInput,
  ): Promise<ApiResponse<AssistantUpdateResult>> {
    return this.put<AssistantUpdateResult>(
      `/assistants/${assistantId}`,
      assistantData,
    );
  }

  /**
   * 删除助手
   * @description 删除指定的助手
   * @param assistantId - 助手的唯一标识符
   */
  async deleteAssistant(
    assistantId: string,
  ): Promise<ApiResponse<AssistantDeleteResult>> {
    return this.delete<AssistantDeleteResult>(`/assistants/${assistantId}`);
  }

  /**
   * 获取助手历史记录
   * @description 获取指定助手的所有历史记录
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantThreads(
    assistantId: string,
  ): Promise<ApiResponse<AssistantThreadsResult>> {
    return this.get<AssistantThreadsResult>(
      `/assistants/history/${assistantId}`,
    );
  }

  /**
   * 获取助手历史记录
   * @description 获取指定助手的所有历史记录
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantUIMessageByThreadId(
    assistantId: string,
    threadId: string,
  ): Promise<ApiResponse<AssistantUIMessagesResult>> {
    return this.get<AssistantUIMessagesResult>(
      `/assistants/messages/${assistantId}/${threadId}`,
    );
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
  /**
   * 获取所有助手
   */
  getAssistants: () => assistantsApi.getAssistants(),

  /**
   * 根据ID获取助手
   * @param assistantId - 助手ID
   */
  getAssistantById: (assistantId: string) =>
    assistantsApi.getAssistantById(assistantId),

  /**
   * 创建助手
   * @param assistantData - 助手数据
   */
  createAssistant: (assistantData: CreateAssistantInput) =>
    assistantsApi.createAssistant(assistantData),

  /**
   * 更新助手
   * @param assistantId - 助手ID
   * @param assistantData - 更新数据
   */
  updateAssistant: (assistantId: string, assistantData: UpdateAssistantInput) =>
    assistantsApi.updateAssistant(assistantId, assistantData),

  /**
   * 删除助手
   * @param assistantId - 助手ID
   */
  deleteAssistant: (assistantId: string) =>
    assistantsApi.deleteAssistant(assistantId),

  /**
   * 获取助手历史记录
   * @param assistantId - 助手ID
   */
  getAssistantThreads: (assistantId: string) =>
    assistantsApi.getAssistantThreads(assistantId),

  /**
   * 获取助手历史记录
   * @param threadId - 助手ID
   */
  getAssistantUIMessageByThreadId: (assistantId: string, threadId: string) =>
    assistantsApi.getAssistantUIMessageByThreadId(assistantId, threadId),
};

/**
 * React Hook 风格的 API 调用方法返回类型
 * @description 从 AssistantsApiClient 类中提取方法类型，自动保持类型同步
 */
export type UseAssistantsApiReturn = Pick<
  AssistantsApiClient,
  | "getAssistants"
  | "getAssistantById"
  | "createAssistant"
  | "updateAssistant"
  | "deleteAssistant"
  | "getAssistantThreads"
  | "getAssistantUIMessageByThreadId"
>;

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 *
 * @returns API 方法对象，直接使用 assistantsApiMethods
 *
 * @example
 * const api = useAssistantsApi();
 * const response = await api.getAssistants();
 */
export const useAssistantsApi = (): UseAssistantsApiReturn => {
  return {
    getAssistants: assistantsApiMethods.getAssistants,
    getAssistantById: assistantsApiMethods.getAssistantById,
    createAssistant: assistantsApiMethods.createAssistant,
    updateAssistant: assistantsApiMethods.updateAssistant,
    deleteAssistant: assistantsApiMethods.deleteAssistant,
    getAssistantThreads: assistantsApiMethods.getAssistantThreads,
    getAssistantUIMessageByThreadId:
      assistantsApiMethods.getAssistantUIMessageByThreadId,
  };
};
