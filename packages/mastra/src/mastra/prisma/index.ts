import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";

import { PrismaClient } from "../../../generated/prisma";

const adapter = new PrismaBetterSQLite3({
  url: "file:./dev.db",
});

export const prisma = new PrismaClient({ adapter });
