-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lpdb
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `idcomentario` int NOT NULL AUTO_INCREMENT,
  `fechacreacion` datetime DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idcomentario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `idevento` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `fechacreacion` datetime DEFAULT NULL,
  `fechaevento` datetime DEFAULT NULL,
  `nombreevento` varchar(45) DEFAULT NULL,
  `lugarevento` varchar(100) DEFAULT NULL,
  `urlimg` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idevento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_comentario`
--

DROP TABLE IF EXISTS `evento_comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_comentario` (
  `evento_idevento` int NOT NULL,
  `comentario_idcomentario` int NOT NULL,
  KEY `fk_table1_evento2_idx` (`evento_idevento`),
  KEY `fk_table1_comentario1_idx` (`comentario_idcomentario`),
  CONSTRAINT `fk_table1_comentario1` FOREIGN KEY (`comentario_idcomentario`) REFERENCES `comentario` (`idcomentario`),
  CONSTRAINT `fk_table1_evento2` FOREIGN KEY (`evento_idevento`) REFERENCES `evento` (`idevento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_comentario`
--

LOCK TABLES `evento_comentario` WRITE;
/*!40000 ALTER TABLE `evento_comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento_comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_like`
--

DROP TABLE IF EXISTS `evento_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_like` (
  `evento_idevento` int NOT NULL,
  `like_idlike` int NOT NULL,
  KEY `fk_table1_evento1_idx` (`evento_idevento`),
  KEY `fk_table1_like2_idx` (`like_idlike`),
  CONSTRAINT `fk_table1_evento1` FOREIGN KEY (`evento_idevento`) REFERENCES `evento` (`idevento`),
  CONSTRAINT `fk_table1_like2` FOREIGN KEY (`like_idlike`) REFERENCES `like` (`idlike`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_like`
--

LOCK TABLES `evento_like` WRITE;
/*!40000 ALTER TABLE `evento_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `idlike` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idlike`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion` (
  `idpublicacion` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `fechacreacion` datetime DEFAULT NULL,
  `urlimg` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idpublicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (1,'QUE BUEN JUEGO','Me encanta este juego',NULL,NULL),(2,'QUE',NULL,NULL,NULL),(3,'QUE BUENO ',NULL,NULL,NULL),(4,'QUE BUENO ',NULL,NULL,NULL),(5,'QUE',NULL,NULL,NULL),(6,'QUE BUENO ',NULL,NULL,NULL),(7,'QUEBUENO','Quebueno',NULL,NULL),(8,'titulo','desc',NULL,NULL),(9,'si',NULL,NULL,NULL);
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion_comentario`
--

DROP TABLE IF EXISTS `publicacion_comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion_comentario` (
  `publicacion_idpublicacion` int NOT NULL,
  `comentario_idcomentario` int NOT NULL,
  KEY `fk_table1_publicacion1_idx` (`publicacion_idpublicacion`),
  KEY `fk_table1_comentario2_idx` (`comentario_idcomentario`),
  CONSTRAINT `fk_table1_comentario2` FOREIGN KEY (`comentario_idcomentario`) REFERENCES `comentario` (`idcomentario`),
  CONSTRAINT `fk_table1_publicacion1` FOREIGN KEY (`publicacion_idpublicacion`) REFERENCES `publicacion` (`idpublicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion_comentario`
--

LOCK TABLES `publicacion_comentario` WRITE;
/*!40000 ALTER TABLE `publicacion_comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `publicacion_comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion_like`
--

DROP TABLE IF EXISTS `publicacion_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion_like` (
  `publicacion_idpublicacion` int NOT NULL,
  `like_idlike` int NOT NULL,
  KEY `fk_table1_publicacion_idx` (`publicacion_idpublicacion`),
  KEY `fk_table1_like1_idx` (`like_idlike`),
  CONSTRAINT `fk_table1_like1` FOREIGN KEY (`like_idlike`) REFERENCES `like` (`idlike`),
  CONSTRAINT `fk_table1_publicacion` FOREIGN KEY (`publicacion_idpublicacion`) REFERENCES `publicacion` (`idpublicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion_like`
--

LOCK TABLES `publicacion_like` WRITE;
/*!40000 ALTER TABLE `publicacion_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `publicacion_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `fechacreacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Ricardo Molina','rmolina','1234',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_comentario`
--

DROP TABLE IF EXISTS `usuario_comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_comentario` (
  `usuario_idusuario` int NOT NULL,
  `comentario_idcomentario` int NOT NULL,
  KEY `fk_table1_usuario4_idx` (`usuario_idusuario`),
  KEY `fk_usuario_comentario_comentario1_idx` (`comentario_idcomentario`),
  CONSTRAINT `fk_table1_usuario4` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `fk_usuario_comentario_comentario1` FOREIGN KEY (`comentario_idcomentario`) REFERENCES `comentario` (`idcomentario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_comentario`
--

LOCK TABLES `usuario_comentario` WRITE;
/*!40000 ALTER TABLE `usuario_comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_evento`
--

DROP TABLE IF EXISTS `usuario_evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_evento` (
  `usuario_idusuario` int NOT NULL,
  `evento_idevento` int NOT NULL,
  KEY `fk_table1_usuario2_idx` (`usuario_idusuario`),
  KEY `fk_table1_evento3_idx` (`evento_idevento`),
  CONSTRAINT `fk_table1_evento3` FOREIGN KEY (`evento_idevento`) REFERENCES `evento` (`idevento`),
  CONSTRAINT `fk_table1_usuario2` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_evento`
--

LOCK TABLES `usuario_evento` WRITE;
/*!40000 ALTER TABLE `usuario_evento` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_like`
--

DROP TABLE IF EXISTS `usuario_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_like` (
  `usuario_idusuario` int NOT NULL,
  `like_idlike` int NOT NULL,
  KEY `fk_table1_usuario3_idx` (`usuario_idusuario`),
  KEY `fk_table1_like3_idx` (`like_idlike`),
  CONSTRAINT `fk_table1_like3` FOREIGN KEY (`like_idlike`) REFERENCES `like` (`idlike`),
  CONSTRAINT `fk_table1_usuario3` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_like`
--

LOCK TABLES `usuario_like` WRITE;
/*!40000 ALTER TABLE `usuario_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_publicacion`
--

DROP TABLE IF EXISTS `usuario_publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_publicacion` (
  `usuario_idusuario` int NOT NULL,
  `publicacion_idpublicacion` int NOT NULL,
  KEY `fk_table1_usuario1_idx` (`usuario_idusuario`),
  KEY `fk_table1_publicacion2_idx` (`publicacion_idpublicacion`),
  CONSTRAINT `fk_table1_publicacion2` FOREIGN KEY (`publicacion_idpublicacion`) REFERENCES `publicacion` (`idpublicacion`),
  CONSTRAINT `fk_table1_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_publicacion`
--

LOCK TABLES `usuario_publicacion` WRITE;
/*!40000 ALTER TABLE `usuario_publicacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_publicacion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-18 15:51:40
