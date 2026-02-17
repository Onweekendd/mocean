"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function AgentPage() {
  const router = useRouter();

  useEffect(() => {
    // 重定向到默认分组
    router.replace("/agent/%E7%B2%BE%E9%80%89"); // encodeURIComponent("精选")
  }, [router]);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary" />
    </div>
  );
}
