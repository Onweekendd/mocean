"use client";

import { useParams } from "next/navigation";

import type { Provider } from "@mocean/mastra/prismaType";
import { Database, Edit, Loader2, Plus, Search, Settings } from "lucide-react";

import { useProviderPage } from "@/app/provider/[id]/hooks/useProviderPage";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { AddModelDialog } from "../components/AddModelDialog";
import { renderProviderAvatar } from "../components/CustomerIcon";
import { EditModelDialog } from "../components/EditModelDialog";
import { GroupManageDialog } from "../components/GroupManageDialog";
import { ModelCard } from "../components/ModelCard";
import { ProviderConfigDialog } from "../components/ProviderConfigDialog";

/**
 * 供应商详情页面
 * @description 展示选中提供商的模型列表，支持配置管理和模型操作
 * @rule client-swr-dedup - 使用 SWR 进行数据获取和去重
 */
export default function ProviderDetailPage() {
  const params = useParams();
  const providerId = typeof params.id === "string" ? params.id : "";

  // 使用自定义 hook 管理页面状态和逻辑
  const {
    provider,
    models,
    groups,
    modelGroups,
    filteredModels,
    filteredModelGroups,
    searchTerm,
    setSearchTerm,
    dialogs,
    dispatchDialog,
    selectedModelForEdit,
    selectedModelForDelete,
    onModelClick,
    onModelEdit,
    onModelDelete,
    confirmDeleteModel,
    onToggleEnabled,
    onOpenAddModel,
    refreshProvider
  } = useProviderPage(providerId);

  // 加载状态
  if (!provider) {
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

  // 没有模型的状态
  if (!models || models.length === 0) {
    return (
      <div className="flex h-full flex-col">
        {/* 头部信息 */}
        <div className="border-b border-border bg-card/50 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center">
                {provider?.name &&
                  renderProviderAvatar({
                    provider: provider as Provider
                  })}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg font-semibold">{provider?.name}</h1>
                  <div className="flex items-center space-x-1">
                    <Switch
                      className="data-[state=checked]:bg-brand-primary"
                      checked={provider?.enabled}
                      onCheckedChange={onToggleEnabled}
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  共 0 个模型，0 个分组
                </p>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex items-center space-x-2">
              <Button onClick={() => onOpenAddModel()} size="sm">
                <Plus className="mr-2 h-4 w-4" />
                添加模型
              </Button>

              {/* 配置按钮 */}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  dispatchDialog({ type: "config", payload: true })
                }
              >
                <Settings className="mr-2 h-4 w-4" />
                配置
              </Button>
            </div>
          </div>
        </div>

        <div className="flex h-full items-center justify-center p-8">
          <div className="text-center">
            <Database className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">暂无模型</h3>
            <p className="text-sm text-muted-foreground">
              {provider?.name} 提供商暂无可用模型
            </p>
            <Button onClick={() => onOpenAddModel()} className="mt-4" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              添加模型
            </Button>
          </div>
        </div>

        {/* 对话框 */}
        {provider && (
          <ProviderConfigDialog
            provider={provider as Provider}
            open={dialogs.config}
            onOpenChange={(open) =>
              dispatchDialog({ type: "config", payload: open })
            }
            onSuccess={() => {
              void refreshProvider();
            }}
          />
        )}

        <AddModelDialog
          providerId={providerId}
          open={dialogs.addModel}
          onOpenChange={(open) =>
            dispatchDialog({ type: "addModel", payload: open })
          }
          onSuccess={() => {
            void refreshProvider();
          }}
        />
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
              {provider?.name &&
                renderProviderAvatar({ provider: provider as Provider })}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">{provider?.name}</h1>
                <div className="flex items-center space-x-1">
                  <Switch
                    className="data-[state=checked]:bg-brand-primary"
                    checked={provider?.enabled}
                    onCheckedChange={onToggleEnabled}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                共 {models.length} 个模型，{modelGroups.length} 个分组
              </p>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex items-center space-x-2">
            {/* 分组管理按钮 */}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                dispatchDialog({ type: "groupManage", payload: true })
              }
            >
              <Edit className="mr-2 h-4 w-4" />
              管理分组
            </Button>

            {/* 配置按钮 */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => dispatchDialog({ type: "config", payload: true })}
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
                  {/* 分组标题和操作区域 */}
                  <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                    <CollapsibleTrigger className="flex flex-1 items-center space-x-3">
                      <h3 className="text-lg font-semibold">
                        {group.groupName}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {group.count} 个模型
                      </Badge>
                    </CollapsibleTrigger>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenAddModel(group.groupName);
                        }}
                        className="h-8 px-2"
                        title="添加模型到此分组"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CollapsibleContent
                    className={cn(
                      `text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`
                    )}
                  >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                      {group.models.map((model) => (
                        <ModelCard
                          key={model.id}
                          model={model}
                          onClick={onModelClick}
                          onEdit={onModelEdit}
                          onDelete={onModelDelete}
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
          provider={provider as Provider}
          open={dialogs.config}
          onOpenChange={(open) =>
            dispatchDialog({ type: "config", payload: open })
          }
        />
      )}

      <AddModelDialog
        providerId={providerId}
        open={dialogs.addModel}
        onOpenChange={(open) =>
          dispatchDialog({ type: "addModel", payload: open })
        }
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess={refreshProvider}
      />

      <EditModelDialog
        model={selectedModelForEdit}
        providerId={providerId}
        open={dialogs.editModel}
        onOpenChange={(open) =>
          dispatchDialog({ type: "editModel", payload: open })
        }
        onSuccess={refreshProvider}
      />

      {/* 删除确认对话框 */}
      <AlertDialog
        open={dialogs.deleteAlert}
        onOpenChange={(open) =>
          dispatchDialog({ type: "deleteAlert", payload: open })
        }
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除模型</AlertDialogTitle>
            <AlertDialogDescription>
              你确定要删除模型 &quot;{selectedModelForDelete?.name}&quot;
              吗？此操作无法撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDeleteModel}
              className="bg-destructive hover:bg-destructive/90"
            >
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <GroupManageDialog
        groups={groups}
        providerId={providerId}
        open={dialogs.groupManage}
        onOpenChange={(open) =>
          dispatchDialog({ type: "groupManage", payload: open })
        }
        onSuccess={refreshProvider}
      />
    </div>
  );
}
