import React, { useMemo } from "react";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import type { Model } from "@mocean/mastra/prismaType";
import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { ModelGroup } from "../[id]/hooks/useProviderPage";
import { DraggableModelCard } from "./DraggableModelCard";

interface DroppableGroupProps {
  group: ModelGroup;
  isLast: boolean;
  onAddModel: (groupName: string) => void;
  onModelClick?: (model: Model) => void;
  onModelEdit?: (model: Model) => void;
  onModelDelete?: (model: Model) => void;
}

/**
 * 可放置的分组容器
 * @description 支持模型拖拽放置的分组容器
 */
export function DroppableGroup({
  group,
  isLast,
  onAddModel,
  onModelClick,
  onModelEdit,
  onModelDelete
}: DroppableGroupProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `group-${group.groupId}`
  });

  // 获取模型 ID 列表用于 SortableContext
  const modelIds = useMemo(() => group.models.map((m) => m.id), [group.models]);

  return (
    <>
      <Collapsible defaultOpen={true}>
        <div className="space-y-4">
          {/* 分组标题和操作区域 */}
          <div className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-brand-slate-200/40">
            <CollapsibleTrigger className="flex flex-1 items-center space-x-3">
              <h3 className="text-lg font-semibold">{group.groupName}</h3>
              <Badge
                variant="secondary"
                className="bg-brand-slate-200 text-xs hover:bg-brandSlate-200"
              >
                {group.count} 个模型
              </Badge>
            </CollapsibleTrigger>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddModel(group.groupName);
                }}
                className="h-8 bg-brand-slate-200/20 px-2 hover:bg-brand-slate-200/60"
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
            <SortableContext items={modelIds} strategy={rectSortingStrategy}>
              <div
                ref={setNodeRef}
                className={cn(
                  "grid grid-cols-1 gap-4 rounded-lg p-2 transition-colors lg:grid-cols-2 xl:grid-cols-3",
                  isOver && "bg-accent/50",
                  group.models.length === 0 && "min-h-24"
                )}
              >
                {group.models.length === 0 ? (
                  <div className="col-span-full flex items-center justify-center rounded-md border border-dashed border-muted-foreground/25 p-6 text-sm text-muted-foreground">
                    拖拽模型到此分组
                  </div>
                ) : (
                  group.models.map((model) => (
                    <DraggableModelCard
                      key={model.id}
                      model={model}
                      onClick={onModelClick}
                      onEdit={onModelEdit}
                      onDelete={onModelDelete}
                    />
                  ))
                )}
              </div>
            </SortableContext>
          </CollapsibleContent>
        </div>

        {/* 分组间分隔线 */}
        {!isLast && <Separator className="my-6" />}
      </Collapsible>
    </>
  );
}
