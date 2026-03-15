/**
 * MCP Client Manager
 * 从 Prisma 数据库加载 MCP Server 配置并创建 MCPClient 实例
 */
import type { MastraMCPServerDefinition } from "@mastra/mcp";
import { MCPClient } from "@mastra/mcp";
import type {
  HttpServerDefinition,
  StdioServerDefinition
} from "@mastra/mcp/dist/client/types";
import type { PrismaClient } from "generated/prisma/client";
import type { MCPServerFullType } from "generated/schemas/composed";

import { prisma } from "../server";

/**
 * 从数据库加载活跃的 MCP Server 配置
 */
export const loadMCPServersFromDB = async () => {
  const servers = await prisma.mCPServer.findMany({
    where: {
      isActive: true
    }
  });

  return servers;
};

// ─── 辅助函数：JSON 解析 ─────────────────────────────────────────────────────

/**
 * 安全地解析 JSON 字段
 * 如果已经是对象则直接返回，否则解析 JSON 字符串
 */
const parseJsonField = <T>(value: unknown): T | undefined => {
  if (!value) return undefined;
  if (typeof value === "object") return value as T;
  if (typeof value === "string") return JSON.parse(value) as T;
  return undefined;
};

/**
 * 将秒转换为毫秒
 */
const convertSecondsToMilliseconds = (
  seconds: number | null | undefined
): number | undefined => {
  return seconds ? seconds * 1000 : undefined;
};

// ─── 配置构建函数 ─────────────────────────────────────────────────────────────

/**
 * 构建 Stdio 传输配置
 */
const buildStdioConfig = (server: MCPServerFullType): StdioServerDefinition => {
  const config: StdioServerDefinition = {
    command: server.command ?? ""
  };

  // 解析 args
  const args = parseJsonField<string[]>(server.argsJson);
  if (args) {
    config.args = args;
  }

  // 解析 env
  const env = parseJsonField<Record<string, string>>(server.env);
  if (env) {
    config.env = env;
  }

  // 设置超时
  const timeout = convertSecondsToMilliseconds(server.timeout);
  if (timeout) {
    config.timeout = timeout;
  }

  return config;
};

/**
 * 构建 HTTP 传输配置
 */
const buildHttpConfig = (server: MCPServerFullType): HttpServerDefinition => {
  const config: HttpServerDefinition = {
    url: new URL(server.baseUrl ?? "")
  };

  // 解析 headers
  const headers = parseJsonField<Record<string, string>>(server.headers);
  if (headers) {
    config.requestInit = { headers };
  }

  // 设置超时
  const timeout = convertSecondsToMilliseconds(server.timeout);
  if (timeout) {
    config.timeout = timeout;
  }

  return config;
};

/**
 * 判断服务器使用的传输类型
 */
const getServerTransportType = (
  server: MCPServerFullType
): "stdio" | "http" | null => {
  if (server.command) return "stdio";
  if (server.baseUrl) return "http";
  return null;
};

// ─── 主转换函数 ───────────────────────────────────────────────────────────────

/**
 * 将数据库中的 MCP Server 配置转换为 Mastra MCPClient 配置格式
 *
 * @param servers - 数据库中的 MCP Server 配置列表
 * @returns Record<serverName, serverConfig> 格式的配置对象
 */
export const convertToMCPClientConfig = (
  servers: MCPServerFullType[]
): Record<string, MastraMCPServerDefinition> => {
  const configMap: Record<string, MastraMCPServerDefinition> = {};

  for (const server of servers) {
    const transportType = getServerTransportType(server);

    if (!transportType) {
      console.warn(
        `Server "${server.name}" has no valid transport configuration, skipping`
      );
      continue;
    }

    const config =
      transportType === "stdio"
        ? buildStdioConfig(server)
        : buildHttpConfig(server);

    configMap[server.name] = config;
  }

  return configMap;
};

/**
 * 创建 MCPClient 实例
 *
 * 使用示例：
 * ```typescript
 * import { createMCPClient } from './mcp';
 *
 * const mcpClient = await createMCPClient();
 *
 * // 获取所有工具
 * const tools = await mcpClient.listTools();
 *
 * // 在 Agent 中使用
 * const agent = new Agent({
 *   id: 'my-agent',
 *   tools: await mcpClient.listTools(),
 * });
 *
 * // 或者动态使用
 * const response = await agent.stream('prompt', {
 *   toolsets: await mcpClient.listToolsets(),
 * });
 * ```
 */
export const createMCPClient = async () => {
  const servers = await loadMCPServersFromDB();
  const config = convertToMCPClientConfig(servers);

  return new MCPClient({
    servers: config
  });
};

/**
 * 为特定 Assistant 创建 MCPClient 实例
 */
export const createMCPClientForAssistant = async (
  prisma: PrismaClient,
  assistantId: string
) => {
  // 获取该 Assistant 关联的 MCP Servers
  const assistantServers = await prisma.mCPAssistantServer.findMany({
    where: {
      assistantId
    },
    include: {
      mcpServer: true
    }
  });

  const servers = assistantServers
    .map((as) => as.mcpServer)
    .filter((server) => server.isActive) as MCPServerFullType[];

  const config = convertToMCPClientConfig(servers);

  return new MCPClient({
    servers: config
  });
};
