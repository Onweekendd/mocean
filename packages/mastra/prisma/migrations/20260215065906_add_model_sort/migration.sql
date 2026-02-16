-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Model" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "owned_by" TEXT,
    "description" TEXT,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "sort" INTEGER NOT NULL DEFAULT 0,
    "contextLength" INTEGER,
    "supportsAttachments" BOOLEAN NOT NULL DEFAULT false,
    "supportsTools" BOOLEAN NOT NULL DEFAULT false,
    "supportsReasoning" BOOLEAN NOT NULL DEFAULT false,
    "supportsImage" BOOLEAN NOT NULL DEFAULT false,
    "supportsAudio" BOOLEAN NOT NULL DEFAULT false,
    "supportsVideo" BOOLEAN NOT NULL DEFAULT false,
    "supportsEmbedding" BOOLEAN NOT NULL DEFAULT false,
    "inputPricePerMillion" REAL,
    "outputPricePerMillion" REAL,
    "groupId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Model_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Model" ("contextLength", "createdAt", "description", "groupId", "id", "inputPricePerMillion", "isSystem", "name", "outputPricePerMillion", "owned_by", "supportsAttachments", "supportsAudio", "supportsEmbedding", "supportsImage", "supportsReasoning", "supportsTools", "supportsVideo", "updatedAt") SELECT "contextLength", "createdAt", "description", "groupId", "id", "inputPricePerMillion", "isSystem", "name", "outputPricePerMillion", "owned_by", "supportsAttachments", "supportsAudio", "supportsEmbedding", "supportsImage", "supportsReasoning", "supportsTools", "supportsVideo", "updatedAt" FROM "Model";
DROP TABLE "Model";
ALTER TABLE "new_Model" RENAME TO "Model";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
