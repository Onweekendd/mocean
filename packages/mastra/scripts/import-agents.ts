/// <reference types="node" />
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import type { PrismaClient } from "../generated/prisma/client.js";
import { prisma } from "../src/mastra/server/index.js";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

// 配置文件路径
const JSON_FILE_PATH: string = join(__dirname, "../data/agents.json");

// AgentGroup 定义数据：key = name, value.label = 中文标签
const AGENT_GROUPS_DATA: Record<string, { label: string }> = {
  mine: { label: "我的" },
  featured: { label: "精选" },
  career: { label: "职业" },
  business: { label: "商业" },
  tools: { label: "工具" },
  language: { label: "语言" },
  office: { label: "办公" },
  general: { label: "通用" },
  writing: { label: "写作" },
  programming: { label: "编程" },
  emotion: { label: "情感" },
  education: { label: "教育" },
  creative: { label: "创意" },
  academic: { label: "学术" },
  design: { label: "设计" },
  art: { label: "艺术" },
  entertainment: { label: "娱乐" },
  lifestyle: { label: "生活" },
  medical: { label: "医疗" },
  gaming: { label: "游戏" },
  translation: { label: "翻译" },
  music: { label: "音乐" },
  review: { label: "点评" },
  copywriting: { label: "文案" },
  encyclopedia: { label: "百科" },
  health: { label: "健康" },
  marketing: { label: "营销" },
  science: { label: "科学" },
  analysis: { label: "分析" },
  legal: { label: "法律" },
  consulting: { label: "咨询" },
  finance: { label: "金融" },
  travel: { label: "旅游" },
  management: { label: "管理" },
  search: { label: "搜索" }
};

// 构建中文标签 -> name 的反向映射
const LABEL_TO_NAME: Record<string, string> = {};
for (const [name, def] of Object.entries(AGENT_GROUPS_DATA)) {
  LABEL_TO_NAME[def.label] = name;
}

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
      console.log(`成功读取agents.json文件，共${agents.length}条记录`);
      return agents;
    } catch (error) {
      console.error("读取agents.json文件失败:", (error as Error).message);
      throw error;
    }
  }

  // 初始化所有 AgentGroup 数据
  async initAgentGroups(): Promise<Map<string, string>> {
    console.log("开始初始化AgentGroup数据...");
    const nameToId = new Map<string, string>();

    for (const [name, def] of Object.entries(AGENT_GROUPS_DATA)) {
      const group = await this.prisma.agentGroup.upsert({
        where: { name },
        update: { label: def.label },
        create: { name, label: def.label }
      });
      nameToId.set(name, group.id);
    }

    console.log(`AgentGroup初始化完成，共${nameToId.size}个分组`);
    return nameToId;
  }

  // 将中文标签数组转换为 AgentGroup name 数组
  resolveGroupNames(labels: string[]): string[] {
    return labels
      .map((label) => LABEL_TO_NAME[label])
      .filter((name): name is string => name != null);
  }

  // 批量插入所有agents数据
  async importAllAgents(): Promise<ImportStats> {
    try {
      const agents = this.readAgentsData();
      let successCount = 0;
      let errorCount = 0;

      // 先初始化所有 AgentGroup
      const groupNameToId = await this.initAgentGroups();

      console.log("开始导入agents数据到数据库...");

      // 使用事务来确保数据一致性
      await this.prisma.$transaction(async (tx) => {
        for (const agent of agents) {
          try {
            // 解析分组标签为 name，再映射为 id
            const groupNames = agent.group
              ? this.resolveGroupNames(agent.group)
              : [];
            const groupIds = groupNames
              .map((name) => groupNameToId.get(name))
              .filter((id): id is string => id != null);

            await tx.agent.upsert({
              where: { id: agent.id },
              update: {
                name: agent.name,
                prompt: agent.prompt || "",
                emoji: agent.emoji || null,
                description: agent.description || null,
                updatedAt: new Date(),
                groups: {
                  deleteMany: {},
                  create: groupIds.map((agentGroupId) => ({ agentGroupId }))
                }
              },
              create: {
                id: agent.id,
                name: agent.name,
                prompt: agent.prompt || "",
                type: "agent",
                emoji: agent.emoji || null,
                description: agent.description || null,
                enableWebSearch: false,
                webSearchProviderId: null,
                enableGenerateImage: false,
                knowledgeRecognition: "off",
                groups: {
                  create: groupIds.map((agentGroupId) => ({ agentGroupId }))
                }
              }
            });

            successCount++;

            if (successCount % 10 === 0) {
              console.log(`已处理 ${successCount}/${agents.length} 条记录`);
            }
          } catch (error) {
            errorCount++;
            console.error(
              `处理agent失败 (ID: ${agent.id}):`,
              (error as Error).message
            );
            throw error; // 在事务中抛出错误会回滚整个事务
          }
        }
      });

      const stats: ImportStats = {
        successCount,
        errorCount,
        totalCount: agents.length
      };

      console.log("\n数据导入完成统计:");
      console.log(`成功导入: ${stats.successCount} 条记录`);
      console.log(`失败: ${stats.errorCount} 条记录`);
      console.log(`总计: ${stats.totalCount} 条记录`);

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
      console.log(`\n数据库验证结果:`);
      console.log(`Agent表中共有 ${count} 条记录`);

      const groupCount = await this.prisma.agentGroup.count();
      console.log(`AgentGroup表中共有 ${groupCount} 条记录`);

      // 显示最近导入的几条记录
      const recentAgents = await this.prisma.agent.findMany({
        take: 5,
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          name: true,
          emoji: true,
          groups: {
            select: {
              agentGroup: {
                select: { name: true, label: true }
              }
            }
          },
          createdAt: true
        }
      });

      console.log("\n最近导入的Agent记录:");
      recentAgents.forEach((agent) => {
        const groupLabels = agent.groups.map((g) => g.agentGroup.label);
        console.log(
          `  - ${agent.emoji || "🤖"} ${agent.name} (ID: ${agent.id})`
        );
        console.log(`    分组: ${groupLabels.join(", ")}`);
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
    console.log("数据库连接已关闭");
  }
}

// 主函数
async function main(): Promise<void> {
  console.log("开始导入agents数据到Prisma数据库...\n");
  const importer = new AgentsImporter();

  try {
    // 检查必要文件是否存在
    if (!existsSync(JSON_FILE_PATH)) {
      console.error(`agents.json文件不存在: ${JSON_FILE_PATH}`);
      process.exit(1);
    }

    console.log("agents.json文件检查通过");

    // 导入agents数据
    const stats = await importer.importAllAgents();

    // 验证数据
    await importer.validateData();

    console.log("\n数据导入完成！");

    // 如果有失败的记录，以非零状态码退出
    if (stats.errorCount > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("数据导入失败:", (error as Error).message);
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
    console.error("数据导入失败:", (error as Error).message);
    process.exit(1);
  });
}
