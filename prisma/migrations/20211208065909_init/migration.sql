/*
  Warnings:

  - Added the required column `rolePriority` to the `Roles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Roles` ADD COLUMN `rolePriority` INTEGER NOT NULL;
