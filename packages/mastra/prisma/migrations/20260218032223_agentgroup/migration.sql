/*
  Warnings:

  - You are about to drop the column `groupJson` on the `Agent` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "AgentGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AgentAgentGroup" (
    "agentId" TEXT NOT NULL,
    "agentGroupId" TEXT NOT NULL,

    PRIMARY KEY ("agentId", "agentGroupId"),
    CONSTRAINT "AgentAgentGroup_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AgentAgentGroup_agentGroupId_fkey" FOREIGN KEY ("agentGroupId") REFERENCES "AgentGroup" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'agent',
    "emoji" TEXT,
    "description" TEXT,
    "enableWebSearch" BOOLEAN NOT NULL DEFAULT false,
    "webSearchProviderId" TEXT,
    "enableGenerateImage" BOOLEAN NOT NULL DEFAULT false,
    "knowledgeRecognition" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Agent" ("createdAt", "description", "emoji", "enableGenerateImage", "enableWebSearch", "id", "knowledgeRecognition", "name", "prompt", "type", "updatedAt", "webSearchProviderId") SELECT "createdAt", "description", "emoji", "enableGenerateImage", "enableWebSearch", "id", "knowledgeRecognition", "name", "prompt", "type", "updatedAt", "webSearchProviderId" FROM "Agent";
DROP TABLE "Agent";
ALTER TABLE "new_Agent" RENAME TO "Agent";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "AgentGroup_name_key" ON "AgentGroup"("name");
