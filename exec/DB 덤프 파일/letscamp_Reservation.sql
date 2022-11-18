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
-- Table structure for table `Reservation`
--

DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reservation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `count_adult` bigint NOT NULL,
  `count_kid` bigint NOT NULL,
  `count_pet` bigint NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `level` bigint NOT NULL DEFAULT '0',
  `start_date` varchar(255) NOT NULL,
  `camping_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKafo7s4c2xfcjay1yamdlnmov1` (`camping_id`),
  KEY `FKfxoyaeo8vpqbvgjx22kwby3j6` (`user_id`),
  CONSTRAINT `FKafo7s4c2xfcjay1yamdlnmov1` FOREIGN KEY (`camping_id`) REFERENCES `Camping` (`id`),
  CONSTRAINT `FKfxoyaeo8vpqbvgjx22kwby3j6` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservation`
--

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;
INSERT INTO `Reservation` VALUES (63,'카라반',2,0,0,'2022-11-24',0,'2022-11-23',20,3),(67,'글램핑',4,0,0,'2022-11-26',0,'2022-11-25',426,9),(68,'일반야영장',2,0,0,'2022-11-21',0,'2022-11-20',147,11),(69,'자동차야영장',2,0,0,'2022-11-21',0,'2022-11-20',508,12),(70,'일반야영장',2,0,0,'2022-11-21',0,'2022-11-20',1285,13),(72,'자동차야영장',3,0,0,'2022-11-20',0,'2022-11-19',15,2),(73,'글램핑',2,1,0,'2022-11-24',0,'2022-11-23',426,7),(74,'글램핑',2,0,0,'2022-12-15',0,'2022-12-14',426,1);
/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
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
