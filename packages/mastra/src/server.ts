import { serve } from "@hono/node-server";
import { MastraServer } from "@mastra/hono";
import { Hono } from "hono";

import { mastra } from "./mastra/index";
import { customRoutes } from "./mastra/router/index";

const app = new Hono();
const server = new MastraServer({ app, mastra });

await server.init();

app.route("/", customRoutes);

const port = Number(process.env.DEV_PORT) || 4111;
serve({ fetch: app.fetch, port }, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});
