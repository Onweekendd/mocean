import { describe, expect, it } from "vitest";

import {
  createMcpServerSchema,
  updateMcpServerSchema,
  mcpServerIdParamSchema,
  mcpToolToggleParamSchema
} from "../../../schema/mcp";

describe("MCP Schema 验证", () => {
  describe("createMcpServerSchema", () => {
    const valid = { name: "Test Server", type: "stdio", command: "npx" };

    it("应通过最小有效数据", () => {
      expect(createMcpServerSchema.safeParse(valid).success).toBe(true);
    });

    it("应填充 isActive 默认值为 true", () => {
      const result = createMcpServerSchema.parse(valid);
      expect(result.isActive).toBe(true);
    });

    it("name 为空时应失败", () => {
      const result = createMcpServerSchema.safeParse({ ...valid, name: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        const err = result.error.issues.find((i) => i.path.includes("name"));
        expect(err?.message).toBe("名称不能为空");
      }
    });

    it("可选字段可以省略", () => {
      const result = createMcpServerSchema.safeParse({ name: "Server" });
      expect(result.success).toBe(true);
    });

    it("isActive 可以显式设为 false", () => {
      const result = createMcpServerSchema.parse({
        ...valid,
        isActive: false
      });
      expect(result.isActive).toBe(false);
    });
  });

  describe("updateMcpServerSchema", () => {
    it("空对象应通过（所有字段可选）", () => {
      expect(updateMcpServerSchema.safeParse({}).success).toBe(true);
    });

    it("部分字段应通过", () => {
      const result = updateMcpServerSchema.safeParse({
        name: "Updated Name"
      });
      expect(result.success).toBe(true);
    });

    it("name 为空字符串时应失败", () => {
      const result = updateMcpServerSchema.safeParse({ name: "" });
      expect(result.success).toBe(false);
    });
  });

  describe("mcpServerIdParamSchema", () => {
    it("有效 id 应通过", () => {
      expect(
        mcpServerIdParamSchema.safeParse({ id: "abc-123" }).success
      ).toBe(true);
    });

    it("空字符串 id 应失败", () => {
      expect(mcpServerIdParamSchema.safeParse({ id: "" }).success).toBe(
        false
      );
    });
  });

  describe("mcpToolToggleParamSchema", () => {
    it("有效参数应通过", () => {
      expect(
        mcpToolToggleParamSchema.safeParse({
          id: "server-1",
          toolName: "my_tool"
        }).success
      ).toBe(true);
    });

    it("缺少 toolName 应失败", () => {
      expect(
        mcpToolToggleParamSchema.safeParse({ id: "server-1" }).success
      ).toBe(false);
    });

    it("toolName 为空应失败", () => {
      expect(
        mcpToolToggleParamSchema.safeParse({
          id: "server-1",
          toolName: ""
        }).success
      ).toBe(false);
    });
  });
});
