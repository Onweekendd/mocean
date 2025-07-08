"use client";

import type { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { API_URL } from "@mocean/mastra/apiClient";

import { useMastraRuntime } from "@/hooks/use-mastra-runtime";
import { useAssistantThreadsSWR } from "@/hooks/useAssistantsSWR";

import { useStore } from "../store/useStore";

export function MastraRuntimeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const router = useRouter();
  const { activeAssistant, setActiveThread } = useStore();
  const { refresh: refreshThread } = useAssistantThreadsSWR(
    activeAssistant?.id || null,
  );

  const runtime = useMastraRuntime({
    api: `${API_URL}/assistants/chat`,
    onCreateThread: (threadId) => {
      setActiveThread(threadId);
      router.replace(`/${activeAssistant?.id}/${threadId}`);
      setTimeout(() => {
        refreshThread();
      }, 5000);
    },
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
