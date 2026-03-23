import type { PrismaClient } from "generated/prisma/client";
import type { ProviderType } from "generated/prisma/enums";

/**
 * Provider 数据工厂
 */
export const providerFactory = {
  /**
   * 构建测试数据（不创建）
   */
  build: (
    overrides?: Partial<
      Parameters<PrismaClient["provider"]["create"]>[0]["data"]
    >
  ) => ({
    type: "openai" as ProviderType,
    name: "Test Provider",
    apiKey: "test-api-key",
    apiHost: "https://api.openai.com",
    enabled: true,
    isSystem: false,
    isAuthed: true,
    notes: "Test provider notes",
    ...overrides
  }),

  /**
   * 创建并返回 Provider
   */
  create: async (
    prisma: PrismaClient,
    overrides?: Partial<
      Parameters<PrismaClient["provider"]["create"]>[0]["data"]
    >
  ) => {
    const data = providerFactory.build(overrides);
    const res = await prisma.provider.create({
      data: {
        ...data,
        groups: {
          create: {
            name: "默认",
            isDefault: true
          }
        }
      },
      include: {
        groups: true
      }
    });
    console.log("创建 Provider", res.id);
    return res;
  }
};

/**
 * Group 数据工厂
 */
export const groupFactory = {
  build: (
    providerId: string,
    overrides?: Partial<Parameters<PrismaClient["group"]["create"]>[0]["data"]>
  ) => ({
    providerId,
    name: "Test Group",
    isDefault: false,
    ...overrides
  }),

  create: async (
    prisma: PrismaClient,
    providerId: string,
    overrides?: Partial<Parameters<PrismaClient["group"]["create"]>[0]["data"]>
  ) => {
    const data = groupFactory.build(providerId, overrides);
    return await prisma.group.create({
      data
    });
  }
};

/**
 * Model 数据工厂
 */
export const modelFactory = {
  build: (
    groupId: string,
    overrides?: Partial<Parameters<PrismaClient["model"]["create"]>[0]["data"]>
  ) => ({
    id: `test-model-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: "Test Model",
    owned_by: "Test Provider",
    description: "Test model description",
    isSystem: false,
    sort: 0,
    groupId,
    ...overrides
  }),

  create: async (
    prisma: PrismaClient,
    groupId: string,
    overrides?: Partial<Parameters<PrismaClient["model"]["create"]>[0]["data"]>
  ) => {
    const data = modelFactory.build(groupId, overrides);
    return await prisma.model.create({
      data,
      include: {
        group: {
          include: {
            provider: true
          }
        }
      }
    });
  }
};

/**
 * Assistant 数据工厂
 */
export const assistantFactory = {
  build: (
    overrides?: Partial<
      Parameters<PrismaClient["assistant"]["create"]>[0]["data"]
    >
  ) => ({
    name: "Test Assistant",
    prompt: "You are a helpful assistant",
    type: "assistant",
    emoji: "",
    description: "Test assistant",
    enableWebSearch: false,
    enableGenerateImage: false,
    ...overrides
  }),

  create: async (
    prisma: PrismaClient,
    overrides?: Partial<
      Parameters<PrismaClient["assistant"]["create"]>[0]["data"]
    >
  ) => {
    const data = assistantFactory.build(overrides);
    return await prisma.assistant.create({
      data,
      include: {
        model: true,
        settings: true
      }
    });
  }
};

/**
 * Agent 数据工厂
 */
export const agentFactory = {
  build: (
    overrides?: Partial<Parameters<PrismaClient["agent"]["create"]>[0]["data"]>
  ) => ({
    name: "Test Agent",
    prompt: "You are a helpful agent",
    type: "agent",
    emoji: "🤖",
    description: "Test agent description",
    ...overrides
  }),

  create: async (
    prisma: PrismaClient,
    overrides?: Partial<Parameters<PrismaClient["agent"]["create"]>[0]["data"]>
  ) => {
    const data = agentFactory.build(overrides);
    return await prisma.agent.create({
      data,
      include: {
        groups: {
          select: {
            agentGroup: { select: { id: true, name: true, label: true } }
          }
        },
        topics: true
      }
    });
  }
};

/**
 * MCPServer 数据工厂
 */
export const mcpServerFactory = {
  build: (
    overrides?: Partial<
      Parameters<PrismaClient["mCPServer"]["create"]>[0]["data"]
    >
  ) => ({
    name: "Test MCP Server",
    type: "stdio",
    description: "Test MCP server",
    command: "npx",
    argsJson: ["-y", "@test/mcp-server"],
    isActive: true,
    ...overrides
  }),

  create: async (
    prisma: PrismaClient,
    overrides?: Partial<
      Parameters<PrismaClient["mCPServer"]["create"]>[0]["data"]
    >
  ) => {
    const data = mcpServerFactory.build(overrides);
    return prisma.mCPServer.create({
      data,
      include: {
        tools: true,
        prompts: true,
        resources: true,
        configSampleRelation: true
      }
    });
  }
};

/**
 * MCPTool 数据工厂
 */
export const mcpToolFactory = {
  build: (
    serverId: string,
    overrides?: Partial<
      Parameters<PrismaClient["mCPTool"]["create"]>[0]["data"]
    >
  ) => ({
    name: "test_tool",
    description: "A test tool",
    inputSchema: { type: "object", properties: {} },
    isEnabled: true,
    serverId,
    ...overrides
  }),

  create: async (
    prisma: PrismaClient,
    serverId: string,
    overrides?: Partial<
      Parameters<PrismaClient["mCPTool"]["create"]>[0]["data"]
    >
  ) => {
    const data = mcpToolFactory.build(serverId, overrides);
    return prisma.mCPTool.create({ data });
  }
};
