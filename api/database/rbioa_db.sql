USE `defaultdb`;

--
-- Table structure for table `approvedmember`
--

CREATE TABLE `approvedmember` (
  `SamadhanID` varchar(6) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Name` tinytext,
  `OfficeLocation` varchar(64) DEFAULT NULL,
  `Password` varchar(64) DEFAULT NULL,
  `IsAdmin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`SamadhanID`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `communication`
--

CREATE TABLE `communication` (
  `CommsID` int NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `AuthorID` varchar(6) NOT NULL,
  `Heading` text NOT NULL,
  `Body` text,
  `Attach` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CommsID`),
  KEY `SamadhanID_idx` (`AuthorID`),
  CONSTRAINT `communication_ibfk_1` FOREIGN KEY (`AuthorID`) REFERENCES `approvedmember` (`SamadhanID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `ImageFile` varchar(64) NOT NULL,
  `UploadDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ImageFile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `NewsID` int NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT NULL,
  `AuthorID` varchar(6) NOT NULL,
  `Heading` text NOT NULL,
  `Body` text,
  `Attach` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`NewsID`),
  KEY `SamadhanID_idx` (`AuthorID`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`AuthorID`) REFERENCES `approvedmember` (`SamadhanID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Table structure for table `pendingmember`
--

CREATE TABLE `pendingmember` (
  `SamadhanID` varchar(6) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Name` tinytext NOT NULL,
  `OfficeLocation` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`SamadhanID`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `polls`
--

CREATE TABLE `polls` (
  `PollsID` int NOT NULL AUTO_INCREMENT,
  `Question` tinytext NOT NULL,
  `Date` datetime DEFAULT NULL,
  `AuthorID` varchar(6) DEFAULT NULL,
  `Active` tinyint(1) NOT NULL,
  PRIMARY KEY (`PollsID`),
  KEY `AuthorID` (`AuthorID`),
  CONSTRAINT `polls_ibfk_1` FOREIGN KEY (`AuthorID`) REFERENCES `approvedmember` (`SamadhanID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Table structure for table `pollsoption`
--

CREATE TABLE `pollsoption` (
  `PollsID` int NOT NULL,
  `PollsOptions` varchar(64) NOT NULL,
  `Votes` int DEFAULT '0',
  PRIMARY KEY (`PollsID`, `PollsOptions`),
  KEY `PollsID` (`PollsID`),
  CONSTRAINT `pollsoption_ibfk_1` FOREIGN KEY (`PollsID`) REFERENCES `polls` (`PollsID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
