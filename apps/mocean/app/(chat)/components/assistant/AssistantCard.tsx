import type { Assistant } from "@mocean/mastra/prismaType";
import { Bot, Sparkles } from "lucide-react";

import { useStore } from "../../../store/useStore";

interface AssistantCardProps {
  assistant: Assistant;
  onClick: (assistant: Assistant) => void;
}

const AssistantCard: React.FC<AssistantCardProps> = ({
  assistant,
  onClick
}) => {
  const { activeAssistantId } = useStore();
  const isActive = activeAssistantId === assistant.id;

  return (
    <div
      className={`group relative cursor-pointer rounded-lg px-3 py-2.5 transition-all duration-150 ${
        isActive ? "bg-primary/[0.06]" : "hover:bg-muted/40"
      }`}
      onClick={() => onClick(assistant)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
            isActive
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {assistant.emoji || <Bot className="h-4 w-4" />}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-medium text-foreground">
              {assistant.name}
            </span>
            {isActive && <Sparkles className="h-3 w-3 shrink-0 text-primary" />}
          </div>
          {assistant.description && (
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {assistant.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssistantCard;
