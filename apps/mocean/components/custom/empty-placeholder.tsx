import { type LucideIcon } from "lucide-react";

interface HintItem {
  icon: LucideIcon;
  text: string;
}

interface EmptyPlaceholderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hints?: HintItem[];
}

export function EmptyPlaceholder({
  icon: Icon,
  title,
  description,
  hints,
}: EmptyPlaceholderProps) {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="flex max-w-md flex-col items-center px-6 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(var(--brand-primary-50))] dark:bg-[hsl(var(--brand-primary-950))]">
          <Icon className="h-8 w-8 text-[hsl(var(--brand-primary-500))]" />
        </div>

        <h1 className="mb-2 text-2xl font-semibold text-foreground">
          {title}
        </h1>

        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {hints && hints.length > 0 && (
          <div className="flex flex-col gap-3 self-stretch">
            {hints.map((hint, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/40 px-4 py-3 text-left"
              >
                <hint.icon className="h-4 w-4 shrink-0 text-[hsl(var(--brand-primary-400))]" />
                <span className="text-sm text-muted-foreground">
                  {hint.text}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
