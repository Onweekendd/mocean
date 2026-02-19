/*
  Warnings:

  - You are about to drop the column `defaultModelId` on the `Assistant` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assistant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'assistant',
    "emoji" TEXT,
    "description" TEXT,
    "enableWebSearch" BOOLEAN NOT NULL DEFAULT false,
    "webSearchProviderId" TEXT,
    "enableGenerateImage" BOOLEAN NOT NULL DEFAULT false,
    "knowledgeRecognition" TEXT,
    "modelId" TEXT,
    "providerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Assistant_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Assistant_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Assistant" ("createdAt", "description", "emoji", "enableGenerateImage", "enableWebSearch", "id", "knowledgeRecognition", "modelId", "name", "prompt", "providerId", "type", "updatedAt", "webSearchProviderId") SELECT "createdAt", "description", "emoji", "enableGenerateImage", "enableWebSearch", "id", "knowledgeRecognition", "modelId", "name", "prompt", "providerId", "type", "updatedAt", "webSearchProviderId" FROM "Assistant";
DROP TABLE "Assistant";
ALTER TABLE "new_Assistant" RENAME TO "Assistant";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
