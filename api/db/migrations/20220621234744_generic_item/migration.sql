-- CreateTable
CREATE TABLE "GenericItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "length" REAL NOT NULL,
    "width" REAL NOT NULL,
    "height" REAL NOT NULL,
    "subDatabaseId" INTEGER,
    CONSTRAINT "GenericItem_subDatabaseId_fkey" FOREIGN KEY ("subDatabaseId") REFERENCES "SubDatabase" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
