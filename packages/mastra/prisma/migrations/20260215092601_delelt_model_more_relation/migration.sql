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
    "agentId" TEXT,
    "defaultModelId" TEXT,
    CONSTRAINT "AssistantSettings_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistant" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AssistantSettings_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AssistantSettings" ("agentId", "assistantId", "contextCount", "customParameters", "defaultModelId", "enableMaxTokens", "hideMessages", "id", "maxTokens", "qwenThinkMode", "reasoning_effort", "streamOutput", "temperature", "toolUseMode", "topP") SELECT "agentId", "assistantId", "contextCount", "customParameters", "defaultModelId", "enableMaxTokens", "hideMessages", "id", "maxTokens", "qwenThinkMode", "reasoning_effort", "streamOutput", "temperature", "toolUseMode", "topP" FROM "AssistantSettings";
DROP TABLE "AssistantSettings";
ALTER TABLE "new_AssistantSettings" RENAME TO "AssistantSettings";
CREATE UNIQUE INDEX "AssistantSettings_assistantId_key" ON "AssistantSettings"("assistantId");
CREATE UNIQUE INDEX "AssistantSettings_agentId_key" ON "AssistantSettings"("agentId");
CREATE TABLE "new_KnowledgeBase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dimensions" INTEGER NOT NULL,
    "description" TEXT,
    "documentCount" INTEGER,
    "chunkSize" INTEGER,
    "chunkOverlap" INTEGER,
    "threshold" REAL,
    "version" INTEGER NOT NULL,
    "modelId" TEXT NOT NULL,
    "rerankModelId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "KnowledgeBase_rerankModelId_fkey" FOREIGN KEY ("rerankModelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_KnowledgeBase" ("chunkOverlap", "chunkSize", "created_at", "description", "dimensions", "documentCount", "id", "modelId", "name", "rerankModelId", "threshold", "updated_at", "version") SELECT "chunkOverlap", "chunkSize", "created_at", "description", "dimensions", "documentCount", "id", "modelId", "name", "rerankModelId", "threshold", "updated_at", "version" FROM "KnowledgeBase";
DROP TABLE "KnowledgeBase";
ALTER TABLE "new_KnowledgeBase" RENAME TO "KnowledgeBase";
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
    CONSTRAINT "Topic_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Topic" ("agentId", "assistantId", "createdAt", "id", "isNameManuallyEdited", "modelId", "name", "pinned", "prompt", "updatedAt") SELECT "agentId", "assistantId", "createdAt", "id", "isNameManuallyEdited", "modelId", "name", "pinned", "prompt", "updatedAt" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE UNIQUE INDEX "Topic_modelId_key" ON "Topic"("modelId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
