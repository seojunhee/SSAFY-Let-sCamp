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
-- Table structure for table `CarCamping`
--

DROP TABLE IF EXISTS `CarCamping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CarCamping` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_check` bit(1) NOT NULL,
  `item` varchar(255) NOT NULL,
  `level` bigint NOT NULL,
  `reservationId` bigint DEFAULT NULL,
  `userId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmijlppjaf8ewi9uj3w2430p7h` (`reservationId`),
  KEY `FK2lrwebnlhtgbdah8n61nsph07` (`userId`),
  CONSTRAINT `FK2lrwebnlhtgbdah8n61nsph07` FOREIGN KEY (`userId`) REFERENCES `User` (`id`),
  CONSTRAINT `FKmijlppjaf8ewi9uj3w2430p7h` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CarCamping`
--

LOCK TABLES `CarCamping` WRITE;
/*!40000 ALTER TABLE `CarCamping` DISABLE KEYS */;
INSERT INTO `CarCamping` VALUES (32,_binary '\0','차박용 텐트',3,69,12),(33,_binary '\0','차량 평탄화 매트',4,69,12),(34,_binary '\0','자충베개 혹은 베개',4,69,12),(35,_binary '\0','이불 혹은 침낭',2,69,12),(36,_binary '\0','차량용 냉장고',1,69,12),(37,_binary '\0','테이블',4,69,12),(38,_binary '\0','의자',4,69,12),(39,_binary '\0','그릴',3,69,12),(40,_binary '\0','버너',4,69,12),(41,_binary '\0','부탄가스',4,69,12),(42,_binary '\0','숯',2,69,12),(43,_binary '\0','장작',1,69,12),(44,_binary '\0','팬',3,69,12),(45,_binary '\0','코펠',4,69,12),(46,_binary '\0','조명',4,69,12),(47,_binary '\0','화로대',2,69,12),(48,_binary '\0','선풍기',1,69,12),(49,_binary '\0','비상약',4,69,12),(50,_binary '\0','모기약',2,69,12),(51,_binary '\0','긴팔/긴바지',4,69,12),(52,_binary '\0','담요',4,69,12),(53,_binary '\0','보조배터리',1,69,12),(54,_binary '\0','설거지통',1,69,12),(55,_binary '\0','세면도구',4,69,12),(56,_binary '\0','수건',4,69,12),(57,_binary '\0','조리도구',4,69,12),(58,_binary '\0','휴지',4,69,12),(59,_binary '\0','물티슈',4,69,12),(60,_binary '\0','쓰레기봉투',4,69,12),(61,_binary '\0','블루투스 스피커',1,69,12),(62,_binary '\0','슬리퍼',2,69,12),(63,_binary '\0','차박용 텐트',3,72,2),(64,_binary '\0','차량 평탄화 매트',4,72,2),(65,_binary '\0','자충베개 혹은 베개',4,72,2),(66,_binary '\0','이불 혹은 침낭',2,72,2),(67,_binary '\0','차량용 냉장고',1,72,2),(68,_binary '\0','테이블',4,72,2),(69,_binary '\0','의자',4,72,2),(70,_binary '\0','그릴',3,72,2),(71,_binary '\0','버너',4,72,2),(72,_binary '\0','부탄가스',4,72,2),(73,_binary '\0','숯',2,72,2),(74,_binary '\0','장작',1,72,2),(75,_binary '\0','팬',3,72,2),(76,_binary '\0','코펠',4,72,2),(77,_binary '\0','조명',4,72,2),(78,_binary '\0','화로대',2,72,2),(79,_binary '\0','선풍기',1,72,2),(80,_binary '\0','비상약',4,72,2),(81,_binary '\0','모기약',2,72,2),(82,_binary '\0','긴팔/긴바지',4,72,2),(83,_binary '\0','담요',4,72,2),(84,_binary '\0','보조배터리',1,72,2),(85,_binary '\0','설거지통',1,72,2),(86,_binary '\0','세면도구',4,72,2),(87,_binary '\0','수건',4,72,2),(88,_binary '\0','조리도구',4,72,2),(89,_binary '\0','휴지',4,72,2),(90,_binary '\0','물티슈',4,72,2),(91,_binary '\0','쓰레기봉투',4,72,2),(92,_binary '\0','블루투스 스피커',1,72,2),(93,_binary '\0','슬리퍼',2,72,2);
/*!40000 ALTER TABLE `CarCamping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 17:33:50
