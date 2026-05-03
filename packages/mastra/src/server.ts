import { serve } from "@hono/node-server";
import { MastraServer } from "@mastra/hono";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { mastra } from "./mastra/index";
import { customRoutes } from "./mastra/router/index";

const app = new Hono();
app.use(
  "/*",
  cors({
    origin: "http://localhost:3000",
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "X-Custom-Header",
      "Upgrade-Insecure-Requests"
    ],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE", "PATCH"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true
  })
);

const server = new MastraServer({ app, mastra });

await server.init();

app.route("/", customRoutes);

const port = Number(process.env.DEV_PORT) || 4111;
serve({ fetch: app.fetch, port }, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});
