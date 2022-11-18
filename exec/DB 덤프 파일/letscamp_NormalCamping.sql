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
-- Table structure for table `NormalCamping`
--

DROP TABLE IF EXISTS `NormalCamping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NormalCamping` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_check` bit(1) NOT NULL,
  `item` varchar(255) NOT NULL,
  `level` bigint NOT NULL,
  `reservationId` bigint DEFAULT NULL,
  `userId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpismgqiswfxhwg5xoo8gaa2ij` (`reservationId`),
  KEY `FKj23n6be4vyqbwvb9npaklgtx3` (`userId`),
  CONSTRAINT `FKj23n6be4vyqbwvb9npaklgtx3` FOREIGN KEY (`userId`) REFERENCES `User` (`id`),
  CONSTRAINT `FKpismgqiswfxhwg5xoo8gaa2ij` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NormalCamping`
--

LOCK TABLES `NormalCamping` WRITE;
/*!40000 ALTER TABLE `NormalCamping` DISABLE KEYS */;
INSERT INTO `NormalCamping` VALUES (35,_binary '','텐트',4,68,11),(36,_binary '','타프',2,68,11),(37,_binary '','자충매트',3,68,11),(38,_binary '','자충베개',3,68,11),(39,_binary '','테이블',4,68,11),(40,_binary '','의자',4,68,11),(41,_binary '','아이스박스',4,68,11),(42,_binary '','그릴',3,68,11),(43,_binary '','버너',4,68,11),(44,_binary '','부탄가스',4,68,11),(45,_binary '','숯',3,68,11),(46,_binary '','장작',2,68,11),(47,_binary '','팬',3,68,11),(48,_binary '','코펠',4,68,11),(49,_binary '','조명',4,68,11),(50,_binary '','화로대',2,68,11),(51,_binary '','선풍기',1,68,11),(52,_binary '','비상약',4,68,11),(53,_binary '','모기약',2,68,11),(54,_binary '','긴팔/긴바지',4,68,11),(55,_binary '','담요',4,68,11),(56,_binary '','이불 혹은 침낭',2,68,11),(57,_binary '','보조배터리',1,68,11),(58,_binary '','릴선',1,68,11),(59,_binary '','멀티탭',1,68,11),(60,_binary '','설거지통',1,68,11),(61,_binary '','세면도구',4,68,11),(62,_binary '','수건',4,68,11),(63,_binary '','조리도구',4,68,11),(64,_binary '','휴지',4,68,11),(65,_binary '','물티슈',4,68,11),(66,_binary '','쓰레기봉투',4,68,11),(67,_binary '','블루투스 스피커',1,68,11),(68,_binary '','슬리퍼',2,68,11),(69,_binary '\0','텐트',4,70,13),(70,_binary '\0','타프',2,70,13),(71,_binary '\0','자충매트',3,70,13),(72,_binary '\0','자충베개',3,70,13),(73,_binary '\0','테이블',4,70,13),(74,_binary '\0','의자',4,70,13),(75,_binary '\0','아이스박스',4,70,13),(76,_binary '\0','그릴',3,70,13),(77,_binary '\0','버너',4,70,13),(78,_binary '\0','부탄가스',4,70,13),(79,_binary '\0','숯',3,70,13),(80,_binary '\0','장작',2,70,13),(81,_binary '\0','팬',3,70,13),(82,_binary '\0','코펠',4,70,13),(83,_binary '\0','조명',4,70,13),(84,_binary '\0','화로대',2,70,13),(85,_binary '\0','선풍기',1,70,13),(86,_binary '\0','비상약',4,70,13),(87,_binary '\0','모기약',2,70,13),(88,_binary '\0','긴팔/긴바지',4,70,13),(89,_binary '\0','담요',4,70,13),(90,_binary '\0','이불 혹은 침낭',2,70,13),(91,_binary '\0','보조배터리',1,70,13),(92,_binary '\0','릴선',1,70,13),(93,_binary '\0','멀티탭',1,70,13),(94,_binary '\0','설거지통',1,70,13),(95,_binary '\0','세면도구',4,70,13),(96,_binary '\0','수건',4,70,13),(97,_binary '\0','조리도구',4,70,13),(98,_binary '\0','휴지',4,70,13),(99,_binary '\0','물티슈',4,70,13),(100,_binary '\0','쓰레기봉투',4,70,13),(101,_binary '\0','블루투스 스피커',1,70,13),(102,_binary '\0','슬리퍼',2,70,13);
/*!40000 ALTER TABLE `NormalCamping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 17:33:47
