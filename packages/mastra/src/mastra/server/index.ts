import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  // 这里一定要使用绝对路径

  url: process.env.PRISMA_DATABASE_URL
});

export const prisma = new PrismaClient({ adapter });
