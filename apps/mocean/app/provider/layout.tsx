"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Loader2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useProvidersSWR } from "@/hooks/useProvidersSWR";

import { ProviderSelect } from "./components/ProviderSelect";

interface ProviderLayoutProps {
  children: React.ReactNode;
}

/**
 * 提供商页面布局组件
 * @description 左侧提供商列表，右侧详细内容的分栏布局
 */
export default function ProviderLayout({ children }: ProviderLayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProviderId = searchParams.get("provider");

  const { providers, isLoading, error } = useProvidersSWR();

  /**
   * 处理提供商选择变化
   * @param providerId - 选中的提供商ID
   */
  const onProviderChange = (providerId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("provider", providerId);
    router.push(`/provider?${params.toString()}`);
  };

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-sm text-muted-foreground">加载提供商数据中...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <Card className="w-96">
          <CardContent className="py-8">
            <div className="text-center">
              <p className="mb-2 text-sm text-destructive">加载提供商数据失败</p>
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
          onProviderChange={onProviderChange}
        />
      </div>

      {/* 右侧内容区域 */}
      <div className="h-full min-w-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
