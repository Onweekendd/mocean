import { z } from "zod";

import { ProviderType } from "../generated/prisma/index.js";
import { prisma } from "../src/mastra/server/index.js";

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

interface ScrapedData {
  providers: ProviderInfo[];
  models: ModelCapability[];
  skippedProviders: ProviderInfo[];
  metadata: {
    scrapedAt: string;
    totalProviders: number;
    totalModels: number;
    skippedCount: number;
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
 * 处理供应商的数据（包括网关）
 * @param providerId - 供应商ID
 * @param providerName - 供应商名称
 * @param isPopular - 是否为热门供应商
 * @param modelEntries - 模型条目数组
 * @returns 供应商信息对象和处理后的模型数组
 */
function processRegularProvider(
  providerId: string,
  providerName: string,
  isPopular: boolean,
  modelEntries: [string, unknown][],
): { providerInfo: ProviderInfo; models: ModelCapability[] } {
  const models: ModelCapability[] = [];

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
    providerInfo: {
      id: providerId,
      name: providerName,
      type: providerId,
      modelCount: modelEntries.length,
      isPopular,
    },
    models,
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

      const result = processRegularProvider(
        providerId,
        providerName,
        isPopular,
        modelEntries,
      );
      providers.push(result.providerInfo);
      models.push(...result.models);
    }

    // 排序所有数据
    providers.sort((a, b) => a.name.localeCompare(b.name));
    models.sort((a, b) => a.id.localeCompare(b.id));

    // 创建最终结果
    const scrapedData: ScrapedData = {
      providers,
      models,
      skippedProviders,
      metadata: {
        scrapedAt: new Date().toISOString(),
        totalProviders: providers.length,
        totalModels: models.length,
        skippedCount: skippedProviders.length,
      },
    };

    // 输出统计信息
    console.log(`\n🎯 数据获取完成:`);
    console.log(`   - 总供应商数: ${providers.length}`);
    console.log(`   - 总模型数: ${models.length}`);
    console.log(`   - 跳过供应商: ${skippedProviders.length}`);

    return scrapedData;
  } catch (error) {
    console.error("❌ 获取 models.dev 数据失败:", error);
    throw error;
  }
}

/**
 * 主执行函数
 */
async function main() {
  try {
    console.log("🚀 开始从 models.dev API 获取 Mastra 模型数据...\n");

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
        let modelsCreated = 0;
        let modelsUpdated = 0;
        let relationsCreated = 0;

        // 3. 插入普通供应商
        console.log("\n📦 插入供应商数据...");
        for (const provider of data.providers) {
          const providerType = mapProviderIdToType(provider.id);

          // 检查是否已存在
          const existing = await tx.provider.findUnique({
            where: { id: provider.id },
          });

          const providerData = {
            type: providerType,
            name: provider.name,
            apiHost: null,
            apiVersion: null,
            enabled: false,
            isSystem: false,
            isAuthed: false,
            isGateway: false,
            isPopular: provider.isPopular || false,
            modelCount: provider.modelCount,
            officialWebsite: null,
            apiKeyUrl: null,
            docsUrl: null,
            modelsUrl: null,
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

            try {
              await tx.provider.create({
                data: {
                  id: relation.providerId,
                  type: providerType,
                  name: formatProviderName(relation.providerId),
                  apiKey: "",
                  apiHost: null,
                  enabled: false,
                  isSystem: false,
                  isGateway: false,
                  isPopular: false,
                  officialWebsite: null,
                  apiKeyUrl: null,
                  docsUrl: null,
                  modelsUrl: null,
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

export { fetchModelsDevData, mapProviderIdToType };
