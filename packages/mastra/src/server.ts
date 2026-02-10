import { MastraServer } from "@mastra/express";
import express from "express";

import { mastra } from "./mastra";
import { apiRoutes } from "./router";

const app = express();
app.use(express.json()); // Required for body parsing

const server = new MastraServer({ app, mastra });
await server.init();

app.listen(4111, () => {
  console.log("Server running on port 4111");
});
