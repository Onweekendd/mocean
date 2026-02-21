import type { Assistant } from "@mocean/mastra/prismaType";

import { useAssistantsSWR } from "@/hooks/useAssistantsSWR";

import AssistantCard from "./AssistantCard";
import CreateAssistantCard from "./CreateAssistantCard";

interface AssistantSelectProps {
  onClick: (assistant: Assistant) => void;
}

const AssistantSelect: React.FC<AssistantSelectProps> = ({ onClick }) => {
  const { assistants, isLoading, error } = useAssistantsSWR();

  const assistantList = error ? [] : assistants || [];

  const handleCreateAssistant = () => {
    // TODO: 实现创建助手的逻辑
    console.log("创建新助手");
  };

  return (
    <div className="h-full p-5 pr-0">
      <div className="mx-auto h-full max-w-7xl overflow-y-auto pr-2">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-1 text-xl font-semibold text-foreground">
            AI 助手
          </h1>
          <p className="text-[13px] text-muted-foreground">
            选择或创建你的专属AI助手
          </p>
        </div>

        {/* Assistant List */}
        <div className="flex flex-col gap-3">
          <CreateAssistantCard onClick={handleCreateAssistant} />

          {assistantList.map((assistant) => (
            <AssistantCard
              key={assistant.id}
              assistant={assistant as Assistant}
              onClick={onClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {!isLoading && assistantList.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-sm font-medium text-foreground">
              还没有AI助手
            </h3>
            <p className="text-[13px] text-muted-foreground">
              创建你的第一个AI助手
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantSelect;
