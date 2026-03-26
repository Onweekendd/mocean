---
name: mocean-swr-hooks
description: 为 Mocean 项目编写 SWR hooks 的规范指南。当需要新增 SWR 数据获取 hook、mutation/action hook，或查阅 `apps/mocean/hooks/` 中 hook 文件的编写规范时使用。涵盖所有 hook 类型：查询类（列表、单项、过滤、关联数据）、操作类（CRUD）、乐观更新，以及文件组织约定。触发场景：「给 Xxx 添加 SWR hook」、「新增获取 Xxx 的 hook」、「添加 useXxxSWR」、「给 Xxx 模块加 CRUD hooks」。
---

# Mocean SWR Hooks 规范

## 概述

Mocean 的 SWR hooks 分为两类：**Query Hooks**（读取数据）和 **Action Hooks**（写入数据）。文件位于 `apps/mocean/hooks/use<Entity>SWR.ts`。

- API 客户端：`@mocean/mastra/apiClient` → `useXxxApi()`
- 类型：`@mocean/mastra/prismaType` 或 `@mocean/mastra/schemas`
- 全局 `defaultSWRConfig` 已配置，只在需要覆盖时传入额外配置

## Hook 类型选择

| 需求 | Hook 类型 | 示例 |
|------|-----------|------|
| 获取所有列表 | 列表查询 | `useProviders()` |
| 按 id 获取单项 | 单项查询 | `useProvider(id)` |
| 按参数过滤 | 过滤查询 | `useProvidersByType(type)` |
| 包含关联数据 | WithRelations 查询 | `useProvidersWithModels()` |
| 创建 / 更新 / 删除 | Action hook | `useProviderActions()` |
| API 返回前立即更新 UI | 乐观更新 | `useAssistantActions<T>()` |

> **重要**：Action hook 的 `update` 方法**必须**支持乐观更新（第三个可选参数 `optimisticData?: T`）。标准 Action hook（无泛型）用 `() => Promise<unknown>`；需要乐观更新时改为泛型 `<T = unknown>` + `KeyedMutator<T>`。详见 [references/patterns.md](references/patterns.md)。

## SWR Key 命名规范

```
列表:          "providers"
列表变体:      "providers-enabled"
单项:          `provider-${id}`
过滤列表:      `providers-type-${type}`
带关联:        "providers-with-models"
嵌套条件:      `assistant-thread-${assistantId}-${threadId}`
```

Action hooks 使用**单数**前缀进行 `globalMutate`，以匹配所有相关 key：
- `"provider"` 匹配 `"providers"`, `"provider-123"`, `"providers-with-models"` 等

## 文件组织

每个实体一个文件，按以下顺序组织：

```ts
// ==================== 基础版本（不包含关联数据）====================
// ==================== WithRelations 版本（包含关联数据）====================
// ==================== 操作 Hooks（与数据获取解耦）====================
// ==================== 组合 Hooks（@deprecated）====================  ← 仅旧代码保留
```

## 返回值命名约定

- 列表 hook → 复数实体名：`{ providers, isLoading, error, refresh }`
- 单项 hook → 单数实体名：`{ provider, isLoading, error, refresh }`
- Action hook → `{ create, update, remove }`（业务特有操作如 `toggleEnabled` 按需添加）
- 始终别名：`refresh: mutate`

## 代码模板

详见 [references/patterns.md](references/patterns.md)，包含每种 hook 类型的完整可复制模板。
