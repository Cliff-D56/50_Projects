CREATE TABLE IF NOT EXISTS `Customer` (
  `CustomerNumber` INT NOT NULL,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(45) NULL,
  `Address` VARCHAR(45) NULL,
  `Zip` VARCHAR(10) NULL,
  `EMail` VARCHAR(45) NULL,
  PRIMARY KEY (`CustomerNumber`),
  CONSTRAINT `fk_Customer_ZipCode`
    FOREIGN KEY (`Zip`)
    REFERENCES `ZipCode` (`ZipCode`)
    )
    