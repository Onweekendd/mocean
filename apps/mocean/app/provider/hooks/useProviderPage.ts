import { useMemo, useState } from "react";

import { ModelModel, ProviderModel } from "@mocean/mastra/prismaType";

import {
  useModelsByProviderSWR,
  useModelsWithActions,
} from "@/hooks/useModelsSWR";
import { useProvidersWithActions } from "@/hooks/useProvidersSWR";

/**
 * 模型分组接口
 */
interface ModelGroup {
  groupName: string;
  models: ModelModel[];
  count: number;
}

/**
 * Provider 页面状态管理 Hook
 *
 * @description 封装 provider 页面的业务逻辑，包括模型分组、搜索过滤、状态管理等
 * @param selectedProviderId - 选中的供应商 ID
 * @returns Provider 页面所需的状态和操作方法
 *
 * @example
 * ```tsx
 * const {
 *   provider,
 *   models,
 *   modelGroups,
 *   filteredModelGroups,
 *   onModelClick,
 *   onModelEdit,
 *   ...
 * } = useProviderPage(providerId);
 * ```
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
    useState<ModelModel | null>(null);
  const [selectedModelForDelete, setSelectedModelForDelete] =
    useState<ModelModel | null>(null);
  const [groupManageDialogOpen, setGroupManageDialogOpen] = useState(false);

  // API hooks
  const { providers, toggleEnabled } = useProvidersWithActions();
  const { remove: removeModel } = useModelsWithActions();

  /**
   * 获取当前选中的供应商
   */
  const provider = useMemo(() => {
    return providers.find((p) => p.id === selectedProviderId) as ProviderModel;
  }, [providers, selectedProviderId]);

  /**
   * 获取当前供应商的模型列表
   */
  const {
    models,
    isLoading,
    error,
    refresh: refreshModels,
  } = useModelsByProviderSWR(selectedProviderId);

  /**
   * 按组分组模型
   *
   * @description 将模型列表按 group 字段分组，并排序
   * @returns 分组后的模型数组
   */
  const modelGroups = useMemo((): ModelGroup[] => {
    if (!models || models.length === 0) return [];

    const groups: Record<string, ModelModel[]> = {};

    models.forEach((model) => {
      const groupName = model.group || "未分组";
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(model);
    });

    // 转换为数组并排序
    const sortedGroups = Object.entries(groups)
      .map(([groupName, models]) => ({
        groupName,
        models: models.sort((a, b) => a.name.localeCompare(b.name)),
        count: models.length,
      }))
      .sort((a, b) => {
        // 未分组放最后
        if (a.groupName === "未分组") return 1;
        if (b.groupName === "未分组") return -1;
        return a.groupName.localeCompare(b.groupName);
      });

    return sortedGroups;
  }, [models]);

  /**
   * 搜索过滤模型
   *
   * @description 根据搜索词过滤模型列表，支持按名称、ID、描述等字段搜索
   * @returns 过滤后的模型数组
   */
  const filteredModels = useMemo(() => {
    if (!models || !searchTerm.trim()) return models;

    const term = searchTerm.toLowerCase();
    return models.filter(
      (model) =>
        model.name.toLowerCase().includes(term) ||
        model.id.toLowerCase().includes(term) ||
        model.description?.toLowerCase().includes(term) ||
        model.owned_by?.toLowerCase().includes(term) ||
        JSON.parse(model.typeJson as string).some((type: string) =>
          type.toLowerCase().includes(term),
        ),
    );
  }, [models, searchTerm]);

  /**
   * 根据搜索结果重新分组
   *
   * @description 将过滤后的模型列表按组重新分组
   * @returns 过滤并分组后的模型数组
   */
  const filteredModelGroups = useMemo((): ModelGroup[] => {
    if (!filteredModels || filteredModels.length === 0) return [];

    const groups: Record<string, ModelModel[]> = {};

    filteredModels.forEach((model) => {
      const groupName = model.group || "未分组";
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(model);
    });

    return Object.entries(groups)
      .map(([groupName, models]) => ({
        groupName,
        models: models.sort((a, b) => a.name.localeCompare(b.name)),
        count: models.length,
      }))
      .sort((a, b) => {
        if (a.groupName === "未分组") return 1;
        if (b.groupName === "未分组") return -1;
        return a.groupName.localeCompare(b.groupName);
      });
  }, [filteredModels]);

  /**
   * 获取可用的分组列表
   *
   * @description 获取所有分组名称（排除"未分组"）
   * @returns 分组名称数组
   */
  const availableGroups = useMemo(() => {
    return modelGroups
      .map((g) => g.groupName)
      .filter((name) => name !== "未分组");
  }, [modelGroups]);

  /**
   * 处理模型点击事件
   *
   * @param model - 被点击的模型
   */
  const onModelClick = (model: ModelModel) => {
    console.log("选中模型:", model.name);
    // 这里可以添加模型选择逻辑
  };

  /**
   * 处理模型编辑
   *
   * @param model - 要编辑的模型
   */
  const onModelEdit = (model: ModelModel) => {
    setSelectedModelForEdit(model);
    setEditModelDialogOpen(true);
  };

  /**
   * 处理模型删除
   *
   * @param model - 要删除的模型
   */
  const onModelDelete = (model: ModelModel) => {
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
    refreshModels,
  };
}
