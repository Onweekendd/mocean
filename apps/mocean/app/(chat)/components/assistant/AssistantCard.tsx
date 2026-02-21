import type { Assistant } from "@mocean/mastra/prismaType";
import { Bot, Calendar, Globe, Image, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

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

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(date));
  };

  return (
    <Card
      className={`group cursor-pointer transition-all duration-200 hover:shadow-md ${
        isActive
          ? "border-foreground/15 bg-foreground/[0.03] shadow-sm"
          : "hover:border-foreground/10"
      }`}
      onClick={() => onClick(assistant)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-base transition-all duration-200 ${
                isActive
                  ? "bg-foreground/[0.08] text-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {assistant.emoji || <Bot className="h-4 w-4" />}
            </div>
            <div>
              <CardTitle className="text-sm font-medium text-foreground">
                {assistant.name}
              </CardTitle>
              <span className="mt-0.5 block text-xs capitalize text-muted-foreground">
                {isActive ? "当前助手" : assistant.type}
              </span>
            </div>
          </div>

          <div className="flex gap-1">
            {assistant.enableWebSearch && (
              <Badge
                variant="outline"
                className="border-transparent p-0.5 text-muted-foreground/60"
              >
                <Globe className="h-3 w-3" />
              </Badge>
            )}
            {assistant.enableGenerateImage && (
              <Badge
                variant="outline"
                className="border-transparent p-0.5 text-muted-foreground/60"
              >
                <Image className="h-3 w-3" />
              </Badge>
            )}
          </div>
        </div>

        {assistant.description && (
          <CardDescription
            className="mt-2 text-xs"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {assistant.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <div className="rounded-md bg-muted/40 p-2.5">
          <p
            className="text-xs leading-relaxed text-muted-foreground/80"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {assistant.prompt}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-0 text-xs text-muted-foreground/60">
        <div className="flex items-center space-x-1">
          <Calendar className="h-3 w-3" />
          <span>{formatDate(assistant.createdAt)}</span>
        </div>

        {assistant.knowledgeRecognition && (
          <div className="flex items-center space-x-1">
            <Sparkles className="h-3 w-3" />
            <span>知识库</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default AssistantCard;
