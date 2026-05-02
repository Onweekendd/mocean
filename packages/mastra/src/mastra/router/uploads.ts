import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  deleteUploadedFile,
  readUploadedFile,
  saveUploadedFile
} from "../server/upload";

export const uploadsRouter = new Hono()
  .post("/", async (c) => {
    const body = await c.req.parseBody();
    const file = body["file"];

    if (!(file instanceof File))
      throw new HTTPException(400, { message: "缺少文件字段 'file'" });

    const category =
      typeof body["category"] === "string" ? body["category"] : "general";

    const result = await saveUploadedFile(file, category);
    return c.json(result, 201);
  })
  .get("/:fileId", async (c) => {
    const result = await readUploadedFile(c.req.param("fileId"));
    if (!result) throw new HTTPException(404, { message: "文件不存在" });

    const { record, data, mimeType } = result;
    return c.body(data, 200, {
      "Content-Type": mimeType,
      "Content-Disposition": `inline; filename="${encodeURIComponent(record.origin_name)}"`,
      "Cache-Control": "public, max-age=31536000, immutable"
    });
  })
  .delete("/:fileId", async (c) => {
    try {
      const result = await deleteUploadedFile(c.req.param("fileId"));
      return c.json(result);
    } catch (error) {
      throw new HTTPException(404, {
        message: error instanceof Error ? error.message : "文件不存在"
      });
    }
  });
