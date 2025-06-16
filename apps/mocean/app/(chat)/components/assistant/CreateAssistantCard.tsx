import { Plus, Bot, Sparkles, Wand2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CreateAssistantCardProps {
    onClick: () => void;
}

const CreateAssistantCard: React.FC<CreateAssistantCardProps> = ({ onClick }) => {
    return (
        <Card
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group border-2 border-dashed border-muted-foreground/25 bg-muted/20 hover:border-primary/50"
            onClick={onClick}
        >
            <CardContent className="flex items-center p-6">
                <div className="flex items-center space-x-4 w-full">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                            <Plus className="w-6 h-6" />
                        </div>

                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-background rounded-full shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-200">
                            <Bot className="w-2 h-2 text-blue-500" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                            创建新助手
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            设计专属于你的AI助手，定制独特的对话体验
                        </p>

                        <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                                <Wand2 className="w-3 h-3 mr-1" />
                                自定义
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                                <Sparkles className="w-3 h-3 mr-1" />
                                智能
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                                <Bot className="w-3 h-3 mr-1" />
                                专业
                            </Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CreateAssistantCard;
