import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";

import { PREFIX } from "../api/base-client";
import {
  deleteUploadedFile,
  readUploadedFile,
  saveUploadedFile
} from "../server/upload";

/**
 * POST /customApi/uploads
 * 接收 multipart/form-data，字段：
 *   - file      File       必填，要上传的文件
 *   - category  string     选填，分类子目录（默认 "general"）
 */
const uploadFileRouter = registerApiRoute(`${PREFIX}/uploads`, {
  method: "POST",
  openapi: {
    summary: "上传文件",
    tags: ["Uploads"]
  },
  handler: async (c) => {
    const body = await c.req.parseBody();
    const file = body["file"];

    if (!(file instanceof File)) {
      throw new HTTPException(400, { message: "缺少文件字段 'file'" });
    }

    const category =
      typeof body["category"] === "string" ? body["category"] : "general";

    const record = await saveUploadedFile(file, category);
    return c.json(record, 201);
  }
});

/**
 * GET /customApi/uploads/:fileId
 * 返回文件二进制内容，并设置正确的 Content-Type
 */
const getFileRouter = registerApiRoute(`${PREFIX}/uploads/:fileId`, {
  method: "GET",
  openapi: {
    summary: "获取文件",
    tags: ["Uploads"]
  },
  handler: async (c) => {
    const fileId = c.req.param("fileId");
    const result = await readUploadedFile(fileId);

    if (!result) {
      throw new HTTPException(404, { message: "文件不存在" });
    }

    const { record, data, mimeType } = result;

    return c.body(data, 200, {
      "Content-Type": mimeType,
      "Content-Disposition": `inline; filename="${encodeURIComponent(record.origin_name)}"`,
      "Cache-Control": "public, max-age=31536000, immutable"
    });
  }
});

/**
 * DELETE /customApi/uploads/:fileId
 * 删除文件及其数据库记录
 */
const deleteFileRouter = registerApiRoute(`${PREFIX}/uploads/:fileId`, {
  method: "DELETE",
  openapi: {
    summary: "删除文件",
    tags: ["Uploads"]
  },
  handler: async (c) => {
    const fileId = c.req.param("fileId");

    try {
      const record = await deleteUploadedFile(fileId);
      return c.json(record, 200);
    } catch (error) {
      throw new HTTPException(404, {
        message: error instanceof Error ? error.message : "文件不存在"
      });
    }
  }
});

export const uploadsRouter = [
  uploadFileRouter,
  getFileRouter,
  deleteFileRouter
];
