import React, { useMemo, useState } from "react";

import { Filter, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface ItemListProps<T> {
  /** 数据列表 */
  items: T[];
  /** 渲染单个项目的函数 */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** 搜索过滤函数 */
  searchFilter?: (item: T, searchTerm: string) => boolean;
  /** 分组过滤函数 */
  groupFilter?: (item: T, selectedGroup: string | null) => boolean;
  /** 当前选中的分组 */
  selectedGroup?: string | null;
  /** 搜索框占位符 */
  searchPlaceholder?: string;
  /** 是否显示搜索框 */
  showSearch?: boolean;
  /** 是否显示统计信息 */
  showStats?: boolean;
  /** 统计信息中的分组名称 */
  groupName?: string;
  /** 网格布局的列数配置 */
  gridCols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
  /** 是否加载中 */
  loading?: boolean;
  /** 加载中的提示文本 */
  loadingText?: string;
  /** 空状态的提示 */
  emptyState?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    action?: React.ReactNode;
  };
  /** 自定义类名 */
  className?: string;
  /** 容器高度 */
  height?: string;
}

/**
 * 通用物品列表组件
 * @description 支持搜索、过滤、分组显示的通用列表组件
 *
 * @param items - 数据列表
 * @param renderItem - 渲染单个项目的函数
 * @param [searchFilter] - 搜索过滤函数
 * @param [groupFilter] - 分组过滤函数
 * @param [selectedGroup] - 当前选中的分组
 * @param [searchPlaceholder] - 搜索框占位符
 * @param [showSearch] - 是否显示搜索框
 * @param [showStats] - 是否显示统计信息
 * @param [groupName] - 统计信息中的分组名称
 * @param [gridCols] - 网格布局的列数配置
 * @param [loading] - 是否加载中
 * @param [loadingText] - 加载中的提示文本
 * @param [emptyState] - 空状态的提示
 * @param [className] - 自定义类名
 * @param [height] - 容器高度
 *
 * @example
 * // 基本使用
 * <ItemList
 *   items={agents}
 *   renderItem={(agent) => <AgentCard agent={agent} />}
 *   searchFilter={(agent, term) => agent.name.includes(term)}
 *   searchPlaceholder="搜索智能体..."
 * />
 */
export function ItemList<T>({
  items,
  renderItem,
  searchFilter,
  groupFilter,
  selectedGroup = null,
  searchPlaceholder = "搜索...",
  showSearch = true,
  showStats = true,
  groupName = "项目",
  gridCols = {
    default: 1,
    lg: 2,
    xl: 3,
    "2xl": 4,
  },
  loading = false,
  loadingText = "加载中...",
  emptyState,
  className = "",
  height = "h-full",
}: ItemListProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * 过滤后的数据列表
   */
  const filteredItems = useMemo(() => {
    let filtered = items;

    // 分组过滤
    if (groupFilter && selectedGroup) {
      filtered = filtered.filter((item) => groupFilter(item, selectedGroup));
    }

    // 搜索过滤
    if (searchFilter && searchTerm.trim()) {
      filtered = filtered.filter((item) =>
        searchFilter(item, searchTerm.trim()),
      );
    }

    return filtered;
  }, [items, groupFilter, selectedGroup, searchFilter, searchTerm]);

  /**
   * 获取网格类名
   */
  const getGridClassName = () => {
    const colsMap: Record<number, string> = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    };

    let className = "grid gap-4";

    if (gridCols.default) {
      className += ` ${colsMap[gridCols.default] || "grid-cols-1"}`;
    }
    if (gridCols.sm) {
      className += ` sm:${colsMap[gridCols.sm]}`;
    }
    if (gridCols.md) {
      className += ` md:${colsMap[gridCols.md]}`;
    }
    if (gridCols.lg) {
      className += ` lg:${colsMap[gridCols.lg]}`;
    }
    if (gridCols.xl) {
      className += ` xl:${colsMap[gridCols.xl]}`;
    }
    if (gridCols["2xl"]) {
      className += ` 2xl:${colsMap[gridCols["2xl"]]}`;
    }

    return className;
  };

  // 加载状态
  if (loading) {
    return (
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-b-2 border-primary" />
            <p className="text-sm text-muted-foreground">{loadingText}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", height, className)}>
      {/* 头部区域 - 搜索和统计 */}
      {(showSearch || showStats) && (
        <div className="flex-shrink-0 space-y-4 p-4">
          {/* 搜索框 */}
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          )}

          {/* 统计信息 */}
          {showStats && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="font-normal">
                  {selectedGroup || "全部"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  显示 {filteredItems.length} 个，共 {items.length} 个
                  {groupName}
                </span>
              </div>

              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="h-8 px-2"
                >
                  清除搜索
                </Button>
              )}
            </div>
          )}
        </div>
      )}

      {/* 内容区域 */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4">
            {filteredItems.length === 0 ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    {emptyState?.icon || (
                      <Filter className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    {emptyState?.title ||
                      (searchTerm ? "未找到匹配的项目" : `暂无${groupName}`)}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {emptyState?.description ||
                      (searchTerm
                        ? `没有找到包含 "${searchTerm}" 的${groupName}`
                        : selectedGroup
                          ? `"${selectedGroup}" 分组下暂无${groupName}`
                          : `暂时没有任何${groupName}`)}
                  </p>
                  {emptyState?.action ||
                    (searchTerm && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSearchTerm("")}
                      >
                        清除搜索条件
                      </Button>
                    ))}
                </div>
              </div>
            ) : (
              <div className={getGridClassName()}>
                {filteredItems.map((item, index) => renderItem(item, index))}
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
