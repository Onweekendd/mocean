import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  agentGroupRelationSchema,
  createAgentGroupSchema,
  createAgentSchema,
  updateAgentGroupSchema,
  updateAgentSchema
} from "../schema/agent";
import {
  addAgentToGroup,
  createAgent,
  createAgentGroup,
  deleteAgent,
  deleteAgentGroup,
  getAgentByGroup,
  getAgentById,
  getAgentGroups,
  getAgents,
  removeAgentFromGroup,
  updateAgent,
  updateAgentGroup
} from "../server/agent";

export const agentsRouter = new Hono()
  .get("/", async (c) => {
    const result = await getAgents();
    return c.json(result);
  })
  .get("/groups", async (c) => {
    const result = await getAgentGroups();
    return c.json(result);
  })
  .post("/groups", zValidator("json", createAgentGroupSchema), async (c) => {
    try {
      const result = await createAgentGroup(c.req.valid("json"));
      return c.json(result, 201);
    } catch (error) {
      if (
        error instanceof Error &&
        "code" in error &&
        (error as Error & { code: string }).code === "P2002"
      ) {
        throw new HTTPException(409, { message: "分组名称已存在" });
      }
      throw new HTTPException(500, {
        message: error instanceof Error ? error.message : String(error)
      });
    }
  })
  .put("/groups/:id", zValidator("json", updateAgentGroupSchema), async (c) => {
    const result = await updateAgentGroup(
      c.req.param("id"),
      c.req.valid("json")
    );
    return c.json(result);
  })
  .delete("/groups/:id", async (c) => {
    try {
      const result = await deleteAgentGroup(c.req.param("id"));
      return c.json(result);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("不存在"))
          throw new HTTPException(404, { message: error.message });
        throw new HTTPException(409, { message: error.message });
      }
      throw error;
    }
  })
  .get("/group/:group", async (c) => {
    const result = await getAgentByGroup(c.req.param("group"));
    return c.json(result);
  })
  .post(
    "/group-relations",
    zValidator("json", agentGroupRelationSchema),
    async (c) => {
      const { agentId, groupId } = c.req.valid("json");
      try {
        const result = await addAgentToGroup(agentId, groupId);
        return c.json(result);
      } catch (error) {
        if (
          error instanceof Error &&
          "code" in error &&
          (error as Error & { code: string }).code === "P2002"
        ) {
          throw new HTTPException(409, { message: "该智能体已在此分组中" });
        }
        if (error instanceof Error)
          throw new HTTPException(404, { message: error.message });
        throw error;
      }
    }
  )
  .delete(
    "/group-relations",
    zValidator("json", agentGroupRelationSchema),
    async (c) => {
      const { agentId, groupId } = c.req.valid("json");
      try {
        const result = await removeAgentFromGroup(agentId, groupId);
        return c.json(result);
      } catch (error) {
        if (error instanceof Error)
          throw new HTTPException(404, { message: error.message });
        throw error;
      }
    }
  )
  .get("/:id", async (c) => {
    const agent = await getAgentById(c.req.param("id"));
    if (!agent) throw new HTTPException(404, { message: "智能体不存在" });
    return c.json(agent);
  })
  .post("/", zValidator("json", createAgentSchema), async (c) => {
    try {
      const result = await createAgent(c.req.valid("json"));
      return c.json(result, 201);
    } catch (error) {
      throw new HTTPException(500, {
        message: error instanceof Error ? error.message : String(error)
      });
    }
  })
  .put("/:id", zValidator("json", updateAgentSchema), async (c) => {
    const result = await updateAgent(c.req.param("id"), c.req.valid("json"));
    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const result = await deleteAgent(c.req.param("id"));
    return c.json(result);
  });
