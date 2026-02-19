import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { execSync } from "child_process";
import { existsSync, mkdirSync, unlinkSync } from "fs";
import { PrismaClient } from "generated/prisma/client";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mastraDir = join(__dirname, "..", "..", "..", "..");
const TEST_DB_DIR = join(mastraDir, "db");

// 使用测试文件名作为数据库名称，实现测试隔离
let currentTestDbPath: string | null = null;
let prismaInstance: PrismaClient | null = null;
let schemaSynced = false;

/**
 * 根据调用栈获取测试文件名，用于生成唯一的数据库路径
 */
function getTestFileName(): string {
  // 从错误栈中提取调用者信息
  const stack = new Error().stack || "";
  const lines = stack.split("\n");

  // 查找测试文件路径（包含 .test. 的行）
  for (const line of lines) {
    const match = line.match(/([\\/.\w-]+\.test\.\w+)/);
    if (match) {
      const fullPath = match[1];
      // 从路径中提取文件名（移除扩展名）
      const fileName = fullPath.split(/[\\/]/).pop() || "test";
      return fileName.replace(/\./g, "_");
    }
  }

  // 如果找不到测试文件名，使用时间戳
  return `test_${Date.now()}`;
}

/**
 * 获取当前测试的数据库路径
 */
function getTestDbPath(): string {
  if (!currentTestDbPath) {
    const testFileName = getTestFileName();
    currentTestDbPath = join(TEST_DB_DIR, `${testFileName}.db`);
  }
  return currentTestDbPath;
}

/**
 * 同步获取已初始化的 Prisma 实例（供 vi.mock 使用）
 */
export function getPrismaInstance(): PrismaClient {
  if (!prismaInstance) {
    throw new Error(
      "Test database not initialized. Call initTestDatabase() first."
    );
  }
  return prismaInstance;
}

/**
 * 获取测试用 Prisma 客户端
 */
export async function getTestPrisma(): Promise<PrismaClient> {
  if (prismaInstance) {
    return prismaInstance;
  }

  const dbPath = getTestDbPath();
  const adapter = new PrismaBetterSqlite3({
    url: dbPath
  });

  prismaInstance = new PrismaClient({
    adapter
  });

  await prismaInstance.$connect();

  return prismaInstance;
}

/**
 * 初始化测试数据库 schema
 */
export async function initTestDatabase(): Promise<void> {
  // 确保 db 目录存在
  if (!existsSync(TEST_DB_DIR)) {
    mkdirSync(TEST_DB_DIR, { recursive: true });
  }

  const dbPath = getTestDbPath();
  const dbUrl = `file:${dbPath}`;

  // Schema 同步只需执行一次
  if (!schemaSynced) {
    const schemaPath = join(mastraDir, "prisma", "schema.prisma");
    try {
      execSync(
        `npx prisma db push --schema "${schemaPath}" --accept-data-loss --url "${dbUrl}"`,
        {
          cwd: mastraDir,
          stdio: "pipe"
        }
      );
    } catch {
      if (!existsSync(dbPath)) {
        throw new Error("Failed to initialize test database");
      }
    }
    schemaSynced = true;
  }

  // 确保 prisma 实例已创建
  if (!prismaInstance) {
    await getTestPrisma();
  }
}

/**
 * 清空所有表数据（保留 schema）
 * 使用顺序 await deleteMany，按 FK 依赖顺序删除
 */
export async function clearTestDatabase(): Promise<void> {
  const prisma = await getTestPrisma();

  // 1. 联表 & 叶子表
  await prisma.topicKnowledgeBase.deleteMany();
  await prisma.mCPAssistantServer.deleteMany();
  await prisma.mCPAgentServer.deleteMany();
  await prisma.agentAgentGroup.deleteMany();
  await prisma.knowledgeItem.deleteMany();
  await prisma.mCPTool.deleteMany();
  await prisma.mCPPrompt.deleteMany();
  await prisma.mCPResource.deleteMany();
  await prisma.mCPConfigSample.deleteMany();
  await prisma.assistantSettings.deleteMany();

  // 2. 中间层表
  await prisma.topic.deleteMany();
  await prisma.knowledgeBase.deleteMany();
  await prisma.quickPhrase.deleteMany();
  await prisma.fileType.deleteMany();

  // 3. 主实体表
  await prisma.assistant.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.agentGroup.deleteMany();
  await prisma.mCPServer.deleteMany();

  // 4. 模型层级（子 → 父）
  await prisma.model.deleteMany();
  await prisma.group.deleteMany();
  await prisma.provider.deleteMany();
}

/**
 * 关闭数据库连接并删除数据库文件
 */
export async function closeTestDatabase(): Promise<void> {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
    prismaInstance = null;
  }

  // 删除测试数据库文件（实现完全隔离）
  if (currentTestDbPath && existsSync(currentTestDbPath)) {
    try {
      unlinkSync(currentTestDbPath);
    } catch {
      // 忽略删除错误
    }
  }

  // 重置状态
  currentTestDbPath = null;
  schemaSynced = false;
}
