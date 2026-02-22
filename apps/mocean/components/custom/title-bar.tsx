"use client";

import { useCallback, useEffect, useRef } from "react";

import type { Window } from "@tauri-apps/api/window";
import { Minus, Square, X } from "lucide-react";

export function TitleBar() {
  const appWindowRef = useRef<Window | null>(null);

  useEffect(() => {
    void import("@tauri-apps/api/window").then(({ getCurrentWindow }) => {
      appWindowRef.current = getCurrentWindow();
    });
  }, []);

  const onMinimize = useCallback(() => appWindowRef.current?.minimize(), []);
  const onMaximize = useCallback(
    () => appWindowRef.current?.toggleMaximize(),
    []
  );
  const onClose = useCallback(() => appWindowRef.current?.close(), []);

  return (
    <div
      data-tauri-drag-region
      className="flex h-8 shrink-0 select-none items-center justify-between"
    >
      {/* Left: app title */}
      <div
        data-tauri-drag-region
        className="flex items-center gap-2 pl-3 text-xs font-medium text-muted-foreground"
      >
        墨海AI
      </div>

      {/* Right: window controls */}
      <div className="flex h-full">
        <button
          onClick={onMinimize}
          className="inline-flex h-full w-11 items-center justify-center text-muted-foreground transition-colors hover:bg-foreground/10"
        >
          <Minus className="size-3.5" />
        </button>
        <button
          onClick={onMaximize}
          className="inline-flex h-full w-11 items-center justify-center text-muted-foreground transition-colors hover:bg-foreground/10"
        >
          <Square className="size-3" />
        </button>
        <button
          onClick={onClose}
          className="inline-flex h-full w-11 items-center justify-center text-muted-foreground transition-colors hover:bg-red-500 hover:text-white"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
