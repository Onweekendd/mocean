/*
  Warnings:

  - You are about to drop the column `typeJson` on the `Model` table. All the data in the column will be lost.
  - You are about to drop the column `apiKeyUrl` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `isPopular` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `modelsUrl` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `officialWebsite` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `rateLimit` on the `Provider` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Model" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
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
    "outputPricePerMillion" REAL
);
INSERT INTO "new_Model" ("contextLength", "description", "group", "id", "inputPricePerMillion", "name", "outputPricePerMillion", "owned_by", "supportsAudio", "supportsImage", "supportsReasoning", "supportsTools", "supportsVideo") SELECT "contextLength", "description", "group", "id", "inputPricePerMillion", "name", "outputPricePerMillion", "owned_by", "supportsAudio", "supportsImage", "supportsReasoning", "supportsTools", "supportsVideo" FROM "Model";
DROP TABLE "Model";
ALTER TABLE "new_Model" RENAME TO "Model";
CREATE TABLE "new_Provider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apiKey" TEXT,
    "apiHost" TEXT,
    "apiVersion" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "isAuthed" BOOLEAN NOT NULL DEFAULT false,
    "isNotSupportArrayContent" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "isGateway" BOOLEAN NOT NULL DEFAULT false,
    "modelCount" INTEGER DEFAULT 0,
    "docsUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Provider" ("apiHost", "apiKey", "apiVersion", "createdAt", "docsUrl", "enabled", "id", "isAuthed", "isGateway", "isNotSupportArrayContent", "isSystem", "modelCount", "name", "notes", "type", "updatedAt") SELECT "apiHost", "apiKey", "apiVersion", "createdAt", "docsUrl", "enabled", "id", "isAuthed", "isGateway", "isNotSupportArrayContent", "isSystem", "modelCount", "name", "notes", "type", "updatedAt" FROM "Provider";
DROP TABLE "Provider";
ALTER TABLE "new_Provider" RENAME TO "Provider";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
