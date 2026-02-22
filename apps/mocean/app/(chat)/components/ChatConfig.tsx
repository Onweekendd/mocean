"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import type { Assistant } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";

import ThreadSelect from "./ThreadSelect";
import AssistantList from "./assistant/Assistant";

type View = "assistants" | "threads";

const ChatConfig: React.FC = () => {
  const router = useRouter();
  const {
    activeAssistantId,
    setActiveAssistantId,
    setActiveThreadId: setActiveThread
  } = useStore();

  // Track current and previous view for animation direction
  const [view, setView] = useState<View>(
    activeAssistantId ? "threads" : "assistants"
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync view with activeAssistantId from URL params
  useEffect(() => {
    if (activeAssistantId && view === "assistants") {
      setView("threads");
    }
  }, [activeAssistantId]);

  const onAssistantSelect = useCallback(
    (assistant: Assistant) => {
      setActiveThread(null);
      setActiveAssistantId(assistant.id);
      setIsAnimating(true);
      setView("threads");
      router.push(`/${assistant.id}`);
    },
    [router, setActiveAssistantId, setActiveThread]
  );

  const onBack = useCallback(() => {
    setIsAnimating(true);
    setView("assistants");
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-[18rem] flex-col overflow-hidden px-2"
    >
      {/* Assistants View */}
      <div
        className={`absolute inset-0 px-2 transition-transform duration-300 ease-out ${
          view === "assistants" ? "translate-x-0" : "-translate-x-full"
        } ${!isAnimating && view !== "assistants" ? "invisible" : ""}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <AssistantList
          onClick={(assistant) => void onAssistantSelect(assistant)}
        />
      </div>

      {/* Threads View */}
      <div
        className={`absolute inset-0 px-2 transition-transform duration-300 ease-out ${
          view === "threads" ? "translate-x-0" : "translate-x-full"
        } ${!isAnimating && view !== "threads" ? "invisible" : ""}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <ThreadSelect onBack={onBack} />
      </div>
    </div>
  );
};

export default ChatConfig;
