"use client";

import { useParams } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { LoadingPlaceholder } from "@/components/custom/loading-placeholder";
import { useProviders } from "@/hooks/useProvidersSWR";

import { ProviderSelect } from "./components/ProviderSelect";

interface ProviderLayoutProps {
  children: React.ReactNode;
}

/**
 * 提供商页面布局组件
 * @description 左侧提供商列表，右侧详细内容的分栏布局
 */
export default function ProviderLayout({ children }: ProviderLayoutProps) {
  const params = useParams();
  const selectedProviderId = typeof params.id === "string" ? params.id : null;

  const { providers, isLoading, error } = useProviders();

  if (isLoading) {
    return <LoadingPlaceholder text="加载提供商数据中..." />;
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <Card className="w-96">
          <CardContent className="py-8">
            <div className="text-center">
              <p className="mb-2 text-sm text-destructive">
                加载提供商数据失败
              </p>
              <p className="text-xs text-muted-foreground">{error.message}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen gap-2 overflow-hidden bg-background">
      {/* 左侧提供商列表 */}
      <div className="h-full w-80 flex-shrink-0">
        <ProviderSelect
          providers={providers}
          selectedProviderId={selectedProviderId}
        />
      </div>

      {/* 右侧内容区域 */}
      <div className="h-full min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
