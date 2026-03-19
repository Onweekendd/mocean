/*
  Warnings:

  - You are about to drop the `MCPAgentServer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MCPAgentServer";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MCPServer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "description" TEXT,
    "baseUrl" TEXT,
    "command" TEXT,
    "registryUrl" TEXT,
    "argsJson" JSONB,
    "env" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "disabledToolsJson" JSONB,
    "configSample" JSONB,
    "headers" JSONB,
    "searchKey" TEXT,
    "provider" TEXT,
    "providerUrl" TEXT,
    "logoUrl" TEXT,
    "tagsJson" JSONB,
    "timeout" INTEGER,
    "releaseDate" DATETIME,
    "isLatest" BOOLEAN NOT NULL DEFAULT true,
    "packageCanonical" TEXT,
    "packagesJson" JSONB,
    "remotesJson" JSONB,
    "repositoryUrl" TEXT,
    "repositorySource" TEXT,
    "repositoryId" TEXT,
    "status" TEXT,
    "lastConnectedAt" DATETIME,
    "errorMessage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_MCPServer" ("argsJson", "baseUrl", "command", "configSample", "createdAt", "description", "disabledToolsJson", "env", "headers", "id", "isActive", "logoUrl", "name", "provider", "providerUrl", "registryUrl", "searchKey", "tagsJson", "timeout", "type", "updatedAt") SELECT "argsJson", "baseUrl", "command", "configSample", "createdAt", "description", "disabledToolsJson", "env", "headers", "id", "isActive", "logoUrl", "name", "provider", "providerUrl", "registryUrl", "searchKey", "tagsJson", "timeout", "type", "updatedAt" FROM "MCPServer";
DROP TABLE "MCPServer";
ALTER TABLE "new_MCPServer" RENAME TO "MCPServer";
CREATE TABLE "new_MCPTool" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inputSchema" JSONB NOT NULL,
    "outputSchema" JSONB,
    "title" TEXT,
    "readOnlyHint" BOOLEAN NOT NULL DEFAULT false,
    "destructiveHint" BOOLEAN NOT NULL DEFAULT true,
    "idempotentHint" BOOLEAN NOT NULL DEFAULT false,
    "openWorldHint" BOOLEAN NOT NULL DEFAULT true,
    "toolType" TEXT,
    "metaJson" JSONB,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "callCount" INTEGER NOT NULL DEFAULT 0,
    "lastUsedAt" DATETIME,
    "serverId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MCPTool_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "MCPServer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MCPTool" ("createdAt", "description", "id", "inputSchema", "name", "serverId", "updatedAt") SELECT "createdAt", "description", "id", "inputSchema", "name", "serverId", "updatedAt" FROM "MCPTool";
DROP TABLE "MCPTool";
ALTER TABLE "new_MCPTool" RENAME TO "MCPTool";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
