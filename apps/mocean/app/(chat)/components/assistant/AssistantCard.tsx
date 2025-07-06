import { AssistantModel } from "@mocean/mastra/prismaType";
import { Bot, Calendar, Globe, Image, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useStore } from "../../../store/useStore";

interface AssistantCardProps {
  assistant: AssistantModel;
  onClick: (assistant: AssistantModel) => void;
}

const AssistantCard: React.FC<AssistantCardProps> = ({
  assistant,
  onClick,
}) => {
  const { activeAssistant } = useStore();
  const isActive = activeAssistant?.id === assistant.id;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <Card
      className={`group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isActive ? "border-purple-500 shadow-md ring-1 ring-purple-500/20" : ""
      }`}
      onClick={() => onClick(assistant)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-semibold text-white transition-all duration-200 ${
                isActive
                  ? "scale-105 bg-gradient-to-br from-purple-500 to-purple-700"
                  : "bg-gradient-to-br from-blue-500 to-purple-600"
              }`}
            >
              {assistant.emoji || <Bot className="h-5 w-5" />}
            </div>
            <div>
              <CardTitle
                className={`text-base transition-colors ${
                  isActive
                    ? "font-semibold text-purple-600"
                    : "group-hover:text-primary"
                }`}
              >
                {assistant.name}
              </CardTitle>
              <Badge
                variant={isActive ? "default" : "secondary"}
                className={`mt-1 text-xs capitalize ${
                  isActive
                    ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
                    : ""
                }`}
              >
                {isActive ? "当前助手" : assistant.type}
              </Badge>
            </div>
          </div>

          <div className="flex space-x-1">
            {assistant.enableWebSearch && (
              <Badge variant="outline" className="p-1">
                <Globe className="h-3 w-3 text-green-600" />
              </Badge>
            )}
            {assistant.enableGenerateImage && (
              <Badge variant="outline" className="p-1">
                <Image className="h-3 w-3 text-purple-600" />
              </Badge>
            )}
          </div>
        </div>

        {assistant.description && (
          <CardDescription
            className="mt-2"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {assistant.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className={`rounded-md p-3 ${
            isActive ? "bg-purple-100 dark:bg-purple-900/30" : "bg-muted/50"
          }`}
        >
          <p
            className="text-xs text-muted-foreground"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {assistant.prompt}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-0 text-xs text-muted-foreground">
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
