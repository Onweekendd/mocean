import { zValidator } from "@hono/zod-validator";
import type { UIMessage } from "ai";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  chatWithAssistantSchema,
  createAssistantSchema,
  generateTitleSchema,
  updateAssistantSchema
} from "../schema/assistant";
import {
  createAssistant,
  deleteAssistant,
  executeChatWithAssistant,
  generateThreadTitle,
  getAssistantById,
  getAssistants,
  getFullAssistantById,
  getThreadsByAssistantId,
  getUIMessagesByThreadId,
  updateAssistant
} from "../server/assistant";

export const assistantsRouter = new Hono()
  .get("/", async (c) => {
    const result = await getAssistants();
    return c.json(result);
  })
  .post("/chat", zValidator("json", chatWithAssistantSchema), async (c) => {
    const { assistantId, messages, threadId } = c.req.valid("json");
    return executeChatWithAssistant(
      assistantId,
      messages as UIMessage[],
      threadId
    );
  })
  .post(
    "/generate-title",
    zValidator("json", generateTitleSchema),
    async (c) => {
      const { assistantId, threadId } = c.req.valid("json");
      return generateThreadTitle(assistantId, threadId);
    }
  )
  .get("/history/:assistantId", async (c) => {
    const result = await getThreadsByAssistantId(c.req.param("assistantId"));
    return c.json(result);
  })
  .get("/messages/:assistantId/:threadId", async (c) => {
    const result = await getUIMessagesByThreadId(
      c.req.param("assistantId"),
      c.req.param("threadId")
    );
    return c.json(result);
  })
  .get("/:assistantId/full", async (c) => {
    const assistant = await getFullAssistantById(c.req.param("assistantId"));
    if (!assistant) throw new HTTPException(404, { message: "助手不存在" });
    return c.json(assistant);
  })
  .get("/:assistantId", async (c) => {
    const assistant = await getAssistantById(c.req.param("assistantId"));
    if (!assistant) throw new HTTPException(404, { message: "助手不存在" });
    return c.json(assistant);
  })
  .post("/", zValidator("json", createAssistantSchema), async (c) => {
    try {
      const result = await createAssistant(c.req.valid("json"));
      return c.json(result, 201);
    } catch (error) {
      throw new HTTPException(500, {
        message: error instanceof Error ? error.message : String(error)
      });
    }
  })
  .put(
    "/:assistantId",
    zValidator("json", updateAssistantSchema),
    async (c) => {
      const result = await updateAssistant(
        c.req.param("assistantId"),
        c.req.valid("json")
      );
      return c.json(result);
    }
  )
  .delete("/:assistantId", async (c) => {
    const result = await deleteAssistant(c.req.param("assistantId"));
    return c.json(result);
  });
