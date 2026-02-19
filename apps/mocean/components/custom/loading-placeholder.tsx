import { Loader2 } from "lucide-react";

interface LoadingPlaceholderProps {
  text?: string;
}

export function LoadingPlaceholder({ text = "加载中..." }: LoadingPlaceholderProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex items-center space-x-2">
        <Loader2 className="h-6 w-6 animate-spin text-[hsl(var(--brand-primary-500))]" />
        <span className="text-sm text-muted-foreground">{text}</span>
      </div>
    </div>
  );
}
