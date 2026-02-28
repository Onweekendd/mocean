import type { Model, Provider, ProviderType } from "generated/prisma/client";
import { ProviderType as ProviderTypeEnum } from "generated/prisma/enums";
import { z } from "zod";

import { prisma } from "../src/mastra/server/index.js";

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
  output: z.number().optional(),
  cache_read: z.number().optional()
});

const ModelsDevModelSchema = z.looseObject({
  id: z.string().optional(),
  name: z.string().optional(),
  attachment: z.boolean().optional(),
  reasoning: z.boolean().optional(),
  tool_call: z.boolean().optional(),
  temperature: z.boolean().optional(),
  knowledge: z.string().optional(),
  release_date: z.string().optional(),
  last_updated: z.string().optional(),
  modalities: ModelsDevModalitiesSchema.optional(),
  open_weights: z.boolean().optional(),
  cost: ModelsDevCostSchema.optional(),
  limit: ModelsDevLimitSchema.optional()
});

const ModelsDevProviderSchema = z.looseObject({
  id: z.string().optional(),
  name: z.string().optional(),
  env: z.array(z.string()).optional(),
  npm: z.string().optional(),
  api: z.string().optional(),
  doc: z.string().optional(),
  models: z.record(z.string(), ModelsDevModelSchema).optional()
});

// Allow provider values to be either an object or a string (for aliases)
const ModelsDevResponseSchema = z.record(
  z.string(),
  z.union([z.string(), ModelsDevProviderSchema])
);

type ModelsDevResponse = z.infer<typeof ModelsDevResponseSchema>;

type ApiProviderInfo = z.infer<typeof ModelsDevProviderSchema>;

type ApiModelInfo = z.infer<typeof ModelsDevModelSchema>;

const GATEWAY_PROVIDERS = ["netlify", "openrouter", "vercel"];

/**
 * 爬取的完整数据集合
 * @interface ScrapedData
 * @description 从 models.dev API 获取并处理后的完整数据，包括供应商、模型和元数据信息
 */
interface ScrapedData {
  /** 成功获取的供应商列表 */
  providers: Partial<Provider>[];
  /** 所有供应商提供的模型列表 */
  models: Array<Model & { providerId: string }>;
  /** 爬取操作的元数据信息 */
  metadata: {
    /** 爬取操作的时间戳（ISO 8601 格式） */
    scrapedAt: string;
    /** 成功获取的供应商总数 */
    totalProviders: number;
    /** 所有供应商的模型总数 */
    totalModels: number;
  };
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
 * 从解析的模型数据创建Model对象
 * @param parsedModel - Zod解析后的模型数据
 * @param groupId - 分组ID
 * @param providerId - 供应商ID
 * @returns Model对象
 */
function createPrismaModel({
  parsedModel,
  groupId,
  providerId
}: {
  parsedModel: ApiModelInfo;
  groupId: string;
  providerId: string;
}): Model & { providerId: string } {
  return {
    // 放置出现重复ID
    id: `${providerId}&${parsedModel.id}`,
    groupId: groupId,
    providerId: providerId,
    owned_by: providerId,
    description: "",
    name: parsedModel.name,
    isSystem: true,
    contextLength: parsedModel.limit?.context || null,
    supportsAttachments: parsedModel.attachment || false,
    supportsEmbedding:
      parsedModel.name?.toLowerCase().includes("embedding") || false,
    supportsTools: parsedModel.tool_call || false,
    supportsReasoning: parsedModel.reasoning || false,
    supportsImage: parsedModel.modalities?.input?.includes("image") || false,
    supportsAudio: parsedModel.modalities?.input?.includes("audio") || false,
    supportsVideo: parsedModel.modalities?.input?.includes("video") || false,
    inputPricePerMillion: parsedModel.cost?.input || null,
    outputPricePerMillion: parsedModel.cost?.output || null,
    sort: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

/**
 * 处理供应商的数据
 * @param provider - 完整的供应商对象（包含api, doc, env, npm等信息）
 * @param apiModelInfos - 模型条目数组
 * @returns 供应商信息对象和处理后的模型数组
 */
function processRegularProvider({
  provider,
  apiModelInfos
}: {
  provider: ApiProviderInfo;
  apiModelInfos: Array<[string, ApiModelInfo]>;
}): {
  providerInfo: Partial<Provider>;
  models: Array<Model & { providerId: string }>;
} {
  const models: Array<Model & { providerId: string }> = [];

  // 获取或创建默认分组ID（格式：providerId_default）
  const defaultGroupId = `${provider.id}_default`;

  // 处理每个模型
  for (const [modelId, modelData] of apiModelInfos) {
    const parsedModel = ModelsDevModelSchema.parse(modelData);
    const model = createPrismaModel({
      parsedModel,
      groupId: defaultGroupId,
      providerId: provider.id
    });
    models.push(model);
  }

  console.log(`✅ ${provider.name}: 找到 ${apiModelInfos.length} 个模型`);

  return {
    providerInfo: {
      id: provider.id,
      name: provider.name,
      type: provider.id as Provider["type"],
      modelCount: apiModelInfos.length,
      apiHost: provider.api || "",
      docsUrl: provider.doc || "",
      isAuthed: true,
      isGateway: GATEWAY_PROVIDERS.includes(provider.id),
      isSystem: true
    },
    models
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

    const providers: ApiProviderInfo[] = [];
    const models: (Model & { providerId: string })[] = [];
    const skippedProviders: ApiProviderInfo[] = [];

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
      const apiModelInfos = Object.entries(provider.models || {});
      const result = processRegularProvider({
        provider,
        apiModelInfos
      });
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
      metadata: {
        scrapedAt: new Date().toISOString(),
        totalProviders: providers.length,
        totalModels: models.length
      }
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
 * 准备模型数据
 * @param data - 从API获取的完整数据
 * @returns 模型列表
 */
function prepareModels(data: ScrapedData): Array<Model> {
  const models: Array<Model> = [];

  // 处理每个模型
  for (const modelData of data.models) {
    // 移除临时的 providerId 字段，保留 groupId
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { providerId, ...modelWithoutProviderId } = modelData;

    models.push(modelWithoutProviderId);
  }

  console.log(`\n📊 模型数据统计:`);
  console.log(`   - 总模型数: ${models.length}`);

  return models;
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
 * 检查字符串是否以数字开头
 * @param value - 要检查的字符串
 * @returns 是否以数字开头
 */
function startsWithDigit(value: string): boolean {
  return /^\d/.test(value);
}

/**
 * 确保标识符有效（不以数字开头）
 * @param value - 原始标识符
 * @param prefix - 数字开头时添加的前缀
 * @returns 有效的标识符
 */
function ensureValidIdentifier(
  value: string,
  prefix: string = "provider_"
): string {
  if (startsWithDigit(value)) {
    return `${prefix}${value}`;
  }
  return value;
}

// 从 Prisma 枚举获取有效的 ProviderType 值
const VALID_PROVIDER_TYPES = new Set(Object.values(ProviderTypeEnum));

// 特殊映射：API ID -> Schema 枚举值（处理不规则命名）
const PROVIDER_TYPE_MAPPING: Record<string, ProviderType> = {
  fireworks: "fireworks_ai",
  github: "github_models",
  grok: "xai",
  together: "togetherai",
  zhipu: "zhipuai",
  moonshot: "moonshotai",
  dashscope: "alibaba",
  ollama: "lmstudio"
};

/**
 * 将供应商ID映射到ProviderType枚举值
 * @param providerId - 供应商ID（如 "fireworks-ai"）
 * @returns ProviderType枚举值（如 "fireworks_ai"）或 null（如果无效）
 */
function mapProviderIdToType(providerId: string): ProviderType | null {
  // 1. 检查特殊映射表
  if (PROVIDER_TYPE_MAPPING[providerId]) {
    return PROVIDER_TYPE_MAPPING[providerId];
  }

  // 2. 默认转换：kebab-case -> snake_case
  let result = convertKebabToSnake(providerId);

  // 3. 确保不以数字开头（添加 provider_ 前缀）
  result = ensureValidIdentifier(result);

  // 4. 验证是否为有效的枚举值
  if (VALID_PROVIDER_TYPES.has(result as ProviderType)) {
    return result as ProviderType;
  }

  // 如果不是有效值，返回 null
  return null;
}

/**
 * 将数据插入数据库
 * @param data - 从API获取的完整数据
 */
async function insertProvidersAndModels(data: ScrapedData) {
  console.log("\n💾 开始插入数据到数据库...");

  try {
    // 1. 准备模型数据
    const models = prepareModels(data);

    // 2. 使用事务插入所有数据
    const result = await prisma.$transaction(
      async (tx) => {
        let providersCreated = 0;
        let providersUpdated = 0;
        let groupsCreated = 0;
        let modelsCreated = 0;
        let modelsUpdated = 0;

        // 3. 插入供应商和创建默认分组
        console.log("\n📦 插入供应商数据并创建默认分组...");
        for (const provider of data.providers) {
          const providerType = mapProviderIdToType(provider.id);

          // 跳过无效的供应商类型
          if (!providerType) {
            console.log(`⏭️  ${provider.id}: 无效的供应商类型，跳过`);
            continue;
          }

          // 检查是否已存在
          const existing = await tx.provider.findUnique({
            where: { id: provider.id }
          });

          const providerData = {
            type: providerType,
            name: provider.name,
            apiHost: provider.apiHost,
            apiVersion: null,
            isSystem: provider.isSystem,
            isAuthed: provider.isAuthed,
            isGateway: provider.isGateway,
            modelCount: provider.modelCount,
            docsUrl: provider.docsUrl
          };

          if (existing) {
            // 更新现有供应商（保留apiKey）
            await tx.provider.update({
              where: { id: provider.id },
              data: providerData
            });
            providersUpdated++;
          } else {
            // 创建新供应商
            await tx.provider.create({
              data: {
                id: provider.id,
                apiKey: "", // 默认为空，用户后续填写
                enabled: false, // 默认为禁用，用户后续启用
                ...providerData
              }
            });
            providersCreated++;
          }

          // 确保存在默认分组
          const defaultGroupId = `${provider.id}_default`;
          const existingGroup = await tx.group.findUnique({
            where: { id: defaultGroupId }
          });

          if (!existingGroup) {
            await tx.group.create({
              data: {
                id: defaultGroupId,
                name: "默认",
                providerId: provider.id,
                isDefault: true
              }
            });
            groupsCreated++;
          }
        }

        // 4. 批量插入模型
        console.log("\n🤖 插入模型数据...");
        const BATCH_SIZE = 50;
        for (let i = 0; i < models.length; i += BATCH_SIZE) {
          const batch = models.slice(i, i + BATCH_SIZE);

          for (const model of batch) {
            // 检查是否已存在
            const existing = await tx.model.findUnique({
              where: { id: model.id }
            });

            if (existing) {
              // 更新现有模型
              await tx.model.update({
                where: { id: model.id },
                data: model
              });
              modelsUpdated++;
            } else {
              // 创建新模型
              await tx.model.create({
                data: model
              });
              modelsCreated++;
            }
          }

          // 输出进度
          const progress = Math.min(i + BATCH_SIZE, models.length);
          console.log(
            `   处理进度: ${progress}/${models.length} (${Math.round((progress / models.length) * 100)}%)`
          );
        }

        return {
          providersCreated,
          providersUpdated,
          groupsCreated,
          modelsCreated,
          modelsUpdated
        };
      },
      {
        maxWait: 10000, // 最大等待时间 10秒
        timeout: 60000 // 超时时间 60秒
      }
    );

    // 输出统计信息
    console.log("\n✅ 数据插入完成！");
    console.log(`\n📊 统计信息:`);
    console.log(`   供应商:`);
    console.log(`     - 新建: ${result.providersCreated}`);
    console.log(`     - 更新: ${result.providersUpdated}`);
    console.log(`   分组:`);
    console.log(`     - 新建: ${result.groupsCreated}`);
    console.log(`   模型:`);
    console.log(`     - 新建: ${result.modelsCreated}`);
    console.log(`     - 更新: ${result.modelsUpdated}`);
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
