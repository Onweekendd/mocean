/**
 * 从 models.dev API 更新 Prisma schema 中的 ProviderType 枚举
 *
 * 功能：
 * 1. 从 models.dev API 接口中获取数据
 * 2. 使用 Set 通过 provider id 来进行去重，Set 中保存的是 ProviderType
 * 3. 遍历 Set 中的数据，更新 packages/mastra/prisma/schema.prisma 中的 ProviderType
 * 4. 执行 npx prisma generate
 */
import { exec } from "child_process";
import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import { z } from "zod";

const execAsync = promisify(exec);

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Zod schemas for models.dev API (从 fetch-models-from-api.ts 复用)
const ModelsDevModalitiesSchema = z.object({
  input: z.array(z.string()).optional(),
  output: z.array(z.string()).optional()
});

const ModelsDevLimitSchema = z.object({
  context: z.number().optional(),
  output: z.number().optional()
});

const ModelsDevCostSchema = z.object({
  input: z.number().optional(),
  output: z.number().optional()
});

const ModelsDevModelSchema = z.looseObject({
  id: z.string().optional(),
  context: z.number().optional(),
  limit: ModelsDevLimitSchema.optional(),
  modalities: ModelsDevModalitiesSchema.optional(),
  tool_call: z.boolean().optional(),
  reasoning: z.boolean().optional(),
  cost: ModelsDevCostSchema.optional()
});

const ModelsDevProviderSchema = z.looseObject({
  id: z.string().optional(),
  name: z.string().optional(),
  url: z.string().optional(),
  npm: z.string().optional(),
  models: z.record(z.string(), ModelsDevModelSchema).optional()
});

const ModelsDevResponseSchema = z.record(
  z.string(),
  z.union([z.string(), ModelsDevProviderSchema])
);

type ModelsDevResponse = z.infer<typeof ModelsDevResponseSchema>;

/**
 * 将短横线连接的字符串转换为下划线连接
 * @param value - 需要转换的字符串（例如 aa-bb）
 * @returns 转换后的字符串（例如 aa_bb）
 */
function convertKebabToSnake(value: string): string {
  return value.replace(/-/g, "_");
}

/**
 * 从 models.dev API 获取原始数据
 * @returns Promise<ModelsDevResponse> - 解析后的API响应数据
 * @throws {Error} 当API请求失败时
 */
async function fetchApiData(): Promise<ModelsDevResponse> {
  console.log("🔍 正在从 models.dev API 获取数据...");

  try {
    const response = await fetch("https://models.dev/api.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as ModelsDevResponse;
    return ModelsDevResponseSchema.parse(data);
  } catch (error) {
    console.error("❌ 获取 models.dev 数据失败:", error);
    throw error;
  }
}

/**
 * 将供应商ID映射到ProviderType枚举值（snake_case格式）
 * @param providerId - 供应商ID（如 "fireworks-ai"）
 * @returns ProviderType枚举值（如 "fireworks_ai"）
 */
function mapProviderIdToType(providerId: string): string {
  // 特殊映射表 - 处理不规则的命名转换
  const specialMapping: Record<string, string> = {
    // 别名映射
    fireworks: "fireworks_ai",
    github: "github_models",
    grok: "xai",
    together: "togetherai",
    zhipu: "zhipuai",
    moonshot: "moonshotai",
    dashscope: "alibaba",
    ollama: "lmstudio" // Ollama 映射到 LMStudio
  };

  // 如果在特殊映射表中找到，返回映射值
  if (specialMapping[providerId]) {
    return specialMapping[providerId];
  }

  // 默认转换：kebab-case -> snake_case
  return convertKebabToSnake(providerId);
}

/**
 * 从API数据中提取所有唯一的 ProviderType
 * @param apiData - API响应数据
 * @returns 去重后的 ProviderType 集合
 */
async function extractProviderTypes(
  apiData: ModelsDevResponse
): Promise<Set<string>> {
  console.log("\n🔍 提取供应商类型...");

  const providerTypes = new Set<string>();

  // 遍历所有供应商
  for (const [providerId, providerData] of Object.entries(apiData)) {
    // 跳过字符串类型的值（别名或引用）
    if (typeof providerData === "string") {
      console.log(`  ⏭️  ${providerId}: 别名引用，跳过`);
      continue;
    }

    if (!providerData || typeof providerData !== "object") {
      console.warn(`  ⚠️  ${providerId}: 数据格式无效，跳过`);
      continue;
    }

    // 映射供应商ID到枚举值
    const providerType = mapProviderIdToType(providerId);
    providerTypes.add(providerType);

    console.log(`  ✅ ${providerId} -> ${providerType}`);
  }

  console.log(`\n📊 统计: 找到 ${providerTypes.size} 个唯一的供应商类型`);

  return providerTypes;
}

/**
 * 更新 schema.prisma 中的 ProviderType 枚举
 * @param providerTypes - 要添加的供应商类型集合
 */
async function updateSchemaProviderType(
  providerTypes: Set<string>
): Promise<void> {
  console.log("\n📝 更新 schema.prisma 文件...");

  const schemaPath = join(__dirname, "..", "prisma", "schema.prisma");

  try {
    // 读取现有的 schema 文件
    const schemaContent = await fs.readFile(schemaPath, "utf-8");

    // 查找 ProviderType 枚举的位置
    const enumStartRegex = /enum\s+ProviderType\s*{/;
    const enumStartMatch = schemaContent.match(enumStartRegex);

    if (!enumStartMatch) {
      throw new Error("无法在 schema.prisma 中找到 ProviderType 枚举定义");
    }

    const enumStartIndex = enumStartMatch.index;

    // 找到枚举的结束位置
    let braceCount = 0;
    let enumEndIndex = -1;
    for (let i = enumStartIndex; i < schemaContent.length; i++) {
      if (schemaContent[i] === "{") braceCount++;
      if (schemaContent[i] === "}") {
        braceCount--;
        if (braceCount === 0) {
          enumEndIndex = i;
          break;
        }
      }
    }

    if (enumEndIndex === -1) {
      throw new Error("无法找到 ProviderType 枚举的结束位置");
    }

    // 提取现有的枚举值
    const enumContent = schemaContent.substring(
      enumStartIndex,
      enumEndIndex + 1
    );
    const existingTypes = new Set<string>();
    const typeRegex = /^\s*([a-z_][a-z0-9_]*)/gm;
    let match;

    while ((match = typeRegex.exec(enumContent)) !== null) {
      const typeName = match[1];
      // 排除 "enum" 和 "ProviderType" 这些关键字
      if (typeName !== "enum" && typeName !== "ProviderType") {
        existingTypes.add(typeName);
      }
    }

    console.log(`  📋 现有类型数量: ${existingTypes.size}`);

    // 合并新旧类型
    const allTypes = new Set([...existingTypes, ...providerTypes]);
    const sortedTypes = Array.from(allTypes).sort();

    console.log(`  📋 合并后类型数量: ${sortedTypes.length}`);

    // 找出新增的类型
    const newTypes = sortedTypes.filter((type) => !existingTypes.has(type));
    if (newTypes.length > 0) {
      console.log(`  ✨ 新增类型 (${newTypes.length}个):`);
      newTypes.forEach((type) => console.log(`     - ${type}`));
    } else {
      console.log(`  ℹ️  没有新增类型`);
    }

    // 构建新的枚举定义
    const newEnumLines = ["enum ProviderType {"];

    // 按类别组织（可选，保持原有注释）
    const comments: Record<string, string[]> = {
      "  // 主流供应商": [
        "openai",
        "openai_compatible",
        "anthropic",
        "google",
        "gemini",
        "deepseek",
        "groq",
        "mistral"
      ],
      "  // 网关供应商": ["netlify", "openrouter", "vercel"],
      "  // 中国供应商": [
        "qwenlm",
        "alibaba",
        "alibaba_cn",
        "zhipuai",
        "moonshotai",
        "moonshotai_cn",
        "modelscope"
      ],
      "  // Azure 和其他": ["azure_openai", "xai", "xai_cn"]
    };

    // 添加带分类的类型
    const addedTypes = new Set<string>();

    for (const [comment, types] of Object.entries(comments)) {
      const matchingTypes = types.filter((type) => sortedTypes.includes(type));
      if (matchingTypes.length > 0) {
        newEnumLines.push(comment);
        matchingTypes.forEach((type) => {
          newEnumLines.push(`  ${type}`);
          addedTypes.add(type);
        });
      }
    }

    // 添加未分类的其他类型
    const uncategorizedTypes = sortedTypes.filter(
      (type) => !addedTypes.has(type)
    );
    if (uncategorizedTypes.length > 0) {
      newEnumLines.push("  // 其他供应商");
      uncategorizedTypes.forEach((type) => {
        newEnumLines.push(`  ${type}`);
      });
    }

    newEnumLines.push("}");

    // 替换旧的枚举定义
    const newEnumContent = newEnumLines.join("\n");
    const newSchemaContent =
      schemaContent.substring(0, enumStartIndex) +
      newEnumContent +
      schemaContent.substring(enumEndIndex + 1);

    // 写回文件
    await fs.writeFile(schemaPath, newSchemaContent, "utf-8");

    console.log(`  ✅ schema.prisma 文件已更新`);
  } catch (error) {
    console.error("  ❌ 更新 schema.prisma 失败:", error);
    throw error;
  }
}

/**
 * 执行 prisma generate 命令
 */
async function runPrismaGenerate(): Promise<void> {
  console.log("\n🔧 执行 npx prisma generate...");

  try {
    const { stdout, stderr } = await execAsync("npx prisma generate", {
      cwd: join(__dirname, "..")
    });

    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.error(stderr);
    }

    console.log("✅ Prisma 客户端已重新生成");
  } catch (error) {
    console.error("❌ 执行 prisma generate 失败:", error);
    throw error;
  }
}

/**
 * 主执行函数
 */
async function main() {
  try {
    console.log("🚀 开始更新 ProviderType 枚举...\n");

    // 1. 从 API 获取数据
    const apiData = await fetchApiData();

    // 2. 提取所有唯一的 ProviderType
    const providerTypes = await extractProviderTypes(apiData);

    // 3. 更新 schema.prisma
    await updateSchemaProviderType(providerTypes);

    // 4. 执行 prisma generate
    await runPrismaGenerate();

    console.log("\n✅ ProviderType 枚举更新完成！");
  } catch (error) {
    console.error("\n❌ 执行过程中出现错误:", error);
    process.exit(1);
  }
}

// 执行主函数
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

export { extractProviderTypes, updateSchemaProviderType, mapProviderIdToType };
