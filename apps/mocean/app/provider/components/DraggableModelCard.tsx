import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Model } from "@mocean/mastra/prismaType";

import { cn } from "@/lib/utils";

import { ModelCard } from "./ModelCard";

interface DraggableModelCardProps {
  model: Model;
  onClick?: (model: Model) => void;
  onEdit?: (model: Model) => void;
  onDelete?: (model: Model) => void;
}

/**
 * 可拖拽的模型卡片
 * @description 使用 useSortable 实现平滑的拖拽排序动画
 */
export function DraggableModelCard({
  model,
  onClick,
  onEdit,
  onDelete
}: DraggableModelCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isSorting
  } = useSortable({ id: model.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    // 仅在拖拽进行中启用 transition，拖拽结束后数据刷新不会触发动画
    transition: isSorting ? transition : undefined,
    opacity: isDragging ? 0 : 1
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        "cursor-grab rounded-md transition-opacity active:cursor-grabbing",
        isDragging && "z-50"
        // isOver && "ring-2 ring-brand-primary-200"
      )}
    >
      <ModelCard
        className="h-full w-full rounded-md"
        model={model}
        onClick={onClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}
