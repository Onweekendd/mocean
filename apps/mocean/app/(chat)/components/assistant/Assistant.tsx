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
    <div className="h-full rounded-md bg-gray-50 p-6 pr-0 dark:bg-gray-900">
      <div className="mx-auto h-full max-w-7xl overflow-y-auto pr-2">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            AI 助手
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            选择或创建你的专属AI助手，开始智能对话体验
          </p>
        </div>

        {/* Assistant List */}
        <div className="flex flex-col gap-4">
          {/* Create New Assistant Card */}
          <CreateAssistantCard onClick={handleCreateAssistant} />

          {/* Existing Assistants */}
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
            <div className="mb-4 text-gray-400 dark:text-gray-500">
              <svg
                className="mx-auto mb-4 h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
              还没有AI助手
            </h3>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              创建你的第一个AI助手，开始个性化的对话体验
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantSelect;
