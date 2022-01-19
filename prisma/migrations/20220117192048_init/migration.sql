-- DropIndex
DROP INDEX `Teachers_roleId_fkey` ON `Teachers`;

-- AlterTable
ALTER TABLE `Teachers` MODIFY `role` ENUM('CHIEF', 'ASSISTANT') NOT NULL DEFAULT 'ASSISTANT';
