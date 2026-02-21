"use client";

import type { ReactNode } from "react";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { API_URL } from "@mocean/mastra/apiClient";
import type { UIMessage } from "ai";

import { useMastraRuntime } from "@/hooks/useMastraRuntime";

interface MastraRuntimeProviderProps {
  children: ReactNode;
  messages?: UIMessage[];
}

export function MastraRuntimeProvider({
  children,
  messages = []
}: Readonly<MastraRuntimeProviderProps>) {
  const runtime = useMastraRuntime({
    api: `${API_URL}/assistants/chat`,
    initialMessages: messages
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
