import { useRouter } from "next/navigation";

import type { Assistant } from "@mocean/mastra/prismaType";

import { useAssistantsSWR } from "@/hooks/useAssistantsSWR";

import AssistantCard from "./AssistantCard";
import CreateAssistantCard from "./CreateAssistantCard";

interface AssistantListProps {
  onClick: (assistant: Assistant) => void;
}

const AssistantList: React.FC<AssistantListProps> = ({ onClick }) => {
  const router = useRouter();
  const { assistants, isLoading, error } = useAssistantsSWR();

  const assistantList = error ? [] : assistants || [];

  const handleCreateAssistant = () => {
    router.push("/agent");
  };

  return (
    <div className="h-full pt-2">
      <div className="mx-auto h-full max-w-7xl overflow-y-auto pr-2">
        {/* Assistant List */}
        <div className="flex flex-col gap-3">
          {assistantList.map((assistant) => (
            <AssistantCard
            key={assistant.id}
            assistant={assistant as Assistant}
            onClick={onClick}
            />
          ))}

          <CreateAssistantCard onClick={handleCreateAssistant} />
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

export default AssistantList;
