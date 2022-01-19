/*
  Warnings:

  - You are about to drop the `TeacherHalls` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TeacherHalls` DROP FOREIGN KEY `TeacherHalls_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `TeacherHalls` DROP FOREIGN KEY `TeacherHalls_hallId_fkey`;

-- DropForeignKey
ALTER TABLE `TeacherHalls` DROP FOREIGN KEY `TeacherHalls_teacherId_fkey`;

-- DropTable
DROP TABLE `TeacherHalls`;
