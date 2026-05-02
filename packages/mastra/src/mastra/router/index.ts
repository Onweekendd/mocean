import { Hono } from "hono";

import { agentsRouter } from "./agents";
import { assistantsRouter } from "./assistants";
import { groupsRouter } from "./groups";
import { mcpRouter } from "./mcp";
import { modelsRouter } from "./models";
import { providersRouter } from "./providers";
import { uploadsRouter } from "./uploads";

export const customRoutes = new Hono()
  .route("/customApi/agents", agentsRouter)
  .route("/customApi/assistants", assistantsRouter)
  .route("/customApi/groups", groupsRouter)
  .route("/customApi/mcp/servers", mcpRouter)
  .route("/customApi/models", modelsRouter)
  .route("/customApi/providers", providersRouter)
  .route("/customApi/uploads", uploadsRouter);

export type AppType = typeof customRoutes;

// Legacy export for backward compatibility during migration
export const apiRoutes = customRoutes;
