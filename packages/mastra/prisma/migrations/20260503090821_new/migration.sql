/*
  Warnings:

  - You are about to drop the column `frequencyPenalty` on the `AssistantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `presencePenalty` on the `AssistantSettings` table. All the data in the column will be lost.
  - Added the required column `contextCount` to the `AssistantSettings` table without a default value. This is not possible if the table is not empty.
  - Made the column `temperature` on table `AssistantSettings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `topP` on table `AssistantSettings` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssistantSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contextCount" INTEGER NOT NULL,
    "temperature" REAL NOT NULL,
    "topP" REAL NOT NULL,
    "maxTokens" INTEGER,
    "enableMaxTokens" BOOLEAN NOT NULL DEFAULT false,
    "streamOutput" BOOLEAN NOT NULL DEFAULT true,
    "hideMessages" BOOLEAN NOT NULL DEFAULT false,
    "customParameters" JSONB,
    "reasoning_effort" TEXT,
    "qwenThinkMode" BOOLEAN,
    "toolUseMode" TEXT,
    "assistantId" TEXT,
    "defaultModelId" TEXT,
    CONSTRAINT "AssistantSettings_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AssistantSettings" ("assistantId", "defaultModelId", "id", "maxTokens", "qwenThinkMode", "reasoning_effort", "temperature", "toolUseMode", "topP") SELECT "assistantId", "defaultModelId", "id", "maxTokens", "qwenThinkMode", "reasoning_effort", "temperature", "toolUseMode", "topP" FROM "AssistantSettings";
DROP TABLE "AssistantSettings";
ALTER TABLE "new_AssistantSettings" RENAME TO "AssistantSettings";
CREATE UNIQUE INDEX "AssistantSettings_assistantId_key" ON "AssistantSettings"("assistantId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
