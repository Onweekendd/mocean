"use client";

import { useEffect } from "react";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";

import { Thread } from "@/components/thread";
import { ThreadList } from "@/components/thread-list";

export const Assistant = () => {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  useEffect(() => {
    fetch("http://localhost:4111/get-agents").then(async (res) => {
      const result = await res.json();
      console.log(result);
    });
  }, []);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
        <ThreadList />

        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
};
