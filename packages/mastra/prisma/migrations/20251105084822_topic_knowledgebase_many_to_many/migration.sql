-- CreateTable
CREATE TABLE "TopicKnowledgeBase" (
    "topicId" TEXT NOT NULL,
    "knowledgeBaseId" TEXT NOT NULL,

    PRIMARY KEY ("topicId", "knowledgeBaseId"),
    CONSTRAINT "TopicKnowledgeBase_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TopicKnowledgeBase_knowledgeBaseId_fkey" FOREIGN KEY ("knowledgeBaseId") REFERENCES "KnowledgeBase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "defaultModelId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Assistant_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Assistant_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Assistant_defaultModelId_fkey" FOREIGN KEY ("defaultModelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Assistant" ("createdAt", "defaultModelId", "description", "emoji", "enableGenerateImage", "enableWebSearch", "id", "knowledgeRecognition", "modelId", "name", "prompt", "type", "updatedAt", "webSearchProviderId") SELECT "createdAt", "defaultModelId", "description", "emoji", "enableGenerateImage", "enableWebSearch", "id", "knowledgeRecognition", "modelId", "name", "prompt", "type", "updatedAt", "webSearchProviderId" FROM "Assistant";
DROP TABLE "Assistant";
ALTER TABLE "new_Assistant" RENAME TO "Assistant";
CREATE TABLE "new_Topic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "prompt" TEXT,
    "pinned" BOOLEAN NOT NULL DEFAULT false,
    "isNameManuallyEdited" BOOLEAN NOT NULL DEFAULT false,
    "assistantId" TEXT,
    "agentId" TEXT,
    "modelId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Topic_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistant" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Topic_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Topic_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Topic" ("agentId", "assistantId", "createdAt", "id", "isNameManuallyEdited", "name", "pinned", "prompt", "updatedAt") SELECT "agentId", "assistantId", "createdAt", "id", "isNameManuallyEdited", "name", "pinned", "prompt", "updatedAt" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE UNIQUE INDEX "Topic_modelId_key" ON "Topic"("modelId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
