-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 31, 2022 alle 13:55
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
  `InformazioniProdotti` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Larghezza` int(11) NOT NULL,
  `Lunghezza` int(11) NOT NULL,
  `Costo` float NOT NULL,
  `immagine` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `prodotti`
--

INSERT INTO `prodotti` (`ID`, `NomeProdotto`, `Categoria`, `InformazioniProdotti`, `Larghezza`, `Lunghezza`, `Costo`, `immagine`) VALUES
(2, 'Weber-124587', 'Barbecue ', '{\r\n	\"Dimensioni griglia\" : \"40x70cm\",\r\n	\"Alimentazione\" : \"Gas\",\r\n	\"Altezza\" : \"1,20m\",\r\n	\"Colore\": \"Nero brace\",\r\n	\"Peso\": \"50 kg\",\r\n	\"Accessori\": \"Pinze multiuso, cappello da chef, Termometro per carne\"\r\n}', 60, 100, 200, 'https://www.agrieuro.com/share/media/images/360/gifs/23751/barbecue-a-carbone-cb3000-large-versione-grande-superficie-di-cottura-3000cm2--agrieuro_23751_2.gif'),
(3, 'Acacia', 'Pianta', '{\r\n        \"Sottocategoria\": \"Albero\",\r\n	\"NomeAlberoScientifico\" : \" Acacia pycnantha\",\r\n	\"AltezzaMassima\" : \"3 Metri\",\r\n	\"ClimaFavorevole\": \"Afoso\",\r\n	\"Irrigazione\" : \"Minima\",\r\n	\"EspansioneRadici\" : \"1 metro per lato\",\r\n	\"Sempreverde\" : \"No\",\r\n	\"Potatura\" : \"Ogni inverno\"\r\n	\r\n}', 30, 40, 52, 'https://m.media-amazon.com/images/I/91Wy1KJUAmL._AC_SX466_.jpg'),
(4, 'Festuca Rubra', 'Manto Erboso', '{\r\n	\"Clima\" : \"Mite\",\r\n        \"Colore\": \"Verde smeraldo\",\r\n	\"EsposizioneSolare\" : \"completa\",\r\n	\"Crescita\" : \"Cespitosa\",\r\n	\"AltezzaDiTaglio\" : \"40 millimetri\"\r\n}', 100, 100, 30, 'http://www.pratoerboso.com/img/cms/tipologie-di-prato/festuca_rubra.jpg'),
(5, 'Festuca Rubra', 'Manto Erboso', '{\r\n	\"Clima\" : \"Mite\",\r\n        \"Colore\": \"Verde scuro\",\r\n	\"EsposizioneSolare\" : \"Completa\",\r\n	\"Crescita\" : \"Uniforme\",\r\n	\"AltezzaDiTaglio\" : \"45 millimetri\"\r\n}', 100, 100, 30, 'https://www.seminart.it/wp-content/uploads/sementi-Festuca-rubra-tricophilla.jpg'),
(6, 'Calla', 'Fiore', '{\r\n	\"Clima\" : \"Mite\",\r\n        \"Colore\": \"Biancob avorio\",\r\n	\"EsposizioneSolare\" : \"Parziale\",\r\n	\"Crescita\" : \"Regolare\",\r\n	\"DaVaso\" : \"Si\",\r\n	\"Profumo\" : \"Si\",\r\n	\"AcquaGiornaliera\" : \"30ml\"\r\n}', 55, 30, 25, 'https://www.giardinaggio.it/piante-appartamento/piante-da-interno/calle-da-appartamento_NG4.jpg'),
(7, 'Rosa', 'Fiore', '{\r\n	\"Clima\" : \"Mite\",\r\n        \"Colore\": \"Rosso porpora\",\r\n	\"EsposizioneSolare\" : \"Abbondante\",\r\n	\"Crescita\" : \"Moderata\",\r\n	\"DaVaso\" : \"Si\",\r\n	\"Profumo\" : \"Si\",\r\n	\"AcquaGiornaliera\" : \"10ml\"\r\n}', 25, 25, 42, 'https://images.obi-italia.it/product/DE/1500x1500/299674_1.jpg'),
(8, 'Kingsize Kamado Barbecue', 'Barbecue ', '{\r\n	\"Dimensioni griglia\" : \"40x70cm\",\r\n	\"Alimentazione\" : \"Gas\",\r\n	\"Altezza\" : \"1,20m\",\r\n	\"Colore\": \"Nero brace\",\r\n	\"Peso\": \"50 kg\",\r\n	\"Accessori\": \"Pinze multiuso, cappello da chef, Termometro per carne, arrotino\"\r\n}', 132, 125, 1049, 'https://res.cloudinary.com/chal-tec/image/upload/w_450,q_auto,f_auto/bbg/10028282/Gallery/10028282_yy_0001_front___Klarstein_Kingsize_Kamado-Grill_Keramikgrill_reedit.jpg'),
(9, 'Quercia', 'Pianta', '{\r\n        \"Sottocategoria\": \"Albero\",\r\n	\"NomeAlberoScientifico\" : \"Quercus\",\r\n	\"AltezzaMassima\" : \"10 Metri\",\r\n	\"ClimaFavorevole\": \"Qualsiasi\",\r\n	\"Irrigazione\" : \"Minima\",\r\n	\"EspansioneRadici\" : \"2 metro per lato\",\r\n	\"Sempreverde\" : \"No\",\r\n	\"Potatura\" : \"Ogni inverno\"\r\n	\r\n}', 130, 80, 40, 'https://www.verdevip.eu/2582-medium_default/quercia-artificiale-gigante-con-frutti-uvr-da-3-5-a-5-mt-venduta-solo-telefonicamente.jpg');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `prodotti`
--
ALTER TABLE `prodotti`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `prodotti`
--
ALTER TABLE `prodotti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
