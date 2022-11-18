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
-- Table structure for table `Task`
--

DROP TABLE IF EXISTS `Task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Task` (
  `id` int NOT NULL,
  `done` bit(1) NOT NULL,
  `level` int NOT NULL,
  `subLevel` int NOT NULL,
  `reservationId` bigint DEFAULT NULL,
  `userId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfxbkaadvn1wpuhnodpjp1use2` (`reservationId`),
  KEY `FKth8920qttbr7k7reb12pgvrnt` (`userId`),
  CONSTRAINT `FKfxbkaadvn1wpuhnodpjp1use2` FOREIGN KEY (`reservationId`) REFERENCES `Reservation` (`id`),
  CONSTRAINT `FKth8920qttbr7k7reb12pgvrnt` FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Task`
--

LOCK TABLES `Task` WRITE;
/*!40000 ALTER TABLE `Task` DISABLE KEYS */;
INSERT INTO `Task` VALUES (147,_binary '\0',1,1,63,3),(148,_binary '\0',1,2,63,3),(149,_binary '\0',1,3,63,3),(150,_binary '\0',1,4,63,3),(151,_binary '\0',2,1,63,3),(152,_binary '\0',2,2,63,3),(153,_binary '\0',2,3,63,3),(154,_binary '\0',3,1,63,3),(155,_binary '\0',3,2,63,3),(156,_binary '\0',3,3,63,3),(157,_binary '\0',3,4,63,3),(158,_binary '\0',3,5,63,3),(159,_binary '\0',3,6,63,3),(160,_binary '\0',4,1,63,3),(161,_binary '\0',4,2,63,3),(162,_binary '\0',4,3,63,3),(208,_binary '\0',1,1,67,9),(209,_binary '\0',1,2,67,9),(210,_binary '\0',1,3,67,9),(211,_binary '\0',2,1,67,9),(212,_binary '\0',2,2,67,9),(213,_binary '\0',2,3,67,9),(214,_binary '\0',3,1,67,9),(215,_binary '\0',3,2,67,9),(216,_binary '\0',3,3,67,9),(217,_binary '\0',3,4,67,9),(218,_binary '\0',3,5,67,9),(219,_binary '\0',3,6,67,9),(220,_binary '\0',4,1,67,9),(221,_binary '\0',4,2,67,9),(222,_binary '\0',4,3,67,9),(223,_binary '\0',1,1,68,11),(224,_binary '\0',1,2,68,11),(225,_binary '\0',1,3,68,11),(226,_binary '\0',2,1,68,11),(227,_binary '\0',2,2,68,11),(228,_binary '\0',2,3,68,11),(229,_binary '\0',2,4,68,11),(230,_binary '\0',2,5,68,11),(231,_binary '\0',3,1,68,11),(232,_binary '\0',3,2,68,11),(233,_binary '\0',3,3,68,11),(234,_binary '\0',3,4,68,11),(235,_binary '\0',3,5,68,11),(236,_binary '\0',3,6,68,11),(237,_binary '\0',3,7,68,11),(238,_binary '\0',3,8,68,11),(239,_binary '\0',4,1,68,11),(240,_binary '\0',4,2,68,11),(241,_binary '\0',4,3,68,11),(242,_binary '\0',4,4,68,11),(243,_binary '\0',1,1,69,12),(244,_binary '\0',1,2,69,12),(245,_binary '\0',1,3,69,12),(246,_binary '\0',2,1,69,12),(247,_binary '\0',2,2,69,12),(248,_binary '\0',2,3,69,12),(249,_binary '\0',2,4,69,12),(250,_binary '\0',2,5,69,12),(251,_binary '\0',3,1,69,12),(252,_binary '\0',3,2,69,12),(253,_binary '\0',3,3,69,12),(254,_binary '\0',3,4,69,12),(255,_binary '\0',3,5,69,12),(256,_binary '\0',3,6,69,12),(257,_binary '\0',3,7,69,12),(258,_binary '\0',3,8,69,12),(259,_binary '\0',4,1,69,12),(260,_binary '\0',4,2,69,12),(261,_binary '\0',4,3,69,12),(262,_binary '\0',4,4,69,12),(263,_binary '\0',1,1,70,13),(264,_binary '\0',1,2,70,13),(265,_binary '\0',1,3,70,13),(266,_binary '',2,1,70,13),(267,_binary '',2,2,70,13),(268,_binary '',2,3,70,13),(269,_binary '',2,4,70,13),(270,_binary '\0',2,5,70,13),(271,_binary '',3,1,70,13),(272,_binary '',3,2,70,13),(273,_binary '',3,3,70,13),(274,_binary '',3,4,70,13),(275,_binary '',3,5,70,13),(276,_binary '',3,6,70,13),(277,_binary '',3,7,70,13),(278,_binary '',3,8,70,13),(279,_binary '',4,1,70,13),(280,_binary '',4,2,70,13),(281,_binary '',4,3,70,13),(282,_binary '',4,4,70,13),(303,_binary '\0',1,1,72,2),(304,_binary '\0',1,2,72,2),(305,_binary '\0',1,3,72,2),(306,_binary '\0',2,1,72,2),(307,_binary '\0',2,2,72,2),(308,_binary '\0',2,3,72,2),(309,_binary '\0',2,4,72,2),(310,_binary '\0',2,5,72,2),(311,_binary '\0',3,1,72,2),(312,_binary '\0',3,2,72,2),(313,_binary '\0',3,3,72,2),(314,_binary '\0',3,4,72,2),(315,_binary '\0',3,5,72,2),(316,_binary '\0',3,6,72,2),(317,_binary '\0',3,7,72,2),(318,_binary '\0',3,8,72,2),(319,_binary '\0',4,1,72,2),(320,_binary '\0',4,2,72,2),(321,_binary '\0',4,3,72,2),(322,_binary '\0',4,4,72,2),(323,_binary '\0',1,1,73,7),(324,_binary '\0',1,2,73,7),(325,_binary '\0',1,3,73,7),(326,_binary '\0',2,1,73,7),(327,_binary '\0',2,2,73,7),(328,_binary '\0',2,3,73,7),(329,_binary '\0',3,1,73,7),(330,_binary '\0',3,2,73,7),(331,_binary '\0',3,3,73,7),(332,_binary '\0',3,4,73,7),(333,_binary '\0',3,5,73,7),(334,_binary '\0',3,6,73,7),(335,_binary '\0',4,1,73,7),(336,_binary '\0',4,2,73,7),(337,_binary '\0',4,3,73,7),(338,_binary '\0',1,1,74,1),(339,_binary '\0',1,2,74,1),(340,_binary '\0',1,3,74,1),(341,_binary '\0',2,1,74,1),(342,_binary '\0',2,2,74,1),(343,_binary '\0',2,3,74,1),(344,_binary '\0',3,1,74,1),(345,_binary '\0',3,2,74,1),(346,_binary '\0',3,3,74,1),(347,_binary '\0',3,4,74,1),(348,_binary '\0',3,5,74,1),(349,_binary '\0',3,6,74,1),(350,_binary '\0',4,1,74,1),(351,_binary '\0',4,2,74,1),(352,_binary '\0',4,3,74,1);
/*!40000 ALTER TABLE `Task` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 17:33:49
