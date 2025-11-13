import React from "react";

import Image from "next/image";

import { Model } from "@mocean/mastra/prismaType";
import { Brain, Database, Edit, Eye, Search, Trash2, Zap } from "lucide-react";

import { ItemCard } from "@/components/custom/item-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { getModelLogo } from "../constant";

/**
 * 模型类型图标映射
 */
const MODEL_TYPE_ICONS = {
  text: Brain,
  vision: Eye,
  embedding: Database,
  reasoning: Zap,
  function_calling: Zap,
  web_search: Search,
} as const;

/**
 * 获取模型类型的颜色样式
 * @param type - 模型类型
 */
const getModelTypeColor = (type: string) => {
  const colorMap = {
    text: "bg-blue-100 text-info dark:bg-blue-900/30",
    vision: "bg-purple-100 text-brand-primary dark:bg-purple-900/30",
    embedding: "bg-green-100 text-success dark:bg-green-900/30",
    reasoning: "bg-orange-100 text-orange-600 dark:bg-orange-900/30",
    function_calling: "bg-red-100 text-red-600 dark:bg-red-900/30",
    web_search: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30",
  };
  return (
    colorMap[type as keyof typeof colorMap] ||
    "bg-gray-100 text-gray-600 dark:bg-gray-900/30"
  );
};

/**
 * 获取模型类型的中文名称
 * @param type - 模型类型
 */
const getModelTypeName = (type: string) => {
  const nameMap = {
    text: "文本",
    vision: "视觉",
    embedding: "向量",
    reasoning: "推理",
    function_calling: "函数调用",
    web_search: "网络搜索",
  };
  return nameMap[type as keyof typeof nameMap] || type;
};

export interface ModelCardProps {
  model: Model;
  onClick?: (model: Model) => void;
  onEdit?: (model: Model) => void;
  onDelete?: (model: Model) => void;
  className?: string;
}

/**
 * 模型卡片组件
 * @description 使用通用ItemCard组件显示模型信息，包含编辑和删除操作
 *
 * @param model - 模型数据
 * @param [onClick] - 点击回调函数
 * @param [onEdit] - 编辑回调函数
 * @param [onDelete] - 删除回调函数
 * @param [className] - 自定义类名
 *
 * @example
 * // 显示模型卡片，带操作按钮
 * <ModelCard
 *   model={modelData}
 *   onClick={(model) => console.log("选中模型:", model.name)}
 *   onEdit={(model) => console.log("编辑模型:", model.name)}
 *   onDelete={(model) => console.log("删除模型:", model.name)}
 * />
 */
export const ModelCard: React.FC<ModelCardProps> = ({
  model,
  onClick,
  onEdit,
  onDelete,
  className = "",
}) => {
  const modelLogo = getModelLogo(model.id as keyof typeof getModelLogo);
  const modelTypes = (
    Array.isArray(model.typeJson) ? model.typeJson : []
  ) as string[];

  /**
   * 渲染模型头像
   */
  const renderModelAvatar = () => {
    if (modelLogo) {
      return (
        <Image
          src={modelLogo}
          alt={model.name}
          width={40}
          height={40}
          className="rounded-lg"
        />
      );
    }

    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-sm text-white">
        {model.name.charAt(0).toUpperCase()}
      </div>
    );
  };

  /**
   * 渲染模型类型标签
   */
  const renderModelTypeBadges = () => {
    return modelTypes.map((type) => {
      const Icon =
        MODEL_TYPE_ICONS[type as keyof typeof MODEL_TYPE_ICONS] || Brain;
      return {
        label: (
          <div className="flex items-center space-x-1">
            <Icon className="h-3 w-3" />
            <span>{getModelTypeName(type)}</span>
          </div>
        ),
        variant: "secondary" as const,
        className: getModelTypeColor(type),
      };
    });
  };

  /**
   * 渲染操作按钮
   */
  const renderActions = () => {
    if (!onEdit && !onDelete) return null;

    return (
      <div className="flex items-center space-x-1">
        {onEdit && (
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(model);
            }}
            className="h-8 w-8 p-0"
            title="编辑模型"
          >
            <Edit className="h-4 w-4" />
          </Button>
        )}
        {onDelete && (
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(model);
            }}
            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
            title="删除模型"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  };

  /**
   * 渲染底部信息
   */
  const renderFooter = () => {
    return (
      <div className="space-y-2">
        {/* 模型ID和操作按钮 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">模型ID:</span>
            <code className="rounded bg-muted px-2 py-1 font-mono text-xs">
              {model.id}
            </code>
          </div>
          {renderActions()}
        </div>

        {/* 拥有者信息 */}
        {model.owned_by && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">拥有者:</span>
            <Badge variant="outline" className="text-xs">
              {model.owned_by}
            </Badge>
          </div>
        )}
      </div>
    );
  };

  return (
    <ItemCard
      title={model.name}
      description={model.description ?? ""}
      avatar={renderModelAvatar()}
      badges={renderModelTypeBadges()}
      footer={renderFooter()}
      onClick={() => onClick?.(model)}
      className={className}
    />
  );
};
