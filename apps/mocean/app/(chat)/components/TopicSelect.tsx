import { useEffect } from "react";

import { useApi } from "@mocean/mastra/apiClient";

import { useStore } from "@/app/store/useStore";
import { ThreadList } from "@/components/thread-list";

const TopicSelect = () => {
  const { activeAssistant } = useStore();

  const { topicList, setTopicList } = useStore();

  useEffect(() => {
    if (activeAssistant) {
      // setTopicList(activeAssistant.topicList);
    }
  }, [activeAssistant]);

  return (
    <div>
      <ThreadList />
    </div>
  );
};

export default TopicSelect;
