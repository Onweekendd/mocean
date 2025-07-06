/// <reference lib="dom" />
import { StorageThreadType } from "@mastra/core";
import { UIMessage } from "ai";
import { AssistantModel } from "generated/prisma/models";

import { ApiClientConfig, ApiResponse, BaseApiClient } from "./base-client";

/**
 * 助手创建和更新的输入类型
 */
export type AssistantInput = Pick<
  AssistantModel,
  | "name"
  | "prompt"
  | "type"
  | "emoji"
  | "description"
  | "enableWebSearch"
  | "webSearchProviderId"
  | "enableGenerateImage"
  | "knowledgeRecognition"
  | "modelId"
  | "defaultModelId"
>;

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
  async getAssistants(): Promise<ApiResponse<AssistantModel[]>> {
    return this.get<AssistantModel[]>("/assistants");
  }

  /**
   * 根据ID获取单个助手
   * @description 通过助手ID获取特定助手的详细信息
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantById(
    assistantId: string,
  ): Promise<ApiResponse<AssistantModel>> {
    return this.get<AssistantModel>(`/assistants/${assistantId}`);
  }

  /**
   * 创建新助手
   * @description 在系统中创建一个新的助手
   * @param assistantData - 助手信息对象
   */
  async createAssistant(
    assistantData: AssistantInput,
  ): Promise<ApiResponse<AssistantModel>> {
    return this.post<AssistantModel>("/assistants", assistantData);
  }

  /**
   * 更新助手信息
   * @description 更新指定助手的信息
   * @param assistantId - 助手的唯一标识符
   * @param assistantData - 更新的助手信息
   */
  async updateAssistant(
    assistantId: string,
    assistantData: Partial<AssistantInput>,
  ): Promise<ApiResponse<AssistantModel>> {
    return this.put<AssistantModel>(
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
  ): Promise<ApiResponse<AssistantModel>> {
    return this.delete<AssistantModel>(`/assistants/${assistantId}`);
  }

  /**
   * 获取助手历史记录
   * @description 获取指定助手的所有历史记录
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantThreads(
    assistantId: string,
  ): Promise<ApiResponse<StorageThreadType[]>> {
    return this.get<StorageThreadType[]>(`/assistants/history/${assistantId}`);
  }

  /**
   * 获取助手历史记录
   * @description 获取指定助手的所有历史记录
   * @param assistantId - 助手的唯一标识符
   */
  async getAssistantUIMessageByThreadId(
    assistantId: string,
    threadId: string,
  ): Promise<ApiResponse<UIMessage[]>> {
    return this.get<UIMessage[]>(
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
  createAssistant: (assistantData: AssistantInput) =>
    assistantsApi.createAssistant(assistantData),

  /**
   * 更新助手
   * @param assistantId - 助手ID
   * @param assistantData - 更新数据
   */
  updateAssistant: (
    assistantId: string,
    assistantData: Partial<AssistantInput>,
  ) => assistantsApi.updateAssistant(assistantId, assistantData),

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
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 */
export const useAssistantsApi = () => {
  return {
    /**
     * 获取所有助手
     */
    getAssistants: assistantsApiMethods.getAssistants,

    /**
     * 根据ID获取助手
     */
    getAssistantById: assistantsApiMethods.getAssistantById,

    /**
     * 创建助手
     */
    createAssistant: assistantsApiMethods.createAssistant,

    /**
     * 更新助手
     */
    updateAssistant: assistantsApiMethods.updateAssistant,

    /**
     * 删除助手
     */
    deleteAssistant: assistantsApiMethods.deleteAssistant,

    /**
     * 获取助手历史记录
     */
    getAssistantThreads: assistantsApiMethods.getAssistantThreads,

    /**
     * 获取助手历史记录
     */
    getAssistantUIMessageByThreadId:
      assistantsApiMethods.getAssistantUIMessageByThreadId,
  };
};
