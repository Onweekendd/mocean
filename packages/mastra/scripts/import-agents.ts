/// <reference types="node" />
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { PrismaClient } from "../generated/prisma/index.js";
import { prisma } from "../src/mastra/server/index.js";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

// 配置文件路径
const JSON_FILE_PATH: string = join(__dirname, "../data/agents.json");

// 定义agents.json中的数据类型
interface JsonAgent {
  id: string;
  name: string;
  emoji?: string;
  group?: string[];
  prompt?: string;
  description?: string;
}

// 导入统计类型
interface ImportStats {
  successCount: number;
  errorCount: number;
  totalCount: number;
}

class AgentsImporter {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  // 读取agents.json文件
  readAgentsData(): JsonAgent[] {
    try {
      const jsonData = readFileSync(JSON_FILE_PATH, "utf8");
      const agents: JsonAgent[] = JSON.parse(jsonData);
      console.log(`✅ 成功读取agents.json文件，共${agents.length}条记录`);
      return agents;
    } catch (error) {
      console.error("读取agents.json文件失败:", (error as Error).message);
      throw error;
    }
  }

  // 批量插入所有agents数据
  async importAllAgents(): Promise<ImportStats> {
    try {
      const agents = this.readAgentsData();
      let successCount = 0;
      let errorCount = 0;

      console.log("开始导入agents数据到数据库...");

      // 使用事务来确保数据一致性
      await this.prisma.$transaction(async (tx) => {
        for (const agent of agents) {
          try {
            await tx.agent.upsert({
              where: { id: agent.id },
              update: {
                name: agent.name,
                prompt: agent.prompt || "",
                emoji: agent.emoji || null,
                description: agent.description || null,
                groupJson: agent.group ? JSON.stringify(agent.group) : "",
                updatedAt: new Date(),
              },
              create: {
                id: agent.id,
                name: agent.name,
                prompt: agent.prompt || "",
                type: "agent",
                emoji: agent.emoji || null,
                description: agent.description || null,
                groupJson: agent.group ? JSON.stringify(agent.group) : "",
                enableWebSearch: false,
                webSearchProviderId: null,
                enableGenerateImage: false,
                knowledgeRecognition: "off",
              },
            });

            successCount++;

            if (successCount % 10 === 0) {
              console.log(`✅ 已处理 ${successCount}/${agents.length} 条记录`);
            }
          } catch (error) {
            errorCount++;
            console.error(
              `处理agent失败 (ID: ${agent.id}):`,
              (error as Error).message,
            );
            throw error; // 在事务中抛出错误会回滚整个事务
          }
        }
      });

      const stats: ImportStats = {
        successCount,
        errorCount,
        totalCount: agents.length,
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
      const count = await this.prisma.agent.count();
      console.log(`\n📊 数据库验证结果:`);
      console.log(`Agent表中共有 ${count} 条记录`);

      // 显示最近导入的几条记录
      const recentAgents = await this.prisma.agent.findMany({
        take: 5,
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          name: true,
          emoji: true,
          groupJson: true,
          createdAt: true,
        },
      });

      console.log("\n📋 最近导入的Agent记录:");
      recentAgents.forEach((agent) => {
        const groups = agent.groupJson
          ? (JSON.parse(agent.groupJson as string) as string[])
          : [];
        console.log(
          `  - ${agent.emoji || "🤖"} ${agent.name} (ID: ${agent.id})`,
        );
        console.log(`    分组: ${groups.join(", ")}`);
        console.log(`    创建时间: ${agent.createdAt.toLocaleString()}`);
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
  console.log("🚀 开始导入agents数据到Prisma数据库...\n");
  const importer = new AgentsImporter();

  try {
    console.log("🚀 开始导入agents数据到Prisma数据库...\n");

    // 检查必要文件是否存在
    if (!existsSync(JSON_FILE_PATH)) {
      console.error(`❌ agents.json文件不存在: ${JSON_FILE_PATH}`);
      process.exit(1);
    }

    console.log("✅ agents.json文件检查通过");

    // 导入agents数据
    const stats = await importer.importAllAgents();

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

export default AgentsImporter;
export type { JsonAgent, ImportStats };

// 如果直接运行此脚本
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error("❌ 数据导入失败:", (error as Error).message);
    process.exit(1);
  });
}
