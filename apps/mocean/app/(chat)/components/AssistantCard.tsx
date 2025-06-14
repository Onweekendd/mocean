import { AssistantModel } from "@mocean/mastra/prismaType";
import { Bot, Calendar, Globe, Image, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AssistantCardProps {
    assistant: AssistantModel;
    onClick: (assistant: AssistantModel) => void;
}

const AssistantCard: React.FC<AssistantCardProps> = ({ assistant, onClick }) => {
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('zh-CN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }).format(new Date(date));
    };

    return (
        <Card
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group"
            onClick={() => onClick(assistant)}
        >
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                            {assistant.emoji || <Bot className="w-5 h-5" />}
                        </div>
                        <div>
                            <CardTitle className="text-base group-hover:text-blue-600 transition-colors">
                                {assistant.name}
                            </CardTitle>
                            <Badge variant="secondary" className="mt-1 text-xs capitalize">
                                {assistant.type}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex space-x-1">
                        {assistant.enableWebSearch && (
                            <Badge variant="outline" className="p-1">
                                <Globe className="w-3 h-3 text-green-600" />
                            </Badge>
                        )}
                        {assistant.enableGenerateImage && (
                            <Badge variant="outline" className="p-1">
                                <Image className="w-3 h-3 text-purple-600" />
                            </Badge>
                        )}
                    </div>
                </div>

                {assistant.description && (
                    <CardDescription className="mt-2" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {assistant.description}
                    </CardDescription>
                )}
            </CardHeader>

            <CardContent className="pt-0">
                <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-xs text-muted-foreground" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {assistant.prompt}
                    </p>
                </div>
            </CardContent>

            <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(assistant.createdAt)}</span>
                </div>

                {assistant.knowledgeRecognition && (
                    <div className="flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>知识库</span>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default AssistantCard;
