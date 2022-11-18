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
-- Table structure for table `Caraban`
--

DROP TABLE IF EXISTS `Caraban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Caraban` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_check` bit(1) NOT NULL,
  `item` varchar(255) NOT NULL,
  `level` bigint NOT NULL,
  `reservationId` bigint DEFAULT NULL,
  `userId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8lwi8dtumcf2gb72dsow4ykns` (`reservationId`),
  KEY `FK12k1ltxdylipf755tn2grhr0v` (`userId`),
  CONSTRAINT `FK12k1ltxdylipf755tn2grhr0v` FOREIGN KEY (`userId`) REFERENCES `User` (`id`),
  CONSTRAINT `FK8lwi8dtumcf2gb72dsow4ykns` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Caraban`
--

LOCK TABLES `Caraban` WRITE;
/*!40000 ALTER TABLE `Caraban` DISABLE KEYS */;
INSERT INTO `Caraban` VALUES (1,_binary '\0','테이블',4,63,3),(2,_binary '\0','의자',4,63,3),(3,_binary '\0','비상약',4,63,3),(4,_binary '\0','모기약',2,63,3),(5,_binary '\0','긴팔/긴바지',4,63,3),(6,_binary '\0','담요',4,63,3),(7,_binary '\0','설거지통',1,63,3),(8,_binary '\0','세면도구',4,63,3),(9,_binary '\0','수건',4,63,3),(10,_binary '\0','조리도구',4,63,3),(11,_binary '\0','휴지',4,63,3),(12,_binary '\0','물티슈',4,63,3),(13,_binary '\0','쓰레기봉투',4,63,3),(14,_binary '\0','블루투스 스피커',1,63,3),(15,_binary '\0','슬리퍼',2,63,3);
/*!40000 ALTER TABLE `Caraban` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 17:33:48
