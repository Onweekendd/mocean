import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import { createMcpServerSchema, updateMcpServerSchema } from "../schema/mcp";
import {
  createMcpServer,
  deleteMcpServer,
  getMcpServerById,
  getMcpServers,
  toggleMcpServer,
  toggleMcpTool,
  updateMcpServer
} from "../server/mcp";

export const mcpRouter = new Hono()
  .get("/", async (c) => {
    const result = await getMcpServers();
    return c.json(result);
  })
  .post("/", zValidator("json", createMcpServerSchema), async (c) => {
    const result = await createMcpServer(c.req.valid("json"));
    return c.json(result, 201);
  })
  .put("/:id/tools/:toolName/toggle", async (c) => {
    const result = await toggleMcpTool(
      c.req.param("id"),
      c.req.param("toolName")
    );
    return c.json(result);
  })
  .put("/:id/toggle", async (c) => {
    const result = await toggleMcpServer(c.req.param("id"));
    return c.json(result);
  })
  .get("/:id", async (c) => {
    const result = await getMcpServerById(c.req.param("id"));
    return c.json(result);
  })
  .put("/:id", zValidator("json", updateMcpServerSchema), async (c) => {
    const result = await updateMcpServer(
      c.req.param("id"),
      c.req.valid("json")
    );
    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const result = await deleteMcpServer(c.req.param("id"));
    return c.json(result);
  });
