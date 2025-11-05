"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import { ModelModel, ProviderModel } from "@mocean/mastra/prismaType";

import { renderProviderAvatar as RenderProviderAvatar } from "@/app/provider/components/CustomerIcon";
import { getModelLogo } from "@/app/provider/constant";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

/**
 * 模型分组接口
 */
interface ModelGroup {
  groupName: string;
  models: ModelModel[];
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
interface ModelSelectorProps {
  /** 供应商列表 */
  providers: Array<ProviderModel & { modelList: ModelModel[] }>;
  /** 当前选中的模型 */
  value?: ModelSelection;
  /** 选择变更回调 */
  onChange: (selection: ModelSelection) => void;
  /** 自定义类名 */
  className?: string;
}

/**
 * 模型选择器组件
 *
 * @description 树状下拉选择器，支持按供应商分组选择模型
 * @param props - 组件属性
 * @returns 模型选择器组件
 *
 * @example
 * ```tsx
 * <ModelSelector
 *   providers={providers}
 *   value={selectedModel}
 *   onChange={onModelChange}
 * />
 * ```
 */
/**
 * 按组分组模型
 *
 * @description 将模型列表按 group 字段分组并排序
 * @param models - 模型列表
 * @returns 分组后的模型数组
 */
const transformModelGroups = (models: ModelModel[]): ModelGroup[] => {
  if (!models || models.length === 0) return [];

  const groups: Record<string, ModelModel[]> = {};

  models.forEach((model) => {
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
};

export function ModelSelector({
  providers,
  value,
  onChange,
  className,
}: ModelSelectorProps) {
  const [open, setOpen] = useState(false);

  /**
   * 缓存所有供应商的分组模型
   *
   * @description 使用 useMemo 避免每次渲染都重新计算分组
   */
  const providersWithGroups = useMemo(() => {
    return providers.map((provider) => ({
      ...provider,
      modelGroups: transformModelGroups(provider.modelList || []),
    }));
  }, [providers]);

  /**
   * 处理模型选择
   *
   * @param provider - 供应商信息
   * @param model - 模型信息
   */
  const onSelectModel = (provider: ProviderModel, model: ModelModel) => {
    onChange({
      providerId: provider.id,
      providerName: provider.name,
      modelId: model.id,
      modelName: model.name,
    });
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-10 justify-between gap-2 border-brand-primary/20 py-0 !no-underline hover:border-brand-primary/40 hover:from-brand-primary/10 hover:to-brand-secondary/10 focus-visible:outline-none focus-visible:ring-0",
            className,
          )}
          onClick={() => setOpen(!open)}
        >
          {value ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 shrink-0">
                <RenderProviderAvatar
                  providerName={value.providerName}
                  width={16}
                  height={16}
                />
              </div>
              <span className="truncate text-sm font-medium">
                {value.modelName}
              </span>
            </div>
          ) : (
            <span className="text-muted-foreground">选择模型</span>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="overflow-y-auto"
        align="start"
        side="top"
        sideOffset={-4}
      >
        {providersWithGroups.map((provider) => (
          <DropdownMenuSub key={provider.id}>
            <DropdownMenuSubTrigger className="gap-2">
              <div className="h-5 w-5 shrink-0">
                <RenderProviderAvatar
                  providerName={provider.name}
                  width={20}
                  height={20}
                />
              </div>
              <span className="font-medium">{provider.name}</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuSubContent className="p-0">
              <ScrollArea className="h-52">
                <div className="p-2">
                  {provider.modelGroups.length > 0 ? (
                    provider.modelGroups.map((group, groupIndex) => (
                      <div
                        key={group.groupName}
                        className={cn(
                          "relative rounded-md border border-border/50 bg-muted/20 p-2 pb-1",
                          groupIndex > 0 && "mt-3",
                        )}
                      >
                        <div className="space-y-0.5">
                          {group.models.map((model) => (
                            <DropdownMenuItem
                              key={model.id}
                              className={cn(
                                "cursor-pointer gap-2 rounded-sm",
                                value?.modelId === model.id &&
                                  "bg-brand-primary/10 font-medium text-brand-primary",
                              )}
                              onSelect={() => onSelectModel(provider, model)}
                            >
                              <div className="h-4 w-4 shrink-0">
                                <Image
                                  src={
                                    getModelLogo(
                                      model.id as keyof typeof getModelLogo,
                                    ) ?? ""
                                  }
                                  alt={model.name}
                                  width={14}
                                  height={14}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                              <span className="truncate text-sm">
                                {model.name}
                              </span>
                            </DropdownMenuItem>
                          ))}
                        </div>
                        <span className="absolute -bottom-1 right-1 text-[10px] leading-none text-brand-primary/60">
                          {group.groupName}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                      暂无模型
                    </div>
                  )}
                </div>
              </ScrollArea>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}

        {providersWithGroups.length === 0 && (
          <div className="px-2 py-6 text-center text-sm text-muted-foreground">
            暂无可用供应商
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
