import { Plus, Bot, Sparkles, Wand2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
            <CardContent className="flex flex-col items-center justify-center p-8 min-h-[280px] text-center">
                <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-200">
                        <Plus className="w-8 h-8" />
                    </div>

                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-background rounded-full shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-200">
                        <Bot className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="absolute -bottom-1 -left-2 w-6 h-6 bg-background rounded-full shadow-lg flex items-center justify-center group-hover:-rotate-12 transition-transform duration-200">
                        <Sparkles className="w-3 h-3 text-purple-500" />
                    </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    创建新助手
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                    设计专属于你的AI助手，定制独特的对话体验
                </p>

                <div className="flex items-center justify-center space-x-2">
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
            </CardContent>
        </Card>
    );
};

export default CreateAssistantCard;
