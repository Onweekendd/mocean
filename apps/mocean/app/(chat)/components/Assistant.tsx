import { AssistantModel } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";

interface AssistantSelectProps {
  onClick: (assistant: AssistantModel) => void;
}

const AssistantSelect: React.FC<AssistantSelectProps> = ({ onClick }) => {
  const { assistantList } = useStore();
  return (
    <div>
      {assistantList.map((assistant) => (
        <div key={assistant.id} onClick={() => onClick(assistant)}>
          <div>{assistant.name}</div>
        </div>
      ))}
    </div>
  );
};

export default AssistantSelect;
