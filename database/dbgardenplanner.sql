-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 17, 2022 alle 13:33
-- Versione del server: 10.4.6-MariaDB
-- Versione PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbgardenplanner`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `prodotti`
--

CREATE TABLE `prodotti` (
  `ID` int(11) NOT NULL,
  `NomeProdotto` varchar(64) NOT NULL,
  `Categoria` varchar(56) NOT NULL,
  `Informazioni Prodotti` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ;

--
-- Dump dei dati per la tabella `prodotti`
--

INSERT INTO `prodotti` (`ID`, `NomeProdotto`, `Categoria`, `Informazioni Prodotti`, `Larghezza`, `Lunghezza`, `Costo`, `Immagine`) VALUES
(2, 'Weber-124587', 'Barbecue ', '{\r\n	\"Dimensioni griglia\" : \"40x70cm\",\r\n	\"Alimentazione\" : \"Gas\",\r\n	\"Altezza\" : \"1,20m\",\r\n	\"Colore\": \"Nero brace\",\r\n	\"Peso\": \"50 kg\",\r\n	\"Accessori\": \"Pinze multiuso, cappello da chef, Termometro per carne\"\r\n}', 60, 100, 200, 'https://www.agrieuro.com/share/media/images/360/gifs/23751/barbecue-a-carbone-cb3000-large-versione-grande-superficie-di-cottura-3000cm2--agrieuro_23751_2.gif'),
(3, 'Acacia', 'Pianta', '{\r\n        \"Sottocategoria\": \"Albero\",\r\n	\"NomeAlberoScientifico\" : \" Acacia pycnantha\",\r\n	\"AltezzaMassima\" : \"3 Metri\",\r\n	\"ClimaFavorevole\": \"Afoso\",\r\n	\"Irrigazione\" : \"Minima\",\r\n	\"EspansioneRadici\" : \"1 metro per lato\",\r\n	\"Sempreverde\" : \"No\",\r\n	\"Potatura\" : \"Ogni inverno\"\r\n	\r\n}', 30, 40, 52, 'https://m.media-amazon.com/images/I/91Wy1KJUAmL._AC_SX466_.jpg'),
(4, 'Festuca Rubra', 'Manto Erboso', '{\r\n	\"Clima\" : \"Mite\",\r\n        \"Colore\": \"Verde smeraldo\",\r\n	\"EsposizioneSolare\" : \"completa\",\r\n	\"Crescita\" : \"Cespitosa\",\r\n	\"AltezzaDiTaglio\" : \"40 millimetri\"\r\n}', 100, 100, 30, 'http://www.pratoerboso.com/img/cms/tipologie-di-prato/festuca_rubra.jpg');

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `prodotti`
--
ALTER TABLE `prodotti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
