# MCP 系统管理 - 实现 TODO

## 概述

本文件追踪 MCP（Model Context Protocol）管理系统的完整实现进度。该系统参考 CherryStudio 架构，并补充了缺失能力。

**项目位置**: `apps/mocean/app/mcp/`
**相关后端**: `packages/mastra/src/mastra/`
**数据模型**: 已在 Prisma schema 中完善（MCPServer、MCPTool、MCPPrompt 等）

---

## Phase 1: 后端 API 基础 CRUD

**目标**: 搭建完整的 MCP 服务器 CRUD API 层

### Zod Schema 定义
- [ ] 创建 `packages/mastra/src/mastra/schema/mcp.ts`
  - [ ] 定义 `CreateMcpServerInput` - 新增 MCP 服务器的输入（name, type, command, argsJson, env, isActive 等）
  - [ ] 定义 `UpdateMcpServerInput` - 编辑时的输入（上述字段可选）
  - [ ] 定义 `McpServerResponse` - 响应类型（包含 id, createdAt, updatedAt）
  - [ ] 定义 `McpToolResponse`、`McpPromptResponse`、`McpResourceResponse`

### 服务层实现
- [ ] 创建 `packages/mastra/src/mastra/server/mcp.ts`
  - [ ] `getMcpServers(filter?)` - 获取所有服务器，支持过滤（isActive、tags 等）
  - [ ] `getMcpServerById(id)` - 获取单个服务器（含关联的 tools/prompts/resources）
  - [ ] `createMcpServer(input)` - 创建服务器
  - [ ] `updateMcpServer(id, input)` - 更新服务器配置
  - [ ] `deleteMcpServer(id)` - 删除服务器
  - [ ] `toggleMcpServer(id, isActive)` - 启用/禁用
  - [ ] `testMcpConnection(id)` - 测试连接（实际连接 MCP 服务器、拉取工具列表）
  - [ ] `syncMcpTools(serverId, tools)` - 同步工具列表到数据库
  - [ ] `toggleMcpTool(serverId, toolName, disabled)` - 单个工具启用/禁用

### Hono 路由实现
- [ ] 创建 `packages/mastra/src/mastra/router/mcp.ts`
  - [ ] `GET /mcp/servers` - 列表端点
  - [ ] `GET /mcp/servers/:id` - 详情端点
  - [ ] `POST /mcp/servers` - 创建端点
  - [ ] `PUT /mcp/servers/:id` - 更新端点
  - [ ] `DELETE /mcp/servers/:id` - 删除端点
  - [ ] `PUT /mcp/servers/:id/toggle` - 启用/禁用端点
  - [ ] `POST /mcp/servers/:id/test` - 测试连接端点
  - [ ] `PUT /mcp/servers/:id/tools/:toolName/toggle` - 工具启用/禁用端点
  - [ ] 定义 OpenAPI metadata（用于自动文档生成）

### 路由注册
- [ ] 在 `packages/mastra/src/mastra/router/index.ts` 中注册 MCP 路由
  - [ ] 导入 mcp router
  - [ ] 挂载到 `customApi` 路由组

### 前端 API 客户端
- [ ] 创建 `packages/mastra/src/mastra/api/mcp.ts`
  - [ ] 定义 `McpApiClient` 类（get、getById、create、update、delete、toggle、test、toggleTool 方法）
  - [ ] 导出 `useMcpApi()` hook（绑定 this 上下文）

- [ ] 在 `packages/mastra/src/mastra/api/index.ts` 中导出
  - [ ] 导出 `mcpApiClient` 单例
  - [ ] 导出 `useMcpApi` hook

---

## Phase 2: 前端基础页面 & 数据层

**目标**: 构建左右分栏布局，实现数据获取和缓存

### 路由与布局
- [ ] 创建 `apps/mocean/app/mcp/layout.tsx`
  - [ ] 左侧边栏：MCP 服务器列表
  - [ ] 右侧内容区：详情页或空状态
  - [ ] 参考 `apps/mocean/app/provider/layout.tsx` 的分栏模式

- [ ] 创建 `apps/mocean/app/mcp/page.tsx`
  - [ ] 空状态：显示"未配置任何 MCP 服务器"，带新增按钮
  - [ ] 参考 `components/custom/EmptyPlaceholder.tsx` 组件

### 数据获取 Hooks
- [ ] 创建 `apps/mocean/app/mcp/hooks/useMcpServersSWR.ts`
  - [ ] `useMcpServers()` - 获取所有服务器列表（支持缓存和自动刷新）
  - [ ] `useMcpServerById(id)` - 获取单个服务器详情
  - [ ] 配置 SWR options（deduping、revalidation 等）
  - [ ] 参考 `apps/mocean/app/provider/hooks/useProvidersSWR.ts` 模式

- [ ] 创建 `apps/mocean/app/mcp/hooks/useMcpServerActions.ts`
  - [ ] `useMcpServerActions()` - 返回 create/update/delete/toggle/test 方法
  - [ ] 每个方法调用 API 后自动调用 `mutate` 刷新缓存
  - [ ] 参考 `apps/mocean/app/provider/hooks/useProviderActions.ts` 模式

### 左侧列表组件
- [ ] 创建 `apps/mocean/app/mcp/components/McpServerList.tsx`
  - [ ] 使用 `useMcpServers()` 获取数据
  - [ ] 显示服务器列表，支持滚动
  - [ ] 显示"新增"按钮
  - [ ] 根据路由参数高亮当前选中项
  - [ ] 参考 `apps/mocean/app/provider/components/ProviderSelect.tsx` 模式

- [ ] 创建 `apps/mocean/app/mcp/components/McpServerCard.tsx`
  - [ ] 显示服务器名称、类型徽章、启用状态指示器
  - [ ] 右侧快速操作按钮：编辑、删除、启用/禁用
  - [ ] Hover 效果和过渡动画
  - [ ] 参考 `components/custom/ItemCard.tsx` 模式

- [ ] 创建 `apps/mocean/app/mcp/components/McpEmptyState.tsx`
  - [ ] 显示"未配置任何 MCP 服务器"状态
  - [ ] 带"创建第一个"按钮
  - [ ] 参考 `components/custom/EmptyPlaceholder.tsx`

---

## Phase 3: 表单与编辑对话框

**目标**: 实现表单模式和 JSON 编辑两种编辑方式

### 表单字段组件
- [ ] 创建 `apps/mocean/app/mcp/components/McpServerFormFields.tsx`
  - [ ] 服务器名称（文本输入）
  - [ ] 服务器描述（文本区）
  - [ ] 类型选择（stdio / sse / inMemory / streamableHttp）
  - [ ] 命令（文本输入，如 `node /path/to/mcp.js`）
  - [ ] 参数列表（动态表单，允许添加/删除 args）
  - [ ] 环境变量（动态表单，允许添加/删除 env 变量）
  - [ ] 基础 URL（可选，仅 SSE 类型需要）
  - [ ] 超时设置（秒，整数输入）
  - [ ] 标签（逗号分隔或多选）
  - [ ] 使用 `react-hook-form` 的 `register` 和 `Controller`

### 新增/编辑弹窗
- [ ] 创建 `apps/mocean/app/mcp/components/AddMcpServerDialog.tsx`
  - [ ] 使用 `Dialog` 和 `McpServerFormFields`
  - [ ] 表单提交调用 `useMcpServerActions().create()`
  - [ ] 成功后关闭弹窗并导航到详情页
  - [ ] 参考 `apps/mocean/app/provider/components/ProviderConfigDialog.tsx`

- [ ] 创建 `apps/mocean/app/mcp/components/EditMcpServerDialog.tsx`
  - [ ] 预填充现有服务器数据
  - [ ] 提交调用 `useMcpServerActions().update()`
  - [ ] 成功后刷新列表

### JSON 编辑模式
- [ ] 创建 `apps/mocean/app/mcp/components/JsonEditorDialog.tsx`
  - [ ] 参考 CherryStudio 的编辑 JSON 对话框
  - [ ] 显示 MCPServer 的 JSON 表示（name, type, command, argsJson, env 等）
  - [ ] 支持直接编辑 JSON，并保存
  - [ ] 添加"验证 JSON"按钮（校验 JSON 合法性）
  - [ ] 显示上次更新时间
  - [ ] 可选：添加"表单模式"切换按钮（表单 ↔ JSON）

---

## Phase 4: 服务器详情页

**目标**: 显示完整的服务器信息、能力、绑定关系

### 详情页容器
- [ ] 创建 `apps/mocean/app/mcp/[id]/page.tsx`
  - [ ] 获取路由参数 `id`
  - [ ] 使用 `useMcpServerById(id)` 获取数据
  - [ ] 如果没有数据，显示加载状态或错误提示
  - [ ] 参考 `apps/mocean/app/provider/[id]/page.tsx` 结构

### 头部信息区
- [ ] 创建 `apps/mocean/app/mcp/[id]/components/ServerDetailHeader.tsx`
  - [ ] 服务器名称（大标题）
  - [ ] 类型徽章（stdio / sse / ...）
  - [ ] 启用/禁用开关
  - [ ] 编辑按钮（打开 EditMcpServerDialog）
  - [ ] 删除按钮（确认后删除）
  - [ ] 测试连接按钮（调用 `/test` API）
  - [ ] 导出配置按钮

### Tools 列表
- [ ] 创建 `apps/mocean/app/mcp/[id]/components/ToolList.tsx`
  - [ ] 显示所有 `MCPTool` 列表
  - [ ] 每项显示：工具名称、描述、输入 schema（简化显示）
  - [ ] 每项右侧有"启用/禁用"开关（调用 `/tools/:toolName/toggle` API）
  - [ ] 支持搜索/过滤工具
  - [ ] Empty state：无 tools 时显示提示

### Prompts 列表
- [ ] 创建 `apps/mocean/app/mcp/[id]/components/PromptList.tsx`
  - [ ] 显示所有 `MCPPrompt` 列表
  - [ ] 每项显示：Prompt 名称、描述、参数列表
  - [ ] Empty state

### Resources 列表
- [ ] 创建 `apps/mocean/app/mcp/[id]/components/ResourceList.tsx`
  - [ ] 显示所有 `MCPResource` 列表
  - [ ] 每项显示：URI、名称、MIME 类型、大小
  - [ ] Empty state

### 绑定管理区
- [ ] 创建 `apps/mocean/app/mcp/[id]/components/AssignmentPanel.tsx`
  - [ ] 显示两个 Tab：Assistants / Agents
  - [ ] 在 Assistants Tab 中显示已绑定的助手列表 + 未绑定列表
  - [ ] 支持添加/移除绑定（通过 `/assignments/assistants/:id` API）
  - [ ] 同样处理 Agents
  - [ ] 使用 `useSWR` 获取当前绑定关系
  - [ ] 参考 `apps/mocean/app/provider/components/GroupManageDialog.tsx` 模式

---

## Phase 5: 进阶功能

**目标**: 增强用户体验，补足 CherryStudio 缺失的能力

### 测试连接功能
- [ ] 后端实现 `POST /customApi/mcp/servers/:id/test` 端点
  - [ ] 根据 `type` 判断连接方式（stdio / sse / 等）
  - [ ] 连接到 MCP 服务器
  - [ ] 拉取可用的 tools/prompts/resources 列表
  - [ ] 返回测试结果（成功/失败、工具数量等）
  - [ ] 可选：自动调用 `/sync` 更新本地 DB

- [ ] 前端显示测试结果
  - [ ] ServerDetailHeader 中的"测试连接"按钮
  - [ ] 点击后显示加载状态
  - [ ] 结果以 Toast 或 Modal 展示

### 导入/导出功能
- [ ] 创建 `apps/mocean/app/mcp/components/ImportExportDialog.tsx`
  - [ ] 导出：生成 JSON（支持 Claude Desktop 格式 + 项目格式）
  - [ ] 导入：支持从 Claude Desktop 的 `claude_desktop_config.json` 导入
  - [ ] 导入后识别并创建服务器记录

### 标签与分类
- [ ] 前端列表添加标签筛选
  - [ ] McpServerList 中添加标签 tab/chip 过滤
  - [ ] 根据 `tagsJson` 过滤服务器
  - [ ] 编辑表单中支持添加标签

### 工具粒度控制（UI）
- [ ] ToolList 中为每个工具添加启用/禁用开关
  - [ ] 调用 `PUT /customApi/mcp/servers/:id/tools/:toolName/toggle`
  - [ ] 设置 `disabledToolsJson` 字段（存储被禁用的 tool 名称列表）
  - [ ] UI 显示禁用状态（灰显或标记）

### 日志展示（预留结构）
- [ ] 创建 `apps/mocean/app/mcp/[id]/components/ServerLogs.tsx`（预留组件）
  - [ ] 结构设计：日志表格（时间、操作、结果、错误信息）
  - [ ] 暂无实际日志（后续由后端 MCP 调用时记录）

---

## 参考文件路径

### 前端参考
- 布局: `apps/mocean/app/provider/layout.tsx`
- 详情页: `apps/mocean/app/provider/[id]/page.tsx`
- 表单: `apps/mocean/app/provider/components/ProviderConfigDialog.tsx`
- SWR hooks: `apps/mocean/app/provider/hooks/useProvidersSWR.ts`
- 卡片: `components/custom/ItemCard.tsx`

### 后端参考
- 路由: `packages/mastra/src/mastra/router/providers.ts`
- 服务: `packages/mastra/src/mastra/server/providers.ts`
- Schema: `packages/mastra/src/mastra/schema/providers.ts`
- API 客户端: `packages/mastra/src/mastra/api/providers.ts`

### 设计令牌
- 颜色: 使用 `--brand-primary-*` 色阶（Primary: sky-blue）
- 字体: `font-bricolage-grotesque`
- 组件库: shadcn/ui (New York style)

---

## 技术栈

| 层级 | 框架/库 |
|---|---|
| 前端框架 | Next.js 16 (App Router) |
| 状态管理 | Zustand (全局) + SWR (数据缓存) |
| 表单 | react-hook-form + Zod |
| UI 组件 | shadcn/ui |
| 后端框架 | Hono + Mastra |
| 数据库 | SQLite (via Prisma) |
| 生成工具 | prisma-zod-generator |

---

## 验收标准

### Phase 1 验收
- [ ] 所有 API 端点可通过 Postman/curl 调用
- [ ] Zod schema 类型检查通过
- [ ] 服务层逻辑正确（CRUD、toggle、test）

### Phase 2 验收
- [ ] 页面加载无错误
- [ ] SWR 缓存正常工作（刷新、重新获取）
- [ ] 列表显示正确的服务器

### Phase 3 验收
- [ ] 能新增 MCP 服务器
- [ ] 能编辑现有配置
- [ ] JSON 编辑模式工作正常

### Phase 4 验收
- [ ] 详情页加载正确的服务器信息
- [ ] Tools/Prompts/Resources 列表显示完整
- [ ] 绑定关系可增删

### Phase 5 验收
- [ ] 测试连接功能可用
- [ ] 导入/导出功能可用
- [ ] 工具级别启用/禁用正常工作

---

## Notes & Tips

- 使用 Zod 的 `pick()` / `omit()` 方法复用 schema
- SWR 中使用 `globalMutate` 进行跨 hook 缓存刷新
- 表单校验出错时显示 `error.message`（来自 Zod）
- 删除操作需要二次确认（使用 AlertDialog）
- MCP 类型枚举值可从 MCP 规范参考：`stdio | sse | inMemory | streamableHttp`
- 测试连接时考虑超时和错误处理（显示友好错误提示）
- 标签可用于组织服务器（如 `["search", "browser", "system"]`）
