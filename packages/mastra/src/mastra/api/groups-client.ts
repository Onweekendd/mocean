/// <reference lib="dom" />
import type {
  CreateGroupInput,
  GroupCreateResult,
  GroupDeleteResult,
  GroupDetailResult,
  GroupUpdateResult,
  GroupsByProviderResult,
  UpdateGroupInput
} from "../server/group";
import type { ApiClientConfig, ApiResponse } from "./base-client";
import { BaseApiClient } from "./base-client";

/**
 * 分组 API 客户端类
 * @description 提供类型安全的分组相关 API 调用方法
 */
export class GroupsApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  /**
   * 获取指定提供商的所有分组
   * @description 获取指定提供商下的所有分组，包含模型数量统计
   * @param providerId - 提供商的唯一标识符
   */
  async getGroupsByProvider(
    providerId: string
  ): Promise<ApiResponse<GroupsByProviderResult>> {
    return this.get<GroupsByProviderResult>(`/groups/provider/${providerId}`);
  }

  /**
   * 根据ID获取单个分组
   * @description 通过分组ID获取分组详细信息，包含关联的模型
   * @param id - 分组的唯一标识符
   */
  async getGroupById(id: string): Promise<ApiResponse<GroupDetailResult>> {
    return this.get<GroupDetailResult>(`/groups/${id}`);
  }

  /**
   * 创建新分组
   * @description 创建一个新的分组记录
   * @param group - 包含分组信息的对象
   */
  async createGroup(
    group: CreateGroupInput
  ): Promise<ApiResponse<GroupCreateResult>> {
    return this.post<GroupCreateResult>("/groups", group);
  }

  /**
   * 更新分组信息
   * @description 更新指定分组的信息（不能修改默认分组）
   * @param id - 分组的唯一标识符
   * @param group - 包含更新信息的对象
   */
  async updateGroup(
    id: string,
    group: UpdateGroupInput
  ): Promise<ApiResponse<GroupUpdateResult>> {
    return this.put<GroupUpdateResult>(`/groups/${id}`, group);
  }

  /**
   * 删除分组
   * @description 删除指定的分组记录（不能删除默认分组，模型将移至默认分组）
   * @param id - 分组的唯一标识符
   */
  async deleteGroup(id: string): Promise<ApiResponse<GroupDeleteResult>> {
    return this.delete<GroupDeleteResult>(`/groups/${id}`);
  }
}

/**
 * 默认的分组 API 客户端实例
 */
export const groupsApi = new GroupsApiClient();

/**
 * 便捷的函数式 API 调用方法
 * @description 提供更简洁的函数调用方式
 */
export const groupsApiMethods = {
  /**
   * 获取指定提供商的所有分组
   * @param providerId - 提供商ID
   */
  getGroupsByProvider: (providerId: string) =>
    groupsApi.getGroupsByProvider(providerId),

  /**
   * 根据ID获取分组
   * @param id - 分组ID
   */
  getGroupById: (id: string) => groupsApi.getGroupById(id),

  /**
   * 创建分组
   * @param groupData - 分组数据
   */
  createGroup: (groupData: CreateGroupInput) =>
    groupsApi.createGroup(groupData),

  /**
   * 更新分组
   * @param id - 分组ID
   * @param groupData - 更新数据
   */
  updateGroup: (id: string, groupData: UpdateGroupInput) =>
    groupsApi.updateGroup(id, groupData),

  /**
   * 删除分组
   * @param id - 分组ID
   */
  deleteGroup: (id: string) => groupsApi.deleteGroup(id)
};

/**
 * React Hook 风格的 API 调用方法返回类型
 * @description 从 GroupsApiClient 类中提取方法类型，自动保持类型同步
 */
export type UseGroupsApiReturn = {
  getGroupsByProvider: GroupsApiClient["getGroupsByProvider"];
  getGroupById: GroupsApiClient["getGroupById"];
  createGroup: GroupsApiClient["createGroup"];
  updateGroup: GroupsApiClient["updateGroup"];
  deleteGroup: GroupsApiClient["deleteGroup"];
};

/**
 * React Hook 风格的 API 调用方法
 * @description 适用于 React 应用的 Hook 风格调用
 *
 * @returns 绑定了 this 上下文的 API 方法对象
 *
 * @example
 * const api = useGroupsApi();
 * const response = await api.getGroupsByProvider(providerId);
 */
export const useGroupsApi = (): UseGroupsApiReturn => ({
  getGroupsByProvider: groupsApi.getGroupsByProvider.bind(
    groupsApi
  ) as GroupsApiClient["getGroupsByProvider"],
  getGroupById: groupsApi.getGroupById.bind(
    groupsApi
  ) as GroupsApiClient["getGroupById"],
  createGroup: groupsApi.createGroup.bind(
    groupsApi
  ) as GroupsApiClient["createGroup"],
  updateGroup: groupsApi.updateGroup.bind(
    groupsApi
  ) as GroupsApiClient["updateGroup"],
  deleteGroup: groupsApi.deleteGroup.bind(
    groupsApi
  ) as GroupsApiClient["deleteGroup"]
});
