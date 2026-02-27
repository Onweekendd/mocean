---
name: mocean-add-api-route
description: >
  为 Mocean 项目后端添加新 API 接口的完整指南。技术栈：Hono + Mastra + Prisma (SQLite) + Zod。
  当用户需要为后端新增接口、添加路由、扩展 API 端点、给某个模块加 CRUD 操作时使用此 skill。
  覆盖从 Schema 定义到前端客户端同步的完整 6 步流程，确保不遗漏任何步骤。
  示例触发场景："帮我加个接口"、"新增一个路由"、"添加 getXxx API"、"给 xxx 模块加删除接口"、"新增后端接口"。
---

# Mocean 后端接口添加指南

## 项目结构

所有后端代码位于 `packages/mastra/src/mastra/`：

```
schema/      ← Zod Schema 定义（请求/响应/参数类型）
router/
  type.ts    ← 所有路由的元数据（path + schema 声明）
  xxx.ts     ← 某模块的路由处理器
  index.ts   ← 汇集所有路由，导出 apiRoutes
server/      ← 业务逻辑（Prisma 数据库操作）
api/         ← 前端客户端（BaseApiClient 子类 + useHook）
```

参考模板：
- `packages/mastra/src/mastra/router/assistants.ts` — 路由处理器
- `packages/mastra/src/mastra/api/assistants-client.ts` — 客户端

---

## 6 步完整流程

### 步骤 1：Schema 定义
**文件**：`schema/xxx.ts`

- Response Schema：基于 `generated/prisma/zod` 中 Prisma 自动生成的 Schema 扩展
- Request Schema：创建用（必填字段）+ 更新用（全部可选）
- 参数 Schema：路由参数（如 `:xxxId`）验证
- 导出 TypeScript 类型：`CreateXxxInputType`、`UpdateXxxInputType`

### 步骤 2：路由类型注册
**文件**：`router/type.ts`

在对应 `xxxRoutes` 常量对象中添加新条目，末尾保留 `as const`：
```typescript
newEndpoint: {
  path: `${PREFIX}/xxx/endpoint`,
  requestSchema: someSchema,   // POST/PUT 才需要
  responseSchema: SomeSchema   // 流式接口用 z.any()
}
```

### 步骤 3：业务逻辑实现
**文件**：`server/xxx.ts`

- 从 `./index` 导入 `prisma` 进行数据库操作
- 返回值必须用 Zod Schema `.parse()` 验证
- 更新操作需过滤 `undefined` 字段，并附加 `updatedAt: new Date()`
- 流式接口调用 Mastra agent 服务

### 步骤 4：路由处理器注册
**文件**：`router/xxx.ts`

使用 `registerApiRoute(path, { method, openapi, handler })` 注册。

Handler 标准流程：
1. 验证路由参数：`paramSchema.parse({ xxxId: c.req.param("xxxId") })`
2. 验证请求体：`xxxRoutes["key"]["requestSchema"].parse(await c.req.json())`
3. 调用业务逻辑
4. 普通接口：`return c.json(result, statusCode)`；流式接口：直接 `return streamFn(...)` 不包 c.json
5. 错误处理：`ZodError` → 400，其他 → 500

新处理器变量加入模块导出数组（如 `assistantsRouter`）。

### 步骤 5：路由挂载检查
**文件**：`router/index.ts`

确认该模块的 router 数组已展开到 `apiRoutes`。已有模块通常无需改动；若是新模块则需要补充导入和展开。

### 步骤 6：客户端同步（最容易遗漏！）
**文件**：`api/xxx-client.ts`

**必须同步更新四处**，缺一不可：

| 位置 | 操作 |
|------|------|
| `XxxApiClient` class | 添加方法，用 `z.infer<(typeof xxxRoutes)["key"]["responseSchema"]>` 推导返回类型 |
| `xxxApiMethods` 对象 | 添加包装函数 |
| `UseXxxApiReturn` type | Pick 中加入新方法名 |
| `useXxxApi` Hook | 添加 `xxxApi.newMethod.bind(xxxApi)` |

普通接口用 `this.get/post/put/delete`；流式接口用 `this.postStream`（返回 `Promise<Response>`）。

---

## 关键规则速查

| 场景 | 处理方式 |
|------|---------|
| 普通 JSON 接口 | `c.json(data, status)` + `this.get/post/put/delete` |
| 流式接口 | `return streamFn()` 直接返回 + `this.postStream` + `responseSchema: z.any()` |
| 路由含参数（`:id`） | handler 里先用 paramSchema 验证 `c.req.param(...)` |
| GET 请求 | 无 requestSchema，handler 不解析 body |
| 全新模块 | 步骤 5 需在 `router/index.ts` 补充导入和展开 |

---

## 步骤 7：编写测试

**集成测试**（必须）：`__tests__/integration/router/xxx.test.ts`

```typescript
import { beforeEach, describe, expect, it } from "vitest";
import { xxxRouter } from "../../../router/xxx";
import { xxxFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

const BASE = "/customApi/xxx";
const app = createTestApp(xxxRouter);
```

每个接口至少覆盖：成功路径 + 空数据 + 验证失败（400）+ 不存在（404）。

> 测试规范、完整示例、数据工厂写法见 [references/testing.md](references/testing.md)

---

## 详细代码示例

需要具体代码模式时，读取 [references/patterns.md](references/patterns.md)，包含：
- Schema 完整示例
- 业务逻辑（CRUD + 流式）完整示例
- 路由处理器完整示例
- 客户端四处同步完整示例
