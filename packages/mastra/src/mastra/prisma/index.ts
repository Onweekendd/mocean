import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";

import { PrismaClient } from "../../../generated/prisma";

console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
const adapter = new PrismaBetterSQLite3({
  // 这里一定要使用绝对路径
  url: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter });
