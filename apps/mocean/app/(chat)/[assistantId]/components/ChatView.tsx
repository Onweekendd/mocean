import type { FC } from "react";

import type { UIMessage } from "ai";

import { MastraRuntimeProvider } from "@/app/context/MastraRuntimeProvider";
import { Thread } from "@/components/thread";

interface ChatViewProps {
  messages?: UIMessage[];
}

const ChatView: FC<ChatViewProps> = ({ messages = [] }) => {
  return (
    <MastraRuntimeProvider messages={messages}>
      <Thread />
    </MastraRuntimeProvider>
  );
};

export default ChatView;

export { ChatView };
