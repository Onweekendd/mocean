"use client";

import { useParams } from "next/navigation";

import { DndContext, DragOverlay, pointerWithin } from "@dnd-kit/core";
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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";

import { AddModelDialog } from "../components/AddModelDialog";
import { renderProviderAvatar } from "../components/CustomerIcon";
import { DroppableGroup } from "../components/DroppableGroup";
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
    refreshProvider,
    refreshEnabledProviders,
    sensors,
    onDragStart,
    onDragEnd,
    activeModel
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
            onSuccess={async () => {
              await refreshProvider();
              await refreshEnabledProviders();
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

      {/* 模型分组列表 - 拖拽容器 */}
      <DndContext
        sensors={sensors}
        collisionDetection={pointerWithin}
        onDragStart={onDragStart}
        onDragEnd={async (e) => {
          await onDragEnd(e);
        }}
      >
        <div className="flex-1 overflow-auto">
          <ScrollArea className="h-full">
            <div className="space-y-6 p-6">
              {filteredModelGroups.map((group, index) => (
                <DroppableGroup
                  key={group.groupName}
                  group={group}
                  isLast={index === filteredModelGroups.length - 1}
                  onAddModel={onOpenAddModel}
                  onModelClick={onModelClick}
                  onModelEdit={onModelEdit}
                  onModelDelete={onModelDelete}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* 拖拽覆盖层 - 显示拖拽中的模型卡片 */}
        <DragOverlay dropAnimation={null} style={{ borderRadius: "0.75rem" }}>
          {activeModel ? (
            <div className="rounded-xl" style={{ background: "transparent" }}>
              <ModelCard
                model={activeModel}
                className="w-80 rotate-3 opacity-90 shadow-2xl"
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

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
        groups={groups}
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
