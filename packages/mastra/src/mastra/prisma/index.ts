import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";

import { PrismaClient } from "../../../generated/prisma";

const adapter = new PrismaBetterSQLite3({
  // 这里一定要使用绝对路径
  url: "file:D://projects//mocean-desktop-monorepo//packages//mastra//prisma//dev.db",
});

export const prisma = new PrismaClient({ adapter });
