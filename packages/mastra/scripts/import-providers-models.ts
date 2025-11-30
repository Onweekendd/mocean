/// <reference types="node" />
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import {
  ModelType,
  PrismaClient,
  ProviderType,
} from "../generated/prisma/index.js";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

// 配置文件路径
const PROVIDER_JSON_PATH: string = join(__dirname, "../data/provider.json");
const MODEL_JSON_PATH: string = join(__dirname, "../data/model.json");

// 定义provider.json中的数据类型
interface JsonProviderData {
  api: {
    url: string;
  };
  websites?: {
    official?: string;
    apiKey?: string;
    docs?: string;
    models?: string;
  };
}

// 定义model.json中的数据类型
interface JsonModel {
  id: string;
  provider: string;
  name: string;
  group: string;
  owned_by?: string;
  description?: string;
  type?: string[];
}

// 导入统计类型
interface ImportStats {
  providersSuccess: number;
  providersError: number;
  providersTotal: number;
  modelsSuccess: number;
  modelsError: number;
  modelsTotal: number;
}

class ProvidersModelsImporter {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // 读取provider.json文件
  readProvidersData(): Record<string, JsonProviderData> {
    try {
      const jsonData = readFileSync(PROVIDER_JSON_PATH, "utf8");
      const providers: Record<string, JsonProviderData> = JSON.parse(jsonData);
      const providerCount = Object.keys(providers).length;
      console.log(`✅ 成功读取provider.json文件，共${providerCount}个提供商`);
      return providers;
    } catch (error) {
      console.error("读取provider.json文件失败:", (error as Error).message);
      throw error;
    }
  }

  // 读取model.json文件
  readModelsData(): Record<string, JsonModel[]> {
    try {
      const jsonData = readFileSync(MODEL_JSON_PATH, "utf8");
      const models: Record<string, JsonModel[]> = JSON.parse(jsonData);
      let totalModels = 0;
      Object.values(models).forEach((modelArray) => {
        totalModels += modelArray.length;
      });
      console.log(`✅ 成功读取model.json文件，共${totalModels}个模型`);
      return models;
    } catch (error) {
      console.error("读取model.json文件失败:", (error as Error).message);
      throw error;
    }
  }

  // 映射ProviderType
  private mapProviderType(providerKey: string): ProviderType {
    // 根据provider key映射到枚举类型
    switch (providerKey.toLowerCase()) {
      case "openai":
        return ProviderType.openai;
      case "anthropic":
        return ProviderType.anthropic;
      case "gemini":
        return ProviderType.gemini;
      case "qwenlm":
        return ProviderType.qwenlm;
      case "azure-openai":
        return ProviderType.azure_openai;
      default:
        // 其他情况默认为openai-compatible
        return ProviderType.openai_compatible;
    }
  }

  // 映射ModelType
  private mapModelTypes(typeStrings?: string[]): ModelType[] {
    if (!typeStrings || typeStrings.length === 0) {
      return [ModelType.text]; // 默认为text类型
    }

    return typeStrings.map((typeStr) => {
      switch (typeStr.toLowerCase()) {
        case "text":
          return ModelType.text;
        case "vision":
          return ModelType.vision;
        case "embedding":
          return ModelType.embedding;
        case "reasoning":
          return ModelType.reasoning;
        case "function_calling":
          return ModelType.function_calling;
        case "web_search":
          return ModelType.web_search;
        default:
          return ModelType.text;
      }
    });
  }

  // 导入所有providers数据
  async importProviders(
    providersData: Record<string, JsonProviderData>,
  ): Promise<{ success: number; error: number; total: number }> {
    let successCount = 0;
    let errorCount = 0;
    const providerKeys = Object.keys(providersData);
    const totalCount = providerKeys.length;

    console.log("开始导入providers数据到数据库...");

    for (const [providerKey, providerData] of Object.entries(providersData)) {
      try {
        const providerType = this.mapProviderType(providerKey);

        await this.prisma.provider.upsert({
          where: { id: providerKey },
          update: {
            type: providerType,
            name: providerKey,
            apiHost: providerData.api.url,
            enabled: false,
            updatedAt: new Date(),
          },
          create: {
            id: providerKey,
            type: providerType,
            name: providerKey,
            apiKey: "", // 默认空字符串，用户需要自己配置
            apiHost: providerData.api.url,
            enabled: false,
            isSystem: true,
            isAuthed: false,
            notes: providerData.websites?.official
              ? `官网: ${providerData.websites.official}`
              : null,
          },
        });

        successCount++;

        if (successCount % 5 === 0) {
          console.log(`✅ 已处理 ${successCount}/${totalCount} 个提供商`);
        }
      } catch (error) {
        errorCount++;
        console.error(
          `处理provider失败 (ID: ${providerKey}):`,
          (error as Error).message,
        );
      }
    }

    return { success: successCount, error: errorCount, total: totalCount };
  }

  // 导入所有models数据
  async importModels(
    modelsData: Record<string, JsonModel[]>,
  ): Promise<{ success: number; error: number; total: number }> {
    let successCount = 0;
    let errorCount = 0;
    let totalCount = 0;

    // 计算总数
    Object.values(modelsData).forEach((modelArray) => {
      totalCount += modelArray.length;
    });

    console.log("开始导入models数据到数据库...");

    for (const [providerKey, models] of Object.entries(modelsData)) {
      for (const model of models) {
        try {
          // 获取provider的数据库ID
          const provider = await this.prisma.provider.findUnique({
            where: { id: providerKey },
          });

          if (!provider) {
            console.warn(
              `⚠️ 未找到provider: ${providerKey}，跳过模型: ${model.id}`,
            );
            errorCount++;
            continue;
          }

          // 映射ModelType 为能力字段
          const modelTypes = this.mapModelTypes(model.type);
          const capabilities = {
            supportsTools: modelTypes.includes(ModelType.function_calling),
            supportsReasoning: modelTypes.includes(ModelType.reasoning),
            supportsImage: modelTypes.includes(ModelType.vision),
            supportsEmbedding: modelTypes.includes(ModelType.embedding),
          };

          // 1. upsert model（不再包含 provider 字段）
          await this.prisma.model.upsert({
            where: { id: model.id },
            update: {
              name: model.name,
              group: model.group,
              owned_by: model.owned_by || null,
              description: model.description || null,
              ...capabilities,
            },
            create: {
              id: model.id,
              name: model.name,
              group: model.group,
              owned_by: model.owned_by || null,
              description: model.description || null,
              ...capabilities,
            },
          });

          // 2. upsert model-provider 关系
          await this.prisma.modelProvider.upsert({
            where: {
              modelId_providerId: {
                modelId: model.id,
                providerId: provider.id,
              },
            },
            update: {},
            create: { modelId: model.id, providerId: provider.id },
          });

          successCount++;

          if (successCount % 20 === 0) {
            console.log(`✅ 已处理 ${successCount}/${totalCount} 个模型`);
          }
        } catch (error) {
          errorCount++;
          console.error(
            `处理model失败 (ID: ${model.id}):`,
            (error as Error).message,
          );
        }
      }
    }

    return { success: successCount, error: errorCount, total: totalCount };
  }

  // 批量导入所有数据
  async importAllData(): Promise<ImportStats> {
    try {
      const providersData = this.readProvidersData();
      const modelsData = this.readModelsData();

      console.log("开始使用事务导入所有数据...");

      const stats: ImportStats = {
        providersSuccess: 0,
        providersError: 0,
        providersTotal: 0,
        modelsSuccess: 0,
        modelsError: 0,
        modelsTotal: 0,
      };

      // 使用事务来确保数据一致性
      await this.prisma.$transaction(async (tx) => {
        // 临时替换prisma实例为事务实例
        const originalPrisma = this.prisma;
        this.prisma = tx as PrismaClient;

        try {
          // 1. 先导入providers
          const providerStats = await this.importProviders(providersData);
          stats.providersSuccess = providerStats.success;
          stats.providersError = providerStats.error;
          stats.providersTotal = providerStats.total;

          // 2. 再导入models
          const modelStats = await this.importModels(modelsData);
          stats.modelsSuccess = modelStats.success;
          stats.modelsError = modelStats.error;
          stats.modelsTotal = modelStats.total;
        } finally {
          // 恢复原始prisma实例
          this.prisma = originalPrisma;
        }
      });

      console.log("\n📊 数据导入完成统计:");
      console.log(`提供商:`);
      console.log(`  ✅ 成功导入: ${stats.providersSuccess} 个`);
      console.log(`  ❌ 失败: ${stats.providersError} 个`);
      console.log(`  📋 总计: ${stats.providersTotal} 个`);
      console.log(`模型:`);
      console.log(`  ✅ 成功导入: ${stats.modelsSuccess} 个`);
      console.log(`  ❌ 失败: ${stats.modelsError} 个`);
      console.log(`  📋 总计: ${stats.modelsTotal} 个`);

      return stats;
    } catch (error) {
      console.error("导入数据过程中发生错误:", (error as Error).message);
      throw error;
    }
  }

  // 验证数据导入结果
  async validateData(): Promise<void> {
    try {
      const providerCount = await this.prisma.provider.count();
      const modelCount = await this.prisma.model.count();

      console.log(`\n📊 数据库验证结果:`);
      console.log(`Provider表中共有 ${providerCount} 条记录`);
      console.log(`Model表中共有 ${modelCount} 条记录`);

      // 显示最近导入的几条provider记录
      const recentProviders = await this.prisma.provider.findMany({
        take: 5,
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          name: true,
          type: true,
          apiHost: true,
          enabled: true,
          _count: {
            select: {
              models: true,
            },
          },
        },
      });

      console.log("\n📋 最近导入的Provider记录:");
      recentProviders.forEach((provider) => {
        console.log(`  - ${provider.name} (${provider.type})`);
        console.log(`    API地址: ${provider.apiHost}`);
        console.log(`    状态: ${provider.enabled ? "启用" : "禁用"}`);
        console.log(`    关联模型数: ${provider._count.models}`);
      });

      // 显示每个provider的模型统计
      const providerModelStats = await this.prisma.provider.findMany({
        select: {
          id: true,
          name: true,
          _count: {
            select: {
              models: true,
            },
          },
        },
        orderBy: {
          models: {
            _count: "desc",
          },
        },
      });

      console.log("\n📊 各提供商模型统计:");
      providerModelStats.forEach((provider) => {
        console.log(`  ${provider.name}: ${provider._count.models} 个模型`);
      });
    } catch (error) {
      console.error("验证数据失败:", (error as Error).message);
      throw error;
    }
  }

  // 关闭数据库连接
  async close(): Promise<void> {
    await this.prisma.$disconnect();
    console.log("✅ 数据库连接已关闭");
  }
}

// 主函数
async function main(): Promise<void> {
  console.log("🚀 开始导入providers和models数据到Prisma数据库...\n");
  const importer = new ProvidersModelsImporter();

  try {
    // 检查必要文件是否存在
    if (!existsSync(PROVIDER_JSON_PATH)) {
      console.error(`❌ provider.json文件不存在: ${PROVIDER_JSON_PATH}`);
      process.exit(1);
    }

    if (!existsSync(MODEL_JSON_PATH)) {
      console.error(`❌ model.json文件不存在: ${MODEL_JSON_PATH}`);
      process.exit(1);
    }

    console.log("✅ 数据文件检查通过");

    // 导入所有数据
    const stats = await importer.importAllData();

    // 验证数据
    await importer.validateData();

    console.log("\n🎉 数据导入完成！");

    // 如果有失败的记录，以非零状态码退出
    if (stats.providersError > 0 || stats.modelsError > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ 数据导入失败:", (error as Error).message);
    process.exit(1);
  } finally {
    await importer.close();
  }
}

export default ProvidersModelsImporter;
export type { JsonProviderData, JsonModel, ImportStats };

// 如果直接运行此脚本
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error("❌ 数据导入失败:", (error as Error).message);
    process.exit(1);
  });
}
