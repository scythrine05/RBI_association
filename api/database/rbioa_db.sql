CREATE SCHEMA `rbioa_db` ;

CREATE TABLE `rbioa_db`.`pendingmember` (
  `SamadhanID` INT NOT NULL,
  `Email` VARCHAR(64) NOT NULL,
  `Name` TINYTEXT NOT NULL,
  `OfficeLocation` VARCHAR(64) NULL,
  PRIMARY KEY (`SamadhanID`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE);

CREATE TABLE `rbioa_db`.`approvedmember` (
  `SamadhanID` INT NOT NULL,
  `Email` VARCHAR(64) NOT NULL,
  `Name` TINYTEXT NOT NULL,
  `OfficeLocation` VARCHAR(64) NULL,
  `Password` VARCHAR(64) NOT NULL,
  `IsAdmin` BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (`SamadhanID`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE);

CREATE TABLE `rbioa_db`.`news` (
  `NewsID` INT NOT NULL,
  `Date` DATETIME NULL,
  `Data` JSON NULL,
  `AuthorID` INT NULL,
  PRIMARY KEY (`NewsID`),
  INDEX `SamadhanID_idx` (`AuthorID` ASC) VISIBLE,
  FOREIGN KEY (`AuthorID`)
  REFERENCES `rbioa_db`.`approvedmember` (`SamadhanID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);

CREATE TABLE `rbioa_db`.`communication` (
  `CommsID` INT NOT NULL,
  `Date` DATETIME NULL,
  `Data` JSON NULL,
  `AuthorID` INT NULL,
  PRIMARY KEY (`CommsID`),
  INDEX `SamadhanID_idx` (`AuthorID` ASC) VISIBLE,
  FOREIGN KEY (`AuthorID`)
  REFERENCES `rbioa_db`.`approvedmember` (`SamadhanID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);

CREATE TABLE `rbioa_db`.`polls` (
  `PollsID` INT NOT NULL,
  `Question` TINYTEXT NOT NULL,
  `Date` DATETIME NULL,
  PRIMARY KEY (`PollsID`),
  INDEX `SamadhanID_idx` (`AuthorID` ASC) VISIBLE,
  FOREIGN KEY (`AuthorID`)
  REFERENCES `rbioa_db`.`approvedmember` (`SamadhanID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);

CREATE TABLE `rbioa_db`.`pollsoption` (
  `PollsID` INT NOT NULL,
  `PollsOptions` VARCHAR(64) NOT NULL,
  `Votes` INT NULL DEFAULT 0,
  FOREIGN KEY (`PollsID`)
  REFERENCES `rbioa_db`.`polls` (`PollsID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);

CREATE TABLE `rbioa_db`.`gallery` (
  `ImageFile` VARCHAR(64) NOT NULL,
  `UploadDate` DATETIME NULL,
  PRIMARY KEY (`ImageFile`));

CREATE TABLE `rbioa_db`.`team` (
  `MemberID` INT NOT NULL,
  PRIMARY KEY (`MemberID`),
  FOREIGN KEY (`MemberID`)
  REFERENCES `rbioa_db`.`approvedmember` (`SamadhanID`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);
