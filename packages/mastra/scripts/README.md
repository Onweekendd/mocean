# Mastra 数据脚本使用说明

## 脚本列表

### 1. updateProviderTypeFromApi.ts

从 models.dev API 更新 Prisma schema 中的 ProviderType 枚举。

**功能：**
1. 从 models.dev API 获取最新的供应商数据
2. 使用 Set 对供应商 ID 进行去重
3. 将供应商 ID 转换为 snake_case 格式（如 `fireworks-ai` → `fireworks_ai`）
4. 更新 `packages/mastra/prisma/schema.prisma` 中的 ProviderType 枚举
5. 执行 `npx prisma generate` 重新生成 Prisma Client

**使用方法：**

```bash
cd packages/mastra
npx tsx scripts/updateProviderTypeFromApi.ts
```

**注意事项：**

- **Windows 权限问题：** 如果遇到 `EPERM: operation not permitted` 错误，说明有其他进程正在使用 Prisma Client。需要：
  1. 关闭所有正在运行的开发服务器（如 Vite、Next.js 等）
  2. 关闭所有使用 Prisma Client 的进程
  3. 重新运行脚本

- **手动执行 prisma generate：** 如果脚本在更新 schema 后无法自动执行 `prisma generate`，可以手动执行：
  ```bash
  cd packages/mastra
  npx prisma generate
  ```

**输出示例：**

```
🚀 开始更新 ProviderType 枚举...

🔍 正在从 models.dev API 获取数据...

🔍 提取供应商类型...
  ✅ openai -> openai
  ✅ anthropic -> anthropic
  ✅ google -> google
  ...

📊 统计: 找到 59 个唯一的供应商类型

📝 更新 schema.prisma 文件...
  📋 现有类型数量: 53
  📋 合并后类型数量: 65
  ✨ 新增类型 (12个):
     - aihubmix
     - amazon_bedrock
     - azure
     ...
  ✅ schema.prisma 文件已更新

🔧 执行 npx prisma generate...
✅ Prisma 客户端已重新生成

✅ ProviderType 枚举更新完成！
```

### 2. fetch-models-from-api.ts

从 models.dev API 获取模型和供应商数据，并插入到数据库中。

**功能：**
1. 从 models.dev API 获取所有供应商和模型数据
2. 处理网关供应商（如 OpenRouter、Vercel、Netlify）
3. 模型去重和关联关系建立
4. 将数据插入到 Prisma 数据库中

**使用方法：**

```bash
cd packages/mastra
npx tsx scripts/fetch-models-from-api.ts
```

**数据文件输出：**

脚本会在 `packages/mastra/data/` 目录下生成以下文件：
- `scraped-mastra-data.json` - 完整数据
- `new-provider.json` - 供应商数据
- `new-model.json` - 模型数据（按供应商分组）
- `gateways.json` - 网关数据
- `skipped-providers.json` - 跳过的供应商

## 供应商 ID 映射规则

脚本会自动将 API 中的供应商 ID 转换为 Prisma schema 中的枚举值：

| API ID | Prisma ProviderType |
|--------|---------------------|
| openai | openai |
| anthropic | anthropic |
| fireworks-ai | fireworks_ai |
| github-models | github_models |
| xai | xai |
| moonshotai-cn | moonshotai_cn |
| ... | ... |

**特殊映射：**
- `fireworks` → `fireworks_ai`
- `github` → `github_models`
- `grok` → `xai`
- `together` → `togetherai`
- `zhipu` → `zhipuai`
- `moonshot` → `moonshotai`
- `dashscope` → `alibaba`
- `ollama` → `lmstudio`

**默认规则：** kebab-case → snake_case（如 `azure-openai` → `azure_openai`）

## 故障排除

### 1. API 请求失败

如果遇到网络问题或 API 不可用：
```
❌ 获取 models.dev 数据失败: Error: fetch failed
```

**解决方法：**
- 检查网络连接
- 确认 https://models.dev/api.json 可访问
- 稍后重试

### 2. Prisma 权限错误 (Windows)

```
EPERM: operation not permitted, rename '...\query_engine-windows.dll.node.tmp...'
```

**解决方法：**
1. 关闭所有开发服务器
2. 关闭 VSCode 中的 TypeScript 服务器
3. 在任务管理器中结束所有 Node.js 进程
4. 重新运行脚本或手动执行 `npx prisma generate`

### 3. TypeScript 类型错误

如果在其他文件中使用新的 ProviderType 值时遇到类型错误，确保：
1. `npx prisma generate` 已成功执行
2. TypeScript 服务器已重启（VSCode: Ctrl+Shift+P → "TypeScript: Restart TS Server"）

## 开发建议

1. **定期更新：** 定期运行 `updateProviderTypeFromApi.ts` 以获取最新的供应商列表
2. **先更新枚举：** 在运行 `fetch-models-from-api.ts` 之前，先运行 `updateProviderTypeFromApi.ts` 确保所有供应商类型都已定义
3. **备份数据：** 在执行数据库操作前，建议备份数据库文件 `packages/mastra/db/prisma.db`

## 相关文件

- `packages/mastra/prisma/schema.prisma` - Prisma schema 定义
- `packages/mastra/data/provider.json` - 供应商配置数据（API URLs、文档链接等）
- `packages/mastra/generated/prisma/` - 生成的 Prisma Client
- `packages/mastra/db/prisma.db` - SQLite 数据库文件
