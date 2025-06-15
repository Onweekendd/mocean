import { AssistantModel } from "@mocean/mastra/prismaType";
import { useStore } from "@/app/store/useStore";
import AssistantCard from "./AssistantCard";
import CreateAssistantCard from "./CreateAssistantCard";

interface AssistantSelectProps {
  onClick: (assistant: AssistantModel) => void;
}

const AssistantSelect: React.FC<AssistantSelectProps> = ({ onClick }) => {
  const { assistantList } = useStore();

  const handleCreateAssistant = () => {
    // TODO: 实现创建助手的逻辑
    console.log("创建新助手");
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
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
              assistant={assistant}
              onClick={onClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {assistantList.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              还没有AI助手
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              创建你的第一个AI助手，开始个性化的对话体验
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistantSelect;
