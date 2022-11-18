-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: k7b308.p.ssafy.io    Database: letscamp
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Glamping`
--

DROP TABLE IF EXISTS `Glamping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Glamping` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_check` bit(1) NOT NULL,
  `item` varchar(255) NOT NULL,
  `level` bigint NOT NULL,
  `reservationId` bigint DEFAULT NULL,
  `userId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKta0iwrqygt97a3d0y4ytmnfh1` (`reservationId`),
  KEY `FKfo87dnajh0oaimrmvqslwuq1v` (`userId`),
  CONSTRAINT `FKfo87dnajh0oaimrmvqslwuq1v` FOREIGN KEY (`userId`) REFERENCES `User` (`id`),
  CONSTRAINT `FKta0iwrqygt97a3d0y4ytmnfh1` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Glamping`
--

LOCK TABLES `Glamping` WRITE;
/*!40000 ALTER TABLE `Glamping` DISABLE KEYS */;
INSERT INTO `Glamping` VALUES (53,_binary '','비상약',4,67,9),(54,_binary '\0','모기약',2,67,9),(55,_binary '','긴팔/긴바지',4,67,9),(56,_binary '\0','담요',4,67,9),(57,_binary '\0','설거지통',1,67,9),(58,_binary '\0','세면도구',4,67,9),(59,_binary '','수건',4,67,9),(60,_binary '\0','조리도구',4,67,9),(61,_binary '','휴지',4,67,9),(62,_binary '\0','물티슈',4,67,9),(63,_binary '\0','쓰레기봉투',4,67,9),(64,_binary '','블루투스 스피커',1,67,9),(65,_binary '','슬리퍼',2,67,9),(66,_binary '\0','비상약',4,73,7),(67,_binary '\0','모기약',2,73,7),(68,_binary '\0','긴팔/긴바지',4,73,7),(69,_binary '\0','담요',4,73,7),(70,_binary '\0','설거지통',1,73,7),(71,_binary '\0','세면도구',4,73,7),(72,_binary '\0','수건',4,73,7),(73,_binary '\0','조리도구',4,73,7),(74,_binary '\0','휴지',4,73,7),(75,_binary '\0','물티슈',4,73,7),(76,_binary '\0','쓰레기봉투',4,73,7),(77,_binary '\0','블루투스 스피커',1,73,7),(78,_binary '\0','슬리퍼',2,73,7),(79,_binary '\0','비상약',4,74,1),(80,_binary '\0','모기약',2,74,1),(81,_binary '\0','긴팔/긴바지',4,74,1),(82,_binary '\0','담요',4,74,1),(83,_binary '\0','설거지통',1,74,1),(84,_binary '\0','세면도구',4,74,1),(85,_binary '\0','수건',4,74,1),(86,_binary '\0','조리도구',4,74,1),(87,_binary '\0','휴지',4,74,1),(88,_binary '\0','물티슈',4,74,1),(89,_binary '\0','쓰레기봉투',4,74,1),(90,_binary '\0','블루투스 스피커',1,74,1),(91,_binary '\0','슬리퍼',2,74,1);
/*!40000 ALTER TABLE `Glamping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 17:33:46
