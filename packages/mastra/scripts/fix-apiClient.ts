import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

/**
 * 修复 apiClient.js:
 * 1. 删除所有 schema import 语句
 * 2. 将 z.lazy(() => { require(...) }) 模式替换为 z.lazy(() => SchemaName)
 *    保留 z.lazy 以避免循环依赖导致的 "Cannot access before initialization" 错误
 *
 * 转换前:
 *   settings: z.lazy(() => {
 *       const mod = require('./AssistantSettings.schema');
 *       return mod.AssistantSettingsSchema;
 *   }).nullish(),
 *
 * 转换后:
 *   settings: z.lazy(() => AssistantSettingsSchema).nullish(),
 */

interface LazyPattern {
  fullMatch: string;
  schemaFile: string;
  schemaName: string;
  hasNullish: boolean;
  hasArray: boolean;
}

// 匹配 z.lazy(() => { const mod = require('...'); return mod.XxxSchema; }) 模式
function parseLazyPatterns(content: string): LazyPattern[] {
  const patterns: LazyPattern[] = [];

  const lazyRegex =
    /z\.lazy\(\(\)\s*=>\s*\{\s*const\s+mod\s*=\s*require\(['"]([^'"]+)['"]\);\s*return\s+mod\.(\w+);\s*\}\)/g;

  let match: RegExpExecArray | null = null;
  while ((match = lazyRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const schemaFile = match[1];
    const schemaName = match[2];

    const beforeMatch = content.slice(
      Math.max(0, match.index - 20),
      match.index
    );
    const hasArray = beforeMatch.includes("z.array(");

    const afterMatch = content.slice(
      match.index + fullMatch.length,
      match.index + fullMatch.length + 20
    );
    const hasNullish = afterMatch.includes(".nullish()");

    patterns.push({
      fullMatch,
      schemaFile,
      schemaName,
      hasNullish,
      hasArray
    });
  }

  return patterns;
}

function fixApiClient(): void {
  const apiClientPath = join(process.cwd(), "dist", "apiClient.js");

  let content: string;
  try {
    content = readFileSync(apiClientPath, "utf-8");
  } catch {
    console.error("❌ Error: apiClient.js not found at", apiClientPath);
    console.error("   Please run 'pnpm bundle' first.");
    process.exit(1);
  }

  let modified = content;

  // 步骤 1: 删除所有 schema import 语句
  const schemaImportRegex =
    /import\s+\{\s*[^}]*Schema[^}]*\}\s+from\s+['"]\.\/generated\/schemas\/models\/[^'"]+\.schema['"];?\n?/g;
  const schemaImports = modified.match(schemaImportRegex);

  if (schemaImports) {
    modified = modified.replace(schemaImportRegex, "");
    console.log(`🗑️  Removed ${schemaImports.length} schema import statements`);
  }

  // 删除 "Auto-generated imports" 注释
  modified = modified.replace(
    /\/\/ Auto-generated imports for z\.lazy resolution\n?/g,
    ""
  );

  // 步骤 2: 解析并替换 z.lazy 模式
  const patterns = parseLazyPatterns(modified);

  if (patterns.length === 0) {
    console.log("ℹ️  No z.lazy patterns found in apiClient.js");
  } else {
    console.log(`Found ${patterns.length} z.lazy patterns to fix:`);

    for (const pattern of patterns) {
      console.log(
        `  - ${pattern.schemaName}${pattern.hasArray ? " (in array)" : ""}${pattern.hasNullish ? " (with nullish)" : ""}`
      );

      if (pattern.hasArray) {
        const arrayLazyRegex = new RegExp(
          `z\\.array\\(z\\.lazy\\(\\(\\)\\s*=>\\s*\\{\\s*const\\s+mod\\s*=\\s*require\\(['"]${escapeRegex(pattern.schemaFile)}['"]\\);\\s*return\\s+mod\\.${pattern.schemaName};\\s*\\}\\)\\)`,
          "g"
        );
        // 保留 z.lazy，只把 require 模式改为直接引用
        modified = modified.replace(
          arrayLazyRegex,
          `z.array(z.lazy(() => ${pattern.schemaName}))`
        );
      } else {
        const lazyRegex = new RegExp(
          `z\\.lazy\\(\\(\\)\\s*=>\\s*\\{\\s*const\\s+mod\\s*=\\s*require\\(['"]${escapeRegex(pattern.schemaFile)}['"]\\);\\s*return\\s+mod\\.${pattern.schemaName};\\s*\\}\\)`,
          "g"
        );
        // 保留 z.lazy，只把 require 模式改为直接引用
        modified = modified.replace(
          lazyRegex,
          `z.lazy(() => ${pattern.schemaName})`
        );
      }
    }

    console.log(`✅ Fixed ${patterns.length} z.lazy patterns`);
  }

  // 步骤 3: 清理可能留下的空行（连续3个或以上的换行符替换为2个）
  modified = modified.replace(/\n{3,}/g, "\n\n");

  // 写入文件
  writeFileSync(apiClientPath, modified, "utf-8");

  console.log("\n✨ apiClient.js has been fixed!");
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

fixApiClient();
