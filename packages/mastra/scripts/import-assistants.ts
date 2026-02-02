/// <reference types="node" />
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { PrismaClient } from "../generated/prisma/index.js";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

// 配置文件路径
const JSON_FILE_PATH: string = join(__dirname, "../data/assistant.json");

// 定义assistant.json中的数据类型
interface JsonAssistant {
  id: string;
  name: string;
  description: string;
  prompt: string;
  type: string;
  emoji: string;
  enableWebSearch: boolean;
  webSearchProviderId: string;
  enableGenerateImage: boolean;
  knowledgeRecognition: "off" | "on";
  modelId: string;
  defaultModelId: string;
}

// 导入统计类型
interface ImportStats {
  successCount: number;
  errorCount: number;
  totalCount: number;
}

class AssistantsImporter {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // 读取assistant.json文件
  readAssistantData(): JsonAssistant {
    try {
      const jsonData = readFileSync(JSON_FILE_PATH, "utf8");
      const assistant: JsonAssistant = JSON.parse(jsonData);
      console.log(`✅ 成功读取assistant.json文件`);
      return assistant;
    } catch (error) {
      console.error("读取assistant.json文件失败:", (error as Error).message);
      throw error;
    }
  }

  // 导入assistant数据
  async importAssistant(): Promise<ImportStats> {
    try {
      const assistant = this.readAssistantData();
      let successCount = 0;
      let errorCount = 0;

      console.log("开始导入assistant数据到数据库...");

      // 使用事务来确保数据一致性
      await this.prisma.$transaction(async (tx) => {
        try {
          await tx.assistant.upsert({
            where: { id: assistant.id },
            update: {
              name: assistant.name,
              description: assistant.description || null,
              prompt: assistant.prompt || "",
              emoji: assistant.emoji || null,
              enableWebSearch: assistant.enableWebSearch,
              webSearchProviderId: assistant.webSearchProviderId || null,
              enableGenerateImage: assistant.enableGenerateImage,
              knowledgeRecognition: assistant.knowledgeRecognition || "off",
              modelId: assistant.modelId || null,
              defaultModelId: assistant.defaultModelId || null,
              updatedAt: new Date()
            },
            create: {
              id: assistant.id,
              name: assistant.name,
              description: assistant.description || null,
              prompt: assistant.prompt || "",
              type: assistant.type,
              emoji: assistant.emoji || null,
              enableWebSearch: assistant.enableWebSearch,
              webSearchProviderId: assistant.webSearchProviderId || null,
              enableGenerateImage: assistant.enableGenerateImage,
              knowledgeRecognition: assistant.knowledgeRecognition || "off",
              modelId: assistant.modelId || null,
              defaultModelId: assistant.defaultModelId || null
            }
          });

          successCount++;
          console.log(`✅ 成功处理assistant记录`);
        } catch (error) {
          errorCount++;
          console.error(
            `处理assistant失败 (ID: ${assistant.id}):`,
            (error as Error).message
          );
          throw error; // 在事务中抛出错误会回滚整个事务
        }
      });

      const stats: ImportStats = {
        successCount,
        errorCount,
        totalCount: 1
      };

      console.log("\n📊 数据导入完成统计:");
      console.log(`✅ 成功导入: ${stats.successCount} 条记录`);
      console.log(`❌ 失败: ${stats.errorCount} 条记录`);
      console.log(`📋 总计: ${stats.totalCount} 条记录`);

      return stats;
    } catch (error) {
      console.error("导入数据过程中发生错误:", (error as Error).message);
      throw error;
    }
  }

  // 验证数据导入结果
  async validateData(): Promise<void> {
    try {
      const count = await this.prisma.assistant.count();
      console.log(`\n📊 数据库验证结果:`);
      console.log(`Assistant表中共有 ${count} 条记录`);

      // 显示最近导入的记录
      const recentAssistants = await this.prisma.assistant.findMany({
        take: 5,
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          name: true,
          description: true,
          emoji: true,
          enableWebSearch: true,
          enableGenerateImage: true,
          createdAt: true
        }
      });

      console.log("\n📋 最近导入的Assistant记录:");
      recentAssistants.forEach((assistant) => {
        console.log(
          `  - ${assistant.emoji || "🤖"} ${assistant.name} (ID: ${assistant.id})`
        );
        console.log(`    描述: ${assistant.description || "无描述"}`);
        console.log(
          `    网络搜索: ${assistant.enableWebSearch ? "启用" : "禁用"}`
        );
        console.log(
          `    图像生成: ${assistant.enableGenerateImage ? "启用" : "禁用"}`
        );
        console.log(`    创建时间: ${assistant.createdAt.toLocaleString()}`);
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
  console.log("🚀 开始导入assistant数据到Prisma数据库...\n");
  const importer = new AssistantsImporter();

  try {
    console.log("🚀 开始导入assistant数据到Prisma数据库...\n");

    // 检查必要文件是否存在
    if (!existsSync(JSON_FILE_PATH)) {
      console.error(`❌ assistant.json文件不存在: ${JSON_FILE_PATH}`);
      process.exit(1);
    }

    console.log("✅ assistant.json文件检查通过");

    // 导入assistant数据
    const stats = await importer.importAssistant();

    // 验证数据
    await importer.validateData();

    console.log("\n🎉 数据导入完成！");

    // 如果有失败的记录，以非零状态码退出
    if (stats.errorCount > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ 数据导入失败:", (error as Error).message);
    process.exit(1);
  } finally {
    await importer.close();
  }
}

export default AssistantsImporter;
export type { JsonAssistant, ImportStats };

// 如果直接运行此脚本
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error("❌ 数据导入失败:", (error as Error).message);
    process.exit(1);
  });
}
