"use client";

import { useRouter } from "next/navigation";

import { type Provider } from "@mocean/mastra/prismaType";

import { ItemList } from "@/components/custom/item-list";

import { renderProviderAvatar } from "./CustomerIcon";

export interface ProviderSelectProps {
  providers: Provider[];
  selectedProviderId: string | null;
  className?: string;
}

/**
 * 提供商选择组件
 * @description 展示可选的提供商列表，支持搜索和选择
 * @rule client-swr-dedup - 使用客户端导航而非全页刷新
 */
export const ProviderSelect: React.FC<ProviderSelectProps> = ({
  providers,
  selectedProviderId
}) => {
  const router = useRouter();

  /**
   * 处理提供商选择
   * @param providerId - 选中的提供商ID
   */
  const handleProviderChange = (providerId: string) => {
    router.push(`/provider/${providerId}`);
  };

  /**
   * 渲染单个提供商项
   * @param provider - 提供商数据
   */
  const renderProviderItem = (provider: Provider) => {
    const isSelected = selectedProviderId === provider.id;

    return (
      <div
        key={provider.id}
        className={`cursor-pointer duration-100 hover:-translate-y-0.5 hover:bg-brand-slate-200/30 hover:shadow-md ${
          isSelected ? "bg-brand-slate-200/50" : ""
        } group rounded-lg p-3`}
        onClick={() => handleProviderChange(provider.id)}
      >
        <div className="flex items-center space-x-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg group-hover:scale-110`}
          >
            {renderProviderAvatar({
              provider,
              className: "h-6 w-6"
            })}
          </div>

          <span
            className={`text-sm font-medium ${
              isSelected
                ? "text-brand-text"
                : "text-brand-text-muted group-hover:text-primary"
            }`}
          >
            {provider.name}
          </span>
        </div>
      </div>
    );
  };

  /**
   * 提供商搜索过滤函数
   * @param provider - 提供商数据
   * @param searchTerm - 搜索词
   */
  const searchFilter = (provider: Provider, searchTerm: string): boolean => {
    const term = searchTerm.toLowerCase();

    return (provider.name.toLowerCase().includes(term) ||
      (provider.id && provider.id.toLowerCase().includes(term))) as boolean;
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <ItemList
          items={providers}
          renderItem={renderProviderItem}
          searchPlaceholder="搜索提供商名称..."
          showStats={false}
          showSearch={false}
          groupName="提供商"
          gridCols={{
            default: 1
          }}
          emptyState={{
            title: "未找到提供商",
            description: "没有找到匹配的提供商"
          }}
          className="h-full pb-4"
          height="h-full"
        />
      </div>

      {selectedProviderId && (
        <div className="mt-4 flex flex-shrink-0 items-center space-x-2 pl-2">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-brand text-xs text-white">
            {providers.find((p) => p.id === selectedProviderId)?.name.charAt(0)}
          </div>

          <span className="text-xs text-muted-foreground">
            当前:{" "}
            <span className="text-base font-medium text-foreground">
              {providers.find((p) => p.id === selectedProviderId)?.name}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};
