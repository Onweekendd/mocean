import { AgentModel } from "@mocean/mastra/prismaType";

const AssistantSelect = ({ agentList }: { agentList: AgentModel[] }) => {
  const defaultAssistant: AgentModel = {
    id: "1",
    name: "默认助手",
    description: "默认助手",
    prompt: "",
    type: "assistant",
    emoji: "",
    groupJson: {},
    enableWebSearch: false,
    webSearchProviderId: "",
    enableGenerateImage: false,
    knowledgeRecognition: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return (
    <div>
      {[defaultAssistant, ...agentList].map((agent) => (
        <div key={agent.id}>
          <div>{agent.name}</div>
          <div>{agent.description}</div>
        </div>
      ))}
    </div>
  );
};

export default AssistantSelect;
