-- CreateTable
CREATE TABLE "SubDatabase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UsersJoinSubDatabases" (
    "userId" INTEGER NOT NULL,
    "subdatabaseId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "subdatabaseId"),
    CONSTRAINT "UsersJoinSubDatabases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsersJoinSubDatabases_subdatabaseId_fkey" FOREIGN KEY ("subdatabaseId") REFERENCES "SubDatabase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
