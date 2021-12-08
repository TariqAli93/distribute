-- AlterTable
ALTER TABLE `Roles` ALTER COLUMN `rolePriority` DROP DEFAULT;

-- CreateTable
CREATE TABLE `Halls` (
    `idHall` INTEGER NOT NULL AUTO_INCREMENT,
    `HallName` VARCHAR(191) NOT NULL,
    `HallContainment` INTEGER NOT NULL,

    PRIMARY KEY (`idHall`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Groups` (
    `idGroup` INTEGER NOT NULL AUTO_INCREMENT,
    `GroupName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idGroup`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeacherHalls` (
    `idTeacherHall` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherId` INTEGER NOT NULL,
    `hallId` INTEGER NOT NULL,
    `groupId` INTEGER NOT NULL,

    PRIMARY KEY (`idTeacherHall`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeacherHalls` ADD CONSTRAINT `TeacherHalls_hallId_fkey` FOREIGN KEY (`hallId`) REFERENCES `Halls`(`idHall`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeacherHalls` ADD CONSTRAINT `TeacherHalls_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teachers`(`idTeacher`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeacherHalls` ADD CONSTRAINT `TeacherHalls_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Groups`(`idGroup`) ON DELETE RESTRICT ON UPDATE CASCADE;
