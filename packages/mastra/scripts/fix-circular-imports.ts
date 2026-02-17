import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

/**
 * 修复 prisma-zod-generator 生成的循环引用问题
 * 策略：
 * 1. 分析所有 schema 文件之间的导入关系
 * 2. 检测循环引用
 * 3. 创建 _registry.ts 共享注册表，避免循环导入
 * 4. 移除循环引用的 import，改为从 _registry 读取
 * 5. 在 z.lazy() 中使用 _registry 获取 schema
 * 6. 在文件顶部添加 // @ts-nocheck 来禁用类型检查
 * 7. 在文件末尾注册自身到 _registry
 * 8. 创建 .d.ts 文件来提供类型信息
 */

interface ImportInfo {
  source: string; // 导入来源，如 './Model.schema'
  names: string[]; // 导入的名称，如 ['ModelSchema']
  fullMatch: string; // 完整的 import 语句
}

interface FileInfo {
  path: string;
  name: string; // 文件名，如 'Model.schema.ts'
  modelName: string; // 模型名，如 'Model'
  content: string;
  imports: ImportInfo[];
  lazyRefs: string[]; // z.lazy 中引用的 schema 名称
}

// 获取 schema 文件列表
function getSchemaFiles(): string[] {
  const schemasDir = join(process.cwd(), "generated", "schemas", "models");
  try {
    const files = readdirSync(schemasDir);
    return files
      .filter((f) => f.endsWith(".schema.ts"))
      .map((f) => join(schemasDir, f));
  } catch {
    return [];
  }
}

// 解析文件中的 import 语句
function parseImports(content: string): ImportInfo[] {
  const imports: ImportInfo[] = [];

  // 匹配常规 import: import { XxxSchema } from './Xxx.schema'
  const importRegex = /import\s*\{\s*([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g;
  let match: RegExpExecArray | null = null;

  while ((match = importRegex.exec(content)) !== null) {
    const names = match[1]
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n);
    const source = match[2];

    imports.push({
      source,
      names,
      fullMatch: match[0]
    });
  }

  return imports;
}

// 解析文件中 z.lazy 引用的 schema
function parseLazyRefs(content: string): string[] {
  const refs: string[] = [];
  const lazyRegex = /z\.lazy\(\(\)\s*=>\s*(\w+)\)/g;
  let match: RegExpExecArray | null = null;

  while ((match = lazyRegex.exec(content)) !== null) {
    refs.push(match[1]);
  }

  return [...new Set(refs)];
}

// 获取模型名从文件名
function getModelName(fileName: string): string {
  return fileName.replace(".schema.ts", "");
}

// 从 schema 名称获取模型名
function getModelFromSchema(schemaName: string): string {
  return schemaName.replace("Schema", "");
}

// 构建依赖图并检测循环引用
function detectCycles(files: FileInfo[]): Map<string, Set<string>> {
  const graph = new Map<string, Set<string>>();
  const cycles = new Map<string, Set<string>>();

  // 构建图 - 同时考虑 import 和 z.lazy 引用
  for (const file of files) {
    const deps = new Set<string>();

    // 从 import 语句收集依赖
    for (const imp of file.imports) {
      if (imp.source.startsWith("./") && imp.source.endsWith(".schema")) {
        const depModel = imp.source.replace("./", "").replace(".schema", "");
        deps.add(depModel);
      }
    }

    // 从 z.lazy 引用收集依赖
    for (const ref of file.lazyRefs) {
      const depModel = getModelFromSchema(ref);
      if (depModel !== file.modelName) {
        deps.add(depModel);
      }
    }

    graph.set(file.modelName, deps);
    cycles.set(file.modelName, new Set());
  }

  // 检测循环引用（使用 DFS）
  function findCycles(
    node: string,
    visited: Set<string>,
    path: Set<string>,
    pathList: string[]
  ) {
    if (path.has(node)) {
      // 发现循环
      const cycleStart = pathList.indexOf(node);
      const cycleNodes = pathList.slice(cycleStart);
      for (const n of cycleNodes) {
        for (const other of cycleNodes) {
          if (n !== other) {
            const cycleSet = cycles.get(n);
            if (cycleSet) {
              cycleSet.add(other);
            }
          }
        }
      }
      return;
    }

    if (visited.has(node)) return;

    visited.add(node);
    path.add(node);
    pathList.push(node);

    const deps = graph.get(node);
    if (deps) {
      for (const dep of deps) {
        findCycles(dep, visited, path, pathList);
      }
    }

    path.delete(node);
    pathList.pop();
  }

  for (const node of graph.keys()) {
    findCycles(node, new Set(), new Set(), []);
  }

  return cycles;
}

// 创建 _registry.ts 文件
function createRegistryFile(): void {
  const schemasDir = join(process.cwd(), "generated", "schemas", "models");
  const registryPath = join(schemasDir, "_registry.ts");
  const content = `/**
 * Schema Registry - 用于解决循环引用
 * Auto-generated - do not edit manually
 *
 * 所有存在循环引用的 schema 文件会将自身注册到此 registry 中，
 * 并通过 z.lazy(() => _r.XxxSchema) 引用其他 schema，
 * 避免循环 import 导致的运行时和类型问题。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const _r: Record<string, any> = {};
`;
  writeFileSync(registryPath, content, "utf-8");
  // eslint-disable-next-line no-console
  console.log("📦 Created: _registry.ts");
}

// 修复单个文件的循环引用
function fixFile(
  file: FileInfo,
  cycles: Map<string, Set<string>>
): { fixedContent: string; typeDefinitions: string } | null {
  const circularModels = cycles.get(file.modelName);
  if (!circularModels || circularModels.size === 0) {
    return null; // 没有循环引用需要修复
  }

  let modified = file.content;

  // 步骤 1: 移除循环引用的 import
  for (const circularModel of circularModels) {
    const schemaName = `${circularModel}Schema`;

    // 匹配 import { XxxSchema } from './Xxx.schema'
    const importRegex = new RegExp(
      `import\\s*\\{\\s*([^}]*${schemaName}[^}]*)\\}\\s*from\\s*['"](\\./${circularModel}\\.schema)['"]\\s*;?\\n?`,
      "g"
    );

    modified = modified.replace(importRegex, (match: string) => {
      // 检查是否还有其他导入
      const otherImports = match
        .replace(/import\s*\{\s*/, "")
        .replace(/\s*\}\s*from.*/, "")
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s && !s.includes(schemaName));

      if (otherImports.length > 0) {
        // 还有其他导入，保留 but remove the circular one
        return `import { ${otherImports.join(", ")} } from './${circularModel}.schema';\n`;
      }
      return `// Circular import removed: ${match.trim()}\n`;
    });
  }

  // 步骤 2: 添加 _registry import（在 zod import 之后）
  if (!modified.includes("from './_registry'")) {
    modified = modified.replace(
      /import \* as z from 'zod';/,
      `import * as z from 'zod';\nimport { _r } from './_registry';`
    );
  }

  // 步骤 3: 在文件开头添加 @ts-nocheck
  if (!modified.includes("// @ts-nocheck")) {
    modified =
      "// @ts-nocheck - Circular imports resolved with schema registry\n" +
      modified;
  }

  // 步骤 4: 修改 z.lazy() 中的引用，使用 _registry
  for (const circularModel of circularModels) {
    const schemaName = `${circularModel}Schema`;

    // 替换 z.lazy(() => XxxSchema) 为 z.lazy(() => _r.XxxSchema)
    const lazyRegex = new RegExp(
      `z\\.lazy\\(\\(\\)\\s*=>\\s*${schemaName}\\)`,
      "g"
    );

    modified = modified.replace(lazyRegex, `z.lazy(() => _r.${schemaName})`);
  }

  // 步骤 5: 在文件末尾注册自身到 registry
  const exportName = `${file.modelName}Schema`;
  if (!modified.includes(`_r.${exportName}`)) {
    modified += `\n// Register to schema registry for circular reference resolution\n_r.${exportName} = ${exportName};\n`;
  }

  // 步骤 6: 生成类型定义
  const typeImports = [...circularModels]
    .map((m) => `import type { ${m}Schema } from './${m}.schema';`)
    .join("\n");

  const typeFields = [...circularModels]
    .flatMap((m) => {
      const lowerM = m.toLowerCase();
      const fields: string[] = [];

      // 检查原始内容中是否有这些字段
      if (
        file.content.includes(`${lowerM}s:`) ||
        file.content.includes(`${lowerM}s `)
      ) {
        fields.push(`${lowerM}s?: z.infer<typeof ${m}Schema>[];`);
      }
      if (
        file.content.includes(`${lowerM}:`) ||
        file.content.includes(`${lowerM} `)
      ) {
        fields.push(`${lowerM}?: z.infer<typeof ${m}Schema>;`);
      }
      if (
        file.content.includes(`default${m}:`) ||
        file.content.includes(`default${m} `)
      ) {
        fields.push(`default${m}?: z.infer<typeof ${m}Schema>;`);
      }
      if (
        file.content.includes(`defaultFor${m}s:`) ||
        file.content.includes(`defaultFor${m}s `)
      ) {
        fields.push(`defaultFor${m}s?: z.infer<typeof ${m}Schema>[];`);
      }

      return fields;
    })
    .join("\n  ");

  const typeDefinitions = `import { z } from 'zod';
${typeImports}

// Type extensions for ${file.modelName} with relations
export interface ${file.modelName}WithRelations {
  ${typeFields || "// No additional relation fields"}
}
`;

  return { fixedContent: modified, typeDefinitions };
}

function main() {
  const schemaFiles = getSchemaFiles();
  // eslint-disable-next-line no-console
  console.log(`Found ${schemaFiles.length} schema files`);

  // 解析所有文件
  const files: FileInfo[] = schemaFiles.map((filePath) => {
    const content = readFileSync(filePath, "utf-8");
    const name = filePath.split(/[/\\]/).pop() || "";
    return {
      path: filePath,
      name,
      modelName: getModelName(name),
      content,
      imports: parseImports(content),
      lazyRefs: parseLazyRefs(content)
    };
  });

  // 检测循环引用
  const cycles = detectCycles(files);

  // eslint-disable-next-line no-console
  console.log("\nDetected circular dependencies:");
  for (const [model, deps] of cycles) {
    if (deps.size > 0) {
      // eslint-disable-next-line no-console
      console.log(`  ${model} -> ${[...deps].join(", ")}`);
    }
  }

  // 创建 registry 文件
  createRegistryFile();

  // 修复文件
  let fixedCount = 0;
  for (const file of files) {
    const result = fixFile(file, cycles);
    if (result) {
      writeFileSync(file.path, result.fixedContent, "utf-8");
      // eslint-disable-next-line no-console
      console.log(`\n✅ Fixed: ${file.name}`);

      // 创建类型定义文件
      const dtsPath = file.path.replace(".schema.ts", ".types.d.ts");
      writeFileSync(dtsPath, result.typeDefinitions, "utf-8");
      // eslint-disable-next-line no-console
      console.log(`📝 Created: ${dtsPath.split(/[/\\]/).pop()}`);

      fixedCount++;
    }
  }

  if (fixedCount === 0) {
    // eslint-disable-next-line no-console
    console.log("\nℹ️  No circular imports needed fixing.");
  } else {
    // eslint-disable-next-line no-console
    console.log(`\n✨ Fixed ${fixedCount} file(s) with circular imports.`);
  }
}

main();
