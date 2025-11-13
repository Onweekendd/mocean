import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ItemCardProps {
  /** 主标题 */
  title: string;
  /** 副标题或描述 */
  description?: string;
  /** 头像或图标元素 */
  avatar?: React.ReactNode;
  /** 标签列表 */
  badges?: Array<{
    label: string | React.ReactNode;
    variant?: "default" | "secondary" | "outline";
    className?: string;
  }>;
  /** 底部信息 */
  footer?: React.ReactNode;
  /** 主要操作按钮 */
  primaryAction?: {
    label: string;
    onClick: () => void;
    loading?: boolean;
    disabled?: boolean;
  };
  /** 次要操作按钮 */
  secondaryAction?: {
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
  };
  /** 点击整个卡片的回调 */
  onClick?: () => void;
  /** 是否选中状态 */
  selected?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 内容区域的自定义渲染 */
  children?: React.ReactNode;
}

/**
 * 通用物品卡片组件
 * @description 可复用的卡片组件，支持头像、标题、描述、标签、操作按钮等
 *
 * @param title - 主标题
 * @param [description] - 副标题或描述
 * @param [avatar] - 头像或图标元素
 * @param [badges] - 标签列表
 * @param [footer] - 底部信息
 * @param [primaryAction] - 主要操作按钮配置
 * @param [secondaryAction] - 次要操作按钮配置
 * @param [onClick] - 点击整个卡片的回调
 * @param [selected] - 是否选中状态
 * @param [loading] - 是否加载中
 * @param [className] - 自定义类名
 * @param [children] - 内容区域的自定义渲染
 *
 * @example
 * // 基本使用
 * <ItemCard
 *   title="智能体名称"
 *   description="这是一个智能体的描述"
 *   avatar={<Avatar />}
 *   badges={[{ label: "AI", variant: "secondary" }]}
 *   onClick={() => console.log("点击卡片")}
 * />
 *
 * @example
 * // 带操作按钮
 * <ItemCard
 *   title="提供商名称"
 *   selected={true}
 *   primaryAction={{
 *     label: "使用",
 *     onClick: () => console.log("使用提供商")
 *   }}
 * />
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  avatar,
  badges = [],
  footer,
  primaryAction,
  secondaryAction,
  onClick,
  selected = false,
  className = "",
  children,
}) => {
  const hasActions = primaryAction || secondaryAction;

  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        selected && "border-brand-primary bg-brand-primary/10",
        !selected && "hover:bg-muted/20",
        className,
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex min-w-0 flex-1 items-center space-x-3">
            {/* 头像/图标 */}
            {avatar && (
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                {avatar}
              </div>
            )}

            {/* 标题区域 */}
            <div className="min-w-0 flex-1">
              <CardTitle className="truncate text-lg font-semibold transition-colors group-hover:text-primary">
                {title}
              </CardTitle>
              {description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* 次要操作按钮 */}
          {secondaryAction && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                secondaryAction.onClick();
              }}
              disabled={secondaryAction.disabled}
            >
              {secondaryAction.icon}
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* 自定义内容 */}
        {children}

        {/* 标签区域 */}
        {badges.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant={badge.variant || "secondary"}
                className={cn("px-2 py-1 text-xs", badge.className)}
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        )}

        {/* 底部区域 */}
        {(footer || hasActions) && (
          <div className="flex items-center justify-between">
            {/* 底部信息 */}
            {footer && <div className="min-w-0 flex-1">{footer}</div>}

            {/* 主要操作按钮 */}
            {primaryAction && (
              <Button
                size="sm"
                className="h-8 px-3 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  primaryAction.onClick();
                }}
                disabled={primaryAction.disabled || primaryAction.loading}
              >
                {primaryAction.loading ? "处理中..." : primaryAction.label}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
