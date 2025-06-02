import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";
import { PinoLogger } from "@mastra/loggers";

import { weatherAgent } from "./agents/weather-agent";
import { apiRoutes } from "./router";

export const mastra = new Mastra({
  agents: { weatherAgent },

  server: { timeout: 30000, apiRoutes },

  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db

    url: ":memory:",
  }),

  logger: new PinoLogger({
    name: "Mastra",

    level: "info",
  }),
});
