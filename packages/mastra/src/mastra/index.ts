import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { PinoLogger } from "@mastra/loggers";

import { DynamicAgent } from "./agents/dynamicAgent";
import { apiRoutes } from "./router";

export const mastra = new Mastra({
  agents: {
    DynamicAgent
  },

  server: { timeout: 30000, apiRoutes },

  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db

    url: ":memory:"
  }),

  logger: new PinoLogger({
    name: "Mastra",

    level: "info"
  })
});

