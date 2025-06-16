"use client";

import { useEffect } from "react";

import { useApi } from "@mocean/mastra/apiClient";

import { useStore } from "@/app/store/useStore";

export default function Assistant() {
  const {
    agents: { getAgents },
  } = useApi();

  const { setAgentList } = useStore();

  useEffect(() => {
    getAgents().then((res) => {
      setAgentList(res.data || []);
    });
  }, []);

  return <div>Assistant</div>;
}
