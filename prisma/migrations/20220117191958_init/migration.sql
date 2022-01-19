/*
  Warnings:

  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Teachers` DROP FOREIGN KEY `Teachers_roleId_fkey`;

-- AlterTable
ALTER TABLE `Teachers` ADD COLUMN `role` ENUM('CHIEF', 'ASSISTANT') NOT NULL DEFAULT 'CHIEF';

-- DropTable
DROP TABLE `Roles`;
