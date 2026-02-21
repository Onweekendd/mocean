"use client";

import { type FC, memo, useState } from "react";

import { CheckIcon, CopyIcon } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { TooltipIconButton } from "@/components/tooltip-icon-button";
import { cn } from "@/lib/utils";

import "./markdown-renderer.css";

interface MarkdownRendererProps {
  /**
   * Markdown 字符串内容
   */
  content: string;
  /**
   * 自定义样式类名
   */
  className?: string;
  /**
   * 是否启用 GitHub Flavored Markdown
   */
  enableGfm?: boolean;
}

/**
 * 复制到剪贴板功能的钩子
 */
const useCopyToClipboard = ({
  copiedDuration = 3000
}: {
  copiedDuration?: number;
} = {}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = (value: string) => {
    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), copiedDuration);
    });
  };

  return { isCopied, copyToClipboard };
};

/**
 * 代码块头部组件
 */
const CodeHeader: FC<{ language?: string; code: string }> = ({
  language,
  code
}) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const onCopy = () => {
    if (!code || isCopied) return;
    copyToClipboard(code);
  };

  return (
    <div
      className="flex items-center justify-between gap-4 rounded-t-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-100 dark:bg-gray-800 dark:text-gray-100"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#f5f5f5"
      }}
    >
      <span className="lowercase [&>span]:text-xs">{language || "text"}</span>
      <TooltipIconButton tooltip="复制" onClick={onCopy}>
        {!isCopied && <CopyIcon />}
        {isCopied && <CheckIcon />}
      </TooltipIconButton>
    </div>
  );
};

/**
 * 自定义的 markdown 组件配置
 */
const createMarkdownComponents = (): Components => ({
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight last:mb-0",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mb-4 mt-8 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 last:mb-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mb-4 mt-6 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 last:mb-0",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mb-4 mt-6 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 last:mb-0",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "my-4 text-lg font-semibold first:mt-0 last:mb-0",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn("my-4 font-semibold first:mt-0 last:mb-0", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("mb-5 mt-5 leading-7 first:mt-0 last:mb-0", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn("border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn("my-5 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn("my-5 ml-6 list-decimal [&>li]:mt-2", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-5 border-b", className)} {...props} />
  ),
  table: ({ className, ...props }) => (
    <table
      className={cn(
        "my-5 w-full border-separate border-spacing-0 overflow-y-auto",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "bg-muted px-4 py-2 text-left font-bold first:rounded-tl-lg last:rounded-tr-lg [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border-b border-l px-4 py-2 text-left last:border-r [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn(
        "m-0 border-b p-0 first:border-t [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg",
        className
      )}
      {...props}
    />
  ),
  sup: ({ className, ...props }) => (
    <sup
      className={cn("[&>a]:text-xs [&>a]:no-underline", className)}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }) => {
    // 从 children 中提取代码内容
    const codeElement = Array.isArray(children) ? children[0] : children;
    const code =
      typeof codeElement === "object" && codeElement && "props" in codeElement
        ? String(codeElement.props.children || "")
        : String(children || "");

    // 从 className 中提取语言信息
    const language = className?.replace(/language-/, "") || "";

    return (
      <div className="my-5">
        <CodeHeader language={language} code={code} />
        <pre
          className={cn(
            "overflow-x-auto rounded-b-lg bg-gray-900 p-4 text-gray-100 dark:bg-gray-800 dark:text-gray-100",
            className
          )}
          style={{
            backgroundColor: "#1a1a1a",
            color: "#f5f5f5"
          }}
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
  code: ({ className, ...props }) => {
    // 检查是否在 pre 元素内（代码块）
    const isCodeBlock = className?.includes("language-");

    if (isCodeBlock) {
      // 代码块内的代码
      return (
        <code
          className={cn("font-mono text-gray-100", className)}
          style={{
            color: "#f5f5f5",
            backgroundColor: "transparent"
          }}
          {...props}
        />
      );
    }

    // 行内代码
    return (
      <code
        className={cn(
          "rounded border bg-gray-100 px-1 py-0.5 font-mono text-gray-800 dark:bg-gray-800 dark:text-gray-200",
          className
        )}
        {...props}
      />
    );
  }
});

/**
 * Markdown 渲染组件实现
 */
const MarkdownRendererImpl: FC<MarkdownRendererProps> = ({
  content,
  className,
  enableGfm = true
}) => {
  const remarkPlugins = enableGfm ? [remarkGfm] : [];
  const components = createMarkdownComponents();

  return (
    <div
      className={cn("markdown-content prose prose-gray max-w-none", className)}
    >
      <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

/**
 * Markdown 渲染组件
 *
 * @param content - 要渲染的 markdown 字符串
 * @param className - 自定义样式类名
 * @param enableGfm - 是否启用 GitHub Flavored Markdown 支持
 */
export const MarkdownRenderer = memo(MarkdownRendererImpl);
