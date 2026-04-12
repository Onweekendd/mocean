import { agentsRouter } from "./agents";
import { assistantsRouter } from "./assistants";
import { groupsRouter } from "./groups";
import { mcpRouter } from "./mcp";
import { modelsRouter } from "./models";
import { providersRouter } from "./providers";
import { uploadsRouter } from "./uploads";

const apiRoutes = [
  ...agentsRouter,
  ...assistantsRouter,
  ...providersRouter,
  ...modelsRouter,
  ...groupsRouter,
  ...mcpRouter,
  ...uploadsRouter
];

export { apiRoutes };
