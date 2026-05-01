"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import type { Assistant } from "@mocean/mastra/prismaType";

import { useStore } from "@/app/store/useStore";

import ThreadSelect from "./ThreadSelect";
import AssistantList from "./assistant/Assistant";
import AssistantSettingsPanel from "./assistant/AssistantSettingsPanel";

type View = "assistants" | "threads" | "settings";

const getTranslateClass = (panelView: View, currentView: View): string => {
  const order: View[] = ["assistants", "threads", "settings"];
  const panelIdx = order.indexOf(panelView);
  const currentIdx = order.indexOf(currentView);
  if (panelIdx === currentIdx) return "translate-x-0";
  if (panelIdx < currentIdx) return "-translate-x-full";
  return "translate-x-full";
};

const ChatConfig: React.FC = () => {
  const router = useRouter();
  const {
    activeAssistantId,
    setActiveAssistantId,
    setActiveThreadId: setActiveThread
  } = useStore();

  const [view, setView] = useState<View>(
    activeAssistantId ? "threads" : "assistants"
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeAssistantId && view === "assistants") {
      setView("threads");
    }
  }, [activeAssistantId]);

  const navigateTo = useCallback((nextView: View) => {
    setIsAnimating(true);
    setView(nextView);
  }, []);

  const onAssistantSelect = useCallback(
    (assistant: Assistant) => {
      setActiveThread(null);
      setActiveAssistantId(assistant.id);
      navigateTo("threads");
      router.push(`/${assistant.id}`);
    },
    [router, setActiveAssistantId, setActiveThread, navigateTo]
  );

  const onAssistantEdit = useCallback(
    (assistant: Assistant) => {
      setActiveAssistantId(assistant.id);
      navigateTo("settings");
      router.push(`/${assistant.id}`);
    },
    [router, setActiveAssistantId, navigateTo]
  );

  const onBack = useCallback(() => {
    navigateTo("assistants");
  }, [navigateTo]);

  const onSettings = useCallback(() => {
    navigateTo("settings");
  }, [navigateTo]);

  const onSettingsBack = useCallback(() => {
    navigateTo("threads");
  }, [navigateTo]);

  const handleAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const isVisible = (panelView: View) => isAnimating || view === panelView;

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-[18rem] flex-col overflow-hidden px-2"
    >
      {/* Assistants View */}
      <div
        className={`absolute inset-0 px-2 transition-transform duration-300 ease-out ${getTranslateClass("assistants", view)} ${!isVisible("assistants") ? "invisible" : ""}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <AssistantList
          onClick={(assistant) => void onAssistantSelect(assistant)}
          onEdit={(assistant) => void onAssistantEdit(assistant)}
        />
      </div>

      {/* Threads View */}
      <div
        className={`absolute inset-0 px-2 transition-transform duration-300 ease-out ${getTranslateClass("threads", view)} ${!isVisible("threads") ? "invisible" : ""}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <ThreadSelect onBack={onBack} onSettings={onSettings} />
      </div>

      {/* Settings View */}
      <div
        className={`absolute inset-0 px-2 transition-transform duration-300 ease-out ${getTranslateClass("settings", view)} ${!isVisible("settings") ? "invisible" : ""}`}
        onTransitionEnd={handleAnimationEnd}
      >
        <AssistantSettingsPanel
          assistantId={activeAssistantId}
          onBack={onSettingsBack}
          onSaved={onSettingsBack}
        />
      </div>
    </div>
  );
};

export default ChatConfig;
