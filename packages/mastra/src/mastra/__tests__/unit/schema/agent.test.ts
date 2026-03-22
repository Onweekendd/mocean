import { describe, expect, it } from "vitest";

import {
  createAgentSchema,
  groupParamSchema,
  idParamSchema,
  updateAgentSchema
} from "../../../schema/agent";

describe("Agent Schema Validation", () => {
  // ─── createAgentSchema ─────────────────────────────
  describe("createAgentSchema", () => {
    const validData = {
      name: "My Agent",
      prompt: "You are a helpful agent"
    };

    it("应通过最小有效数据验证", () => {
      const result = createAgentSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("应填充默认值", () => {
      const result = createAgentSchema.parse(validData);
      expect(result.type).toBe("agent");
    });

    it("name 为空字符串时应失败", () => {
      const result = createAgentSchema.safeParse({ ...validData, name: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        const nameError = result.error.issues.find((i) =>
          i.path.includes("name")
        );
        expect(nameError?.message).toBe("代理名称不能为空");
      }
    });

    it("prompt 为空字符串时应失败", () => {
      const result = createAgentSchema.safeParse({ ...validData, prompt: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        const promptError = result.error.issues.find((i) =>
          i.path.includes("prompt")
        );
        expect(promptError?.message).toBe("提示词不能为空");
      }
    });

    it("缺少 name 时应失败", () => {
      const { name: _, ...noName } = validData;
      const result = createAgentSchema.safeParse(noName);
      expect(result.success).toBe(false);
    });

    it("缺少 prompt 时应失败", () => {
      const { prompt: _, ...noPrompt } = validData;
      const result = createAgentSchema.safeParse(noPrompt);
      expect(result.success).toBe(false);
    });

    it("应接受可选字段", () => {
      const result = createAgentSchema.safeParse({
        ...validData,
        emoji: "🤖",
        description: "A helpful agent",
        type: "custom"
      });
      expect(result.success).toBe(true);
    });

    it("type 可以自定义", () => {
      const result = createAgentSchema.parse({ ...validData, type: "coder" });
      expect(result.type).toBe("coder");
    });
  });

  // ─── updateAgentSchema ─────────────────────────────
  describe("updateAgentSchema", () => {
    it("所有字段都是可选的", () => {
      const result = updateAgentSchema.safeParse({});
      expect(result.success).toBe(true);
    });

    it("应通过部分更新验证", () => {
      const result = updateAgentSchema.safeParse({ name: "New Name" });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe("New Name");
      }
    });

    it("应接受多字段更新", () => {
      const result = updateAgentSchema.safeParse({
        name: "Updated",
        prompt: "New prompt",
        description: "New desc",
        type: "agent"
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toMatchObject({
          name: "Updated",
          prompt: "New prompt",
          description: "New desc",
          type: "agent"
        });
      }
    });
  });

  // ─── idParamSchema ─────────────────────────────────
  describe("idParamSchema", () => {
    it("应通过有效 id", () => {
      const result = idParamSchema.safeParse({ id: "abc-123" });
      expect(result.success).toBe(true);
    });

    it("id 为空字符串时应失败", () => {
      const result = idParamSchema.safeParse({ id: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("代理ID不能为空");
      }
    });

    it("缺少 id 时应失败", () => {
      const result = idParamSchema.safeParse({});
      expect(result.success).toBe(false);
    });
  });

  // ─── groupParamSchema ─────────────────────────────
  describe("groupParamSchema", () => {
    it("应通过有效 group", () => {
      const result = groupParamSchema.safeParse({ group: "精选" });
      expect(result.success).toBe(true);
    });

    it("应通过带特殊字符的 group", () => {
      const result = groupParamSchema.safeParse({ group: "AI 写作助手" });
      expect(result.success).toBe(true);
    });

    it("group 为空字符串时应失败", () => {
      const result = groupParamSchema.safeParse({ group: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("分组不能为空");
      }
    });

    it("缺少 group 时应失败", () => {
      const result = groupParamSchema.safeParse({});
      expect(result.success).toBe(false);
    });
  });
});
