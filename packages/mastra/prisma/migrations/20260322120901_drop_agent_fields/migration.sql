/*
  Warnings:

  - You are about to drop the `_AgentToKnowledgeBase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `enableGenerateImage` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `enableWebSearch` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `knowledgeRecognition` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `webSearchProviderId` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `knowledgeBaseId` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `agentId` on the `AssistantSettings` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_AgentToKnowledgeBase_B_index";

-- DropIndex
DROP INDEX "_AgentToKnowledgeBase_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AgentToKnowledgeBase";
PRAGMA foreign_keys=on;

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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Agent" ("createdAt", "description", "emoji", "id", "name", "prompt", "type", "updatedAt") SELECT "createdAt", "description", "emoji", "id", "name", "prompt", "type", "updatedAt" FROM "Agent";
DROP TABLE "Agent";
ALTER TABLE "new_Agent" RENAME TO "Agent";

CREATE TABLE "new_AssistantSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "temperature" REAL,
    "maxTokens" INTEGER,
    "topP" REAL,
    "frequencyPenalty" REAL,
    "presencePenalty" REAL,
    "reasoning_effort" TEXT,
    "qwenThinkMode" BOOLEAN,
    "toolUseMode" TEXT,
    "assistantId" TEXT,
    "defaultModelId" TEXT,
    CONSTRAINT "AssistantSettings_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AssistantSettings" ("id", "temperature", "maxTokens", "topP", "frequencyPenalty", "presencePenalty", "reasoning_effort", "qwenThinkMode", "toolUseMode", "assistantId", "defaultModelId") SELECT "id", "temperature", "maxTokens", "topP", "frequencyPenalty", "presencePenalty", "reasoning_effort", "qwenThinkMode", "toolUseMode", "assistantId", "defaultModelId" FROM "AssistantSettings";
DROP TABLE "AssistantSettings";
ALTER TABLE "new_AssistantSettings" RENAME TO "AssistantSettings";
CREATE UNIQUE INDEX "AssistantSettings_assistantId_key" ON "AssistantSettings"("assistantId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
