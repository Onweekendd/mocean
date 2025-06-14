/// <reference lib="dom" />
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
   * @param id - 助手的唯一标识符
   */
  async getAssistantById(id: string): Promise<ApiResponse<AssistantModel>> {
    return this.get<AssistantModel>(`/assistants/${id}`);
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
   * @param id - 助手的唯一标识符
   * @param assistantData - 更新的助手信息
   */
  async updateAssistant(
    id: string,
    assistantData: Partial<AssistantInput>,
  ): Promise<ApiResponse<AssistantModel>> {
    return this.put<AssistantModel>(`/assistants/${id}`, assistantData);
  }

  /**
   * 删除助手
   * @description 删除指定的助手
   * @param id - 助手的唯一标识符
   */
  async deleteAssistant(id: string): Promise<ApiResponse<AssistantModel>> {
    return this.delete<AssistantModel>(`/assistants/${id}`);
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
   * @param id - 助手ID
   */
  getAssistantById: (id: string) => assistantsApi.getAssistantById(id),

  /**
   * 创建助手
   * @param assistantData - 助手数据
   */
  createAssistant: (assistantData: AssistantInput) =>
    assistantsApi.createAssistant(assistantData),

  /**
   * 更新助手
   * @param id - 助手ID
   * @param assistantData - 更新数据
   */
  updateAssistant: (id: string, assistantData: Partial<AssistantInput>) =>
    assistantsApi.updateAssistant(id, assistantData),

  /**
   * 删除助手
   * @param id - 助手ID
   */
  deleteAssistant: (id: string) => assistantsApi.deleteAssistant(id),
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
  };
};

/**
 * 使用示例
 *
 * 基础使用：
 * ```typescript
 * import { assistantsApi } from '@/api/assistants-client';
 *
 * // 获取所有助手
 * const response = await assistantsApi.getAssistants();
 * if (response.data) {
 *   console.log('助手列表:', response.data);
 * } else {
 *   console.error('错误:', response.error);
 * }
 * ```
 *
 * 函数式调用：
 * ```typescript
 * import { assistantsApiMethods } from '@/api/assistants-client';
 *
 * // 创建助手
 * const newAssistant = await assistantsApiMethods.createAssistant({
 *   name: '客服助手',
 *   prompt: '你是一个专业的客服助手',
 *   type: 'assistant',
 *   description: '提供客服支持',
 *   emoji: '🤖'
 * });
 * ```
 *
 * React Hook 使用：
 * ```typescript
 * import { useAssistantsApi } from '@/api/assistants-client';
 *
 * function AssistantComponent() {
 *   const assistantsApi = useAssistantsApi();
 *
 *   const handleCreateAssistant = async () => {
 *     const response = await assistantsApi.createAssistant({
 *       name: '新助手',
 *       prompt: '助手提示词',
 *       type: 'assistant'
 *     });
 *
 *     if (response.data) {
 *       console.log('创建成功:', response.data);
 *     }
 *   };
 *
 *   return <button onClick={handleCreateAssistant}>创建助手</button>;
 * }
 * ```
 */
