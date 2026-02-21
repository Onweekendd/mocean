import type { FC } from "react";

import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoadingProps {
  /**
   * 加载文本
   */
  text?: string;
  /**
   * 是否显示加载动画
   */
  showSpinner?: boolean;
  /**
   * 自定义样式类名
   */
  className?: string;
  /**
   * 加载器大小
   */
  size?: "sm" | "md" | "lg";
}

/**
 * 通用加载组件
 *
 * @param text - 加载文本
 * @param showSpinner - 是否显示加载动画
 * @param className - 自定义样式类名
 * @param size - 加载器大小
 * @returns Loading 组件
 *
 * @example
 * // 基础用法
 * <Loading text="加载中..." />
 *
 * // 自定义样式
 * <Loading text="请稍候" className="text-primary" size="lg" />
 */
export const Loading: FC<LoadingProps> = ({
  text = "加载中...",
  showSpinner = true,
  className,
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 p-8",
        className
      )}
    >
      {showSpinner && (
        <Loader2
          className={cn(
            "animate-spin text-muted-foreground",
            sizeClasses[size]
          )}
        />
      )}
      {text && (
        <p className="text-center text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  );
};

/**
 * 全屏加载组件
 *
 * @param text - 加载文本
 * @param showSpinner - 是否显示加载动画
 * @param size - 加载器大小
 * @returns 全屏 Loading 组件
 *
 * @example
 * // 全屏加载
 * <FullScreenLoading text="正在初始化..." />
 */
export const FullScreenLoading: FC<Omit<LoadingProps, "className">> = ({
  text,
  showSpinner,
  size
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loading
        text={text}
        showSpinner={showSpinner}
        size={size}
        className="rounded-xl border bg-card shadow-lg"
      />
    </div>
  );
};

/**
 * 内联加载组件
 *
 * @param text - 加载文本
 * @param showSpinner - 是否显示加载动画
 * @param size - 加载器大小
 * @returns 内联 Loading 组件
 *
 * @example
 * // 内联加载
 * <InlineLoading text="保存中..." />
 */
export const InlineLoading: FC<Omit<LoadingProps, "className">> = ({
  text,
  showSpinner,
  size
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {showSpinner && (
        <Loader2 className={cn("animate-spin", sizeClasses[size || "md"])} />
      )}
      {text && <span>{text}</span>}
    </div>
  );
};
