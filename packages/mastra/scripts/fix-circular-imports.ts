import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} from "fs";
import { join } from "path";

/**
 * 修复 prisma-zod-generator 生成的循环引用问题
 *
 * 策略：
 * 1. 解析所有 schema 文件，检测循环引用
 * 2. 对存在循环引用的文件：
 *    a. 生成 BASE schema（去除循环字段）→ generated/schemas/models/
 *    b. 生成 FULL schema（加回循环字段，用 BASE refs）→ generated/schemas/composed/
 * 3. 生成 composed/index.ts 导出所有 Full schema
 *
 * 不再使用 _registry.ts 模式
 */

interface ImportInfo {
  source: string;
  names: string[];
  fullMatch: string;
}

interface CircularField {
  fieldName: string;
  schemaName: string;
  modelName: string;
  isList: boolean;
  isOptional: boolean;
  originalLine: string;
}

interface FileInfo {
  path: string;
  name: string;
  modelName: string;
  content: string;
  imports: ImportInfo[];
}

// ─── 解析工具 ─────────────────────────────────────────────────────────────────

function getSchemaFiles(): string[] {
  const schemasDir = join(process.cwd(), "generated", "schemas", "models");
  try {
    return readdirSync(schemasDir)
      .filter((f) => f.endsWith(".schema.ts") && !f.startsWith("_"))
      .map((f) => join(schemasDir, f));
  } catch {
    return [];
  }
}

function parseImports(content: string): ImportInfo[] {
  const imports: ImportInfo[] = [];
  const importRegex = /import\s*\{\s*([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g;
  let match: RegExpExecArray | null = null;
  while ((match = importRegex.exec(content)) !== null) {
    imports.push({
      source: match[2],
      names: match[1]
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean),
      fullMatch: match[0]
    });
  }
  return imports;
}

function getModelName(fileName: string): string {
  return fileName.replace(".schema.ts", "");
}

// ─── 循环检测 ─────────────────────────────────────────────────────────────────

function detectCycles(files: FileInfo[]): Map<string, Set<string>> {
  const graph = new Map<string, Set<string>>();
  const cycles = new Map<string, Set<string>>();

  for (const file of files) {
    const deps = new Set<string>();
    for (const imp of file.imports) {
      if (imp.source.startsWith("./") && imp.source.endsWith(".schema")) {
        deps.add(imp.source.replace("./", "").replace(".schema", ""));
      }
    }
    const lazyRegex = /z\.lazy\(\(\)\s*=>\s*(\w+Schema)\)/g;
    let m: RegExpExecArray | null = null;
    while ((m = lazyRegex.exec(file.content)) !== null) {
      const depModel = m[1].replace("Schema", "");
      if (depModel !== file.modelName) deps.add(depModel);
    }
    graph.set(file.modelName, deps);
    cycles.set(file.modelName, new Set());
  }

  function findCycles(
    node: string,
    visited: Set<string>,
    path: Set<string>,
    pathList: string[]
  ) {
    if (path.has(node)) {
      const start = pathList.indexOf(node);
      const cycleNodes = pathList.slice(start);
      for (const n of cycleNodes) {
        for (const other of cycleNodes) {
          if (n !== other) cycles.get(n)?.add(other);
        }
      }
      return;
    }
    if (visited.has(node)) return;
    visited.add(node);
    path.add(node);
    pathList.push(node);
    for (const dep of graph.get(node) ?? []) {
      findCycles(dep, visited, path, pathList);
    }
    path.delete(node);
    pathList.pop();
  }

  for (const node of graph.keys()) {
    findCycles(node, new Set(), new Set(), []);
  }
  return cycles;
}

// ─── 循环字段解析 ─────────────────────────────────────────────────────────────

function extractCircularFields(
  content: string,
  circularModels: Set<string>
): CircularField[] {
  const fields: CircularField[] = [];
  const seen = new Set<string>();

  for (const modelName of circularModels) {
    const schemaName = `${modelName}Schema`;

    // list：  fieldName: z.array(z.lazy(() => XxxSchema)),
    const listRe = new RegExp(
      `^([ \\t]+)(\\w+):\\s*z\\.array\\(z\\.lazy\\(\\(\\)\\s*=>\\s*${schemaName}\\)\\),?[ \\t]*$`,
      "gm"
    );
    let m: RegExpExecArray | null = null;
    while ((m = listRe.exec(content)) !== null) {
      const key = `${m[2]}:${schemaName}:list`;
      if (!seen.has(key)) {
        seen.add(key);
        fields.push({
          fieldName: m[2],
          schemaName,
          modelName,
          isList: true,
          isOptional: false,
          originalLine: m[0]
        });
      }
    }

    // single optional：  fieldName: z.lazy(() => XxxSchema).nullish(),
    const optRe = new RegExp(
      `^([ \\t]+)(\\w+):\\s*z\\.lazy\\(\\(\\)\\s*=>\\s*${schemaName}\\)\\.nullish\\(\\),?[ \\t]*$`,
      "gm"
    );
    while ((m = optRe.exec(content)) !== null) {
      const key = `${m[2]}:${schemaName}:opt`;
      if (!seen.has(key)) {
        seen.add(key);
        fields.push({
          fieldName: m[2],
          schemaName,
          modelName,
          isList: false,
          isOptional: true,
          originalLine: m[0]
        });
      }
    }

    // single required：  fieldName: z.lazy(() => XxxSchema),
    const reqRe = new RegExp(
      `^([ \\t]+)(\\w+):\\s*z\\.lazy\\(\\(\\)\\s*=>\\s*${schemaName}\\),?[ \\t]*$`,
      "gm"
    );
    while ((m = reqRe.exec(content)) !== null) {
      const key = `${m[2]}:${schemaName}:req`;
      if (!seen.has(key)) {
        seen.add(key);
        fields.push({
          fieldName: m[2],
          schemaName,
          modelName,
          isList: false,
          isOptional: false,
          originalLine: m[0]
        });
      }
    }
  }

  return fields;
}

// ─── JSON Schema 定义 ────────────────────────────────────────────────────────

const JSON_SCHEMA_DEFINITION = `
// JSON value schema for Prisma Json fields
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
export interface JsonObject {
  [key: string]: JsonValue;
}
export interface JsonArray extends Array<JsonValue> {}

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const JsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(JsonValueSchema), z.record(z.string(), JsonValueSchema)])
);
`;

// ─── BASE schema 生成 ────────────────────────────────────────────────────────

function createBaseSchema(
  file: FileInfo,
  circularFields: CircularField[]
): string {
  let content = file.content;

  // 去除循环字段行（含换行）
  for (const field of circularFields) {
    content = content.replace(field.originalLine + "\n", "\n");
    content = content.replace(field.originalLine, "");
  }

  // 去除循环模型的 import 行
  const circularModels = new Set(circularFields.map((f) => f.modelName));
  for (const modelName of circularModels) {
    const schemaName = `${modelName}Schema`;
    const importRe = new RegExp(
      `import\\s*\\{\\s*([^}]*)\\}\\s*from\\s*['"].*${modelName}\\.schema['"]\\s*;?\\n?`,
      "g"
    );
    content = content.replace(importRe, (match: string) => {
      const others = match
        .replace(/import\s*\{\s*/, "")
        .replace(/\s*\}.*/, "")
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s && s !== schemaName);
      return others.length > 0
        ? `import { ${others.join(", ")} } from './${modelName}.schema';\n`
        : "";
    });
  }

  // 替换 z.unknown() 为 JsonValueSchema（针对 Prisma Json 字段）
  const hasUnknown = content.includes("z.unknown()");
  if (hasUnknown) {
    content = content.replace(/z\.unknown\(\)/g, "JsonValueSchema");

    // 在最后一个 import 语句后添加 JSON schema 定义
    const lastImportMatch = content.match(/^import[^\n]+\n(?!import)/m);
    if (lastImportMatch && lastImportMatch.index !== undefined) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content =
        content.slice(0, insertPos) +
        JSON_SCHEMA_DEFINITION +
        content.slice(insertPos);
    }
  }

  // 清理旧 _registry 痕迹
  content = content.replace(/^\/\/ @ts-nocheck[^\n]*\n/m, "");
  content = content.replace(/^import \{ _r \} from '\.\/\_registry';\n/m, "");
  content = content.replace(/^\/\/ Circular import removed:[^\n]*\n/gm, "");
  content = content.replace(
    /^\/\/ Register to schema registry[^\n]*\n_r\.\w+ = \w+;\n/gm,
    ""
  );
  content = content.replace(/^_r\.\w+ = \w+;\n/gm, "");

  // 清理多余空行
  return content.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

// ─── FULL schema 生成 ────────────────────────────────────────────────────────

function generateFullSchema(
  file: FileInfo,
  circularFields: CircularField[]
): string {
  const schemaName = `${file.modelName}Schema`;
  const fullSchemaName = `${file.modelName}FullSchema`;
  const fullTypeName = `${file.modelName}FullType`;

  const importModels = new Map<string, string>();
  importModels.set(schemaName, file.modelName);
  for (const f of circularFields) importModels.set(f.schemaName, f.modelName);

  const importLines = [...importModels.entries()]
    .map(
      ([name, model]) => `import { ${name} } from "../models/${model}.schema";`
    )
    .join("\n");

  const extendFields = circularFields
    .map((f) => {
      if (f.isList) return `  ${f.fieldName}: z.array(${f.schemaName}),`;
      if (f.isOptional) return `  ${f.fieldName}: ${f.schemaName}.nullish(),`;
      return `  ${f.fieldName}: ${f.schemaName},`;
    })
    .join("\n");

  return `/**
 * Auto-generated Full Schema for ${file.modelName}
 * Generated by scripts/fix-circular-imports.ts
 * Do not edit manually - re-run 'pnpm generate' to update
 */
import z from "zod";
${importLines}

export const ${fullSchemaName} = ${schemaName}.extend({
${extendFields}
});

export type ${fullTypeName} = z.infer<typeof ${fullSchemaName}>;
`;
}

// ─── Barrel 生成 ─────────────────────────────────────────────────────────────

function generateComposedBarrel(modelNames: string[]): string {
  return (
    modelNames
      .map(
        (m) =>
          `export { ${m}FullSchema } from "./${m}.schema";\nexport type { ${m}FullType } from "./${m}.schema";`
      )
      .join("\n") + "\n"
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const schemaFiles = getSchemaFiles();
  console.log(`Found ${schemaFiles.length} schema files`);

  const files: FileInfo[] = schemaFiles.map((filePath) => {
    const content = readFileSync(filePath, "utf-8");
    const name = filePath.split(/[/\\]/).pop() ?? "";
    return {
      path: filePath,
      name,
      modelName: getModelName(name),
      content,
      imports: parseImports(content)
    };
  });

  const cycles = detectCycles(files);

  console.log("\nDetected circular dependencies:");
  let hasCycles = false;
  for (const [model, deps] of cycles) {
    if (deps.size > 0) {
      console.log(`  ${model} -> ${[...deps].join(", ")}`);
      hasCycles = true;
    }
  }
  if (!hasCycles) {
    console.log("  None detected.");
    return;
  }

  const composedDir = join(process.cwd(), "generated", "schemas", "composed");
  if (!existsSync(composedDir)) {
    mkdirSync(composedDir, { recursive: true });
    console.log("\n📁 Created: generated/schemas/composed/");
  }

  const composedModels: string[] = [];
  let fixedCount = 0;

  for (const file of files) {
    const circularModels = cycles.get(file.modelName);
    if (!circularModels || circularModels.size === 0) continue;

    const circularFields = extractCircularFields(file.content, circularModels);
    if (circularFields.length === 0) continue;

    // BASE schema
    writeFileSync(file.path, createBaseSchema(file, circularFields), "utf-8");
    console.log(
      `\n✅ BASE : ${file.name}  (removed: ${circularFields.map((f) => f.fieldName).join(", ")})`
    );

    // FULL schema
    const fullPath = join(composedDir, file.name);
    writeFileSync(fullPath, generateFullSchema(file, circularFields), "utf-8");
    console.log(
      `📦 FULL : composed/${file.name}  (added: ${circularFields.map((f) => f.fieldName).join(", ")})`
    );

    composedModels.push(file.modelName);
    fixedCount++;
  }

  if (composedModels.length > 0) {
    writeFileSync(
      join(composedDir, "index.ts"),
      generateComposedBarrel(composedModels),
      "utf-8"
    );
    console.log(
      `\n📋 composed/index.ts  (${composedModels.length} full schemas)`
    );
  }

  // 清理旧 _registry.ts
  const registryPath = join(
    process.cwd(),
    "generated",
    "schemas",
    "models",
    "_registry.ts"
  );
  if (existsSync(registryPath)) {
    writeFileSync(
      registryPath,
      "// This file is no longer used.\nexport {};\n",
      "utf-8"
    );
    console.log("🗑  Cleared: _registry.ts");
  }

  console.log(`\n✨ Done: ${fixedCount} model(s) → base + full schema.`);
}

main();
