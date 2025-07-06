"use client";

import type { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { API_URL } from "@mocean/mastra/apiClient";

import { useMastraRuntime } from "@/hooks/use-mastra-runtime";
import {
  useAssistantThreadsSWR,
  useAssistantUIMessageSWR,
} from "@/hooks/useAssistantsSWR";

import { useStore } from "../store/useStore";

export function MyRuntimeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const router = useRouter();
  const { activeAssistant, activeThread, setActiveThread } = useStore();
  const { refresh } = useAssistantThreadsSWR(activeAssistant?.id || null);
  const { messages: initialMessages } = useAssistantUIMessageSWR(
    activeAssistant?.id || null,
    activeThread || null,
  );

  const runtime = useMastraRuntime({
    api: `${API_URL}/assistants/chat`,
    onCreateThread: (threadId) => {
      setActiveThread(threadId);
      router.replace(`/${activeAssistant?.id}/${threadId}`);
      refresh();
    },
    initialMessages: initialMessages || [],
    threadId: activeThread || undefined,
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
