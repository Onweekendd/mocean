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
    id: "mastra-storage",
    url: ":memory:"
  }),

  logger: new PinoLogger({
    name: "Mastra",

    level: "info"
  })
});

