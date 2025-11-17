import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { z } from "zod";

import { PrismaClient, ProviderType } from "../generated/prisma/index.js";

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 初始化 Prisma Client
const prisma = new PrismaClient();

// 定义 provider 配置数据的类型
type ProviderConfigData = Record<
  string,
  {
    api?: {
      url?: string;
    };
    websites?: {
      official?: string;
      apiKey?: string;
      docs?: string;
      models?: string;
    };
  }
>;

// 动态加载 provider 配置数据
let providerConfigData: ProviderConfigData = {};

/**
 * 加载 provider 配置数据
 * @returns Promise<ProviderConfigData> - 加载后的配置数据
 */
async function loadProviderConfig(): Promise<ProviderConfigData> {
  try {
    const configPath = join(__dirname, "..", "data", "provider.json");
    const configContent = await fs.readFile(configPath, "utf-8");
    return JSON.parse(configContent) as ProviderConfigData;
  } catch (error) {
    console.warn("⚠️  无法加载 provider 配置文件，将使用默认空配置:", error);
    return {};
  }
}

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
  url?: string;
  modelCount: number;
  isGateway?: boolean; // 新增：标识是否为网关
  isPopular?: boolean; // 新增：标识是否为热门供应商
}

interface GatewayInfo {
  id: string;
  name: string;
  type: string;
  url?: string;
  supportedProviders: string[]; // 支持的供应商列表
  modelsByProvider: Record<string, ModelCapability[]>; // 按供应商分组的模型
  totalModels: number; // 模型总数
  modelCountByProvider: Record<string, number>; // 各供应商的模型数统计
}

interface ScrapedData {
  providers: ProviderInfo[];
  models: ModelCapability[];
  skippedProviders: ProviderInfo[];
  gateways: GatewayInfo[]; // 新增：单独列出网关
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

const ModelsDevModelSchema = z.looseObject({
  id: z.string().optional(),
  context: z.number().optional(),
  limit: ModelsDevLimitSchema.optional(),
  modalities: ModelsDevModalitiesSchema.optional(),
  tool_call: z.boolean().optional(),
  reasoning: z.boolean().optional(),
  cost: ModelsDevCostSchema.optional(),
});

const ModelsDevProviderSchema = z.looseObject({
  id: z.string().optional(),
  name: z.string().optional(),
  url: z.string().optional(),
  npm: z.string().optional(),
  models: z.record(z.string(), ModelsDevModelSchema).optional(),
});

// Allow provider values to be either an object or a string (for aliases)
const ModelsDevResponseSchema = z.record(
  z.string(),
  z.union([z.string(), ModelsDevProviderSchema]),
);

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
 * 格式化供应商名称，将供应商ID转换为可读的显示名称
 * @param name - 供应商ID或名称
 * @returns 格式化后的供应商名称
 * @example
 * formatProviderName("openai") // returns "OpenAI"
 * formatProviderName("fireworks-ai") // returns "Fireworks AI"
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

    // 获取 API 响应数据并验证
    const data = (await response.json()) as ModelsDevResponse;
    return ModelsDevResponseSchema.parse(data);
  } catch (error) {
    console.error("❌ 获取 models.dev 数据失败:", error);
    throw error;
  }
}

/**
 * 解析网关模型ID，提取供应商和实际模型ID
 * @param modelId - 完整的模型ID，格式为 "供应商/模型ID"
 * @returns 包含供应商和模型ID的对象，如果格式无效则返回null
 * @example
 * parseGatewayModelId("anthropic/claude-3.5-haiku")
 * // returns { provider: "anthropic", modelId: "claude-3.5-haiku" }
 */
function parseGatewayModelId(
  modelId: string,
): { provider: string; modelId: string } | null {
  const separatorIndex = modelId.indexOf("/");
  if (separatorIndex === -1) {
    return null;
  }

  return {
    provider: modelId.substring(0, separatorIndex),
    modelId: modelId.substring(separatorIndex + 1),
  };
}

/**
 * 从解析的模型数据创建ModelCapability对象
 * @param parsedModel - Zod解析后的模型数据
 * @param modelId - 模型ID
 * @param providerId - 供应商ID
 * @param providerName - 供应商显示名称
 * @returns ModelCapability对象
 */
function createModelCapability(
  parsedModel: z.infer<typeof ModelsDevModelSchema>,
  modelId: string,
  providerId: string,
  providerName: string,
): ModelCapability {
  return {
    id: modelId,
    provider: providerId,
    name: modelId,
    group: providerName,
    contextLength: parsedModel.limit?.context || parsedModel.context || null,
    supportsTools: parsedModel.tool_call !== false,
    supportsReasoning: parsedModel.reasoning === true,
    supportsImage: parsedModel.modalities?.input?.includes("image") || false,
    supportsAudio: parsedModel.modalities?.input?.includes("audio") || false,
    supportsVideo: parsedModel.modalities?.input?.includes("video") || false,
    inputPricePerMillion: parsedModel.cost?.input || null,
    outputPricePerMillion: parsedModel.cost?.output || null,
  };
}

/**
 * 处理网关供应商的数据
 * @param providerId - 网关供应商ID
 * @param providerName - 网关供应商名称
 * @param modelEntries - 模型条目数组
 * @returns 网关信息对象
 */
function processGatewayProvider(
  providerId: string,
  providerName: string,
  modelEntries: [string, unknown][],
): GatewayInfo {
  const modelsByProvider: Record<string, ModelCapability[]> = {};
  const modelCountByProvider: Record<string, number> = {};
  const supportedProviders: Set<string> = new Set();
  let totalModels = 0;

  // 处理网关中的每个模型
  for (const [modelId, modelData] of modelEntries) {
    const parsedModel = ModelsDevModelSchema.parse(modelData);

    // 解析模型ID格式：供应商前缀/模型ID
    const parsedId = parseGatewayModelId(modelId);
    if (!parsedId) {
      console.warn(
        `⚠️  ${providerName}: 模型 ${modelId} 格式不符合 "供应商/模型ID" 格式，跳过`,
      );
      continue;
    }

    const { provider: modelProvider, modelId: actualModelId } = parsedId;

    // 记录支持的供应商
    supportedProviders.add(modelProvider);

    // 创建模型对象
    const model = createModelCapability(
      parsedModel,
      actualModelId,
      modelProvider,
      formatProviderName(modelProvider),
    );

    // 按供应商分组
    if (!modelsByProvider[modelProvider]) {
      modelsByProvider[modelProvider] = [];
      modelCountByProvider[modelProvider] = 0;
    }
    modelsByProvider[modelProvider].push(model);
    modelCountByProvider[modelProvider]++;
    totalModels++;
  }

  console.log(
    `✅ ${providerName} (网关): 找到 ${totalModels} 个模型，支持 ${supportedProviders.size} 个供应商`,
  );

  return {
    id: providerId,
    name: providerName,
    type: providerId,
    url: `https://mastra.ai/models/gateways/${providerId}`,
    supportedProviders: Array.from(supportedProviders).sort(),
    modelsByProvider,
    totalModels,
    modelCountByProvider,
  };
}

/**
 * 处理普通供应商的数据
 * @param providerId - 供应商ID
 * @param providerName - 供应商名称
 * @param isPopular - 是否为热门供应商
 * @param modelEntries - 模型条目数组
 * @param models - 模型数组（用于添加处理后的模型）
 * @returns 供应商信息对象
 */
function processRegularProvider(
  providerId: string,
  providerName: string,
  isPopular: boolean,
  modelEntries: [string, unknown][],
  models: ModelCapability[],
): ProviderInfo {
  // 处理每个模型
  for (const [modelId, modelData] of modelEntries) {
    const parsedModel = ModelsDevModelSchema.parse(modelData);
    const model = createModelCapability(
      parsedModel,
      modelId,
      providerId,
      providerName,
    );
    models.push(model);
  }

  console.log(`✅ ${providerName}: 找到 ${modelEntries.length} 个模型`);

  return {
    id: providerId,
    name: providerName,
    type: providerId,
    modelCount: modelEntries.length,
    isPopular,
  };
}

/**
 * 创建跳过的供应商信息
 * @param providerId - 供应商ID
 * @param providerName - 供应商名称
 * @param isGateway - 是否为网关
 * @param isPopular - 是否为热门供应商
 * @returns 供应商信息对象
 */
function createSkippedProvider(
  providerId: string,
  providerName: string,
  isGateway: boolean,
  isPopular: boolean,
): ProviderInfo {
  return {
    id: providerId,
    name: providerName,
    type: providerId,
    modelCount: 0,
    isGateway,
    isPopular,
  };
}

/**
 * 从 models.dev API 获取并处理所有数据
 * @returns Promise<ScrapedData> - 包含所有处理后数据的对象
 * @throws {Error} 当数据获取或处理失败时
 */
async function fetchModelsDevData(): Promise<ScrapedData> {
  try {
    // 获取和解析API数据
    const parsedData = await fetchApiData();

    const providers: ProviderInfo[] = [];
    const models: ModelCapability[] = [];
    const skippedProviders: ProviderInfo[] = [];
    const gateways: GatewayInfo[] = [];

    // 遍历所有供应商
    for (const [providerId, providerData] of Object.entries(parsedData)) {
      // 跳过字符串类型的值（别名或引用）
      if (typeof providerData === "string") {
        console.log(`⏭️  ${providerId}: 别名引用，跳过`);
        continue;
      }

      if (!providerData || typeof providerData !== "object") {
        console.warn(`⚠️  ${providerId}: 数据格式无效，跳过`);
        continue;
      }

      const provider = ModelsDevProviderSchema.parse(providerData);
      const providerName = provider.name || formatProviderName(providerId);
      const isGateway = GATEWAY_PROVIDERS.includes(providerId);
      const isPopular = POPULAR_PROVIDERS.includes(providerId);

      // 检查是否有模型数据
      if (!provider.models || typeof provider.models !== "object") {
        const skippedProvider = createSkippedProvider(
          providerId,
          providerName,
          isGateway,
          isPopular,
        );
        skippedProviders.push(skippedProvider);
        console.log(`❌ ${providerName}: 没有模型数据，跳过`);
        continue;
      }

      const modelEntries = Object.entries(provider.models);
      if (modelEntries.length === 0) {
        const skippedProvider = createSkippedProvider(
          providerId,
          providerName,
          isGateway,
          isPopular,
        );
        skippedProviders.push(skippedProvider);
        console.log(`❌ ${providerName}: 模型列表为空，跳过`);
        continue;
      }

      // 网关和普通供应商分开处理
      if (isGateway) {
        const gatewayInfo = processGatewayProvider(
          providerId,
          providerName,
          modelEntries,
        );
        gateways.push(gatewayInfo);
      } else {
        const providerInfo = processRegularProvider(
          providerId,
          providerName,
          isPopular,
          modelEntries,
          models,
        );
        providers.push(providerInfo);
      }
    }

    // 排序所有数据
    providers.sort((a, b) => a.name.localeCompare(b.name));
    models.sort((a, b) => a.id.localeCompare(b.id));
    gateways.sort((a, b) => a.name.localeCompare(b.name));

    // 创建最终结果
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

    // 输出统计信息
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
      url: `https://mastra.ai/models/providers/${provider.id}`,
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

  // 保存网关数据（包含完整的支持供应商和模型信息）
  const gatewayData: Record<string, GatewayInfo> = {};
  data.gateways.forEach((gateway) => {
    gatewayData[gateway.id] = {
      id: gateway.id,
      name: gateway.name,
      type: gateway.type,
      url: gateway.url,
      supportedProviders: gateway.supportedProviders,
      modelsByProvider: gateway.modelsByProvider,
      totalModels: gateway.totalModels,
      modelCountByProvider: gateway.modelCountByProvider,
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
      url: `https://mastra.ai/models/providers/${provider.id}`,
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

    // 0. 加载 provider 配置数据
    providerConfigData = await loadProviderConfig();

    // 1. 从API获取数据
    const data = await fetchModelsDevData();

    // 2. （可选）保存到文件用于备份或调试
    // await saveData(data);

    // 3. 直接插入到数据库
    await insertProvidersAndModels(data);

    console.log("\n✅ 所有数据已成功获取并插入数据库！");
  } catch (error) {
    console.error("\n❌ 执行过程中出现错误:", error);
    process.exit(1);
  }
}

/**
 * 模型去重和关联关系提取
 * @param data - 从API获取的完整数据
 * @returns 去重后的模型列表和模型-供应商关联关系
 */
function deduplicateModels(data: ScrapedData): {
  uniqueModels: ModelCapability[];
  modelProviderRelations: Array<{ modelId: string; providerId: string }>;
} {
  const modelMap = new Map<
    string,
    ModelCapability & { providers: Set<string> }
  >();

  // 1. 处理普通供应商的模型
  for (const model of data.models) {
    if (modelMap.has(model.id)) {
      // 模型已存在，添加供应商
      modelMap.get(model.id).providers.add(model.provider);
    } else {
      // 新模型，创建记录
      modelMap.set(model.id, {
        ...model,
        providers: new Set([model.provider]),
      });
    }
  }

  // 2. 处理网关中的模型
  for (const gateway of data.gateways) {
    // 遍历网关支持的每个供应商的模型
    for (const [providerPrefix, models] of Object.entries(
      gateway.modelsByProvider,
    )) {
      for (const model of models) {
        if (modelMap.has(model.id)) {
          // 模型已存在，添加网关作为供应商
          modelMap.get(model.id).providers.add(gateway.id);
          // 同时也可以关联原始供应商（可选）
          modelMap.get(model.id).providers.add(model.provider);
        } else {
          // 新模型，创建记录
          modelMap.set(model.id, {
            ...model,
            providers: new Set([gateway.id, model.provider]),
          });
        }
      }
    }
  }

  // 3. 转换为数组格式
  const uniqueModels: ModelCapability[] = [];
  const modelProviderRelations: Array<{ modelId: string; providerId: string }> =
    [];

  for (const [modelId, modelData] of modelMap.entries()) {
    // 添加去重后的模型（不包含providers字段）
    const { providers, ...modelWithoutProviders } = modelData;
    uniqueModels.push(modelWithoutProviders);

    // 为每个供应商创建关联关系
    for (const providerId of providers) {
      modelProviderRelations.push({ modelId, providerId });
    }
  }

  console.log(`\n🔍 模型去重结果:`);
  console.log(`   - 原始模型数（含重复）: ${data.models.length}`);
  console.log(`   - 去重后模型数: ${uniqueModels.length}`);
  console.log(`   - 模型-供应商关联数: ${modelProviderRelations.length}`);

  return { uniqueModels, modelProviderRelations };
}

/**
 * 根据模型能力确定模型类型
 * @param model - 模型能力数据
 * @returns 模型类型数组
 */
function determineModelTypes(model: ModelCapability): string[] {
  const types: string[] = ["text"]; // 默认所有模型都支持文本

  if (model.supportsImage) {
    types.push("vision");
  }

  if (model.supportsReasoning) {
    types.push("reasoning");
  }

  if (model.supportsTools) {
    types.push("function_calling");
  }

  // 可以根据模型名称或其他特征添加更多类型判断
  // 例如：embedding 模型通常名称中包含 "embedding"
  if (model.name.toLowerCase().includes("embedding")) {
    types.push("embedding");
  }

  return types;
}

/**
 * 将短横线连接的字符串转换为下划线连接
 * @param value - 需要转换的字符串（例如 aa-bb）
 * @returns 转换后的字符串（例如 aa_bb）
 */
function convertKebabToSnake(value: string): string {
  return value.replace(/-/g, "_");
}

/**
 * 将供应商ID映射到ProviderType枚举值
 * @param providerId - 供应商ID（如 "fireworks-ai"）
 * @returns ProviderType枚举值（如 "fireworks_ai"）
 */
function mapProviderIdToType(providerId: string): ProviderType {
  return convertKebabToSnake(providerId) as ProviderType;
}

/**
 * 将数据插入数据库
 * @param data - 从API获取的完整数据
 */
async function insertProvidersAndModels(data: ScrapedData) {
  console.log("\n💾 开始插入数据到数据库...");

  try {
    // 1. 模型去重
    const { uniqueModels, modelProviderRelations } = deduplicateModels(data);

    // 2. 使用事务插入所有数据
    const result = await prisma.$transaction(
      async (tx) => {
        let providersCreated = 0;
        let providersUpdated = 0;
        let gatewaysCreated = 0;
        let gatewaysUpdated = 0;
        let modelsCreated = 0;
        let modelsUpdated = 0;
        let relationsCreated = 0;

        // 3. 插入普通供应商
        console.log("\n📦 插入供应商数据...");
        for (const provider of data.providers) {
          const config = providerConfigData[provider.id];
          const providerType = mapProviderIdToType(provider.id);

          // 检查是否已存在
          const existing = await tx.provider.findUnique({
            where: { id: provider.id },
          });

          const providerData = {
            type: providerType,
            name: provider.name,
            apiHost: config?.api?.url,
            apiVersion: null,
            enabled: false,
            isSystem: false,
            isAuthed: false,
            isGateway: false,
            isPopular: provider.isPopular || false,
            modelCount: provider.modelCount,
            officialWebsite: config?.websites?.official,
            apiKeyUrl: config?.websites?.apiKey,
            docsUrl: config?.websites?.docs,
            modelsUrl: config?.websites?.models,
          };

          if (existing) {
            // 更新现有供应商（保留apiKey）
            await tx.provider.update({
              where: { id: provider.id },
              data: providerData,
            });
            providersUpdated++;
          } else {
            // 创建新供应商
            await tx.provider.create({
              data: {
                id: provider.id,
                apiKey: "", // 默认为空，用户后续填写
                ...providerData,
              },
            });
            providersCreated++;
          }
        }

        // 4. 插入网关
        console.log("\n🌐 插入网关数据...");
        for (const gateway of data.gateways) {
          const config = providerConfigData[gateway.id];
          const providerType = mapProviderIdToType(gateway.id);

          // 检查是否已存在
          const existing = await tx.provider.findUnique({
            where: { id: gateway.id },
          });

          const gatewayData = {
            type: providerType,
            name: gateway.name,
            apiHost: config?.api?.url,
            apiVersion: null,
            enabled: false,
            isSystem: false,
            isAuthed: false,
            isGateway: true,
            isPopular: false,
            modelCount: gateway.totalModels,
            officialWebsite: config?.websites?.official,
            apiKeyUrl: config?.websites?.apiKey,
            docsUrl: config?.websites?.docs,
            modelsUrl: config?.websites?.models,
          };

          if (existing) {
            // 更新现有网关
            await tx.provider.update({
              where: { id: gateway.id },
              data: gatewayData,
            });
            gatewaysUpdated++;
          } else {
            // 创建新网关
            await tx.provider.create({
              data: {
                id: gateway.id,
                apiKey: "",
                ...gatewayData,
              },
            });
            gatewaysCreated++;
          }
        }

        // 5. 批量插入模型
        console.log("\n🤖 插入模型数据...");
        const BATCH_SIZE = 50;
        for (let i = 0; i < uniqueModels.length; i += BATCH_SIZE) {
          const batch = uniqueModels.slice(i, i + BATCH_SIZE);

          for (const model of batch) {
            const modelTypes = determineModelTypes(model);

            // 检查是否已存在
            const existing = await tx.model.findUnique({
              where: { id: model.id },
            });

            const modelData = {
              name: model.name,
              group: model.group,
              typeJson: JSON.stringify(modelTypes),
              contextLength: model.contextLength,
              supportsTools: model.supportsTools,
              supportsReasoning: model.supportsReasoning,
              supportsImage: model.supportsImage,
              supportsAudio: model.supportsAudio,
              supportsVideo: model.supportsVideo,
              inputPricePerMillion: model.inputPricePerMillion,
              outputPricePerMillion: model.outputPricePerMillion,
            };

            if (existing) {
              // 更新现有模型
              await tx.model.update({
                where: { id: model.id },
                data: modelData,
              });
              modelsUpdated++;
            } else {
              // 创建新模型
              await tx.model.create({
                data: {
                  id: model.id,
                  ...modelData,
                },
              });
              modelsCreated++;
            }
          }

          // 输出进度
          const progress = Math.min(i + BATCH_SIZE, uniqueModels.length);
          console.log(
            `   处理进度: ${progress}/${uniqueModels.length} (${Math.round((progress / uniqueModels.length) * 100)}%)`,
          );
        }

        // 6. 建立模型-供应商关联关系
        console.log("\n🔗 建立模型-供应商关联关系...");
        for (const relation of modelProviderRelations) {
          // 检查供应商是否存在
          const providerExists = await tx.provider.findUnique({
            where: { id: relation.providerId },
          });

          if (!providerExists) {
            // 如果供应商不存在，尝试创建它
            const providerType = mapProviderIdToType(relation.providerId);
            const config = providerConfigData[relation.providerId];

            try {
              await tx.provider.create({
                data: {
                  id: relation.providerId,
                  type: providerType,
                  name: formatProviderName(relation.providerId),
                  apiKey: "",
                  apiHost: config?.api?.url,
                  enabled: false,
                  isSystem: false,
                  isGateway: false,
                  isPopular: false,
                  officialWebsite: config?.websites?.official,
                  apiKeyUrl: config?.websites?.apiKey,
                  docsUrl: config?.websites?.docs,
                  modelsUrl: config?.websites?.models,
                },
              });
              console.log(
                `   ℹ️  自动创建缺失的供应商: ${relation.providerId}`,
              );
            } catch (error) {
              console.warn(
                `${error instanceof Error ? error.message : ""}   ⚠️  无法创建供应商 ${relation.providerId}，跳过关联`,
              );
              continue;
            }
          }

          // 使用 upsert 避免重复插入
          await tx.modelProvider.upsert({
            where: {
              modelId_providerId: {
                modelId: relation.modelId,
                providerId: relation.providerId,
              },
            },
            update: {},
            create: {
              modelId: relation.modelId,
              providerId: relation.providerId,
            },
          });
          relationsCreated++;
        }

        return {
          providersCreated,
          providersUpdated,
          gatewaysCreated,
          gatewaysUpdated,
          modelsCreated,
          modelsUpdated,
          relationsCreated,
        };
      },
      {
        maxWait: 10000, // 最大等待时间 10秒
        timeout: 60000, // 超时时间 60秒
      },
    );

    // 输出统计信息
    console.log("\n✅ 数据插入完成！");
    console.log(`\n📊 统计信息:`);
    console.log(`   供应商:`);
    console.log(`     - 新建: ${result.providersCreated}`);
    console.log(`     - 更新: ${result.providersUpdated}`);
    console.log(`   网关:`);
    console.log(`     - 新建: ${result.gatewaysCreated}`);
    console.log(`     - 更新: ${result.gatewaysUpdated}`);
    console.log(`   模型:`);
    console.log(`     - 新建: ${result.modelsCreated}`);
    console.log(`     - 更新: ${result.modelsUpdated}`);
    console.log(`   关联关系:`);
    console.log(`     - 创建: ${result.relationsCreated}`);
  } catch (error) {
    console.error("\n❌ 数据库插入失败:", error);
    throw error;
  } finally {
    // 关闭 Prisma Client 连接
    await prisma.$disconnect();
  }
}

// 直接运行脚本
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

export { fetchModelsDevData, saveData, mapProviderIdToType };
