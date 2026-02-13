/*
  Warnings:

  - You are about to drop the `ModelGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ModelProvider` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `groupId` to the `Model` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ModelGroup_providerId_idx";

-- DropIndex
DROP INDEX "ModelGroup_groupId_idx";

-- DropIndex
DROP INDEX "ModelProvider_providerId_idx";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ModelGroup";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ModelProvider";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Model" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "owned_by" TEXT,
    "description" TEXT,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
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
INSERT INTO "new_Model" ("contextLength", "description", "id", "inputPricePerMillion", "isSystem", "name", "outputPricePerMillion", "owned_by", "supportsAttachments", "supportsAudio", "supportsEmbedding", "supportsImage", "supportsReasoning", "supportsTools", "supportsVideo") SELECT "contextLength", "description", "id", "inputPricePerMillion", "isSystem", "name", "outputPricePerMillion", "owned_by", "supportsAttachments", "supportsAudio", "supportsEmbedding", "supportsImage", "supportsReasoning", "supportsTools", "supportsVideo" FROM "Model";
DROP TABLE "Model";
ALTER TABLE "new_Model" RENAME TO "Model";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
