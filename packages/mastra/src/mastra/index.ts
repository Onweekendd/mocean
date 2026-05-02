import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { PinoLogger } from "@mastra/loggers";

import { DynamicAgent } from "./agents/dynamicAgent";
import { workspace } from "./workspace";

export const mastra = new Mastra({
  agents: {
    DynamicAgent
  },

  workspace,

  server: {
    timeout: 30000,
    port: Number(process.env.DEV_PORT) || 4111,
    build: {
      swaggerUI: true
    }
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
