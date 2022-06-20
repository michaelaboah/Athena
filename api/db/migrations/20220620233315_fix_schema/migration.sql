-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UsersJoinSubDatabases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "subdatabaseId" INTEGER NOT NULL
);
INSERT INTO "new_UsersJoinSubDatabases" ("id", "subdatabaseId", "userId") SELECT "id", "subdatabaseId", "userId" FROM "UsersJoinSubDatabases";
DROP TABLE "UsersJoinSubDatabases";
ALTER TABLE "new_UsersJoinSubDatabases" RENAME TO "UsersJoinSubDatabases";
CREATE UNIQUE INDEX "UsersJoinSubDatabases_userId_subdatabaseId_key" ON "UsersJoinSubDatabases"("userId", "subdatabaseId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
