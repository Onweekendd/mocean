import { Plus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface CreateAssistantCardProps {
  onClick: () => void;
}

const CreateAssistantCard: React.FC<CreateAssistantCardProps> = ({
  onClick
}) => {
  return (
    <Card
      className="group cursor-pointer border border-dashed border-foreground/10 bg-transparent transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/[0.02]"
      onClick={onClick}
    >
      <CardContent className="flex items-center p-4">
        <div className="flex w-full items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
            <Plus className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
              创建新助手
            </h3>
            <p className="text-xs text-muted-foreground/60">
              自定义专属AI助手
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateAssistantCard;
