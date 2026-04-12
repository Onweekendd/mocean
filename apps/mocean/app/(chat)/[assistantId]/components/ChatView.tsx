import type { FC } from "react";

import { AuiProvider, useAui } from "@assistant-ui/react";
import type { UIMessage } from "ai";

import { MastraRuntimeProvider } from "@/app/context/MastraRuntimeProvider";
import { Thread } from "@/components/thread";

interface ChatViewProps {
  messages?: UIMessage[];
}

const ChatView: FC<ChatViewProps> = ({ messages = [] }) => {
  const aui = useAui();

  return (
    <AuiProvider value={aui}>
      <MastraRuntimeProvider messages={messages}>
        <Thread />
      </MastraRuntimeProvider>
    </AuiProvider>
  );
};

export default ChatView;

export { ChatView };
