import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { PinoLogger } from "@mastra/loggers";

import { DynamicAgent } from "./agents/dynamicAgent";
import { apiRoutes } from "./router";

export const mastra = new Mastra({
  agents: {
    DynamicAgent
  },

  server: {
    timeout: 30000,
    port: process.env.DEV_PORT || 4111,
    build: {
      swaggerUI: true // Enable in production builds
    },
    apiRoutes
  },

  storage: new LibSQLStore({
    id: "mastra-storage",
    url: ":memory:"
  }),

  workflows: {},

  logger: new PinoLogger({
    name: "Mastra",

    level: "info"
  })
});
