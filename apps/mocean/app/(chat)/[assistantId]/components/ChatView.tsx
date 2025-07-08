import { FC } from "react";

import { MastraRuntimeProvider } from "@/app/context/MastraRuntimeProvider";
import { Thread } from "@/components/thread";

const ChatView: FC = () => {
  return (
    <MastraRuntimeProvider>
      <Thread />
    </MastraRuntimeProvider>
  );
};

export default ChatView;
