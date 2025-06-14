import { useApi } from "@mocean/mastra/apiClient";

const AssistantAddButton = () => {
  const {
    assistants: { createAssistant },
  } = useApi();

  const handleAddAssistant = () => {
    createAssistant({
      name: "新助手",
      description: "新助手",
      prompt: "新助手",
      type: "assistant",
      emoji: "🤖",
      enableWebSearch: false,
      webSearchProviderId: "",
      enableGenerateImage: false,
      knowledgeRecognition: "",
      modelId: "",
      defaultModelId: "",
    });
  };
  return <div onClick={handleAddAssistant}>AssistantAddButton</div>;
};

export default AssistantAddButton;
