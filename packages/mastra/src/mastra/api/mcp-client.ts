/// <reference lib="dom" />
import type { z } from "zod";

import { mcpRoutes } from "../router/type";
import type { CreateMcpServerInput, UpdateMcpServerInput } from "../schema/mcp";
import type { ApiClientConfig, ApiResponse } from "./base-client";
import { BaseApiClient } from "./base-client";

// ==================== 1. Class 方法 ====================

export class McpApiClient extends BaseApiClient {
  constructor(config: ApiClientConfig = {}) {
    super(config);
  }

  async getMcpServers(): Promise<
    ApiResponse<z.infer<(typeof mcpRoutes)["getMcpServers"]["responseSchema"]>>
  > {
    return this.get<
      z.infer<(typeof mcpRoutes)["getMcpServers"]["responseSchema"]>
    >(mcpRoutes.getMcpServers.path);
  }

  async getMcpServerById(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof mcpRoutes)["getMcpServerById"]["responseSchema"]>
    >
  > {
    return this.get<
      z.infer<(typeof mcpRoutes)["getMcpServerById"]["responseSchema"]>
    >(mcpRoutes.getMcpServerById.path.replace(":id", id));
  }

  async createMcpServer(
    data: CreateMcpServerInput
  ): Promise<
    ApiResponse<
      z.infer<(typeof mcpRoutes)["createMcpServer"]["responseSchema"]>
    >
  > {
    return this.post<
      z.infer<(typeof mcpRoutes)["createMcpServer"]["responseSchema"]>
    >(mcpRoutes.createMcpServer.path, data);
  }

  async updateMcpServer(
    id: string,
    data: UpdateMcpServerInput
  ): Promise<
    ApiResponse<
      z.infer<(typeof mcpRoutes)["updateMcpServer"]["responseSchema"]>
    >
  > {
    return this.put<
      z.infer<(typeof mcpRoutes)["updateMcpServer"]["responseSchema"]>
    >(mcpRoutes.updateMcpServer.path.replace(":id", id), data);
  }

  async deleteMcpServer(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof mcpRoutes)["deleteMcpServer"]["responseSchema"]>
    >
  > {
    return this.delete<
      z.infer<(typeof mcpRoutes)["deleteMcpServer"]["responseSchema"]>
    >(mcpRoutes.deleteMcpServer.path.replace(":id", id));
  }

  async toggleMcpServer(
    id: string
  ): Promise<
    ApiResponse<
      z.infer<(typeof mcpRoutes)["toggleMcpServer"]["responseSchema"]>
    >
  > {
    return this.put<
      z.infer<(typeof mcpRoutes)["toggleMcpServer"]["responseSchema"]>
    >(mcpRoutes.toggleMcpServer.path.replace(":id", id), {});
  }

  async toggleMcpTool(
    id: string,
    toolName: string
  ): Promise<
    ApiResponse<z.infer<(typeof mcpRoutes)["toggleMcpTool"]["responseSchema"]>>
  > {
    return this.put<
      z.infer<(typeof mcpRoutes)["toggleMcpTool"]["responseSchema"]>
    >(
      mcpRoutes.toggleMcpTool.path
        .replace(":id", id)
        .replace(":toolName", toolName),
      {}
    );
  }
}

// ==================== 2. 单例 + apiMethods ====================

export const mcpApi = new McpApiClient();

export const mcpApiMethods = {
  getMcpServers: () => mcpApi.getMcpServers(),
  getMcpServerById: (id: string) => mcpApi.getMcpServerById(id),
  createMcpServer: (data: CreateMcpServerInput) => mcpApi.createMcpServer(data),
  updateMcpServer: (id: string, data: UpdateMcpServerInput) =>
    mcpApi.updateMcpServer(id, data),
  deleteMcpServer: (id: string) => mcpApi.deleteMcpServer(id),
  toggleMcpServer: (id: string) => mcpApi.toggleMcpServer(id),
  toggleMcpTool: (id: string, toolName: string) =>
    mcpApi.toggleMcpTool(id, toolName)
};

// ==================== 3. UseReturn type ====================

export type UseMcpApiReturn = Pick<
  McpApiClient,
  | "getMcpServers"
  | "getMcpServerById"
  | "createMcpServer"
  | "updateMcpServer"
  | "deleteMcpServer"
  | "toggleMcpServer"
  | "toggleMcpTool"
>;

// ==================== 4. useMcpApi Hook ====================

export const useMcpApi = (): UseMcpApiReturn => {
  return {
    getMcpServers: mcpApi.getMcpServers.bind(
      mcpApi
    ) as UseMcpApiReturn["getMcpServers"],
    getMcpServerById: mcpApi.getMcpServerById.bind(
      mcpApi
    ) as UseMcpApiReturn["getMcpServerById"],
    createMcpServer: mcpApi.createMcpServer.bind(
      mcpApi
    ) as UseMcpApiReturn["createMcpServer"],
    updateMcpServer: mcpApi.updateMcpServer.bind(
      mcpApi
    ) as UseMcpApiReturn["updateMcpServer"],
    deleteMcpServer: mcpApi.deleteMcpServer.bind(
      mcpApi
    ) as UseMcpApiReturn["deleteMcpServer"],
    toggleMcpServer: mcpApi.toggleMcpServer.bind(
      mcpApi
    ) as UseMcpApiReturn["toggleMcpServer"],
    toggleMcpTool: mcpApi.toggleMcpTool.bind(
      mcpApi
    ) as UseMcpApiReturn["toggleMcpTool"]
  };
};
