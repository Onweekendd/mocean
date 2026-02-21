import { useCallback, useMemo, useState } from "react";

import type { Model, Provider } from "@mocean/mastra/prismaType";

import { useEnabledProvidersWithModels } from "@/hooks/useProvidersSWR";

/**
 * 模型分组接口
 */
export interface ModelGroup {
  groupName: string;
  models: Model[];
  count: number;
}

/**
 * 选择项接口
 */
interface ModelSelection {
  providerId: string;
  providerName: string;
  modelId: string;
  modelName: string;
}

/**
 * 组件属性接口
 */
export interface ModelSelectorProps {
  /** 当前选中的模型 */
  value?: ModelSelection;
  /** 选择变更回调 */
  onChange: (selection: ModelSelection) => void;
  /** 自定义类名 */
  className?: string;
}

export const useModelSelector = ({ value, onChange }: ModelSelectorProps) => {
  const [open, setOpen] = useState(false);

  const { providers } = useEnabledProvidersWithModels();

  const models = useMemo(() => {
    return providers
      .map((provider) => provider.groups)
      .flat()
      .map((group) => group.models)
      .flat();
  }, [providers]);

  /**
   * 缓存选中的 provider
   *
   * @description 使用 useMemo 避免每次渲染都查找 provider
   */
  const selectedProvider = useMemo(() => {
    if (!value) {
      return undefined;
    }
    return providers.find((p) => p.id === value.providerId);
  }, [providers, value]);

  /**
   * 处理模型选择
   *
   * @description 使用 useCallback 避免每次渲染都创建新函数
   * @param provider - 供应商信息
   * @param model - 模型信息
   */
  const onSelectModel = useCallback(
    (provider: Provider, model: Model) => {
      onChange({
        providerId: provider.id,
        providerName: provider.name,
        modelId: model.id,
        modelName: model.name
      });
      setOpen(false);
    },
    [onChange]
  );

  return {
    open,
    providers,
    models,
    setOpen,
    selectedProvider,
    onSelectModel
  };
};
