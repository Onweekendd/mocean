import { useMemo, useReducer, useState } from "react";

import type { Model } from "@mocean/mastra/prismaType";

import { useModelActions } from "@/hooks/useModelsSWR";
import {
  useProviderActions,
  useProviderWithModels
} from "@/hooks/useProvidersSWR";

import type { FullProvider } from "../type";
import { useDragModels } from "./useDragModels";

/**
 * 模型分组接口
 */
export interface ModelGroup {
  groupName: string;
  models: Model[];
  count: number;
  groupId?: string;
}

/**
 * 对话框状态接口
 */
interface DialogState {
  config: boolean;
  addModel: boolean;
  editModel: boolean;
  deleteAlert: boolean;
  groupManage: boolean;
}

/**
 * 对话框状态初始值
 */
const INITIAL_DIALOG_STATE: DialogState = {
  config: false,
  addModel: false,
  editModel: false,
  deleteAlert: false,
  groupManage: false
};

/**
 * 对话框状态reducer
 */
type DialogAction = {
  type: keyof DialogState;
  payload: boolean;
};

const dialogReducer = (
  state: DialogState,
  action: DialogAction
): DialogState => ({
  ...state,
  [action.type]: action.payload
});

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
  const [dialogs, dispatchDialog] = useReducer(
    dialogReducer,
    INITIAL_DIALOG_STATE
  );
  const [selectedGroupForAdd, setSelectedGroupForAdd] = useState<string>("");
  const [selectedModelForEdit, setSelectedModelForEdit] =
    useState<Model | null>(null);
  const [selectedModelForDelete, setSelectedModelForDelete] =
    useState<Model | null>(null);

  // 数据获取
  const { provider, refresh: refreshProvider } =
    useProviderWithModels(selectedProviderId);

  // 操作（传入 refreshProvider 实现数据和操作的联动）
  const { toggleEnabled } = useProviderActions(refreshProvider);
  const { remove: removeModel } = useModelActions(refreshProvider);

  const groups = useMemo(() => {
    if (!provider?.groups) return [];
    return provider.groups;
  }, [provider]);

  const models = useMemo<Model[]>(() => {
    if (!provider) return [];
    return provider.groups?.flatMap((group) => group.models as Model[]) || [];
  }, [provider]);

  /**
   * 构建已排序的模型分组
   */
  const modelGroups = useMemo((): ModelGroup[] => {
    return groups.map((group) => {
      const sortedModels = ((group.models || []) as Model[]).sort((a, b) => {
        // 优先按 sort 字段排序，然后按名称字母排序
        if (a.sort !== b.sort) return a.sort - b.sort;
        return a.name.localeCompare(b.name);
      });
      return {
        groupName: group.name,
        groupId: group.id,
        models: sortedModels,
        count: group.models?.length ?? 0
      };
    });
  }, [groups]);

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

    const filteredModelIds = new Set(filteredModels.map((m) => m.id));

    return modelGroups.map((group) => {
      const filteredGroupModels = group.models.filter((model) =>
        filteredModelIds.has(model.id)
      );
      return {
        ...group,
        models: filteredGroupModels,
        count: filteredGroupModels.length
      };
    });
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
    dispatchDialog({ type: "editModel", payload: true });
  };

  /**
   * 处理模型删除
   *
   * @param model - 要删除的模型
   */
  const onModelDelete = (model: Model) => {
    setSelectedModelForDelete(model);
    dispatchDialog({ type: "deleteAlert", payload: true });
  };

  /**
   * 确认删除模型
   *
   * @description 执行模型删除操作并刷新列表
   */
  const confirmDeleteModel = () => {
    if (!selectedModelForDelete) return;

    void removeModel(selectedModelForDelete.id)
      .then(() => {
        dispatchDialog({ type: "deleteAlert", payload: false });
        setSelectedModelForDelete(null);
      })
      .catch((error) => {
        console.error("删除模型失败:", error);
      });
  };

  /**
   * 处理供应商启用状态切换
   *
   * @description 切换当前供应商的启用/禁用状态
   */
  const onToggleEnabled = () => {
    if (!provider) return;

    void toggleEnabled(provider.id).catch((error) => {
      console.error("切换提供商状态失败:", error);
    });
  };

  /**
   * 处理打开添加模型对话框
   *
   * @param [groupName] - 目标分组名称（可选）
   */
  const onOpenAddModel = (groupName?: string) => {
    setSelectedGroupForAdd(groupName || "");
    dispatchDialog({ type: "addModel", payload: true });
  };

  /**
   * 拖拽功能 Hook
   * @description 处理模型拖拽排序和分组转移
   */
  const { sensors, onDragStart, onDragEnd, activeModel } = useDragModels({
    provider: provider as FullProvider,
    models,
    modelGroups,
    onRefresh: refreshProvider
  });

  return {
    // 数据状态
    provider,
    groups,
    models,
    modelGroups,
    filteredModels,
    filteredModelGroups,
    availableGroups,

    // 搜索状态
    searchTerm,
    setSearchTerm,

    // 对话框状态
    dialogs,
    dispatchDialog,

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
    refreshProvider,

    // 拖拽功能
    sensors,
    onDragStart,
    onDragEnd,
    activeModel
  };
}
