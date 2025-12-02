-- CreateTable
CREATE TABLE "ModelProvider" (
    "modelId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("modelId", "providerId"),
    CONSTRAINT "ModelProvider_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ModelProvider_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Provider" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL DEFAULT '',
    "apiHost" TEXT NOT NULL DEFAULT '',
    "apiVersion" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "isAuthed" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "isGateway" BOOLEAN NOT NULL DEFAULT false,
    "modelCount" INTEGER DEFAULT 0,
    "docsUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Provider" ("apiHost", "apiKey", "apiVersion", "createdAt", "docsUrl", "enabled", "id", "isAuthed", "isGateway", "isSystem", "modelCount", "name", "notes", "type", "updatedAt") SELECT coalesce("apiHost", '') AS "apiHost", coalesce("apiKey", '') AS "apiKey", "apiVersion", "createdAt", "docsUrl", "enabled", "id", "isAuthed", "isGateway", "isSystem", "modelCount", "name", "notes", "type", "updatedAt" FROM "Provider";
DROP TABLE "Provider";
ALTER TABLE "new_Provider" RENAME TO "Provider";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "ModelProvider_providerId_idx" ON "ModelProvider"("providerId");
