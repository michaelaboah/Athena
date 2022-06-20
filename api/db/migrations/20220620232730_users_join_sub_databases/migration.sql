/*
  Warnings:

  - The primary key for the `UsersJoinSubDatabases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `UsersJoinSubDatabases` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UsersJoinSubDatabases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "subdatabaseId" INTEGER NOT NULL,
    CONSTRAINT "UsersJoinSubDatabases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsersJoinSubDatabases_subdatabaseId_fkey" FOREIGN KEY ("subdatabaseId") REFERENCES "SubDatabase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UsersJoinSubDatabases" ("subdatabaseId", "userId") SELECT "subdatabaseId", "userId" FROM "UsersJoinSubDatabases";
DROP TABLE "UsersJoinSubDatabases";
ALTER TABLE "new_UsersJoinSubDatabases" RENAME TO "UsersJoinSubDatabases";
CREATE UNIQUE INDEX "UsersJoinSubDatabases_userId_subdatabaseId_key" ON "UsersJoinSubDatabases"("userId", "subdatabaseId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
