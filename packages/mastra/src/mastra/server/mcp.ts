import type { PrismaClient } from "generated/prisma/client";
import type z from "zod";

import type { mcpRoutes } from "../router/type";
import type { CreateMcpServerInput, UpdateMcpServerInput } from "../schema/mcp";
import { prisma } from "./index";

const MCP_SERVER_DETAIL_INCLUDE = {
  tools: true,
  prompts: true,
  resources: true,
  configSampleRelation: true
} as const;

export function createMcpService(db: PrismaClient) {
  const getMcpServers = async (): Promise<
    z.infer<(typeof mcpRoutes)["getMcpServers"]["responseSchema"]>
  > => {
    return db.mCPServer.findMany({
      orderBy: { createdAt: "desc" }
    });
  };

  const getMcpServerById = async (
    id: string
  ): Promise<
    z.infer<(typeof mcpRoutes)["getMcpServerById"]["responseSchema"]>
  > => {
    return db.mCPServer.findUnique({
      where: { id },
      include: MCP_SERVER_DETAIL_INCLUDE
    });
  };

  const createMcpServer = async (
    data: CreateMcpServerInput
  ): Promise<
    z.infer<(typeof mcpRoutes)["createMcpServer"]["responseSchema"]>
  > => {
    return db.mCPServer.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      include: MCP_SERVER_DETAIL_INCLUDE
    });
  };

  const updateMcpServer = async (
    id: string,
    data: UpdateMcpServerInput
  ): Promise<
    z.infer<(typeof mcpRoutes)["updateMcpServer"]["responseSchema"]>
  > => {
    const updateData = {
      updatedAt: new Date(),
      ...Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== undefined)
      )
    };
    return db.mCPServer.update({
      where: { id },
      data: updateData as Parameters<typeof db.mCPServer.update>[0]["data"],
      include: MCP_SERVER_DETAIL_INCLUDE
    });
  };

  const deleteMcpServer = async (
    id: string
  ): Promise<
    z.infer<(typeof mcpRoutes)["deleteMcpServer"]["responseSchema"]>
  > => {
    return db.mCPServer.delete({ where: { id } });
  };

  const toggleMcpServer = async (
    id: string
  ): Promise<
    z.infer<(typeof mcpRoutes)["toggleMcpServer"]["responseSchema"]>
  > => {
    const server = await db.mCPServer.findUnique({
      where: { id },
      select: { isActive: true }
    });
    if (!server) {
      throw new Error("MCP 服务器不存在");
    }
    return db.mCPServer.update({
      where: { id },
      data: { isActive: !server.isActive, updatedAt: new Date() },
      include: MCP_SERVER_DETAIL_INCLUDE
    });
  };

  const toggleMcpTool = async (
    serverId: string,
    toolName: string
  ): Promise<
    z.infer<(typeof mcpRoutes)["toggleMcpTool"]["responseSchema"]>
  > => {
    const tool = await db.mCPTool.findFirst({
      where: { serverId, name: toolName }
    });
    if (!tool) {
      throw new Error(`工具 "${toolName}" 不存在`);
    }
    return db.mCPTool.update({
      where: { id: tool.id },
      data: { isEnabled: !tool.isEnabled, updatedAt: new Date() }
    });
  };

  return {
    getMcpServers,
    getMcpServerById,
    createMcpServer,
    updateMcpServer,
    deleteMcpServer,
    toggleMcpServer,
    toggleMcpTool
  };
}

// 默认实例
function getDefaultService(): ReturnType<typeof createMcpService> {
  return createMcpService(prisma);
}

const getMcpServers = () => getDefaultService().getMcpServers();
const getMcpServerById = (id: string) =>
  getDefaultService().getMcpServerById(id);
const createMcpServer = (data: CreateMcpServerInput) =>
  getDefaultService().createMcpServer(data);
const updateMcpServer = (id: string, data: UpdateMcpServerInput) =>
  getDefaultService().updateMcpServer(id, data);
const deleteMcpServer = (id: string) =>
  getDefaultService().deleteMcpServer(id);
const toggleMcpServer = (id: string) =>
  getDefaultService().toggleMcpServer(id);
const toggleMcpTool = (serverId: string, toolName: string) =>
  getDefaultService().toggleMcpTool(serverId, toolName);

export {
  getMcpServers,
  getMcpServerById,
  createMcpServer,
  updateMcpServer,
  deleteMcpServer,
  toggleMcpServer,
  toggleMcpTool
};
