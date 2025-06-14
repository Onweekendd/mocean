"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { BASE_URL } from "@mocean/mastra/apiClient";

import ChatConfig from "./components/ChatConfig";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const runtime = useChatRuntime({
    api: `${BASE_URL}/assistants/chat`,
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="flex h-full pt-2">
        <ChatConfig />
        {children}
      </div>
    </AssistantRuntimeProvider>
  );
};

export default ChatLayout;
