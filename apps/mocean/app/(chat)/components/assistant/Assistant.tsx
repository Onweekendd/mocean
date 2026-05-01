import { useCallback } from "react";

import { useRouter } from "next/navigation";

import type { Assistant } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";
import { useAssistantsSWR } from "@/hooks/useAssistantsSWR";

import AssistantCard from "./AssistantCard";
import CreateAssistantCard from "./CreateAssistantCard";

interface AssistantListProps {
  onClick: (assistant: Assistant) => void;
  onEdit: (assistant: Assistant) => void;
}

const AssistantList: React.FC<AssistantListProps> = ({ onClick, onEdit }) => {
  const router = useRouter();
  const { assistants, isLoading, error } = useAssistantsSWR();
  const { activeAssistantId, setActiveAssistantId, setActiveThreadId } =
    useStore();

  const assistantList = error ? [] : assistants || [];

  const handleDeleted = useCallback(
    (deletedId: string) => {
      if (activeAssistantId === deletedId) {
        setActiveThreadId(null);
        setActiveAssistantId(null);
        router.push("/");
      }
    },
    [activeAssistantId, setActiveAssistantId, setActiveThreadId, router]
  );

  return (
    <div className="h-full pt-2">
      <div className="mx-auto h-full max-w-7xl overflow-y-auto pr-2">
        <div className="flex flex-col gap-3">
          {assistantList.map((assistant) => (
            <AssistantCard
              key={assistant.id}
              assistant={assistant as Assistant}
              onClick={onClick}
              onEdit={onEdit}
              onDeleted={handleDeleted}
            />
          ))}

          <CreateAssistantCard />
        </div>

        {!isLoading && assistantList.length === 0 && (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-sm font-medium text-brand-text">
              还没有AI助手
            </h3>
            <p className="text-[13px] text-brand-text-muted">
              创建你的第一个AI助手
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantList;
