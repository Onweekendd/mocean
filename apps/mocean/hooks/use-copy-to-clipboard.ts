"use client";

import * as React from "react";

export function useCopyToClipboard({
  copiedDuration = 3000,
  onCopy
}: {
  copiedDuration?: number;
  onCopy?: () => void;
} = {}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (value: string) => {
    if (!value) return;
    if (typeof window === "undefined") return;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          setIsCopied(true);
          onCopy?.();
          setTimeout(() => setIsCopied(false), copiedDuration);
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error("Failed to copy text:", e);
        });
    } else {
      // 传统后备方案：使用 textarea + execCommand
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Fallback copy failed:", e);
      }

      document.body.removeChild(textarea);
    }
  };

  return { isCopied, copyToClipboard };
}
