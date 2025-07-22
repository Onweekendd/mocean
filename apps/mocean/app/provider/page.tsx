"use client";

import { useMemo, useState } from "react";

import { useSearchParams } from "next/navigation";

import {
  Database,
  Edit,
  Loader2,
  Plus,
  Power,
  PowerOff,
  Search,
  Settings,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import useCustomRequest from "@/hooks/useCustomRequest";
import { useModelsByProviderSWR } from "@/hooks/useModelsSWR";
import { useProvidersWithActions } from "@/hooks/useProvidersSWR";

import { AddModelDialog } from "./components/AddModelDialog";
import { renderProviderAvatar } from "./components/CustomerIcon";
import { GroupManageDialog } from "./components/GroupManageDialog";
import { ModelCard } from "./components/ModelCard";
import { ProviderConfigDialog } from "./components/ProviderConfigDialog";

/**
 * 模型数据接口
 */
interface Model {
  id: string;
  name: string;
  group?: string;
  typeJson: string[];
  description?: string;
  owned_by?: string;
}

/**
 * 模型分组接口
 */
interface ModelGroup {
  groupName: string;
  models: Model[];
  count: number;
}

/**
 * 模型列表页面组件
 * @description 展示选中提供商的模型列表，支持配置管理和模型操作
 */
export default function ProviderPage() {
  const searchParams = useSearchParams();
  const selectedProviderId = searchParams.get("provider");

  // 状态管理
  const [searchTerm, setSearchTerm] = useState("");
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [addModelDialogOpen, setAddModelDialogOpen] = useState(false);
  const [selectedGroupForAdd, setSelectedGroupForAdd] = useState<string>("");
  const [groupManageDialogOpen, setGroupManageDialogOpen] = useState(false);

  // API hooks
  const { providers, toggleEnabled } = useProvidersWithActions();
  const { request } = useCustomRequest();

  const provider = providers.find((p) => p.id === selectedProviderId);
  const {
    models,
    isLoading: modelsLoading,
    error,
    refresh: refreshModels,
  } = useModelsByProviderSWR(selectedProviderId);

  const isLoading = modelsLoading;

  // 按组分组模型
  const modelGroups = useMemo((): ModelGroup[] => {
    if (!models || models.length === 0) return [];

    const groups: Record<string, Model[]> = {};

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

  // 所有模型的搜索过滤
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

  // 根据搜索结果重新分组
  const filteredModelGroups = useMemo((): ModelGroup[] => {
    if (!filteredModels || filteredModels.length === 0) return [];

    const groups: Record<string, Model[]> = {};

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
   * 处理模型点击事件
   */
  const onModelClick = (model: Model) => {
    console.log("选中模型:", model.name);
    // 这里可以添加模型选择逻辑
  };

  /**
   * 处理供应商启用状态切换
   */
  const onToggleEnabled = async () => {
    if (!provider) return;

    await request(toggleEnabled(provider.id));
  };

  /**
   * 处理添加模型对话框打开
   */
  const onOpenAddModel = (groupName: string) => {
    setSelectedGroupForAdd(groupName);
    setAddModelDialogOpen(true);
  };

  /**
   * 获取可用的分组列表
   */
  const availableGroups = useMemo(() => {
    return modelGroups
      .map((g) => g.groupName)
      .filter((name) => name !== "未分组");
  }, [modelGroups]);

  // 没有选中提供商时的状态
  if (!selectedProviderId) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <Database className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-lg font-semibold">选择提供商</h3>
          <p className="text-sm text-muted-foreground">
            请在左侧选择一个提供商来查看其可用的模型列表
          </p>
        </div>
      </div>
    );
  }

  // 加载状态
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-sm text-muted-foreground">
            加载模型数据中...
          </span>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <p className="mb-2 text-sm text-red-500">加载模型数据失败</p>
          <p className="text-xs text-muted-foreground">{error.message}</p>
        </div>
      </div>
    );
  }

  // 没有模型的状态
  if (models.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <Database className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-lg font-semibold">暂无模型</h3>
          <p className="text-sm text-muted-foreground">
            {provider?.name} 提供商暂无可用模型
          </p>
          <Button
            onClick={() => onOpenAddModel("未分组")}
            className="mt-4"
            size="sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            添加模型
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* 头部信息 */}
      <div className="border-b border-border bg-card/50 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center">
              {provider?.name && renderProviderAvatar(provider.name)}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">{provider?.name}</h1>
                <div className="flex items-center space-x-1">
                  <Switch
                    checked={provider?.enabled}
                    onCheckedChange={onToggleEnabled}
                  />
                  {provider?.enabled ? (
                    <Power className="h-4 w-4 text-green-600" />
                  ) : (
                    <PowerOff className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                共 {models.length} 个模型，{modelGroups.length} 个分组
              </p>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex items-center space-x-2">
            {/* 分组统计 */}
            <div className="flex items-center space-x-2">
              {modelGroups.map((group) => (
                <Badge
                  key={group.groupName}
                  variant="outline"
                  className="text-xs"
                >
                  {group.groupName}: {group.count}
                </Badge>
              ))}
            </div>

            {/* 分组管理按钮 */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setGroupManageDialogOpen(true)}
            >
              <Edit className="mr-2 h-4 w-4" />
              管理分组
            </Button>

            {/* 配置按钮 */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setConfigDialogOpen(true)}
            >
              <Settings className="mr-2 h-4 w-4" />
              配置
            </Button>
          </div>
        </div>

        {/* 全局搜索框 */}
        <div className="mt-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="搜索该供应商的所有模型..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          {searchTerm && (
            <div className="mt-2 flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                搜索结果: {filteredModels?.length || 0} 个模型
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm("")}
                className="h-6 px-2 text-xs"
              >
                清除搜索
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* 模型分组列表 */}
      <div className="flex-1 overflow-auto">
        <ScrollArea className="h-full">
          <div className="space-y-6 p-6">
            {filteredModelGroups.map((group) => (
              <Collapsible key={group.groupName} defaultOpen={true}>
                <div className="space-y-4">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold">
                          {group.groupName}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {group.count} 个模型
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenAddModel(group.groupName);
                          }}
                          className="h-8 px-2"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <div className="text-sm text-muted-foreground">
                          点击展开/折叠
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                      {group.models.map((model) => (
                        <ModelCard
                          key={model.id}
                          model={model}
                          onClick={onModelClick}
                        />
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>

                {/* 分组间分隔线 */}
                {group !==
                  filteredModelGroups[filteredModelGroups.length - 1] && (
                  <Separator className="my-6" />
                )}
              </Collapsible>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* 对话框 */}
      {provider && (
        <ProviderConfigDialog
          provider={provider}
          open={configDialogOpen}
          onOpenChange={setConfigDialogOpen}
        />
      )}

      <AddModelDialog
        providerId={selectedProviderId}
        initialGroup={selectedGroupForAdd}
        availableGroups={availableGroups}
        open={addModelDialogOpen}
        onOpenChange={setAddModelDialogOpen}
        onSuccess={refreshModels}
      />

      <GroupManageDialog
        providerId={selectedProviderId}
        groups={availableGroups}
        open={groupManageDialogOpen}
        onOpenChange={setGroupManageDialogOpen}
        onSuccess={refreshModels}
      />
    </div>
  );
}
