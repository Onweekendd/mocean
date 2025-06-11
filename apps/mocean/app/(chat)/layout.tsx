import ChatConfig from "./components/ChatConfig";

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full pt-2">
      <ChatConfig agentList={[]} />
      {children}
    </div>
  );
};

export default ChatLayout;
