import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import { createGroupSchema, updateGroupSchema } from "../schema/group";
import {
  createGroup,
  deleteGroup,
  getGroupById,
  getGroupsByProvider,
  updateGroup
} from "../server/group";

export const groupsRouter = new Hono()
  .get("/provider/:providerId", async (c) => {
    const result = await getGroupsByProvider(c.req.param("providerId"));
    return c.json(result);
  })
  .post("/", zValidator("json", createGroupSchema), async (c) => {
    const result = await createGroup(c.req.valid("json"));
    return c.json(result, 201);
  })
  .get("/:id", async (c) => {
    const group = await getGroupById(c.req.param("id"));
    if (!group) throw new HTTPException(404, { message: "分组不存在" });
    return c.json(group);
  })
  .put("/:id", zValidator("json", updateGroupSchema), async (c) => {
    const result = await updateGroup(c.req.param("id"), c.req.valid("json"));
    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const result = await deleteGroup(c.req.param("id"));
    return c.json(result);
  });
