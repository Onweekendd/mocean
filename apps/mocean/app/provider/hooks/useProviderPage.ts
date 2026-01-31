import { useMemo, useState } from "react";

import type { Model, Provider } from "@mocean/mastra/prismaType";

import { useGroupsByProviderSWR } from "@/hooks/useGroupsSWR";
import {
  useModelsByProviderSWR,
  useModelsWithActions
} from "@/hooks/useModelsSWR";
import { useProvidersWithActions } from "@/hooks/useProvidersSWR";

/**
 * 模型提供商关联接口
 */
interface ModelProviderRelation {
  modelId: string;
  providerId: string;
  provider?: Provider;
}

/**
 * 扩展的模型接口 - 包含提供商关联
 */
interface ModelWithProviders extends Model {
  providers?: ModelProviderRelation[];
}

/**
 * 模型分组接口
 */
interface ModelGroup {
  groupName: string;
  models: ModelWithProviders[];
  count: number;
  groupId?: string;
}

const UN_GROUP_NAME = "未分组";
const UN_GROUP_ID = "0";

/**
 * Provider 页面状态管理 Hook
 *
 * @description 封装 provider 页面的业务逻辑，包括模型分组、搜索过滤、状态管理等
 * @param selectedProviderId - 选中的供应商 ID
 * @returns Provider 页面所需的状态和操作方法
 */
export function useProviderPage(selectedProviderId: string | null) {
  // 状态管理
  const [searchTerm, setSearchTerm] = useState("");
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [addModelDialogOpen, setAddModelDialogOpen] = useState(false);
  const [editModelDialogOpen, setEditModelDialogOpen] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [selectedGroupForAdd, setSelectedGroupForAdd] = useState<string>("");
  const [selectedModelForEdit, setSelectedModelForEdit] =
    useState<Model | null>(null);
  const [selectedModelForDelete, setSelectedModelForDelete] =
    useState<Model | null>(null);
  const [groupManageDialogOpen, setGroupManageDialogOpen] = useState(false);

  // API hooks
  const { providers, toggleEnabled } = useProvidersWithActions();
  const { remove: removeModel } = useModelsWithActions();

  /**
   * 获取当前选中的供应商
   */
  const provider = useMemo(() => {
    return providers.find((p) => p.id === selectedProviderId) as Provider;
  }, [providers, selectedProviderId]);

  const { groups } = useGroupsByProviderSWR(provider?.id);

  /**
   * 获取当前供应商的模型列表
   */
  const {
    models,
    isLoading,
    error,
    refresh: refreshModels
  } = useModelsByProviderSWR(selectedProviderId);

  /**
   * 按组分组模型
   *
   * @description 根据 API 返回的分组信息，将模型列表分组，并排序
   * @returns 分组后的模型数组
   */
  const modelGroups = useMemo((): ModelGroup[] => {
    if (!models || models.length === 0 || !groups) return [];

    // 创建分组映射: groupId -> ModelGroup
    const groupMap = new Map<string, ModelGroup>();

    // 初始化所有分组
    groups.forEach((group) => {
      groupMap.set(group.id, {
        groupName: group.name,
        groupId: group.id,
        models: [],
        count: 0
      });
    });

    // 将模型分配到对应的分组
    models.forEach((model) => {
      // 模型对应的组
      const currentGroup = model.modelGroups.find(
        (group) => group.providerId === selectedProviderId
      );

      // 当前模型在该供应商中未进行分组
      if (!currentGroup) {
        if (!groupMap.has(UN_GROUP_ID)) {
          groupMap.set(UN_GROUP_ID, {
            groupName: UN_GROUP_NAME,
            groupId: UN_GROUP_ID,
            models: [model],
            count: 1
          });
        } else {
          const group = groupMap.get(UN_GROUP_ID);
          if (group) {
            group.models.push(model);
            group.count++;
          }
        }
        return;
      }

      // 当前模型在该供应商中已进行分组
      if (!groupMap.has(currentGroup.groupId)) {
        groupMap.set(currentGroup.groupId, {
          groupName: currentGroup.group.name,
          groupId: currentGroup.groupId,
          models: [model],
          count: 1
        });
      } else {
        const group = groupMap.get(currentGroup.groupId);
        if (group) {
          group.models.push(model);
          group.count++;
        }
      }
    });

    // 转换为数组并排序
    const sortedGroups = Array.from(groupMap.values()).map((group) => ({
      ...group,
      models: group.models.sort((a, b) => a.name.localeCompare(b.name))
    }));

    return sortedGroups;
  }, [models, groups, selectedProviderId]);

  /**
   * 搜索过滤模型
   *
   * @description 根据搜索词过滤模型列表，支持按名称、ID、描述等字段搜索
   * @returns 过滤后的模型数组
   */
  const filteredModels = useMemo(() => {
    if (!models || !searchTerm.trim()) return models;

    const term = searchTerm.toLowerCase();
    return models.filter((model) => {
      // 基本字段搜索
      const matchesBasicFields =
        model.name.toLowerCase().includes(term) ||
        model.id.toLowerCase().includes(term) ||
        model.description?.toLowerCase().includes(term) ||
        model.owned_by?.toLowerCase().includes(term);

      // 根据能力字段构建类型数组进行搜索
      const modelTypes: string[] = [];
      if (model.supportsTools)
        modelTypes.push("function_calling", "工具", "函数调用");
      if (model.supportsReasoning) modelTypes.push("reasoning", "推理");
      if (model.supportsImage) modelTypes.push("vision", "视觉", "图像");
      if (model.supportsEmbedding) modelTypes.push("embedding", "向量", "嵌入");
      if (model.supportsAudio) modelTypes.push("audio", "音频");
      if (model.supportsVideo) modelTypes.push("video", "视频");

      const matchesTypes = modelTypes.some((type) =>
        type.toLowerCase().includes(term)
      );

      return matchesBasicFields || matchesTypes;
    });
  }, [models, searchTerm]);

  /**
   * 根据搜索结果过滤分组
   *
   * @description 基于 modelGroups，过滤出包含搜索结果的分组
   * @returns 过滤后的分组数组
   */
  const filteredModelGroups = useMemo((): ModelGroup[] => {
    if (!filteredModels || filteredModels.length === 0) return [];

    // 构建过滤后的模型ID集合，用于快速查找
    const filteredModelIds = new Set(filteredModels.map((m) => m.id));

    // 基于 modelGroups，过滤每个分组中的模型
    return modelGroups.map((group) => ({
      ...group,
      models: group.models.filter((model) => filteredModelIds.has(model.id)),
      count: group.models.filter((model) => filteredModelIds.has(model.id))
        .length
    }));
  }, [modelGroups, filteredModels]);

  /**
   * 获取可用的分组列表
   *
   * @description 获取所有分组名称（从 API 返回的 groups 数据）
   * @returns 分组名称数组
   */
  const availableGroups = useMemo(() => {
    if (!groups) return [];
    return groups.map((g) => g.name);
  }, [groups]);

  /**
   * 处理模型点击事件
   *
   * @param model - 被点击的模型
   */
  const onModelClick = (model: Model) => {
    console.log("选中模型:", model.name);
    // 这里可以添加模型选择逻辑
  };

  /**
   * 处理模型编辑
   *
   * @param model - 要编辑的模型
   */
  const onModelEdit = (model: Model) => {
    setSelectedModelForEdit(model);
    setEditModelDialogOpen(true);
  };

  /**
   * 处理模型删除
   *
   * @param model - 要删除的模型
   */
  const onModelDelete = (model: Model) => {
    setSelectedModelForDelete(model);
    setDeleteAlertOpen(true);
  };

  /**
   * 确认删除模型
   *
   * @description 执行模型删除操作并刷新列表
   */
  const confirmDeleteModel = async () => {
    if (!selectedModelForDelete) return;

    try {
      await removeModel(selectedModelForDelete.id);
      await refreshModels();
      setDeleteAlertOpen(false);
      setSelectedModelForDelete(null);
    } catch (error) {
      console.error("删除模型失败:", error);
    }
  };

  /**
   * 处理供应商启用状态切换
   *
   * @description 切换当前供应商的启用/禁用状态
   */
  const onToggleEnabled = async () => {
    if (!provider) return;

    try {
      await toggleEnabled(provider.id);

      // 刷新供应商列表
    } catch (error) {
      console.error("切换提供商状态失败:", error);
    }
  };

  /**
   * 处理打开添加模型对话框
   *
   * @param [groupName] - 目标分组名称（可选）
   */
  const onOpenAddModel = (groupName?: string) => {
    setSelectedGroupForAdd(groupName || "");
    setAddModelDialogOpen(true);
  };

  return {
    // 数据状态
    provider,
    models,
    modelGroups,
    filteredModels,
    filteredModelGroups,
    availableGroups,
    isLoading,
    error,

    // 搜索状态
    searchTerm,
    setSearchTerm,

    // 对话框状态
    configDialogOpen,
    setConfigDialogOpen,
    addModelDialogOpen,
    setAddModelDialogOpen,
    editModelDialogOpen,
    setEditModelDialogOpen,
    deleteAlertOpen,
    setDeleteAlertOpen,
    groupManageDialogOpen,
    setGroupManageDialogOpen,

    // 选中项状态
    selectedGroupForAdd,
    selectedModelForEdit,
    selectedModelForDelete,

    // 操作方法
    onModelClick,
    onModelEdit,
    onModelDelete,
    confirmDeleteModel,
    onToggleEnabled,
    onOpenAddModel,
    refreshModels
  };
}
