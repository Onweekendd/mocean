"use client";

import type { ReactNode } from "react";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { API_URL } from "@mocean/mastra/apiClient";

import { useMastraRuntime } from "@/hooks/use-mastra-runtime";

export function MastraRuntimeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const runtime = useMastraRuntime({
    api: `${API_URL}/assistants/chat`,
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
