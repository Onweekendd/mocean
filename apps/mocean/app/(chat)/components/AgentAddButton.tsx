import { useApi } from "@mocean/mastra/apiClient";

const AgentAddButton = () => {
  const {
    agents: { createAgent },
  } = useApi();

  const handleAddAgent = () => {
    createAgent({
      name: "新助手",
      description: "新助手",
      prompt: "新助手",
      type: "assistant",
      emoji: "🤖",
      groupJson: {},
      enableWebSearch: false,
      webSearchProviderId: "",
      enableGenerateImage: false,
      knowledgeRecognition: "",
    });
  };
  return <div onClick={handleAddAgent}>AgentAddButton</div>;
};

export default AgentAddButton;
