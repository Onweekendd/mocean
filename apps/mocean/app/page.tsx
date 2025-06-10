"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAgentsApi } from "@mocean/mastra/apiClient";

import { useStore } from "./store/useStore";

export default function Chat() {
  const router = useRouter();
  const { getAgents } = useAgentsApi();
  const { setAgentList } = useStore();

  useEffect(() => {
    getAgents().then((res) => {
      if (!res.data) {
        return;
      }

      setAgentList(res.data);
      router.push("chat");
    });
  }, [getAgents, router, setAgentList]);

  return <div />;
}
