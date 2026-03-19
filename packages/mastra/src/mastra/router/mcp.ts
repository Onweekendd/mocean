import { registerApiRoute } from "@mastra/core/server";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  mcpServerIdParamSchema,
  mcpToolToggleParamSchema
} from "../schema/mcp";
import {
  createMcpServer,
  deleteMcpServer,
  getMcpServerById,
  getMcpServers,
  toggleMcpServer,
  toggleMcpTool,
  updateMcpServer
} from "../server/mcp";
import { mcpRoutes } from "./type";

const getMcpServersRouter = registerApiRoute(mcpRoutes.getMcpServers.path, {
  method: "GET",
  openapi: {
    summary: "获取 MCP 服务器列表",
    tags: ["MCP"],
    responses: {
      200: {
        description: "返回 MCP 服务器列表",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: mcpRoutes["getMcpServers"]["responseSchema"]
          }
        }
      }
    }
  },
  handler: async (c) => {
    return c.json(await getMcpServers(), 200);
  }
});

const getMcpServerByIdRouter = registerApiRoute(
  mcpRoutes.getMcpServerById.path,
  {
    method: "GET",
    openapi: {
      summary: "获取单个 MCP 服务器详情",
      tags: ["MCP"],
      responses: {
        200: {
          description: "返回 MCP 服务器详情",
          content: {
            "application/json": {
              // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
              schema: mcpRoutes["getMcpServerById"]["responseSchema"]
            }
          }
        }
      }
    },
    handler: async (c) => {
      const { id } = mcpServerIdParamSchema.parse({
        id: c.req.param("id")
      });
      return c.json(await getMcpServerById(id), 200);
    }
  }
);

const createMcpServerRouter = registerApiRoute(mcpRoutes.createMcpServer.path, {
  method: "POST",
  openapi: {
    summary: "创建 MCP 服务器",
    tags: ["MCP"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: mcpRoutes["createMcpServer"]["requestSchema"]
        }
      }
    },
    responses: {
      201: {
        description: "创建成功",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: mcpRoutes["createMcpServer"]["responseSchema"]
          }
        }
      }
    }
  },
  handler: async (c) => {
    try {
      const body = mcpRoutes["createMcpServer"]["requestSchema"].parse(
        await c.req.json()
      );
      return c.json(await createMcpServer(body), 201);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, { message: error.message });
      }
      throw new HTTPException(500, {
        message: error instanceof Error ? error.message : String(error)
      });
    }
  }
});

const updateMcpServerRouter = registerApiRoute(mcpRoutes.updateMcpServer.path, {
  method: "PUT",
  openapi: {
    summary: "更新 MCP 服务器",
    tags: ["MCP"],
    requestBody: {
      content: {
        "application/json": {
          // @ts-expect-error hono-openapi requestBody schema type doesn't support ZodSchema
          schema: mcpRoutes["updateMcpServer"]["requestSchema"]
        }
      }
    },
    responses: {
      200: {
        description: "更新成功",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: mcpRoutes["updateMcpServer"]["responseSchema"]
          }
        }
      }
    }
  },
  handler: async (c) => {
    const { id } = mcpServerIdParamSchema.parse({
      id: c.req.param("id")
    });
    try {
      const body = mcpRoutes["updateMcpServer"]["requestSchema"].parse(
        await c.req.json()
      );
      return c.json(await updateMcpServer(id, body), 200);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HTTPException(400, { message: error.message });
      }
      throw new HTTPException(500, {
        message: error instanceof Error ? error.message : String(error)
      });
    }
  }
});

const deleteMcpServerRouter = registerApiRoute(mcpRoutes.deleteMcpServer.path, {
  method: "DELETE",
  openapi: {
    summary: "删除 MCP 服务器",
    tags: ["MCP"],
    responses: {
      200: {
        description: "删除成功",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: mcpRoutes["deleteMcpServer"]["responseSchema"]
          }
        }
      }
    }
  },
  handler: async (c) => {
    const { id } = mcpServerIdParamSchema.parse({
      id: c.req.param("id")
    });
    return c.json(await deleteMcpServer(id), 200);
  }
});

const toggleMcpServerRouter = registerApiRoute(mcpRoutes.toggleMcpServer.path, {
  method: "PUT",
  openapi: {
    summary: "切换 MCP 服务器启用状态",
    tags: ["MCP"],
    responses: {
      200: {
        description: "切换成功",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: mcpRoutes["toggleMcpServer"]["responseSchema"]
          }
        }
      }
    }
  },
  handler: async (c) => {
    const { id } = mcpServerIdParamSchema.parse({
      id: c.req.param("id")
    });
    return c.json(await toggleMcpServer(id), 200);
  }
});

const toggleMcpToolRouter = registerApiRoute(mcpRoutes.toggleMcpTool.path, {
  method: "PUT",
  openapi: {
    summary: "切换 MCP 工具启用状态",
    tags: ["MCP"],
    responses: {
      200: {
        description: "切换成功",
        content: {
          "application/json": {
            // @ts-expect-error hono-openapi response schema type doesn't support ZodSchema
            schema: mcpRoutes["toggleMcpTool"]["responseSchema"]
          }
        }
      }
    }
  },
  handler: async (c) => {
    const { id, toolName } = mcpToolToggleParamSchema.parse({
      id: c.req.param("id"),
      toolName: c.req.param("toolName")
    });
    return c.json(await toggleMcpTool(id, toolName), 200);
  }
});

export const mcpRouter = [
  getMcpServersRouter,
  getMcpServerByIdRouter,
  createMcpServerRouter,
  updateMcpServerRouter,
  deleteMcpServerRouter,
  toggleMcpServerRouter,
  toggleMcpToolRouter
];
