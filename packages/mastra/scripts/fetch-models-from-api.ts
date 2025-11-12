import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 使用爬虫脚本中的模型数据结构
interface ModelCapability {
  id: string;
  provider: string;
  name: string;
  group: string;
  contextLength: number | null;
  supportsTools: boolean;
  supportsReasoning: boolean;
  supportsImage: boolean;
  supportsAudio: boolean;
  supportsVideo: boolean;
  inputPricePerMillion: number | null;
  outputPricePerMillion: number | null;
}

interface ProviderInfo {
  id: string;
  name: string;
  type: string;
  modelCount: number;
  url: string;
  isGateway?: boolean; // 新增：标识是否为网关
  isPopular?: boolean; // 新增：标识是否为热门供应商
}

interface ScrapedData {
  providers: ProviderInfo[];
  models: ModelCapability[];
  skippedProviders: ProviderInfo[];
  gateways: ProviderInfo[]; // 新增：单独列出网关
  metadata: {
    scrapedAt: string;
    totalProviders: number;
    totalModels: number;
    skippedCount: number;
    gatewayCount: number;
  };
}

/**
 * Zod schemas for models.dev API response structure
 *
 * 这些 schema 用于：
 * 1. 提供类型推导 (z.infer<typeof Schema>)
 * 2. 作为 API 数据结构的文档
 * 3. 未来可用于运行时验证（当前由于 Zod v4 兼容性问题暂时禁用）
 *
 * 参考自 generate-model-docs.ts 中的 schema 定义
 */
const ModelsDevModalitiesSchema = z.object({
  input: z.array(z.string()).optional(),
  output: z.array(z.string()).optional(),
});

const ModelsDevLimitSchema = z.object({
  context: z.number().optional(),
  output: z.number().optional(),
});

const ModelsDevCostSchema = z.object({
  input: z.number().optional(),
  output: z.number().optional(),
});

const ModelsDevModelSchema = z
  .object({
    id: z.string().optional(),
    context: z.number().optional(),
    limit: ModelsDevLimitSchema.optional(),
    modalities: ModelsDevModalitiesSchema.optional(),
    tool_call: z.boolean().optional(),
    reasoning: z.boolean().optional(),
    cost: ModelsDevCostSchema.optional(),
  })
  .passthrough(); // Allow additional properties

const ModelsDevProviderSchema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    url: z.string().optional(),
    npm: z.string().optional(),
    models: z.record(ModelsDevModelSchema).optional(),
  })
  .passthrough(); // Allow additional properties

// Allow provider values to be either an object or a string (for aliases)
const ModelsDevResponseSchema = z.record(
  z.union([z.string(), ModelsDevProviderSchema]),
);

type ModelsDevModel = z.infer<typeof ModelsDevModelSchema>;
type ModelsDevProvider = z.infer<typeof ModelsDevProviderSchema>;
type ModelsDevResponse = z.infer<typeof ModelsDevResponseSchema>;

// 从 generate-model-docs.ts 中参考的常量
const POPULAR_PROVIDERS = [
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistral",
  "xai",
];

const GATEWAY_PROVIDERS = ["netlify", "openrouter", "vercel"];

/**
 * 格式化供应商名称
 */
function formatProviderName(name: string): string {
  const specialCases: Record<string, string> = {
    "fireworks-ai": "Fireworks AI",
    openrouter: "OpenRouter",
    togetherai: "Together AI",
    huggingface: "Hugging Face",
    deepseek: "DeepSeek",
    openai: "OpenAI",
    xai: "xAI",
    "github-copilot": "GitHub Copilot",
    "github-models": "GitHub Models",
    deepinfra: "Deep Infra",
    fastrouter: "FastRouter",
    baseten: "Baseten",
    lmstudio: "LMStudio",
    modelscope: "ModelScope",
    moonshotai: "Moonshot AI",
    "moonshotai-cn": "Moonshot AI (China)",
    zhipuai: "Zhipu AI",
    opencode: "OpenCode",
    netlify: "Netlify",
    vercel: "Vercel",
    anthropic: "Anthropic",
    google: "Google",
    groq: "Groq",
    mistral: "Mistral",
  };

  const lower = name.toLowerCase();
  if (specialCases[lower]) {
    return specialCases[lower];
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * 从 models.dev API 获取所有数据
 */
async function fetchModelsDevData(): Promise<ScrapedData> {
  console.log("🔍 正在从 models.dev API 获取数据...");

  try {
    const response = await fetch("https://models.dev/api.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 获取 API 响应数据
    // 注意：Zod v4 的 schema 定义在上面，用于类型推导和文档
    // 由于 Zod v4 在运行时验证存在兼容性问题，这里使用类型断言
    const data = (await response.json()) as ModelsDevResponse;

    const providers: ProviderInfo[] = [];
    const models: ModelCapability[] = [];
    const skippedProviders: ProviderInfo[] = [];
    const gateways: ProviderInfo[] = [];

    // 遍历所有供应商
    for (const [providerId, providerData] of Object.entries(data)) {
      // 跳过字符串类型的值（别名或引用）
      if (typeof providerData === "string") {
        console.log(`⏭️  ${providerId}: 别名引用，跳过`);
        continue;
      }

      if (!providerData || typeof providerData !== "object") {
        console.warn(`⚠️  ${providerId}: 数据格式无效，跳过`);
        continue;
      }

      const providerName = providerData.name || formatProviderName(providerId);
      const isGateway = GATEWAY_PROVIDERS.includes(providerId);
      const isPopular = POPULAR_PROVIDERS.includes(providerId);

      // 检查是否有模型数据
      if (!providerData.models || typeof providerData.models !== "object") {
        skippedProviders.push({
          id: providerId,
          name: providerName,
          type: providerId,
          modelCount: 0,
          url: `/models/providers/${providerId}`,
          isGateway,
          isPopular,
        });
        console.log(`❌ ${providerName}: 没有模型数据，跳过`);
        continue;
      }

      const modelEntries = Object.entries(providerData.models);
      if (modelEntries.length === 0) {
        skippedProviders.push({
          id: providerId,
          name: providerName,
          type: providerId,
          modelCount: 0,
          url: `/models/providers/${providerId}`,
          isGateway,
          isPopular,
        });
        console.log(`❌ ${providerName}: 模型列表为空，跳过`);
        continue;
      }

      // 创建供应商信息
      const providerInfo: ProviderInfo = {
        id: providerId,
        name: providerName,
        type: providerId,
        modelCount: modelEntries.length,
        url: `/models/providers/${providerId}`,
        isGateway,
        isPopular,
      };

      // 根据类型分类
      if (isGateway) {
        gateways.push(providerInfo);
      }
      providers.push(providerInfo);

      // 处理每个模型
      for (const [modelId, modelData] of modelEntries) {
        if (!modelData || typeof modelData !== "object") {
          continue;
        }

        const model: ModelCapability = {
          id: `${providerId}/${modelId}`,
          provider: providerId,
          name: modelId,
          group: providerName,
          contextLength: modelData.limit?.context || modelData.context || null,
          supportsTools: modelData.tool_call !== false,
          supportsReasoning: modelData.reasoning === true,
          supportsImage:
            modelData.modalities?.input?.includes("image") || false,
          supportsAudio:
            modelData.modalities?.input?.includes("audio") || false,
          supportsVideo:
            modelData.modalities?.input?.includes("video") || false,
          inputPricePerMillion: modelData.cost?.input || null,
          outputPricePerMillion: modelData.cost?.output || null,
        };

        models.push(model);
      }

      console.log(`✅ ${providerName}: 找到 ${modelEntries.length} 个模型`);
    }

    // 排序
    providers.sort((a, b) => a.name.localeCompare(b.name));
    models.sort((a, b) => a.id.localeCompare(b.id));
    gateways.sort((a, b) => a.name.localeCompare(b.name));

    const scrapedData: ScrapedData = {
      providers,
      models,
      skippedProviders,
      gateways,
      metadata: {
        scrapedAt: new Date().toISOString(),
        totalProviders: providers.length,
        totalModels: models.length,
        skippedCount: skippedProviders.length,
        gatewayCount: gateways.length,
      },
    };

    console.log(`\n🎯 数据获取完成:`);
    console.log(`   - 总供应商数: ${providers.length}`);
    console.log(`   - 网关数: ${gateways.length}`);
    console.log(`   - 总模型数: ${models.length}`);
    console.log(`   - 跳过供应商: ${skippedProviders.length}`);

    return scrapedData;
  } catch (error) {
    console.error("❌ 获取 models.dev 数据失败:", error);
    throw error;
  }
}

/**
 * 保存数据到 JSON 文件（与爬虫脚本相同的格式）
 */
async function saveData(data: ScrapedData) {
  const outputDir = join(__dirname, "..", "data");

  // 确保输出目录存在
  try {
    await fs.access(outputDir);
  } catch {
    await fs.mkdir(outputDir, { recursive: true });
  }

  // 保存完整数据
  await fs.writeFile(
    join(outputDir, "scraped-mastra-data.json"),
    JSON.stringify(data, null, 2),
  );

  // 生成 provider.json 格式
  const providerData: Record<string, ProviderInfo> = {};
  data.providers.forEach((provider) => {
    providerData[provider.id] = {
      id: provider.id,
      name: provider.name,
      type: provider.type,
      modelCount: provider.modelCount,
      url: `https://mastra.ai${provider.url}`,
      isGateway: provider.isGateway || false,
      isPopular: provider.isPopular || false,
    };
  });

  await fs.writeFile(
    join(outputDir, "new-provider.json"),
    JSON.stringify(providerData, null, 2),
  );

  // 生成 model.json 格式（按供应商分组）
  const modelData: Record<string, ModelCapability[]> = {};
  data.models.forEach((model) => {
    if (!modelData[model.provider]) {
      modelData[model.provider] = [];
    }
    modelData[model.provider].push(model);
  });

  await fs.writeFile(
    join(outputDir, "new-model.json"),
    JSON.stringify(modelData, null, 2),
  );

  // 保存网关数据
  const gatewayData: Record<string, ProviderInfo> = {};
  data.gateways.forEach((gateway) => {
    gatewayData[gateway.id] = {
      id: gateway.id,
      name: gateway.name,
      type: gateway.type,
      modelCount: gateway.modelCount,
      url: `https://mastra.ai${gateway.url}`,
    };
  });

  await fs.writeFile(
    join(outputDir, "gateways.json"),
    JSON.stringify(gatewayData, null, 2),
  );

  // 保存跳过的供应商数据
  const skippedData: Record<
    string,
    ProviderInfo & { reason: string; skippedAt: string; modelCount: number }
  > = {};
  data.skippedProviders.forEach((provider) => {
    skippedData[provider.id] = {
      id: provider.id,
      name: provider.name,
      type: provider.type,
      modelCount: provider.modelCount,
      url: `https://mastra.ai${provider.url}`,
      reason: "无模型数据或模型列表为空",
      skippedAt: data.metadata.scrapedAt,
    };
  });

  await fs.writeFile(
    join(outputDir, "skipped-providers.json"),
    JSON.stringify(skippedData, null, 2),
  );

  console.log(`\n💾 数据已保存到 ${outputDir}`);
  console.log(`   - 完整数据: scraped-mastra-data.json`);
  console.log(`   - 供应商数据: new-provider.json`);
  console.log(`   - 模型数据: new-model.json`);
  console.log(`   - 网关数据: gateways.json`);
  console.log(
    `   - 跳过的供应商: skipped-providers.json (${data.skippedProviders.length} 个)`,
  );
}

/**
 * 主执行函数
 */
async function main() {
  try {
    console.log("🚀 开始从 models.dev API 获取 Mastra 模型数据...\n");

    const data = await fetchModelsDevData();
    await saveData(data);

    console.log("\n✅ 所有数据已成功获取并保存！");
  } catch (error) {
    console.error("\n❌ 执行过程中出现错误:", error);
    process.exit(1);
  }
}

// 直接运行脚本
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

export { fetchModelsDevData, saveData };
