import type { ComponentProps, FC } from "react";

import { cn } from "@/lib/utils";

import { Textarea } from "../ui/textarea";

type TextareaProps = ComponentProps<typeof Textarea>;

export const AdvanceInput: FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <Textarea
      {...props}
      rows={1}
      autoFocus
      placeholder="有什么可以帮你的吗..."
      className={cn(
        "max-h-40 flex-grow resize-none border-none bg-transparent p-2 text-sm shadow-none outline-none placeholder:text-muted-foreground focus:ring-0 focus-visible:ring-0 disabled:cursor-not-allowed",
        className
      )}
    />
  );
};
