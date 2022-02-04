-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 03, 2022 alle 13:29
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
-- Struttura della tabella `barbecue`
--

CREATE TABLE `barbecue` (
  `ID` int(11) NOT NULL,
  `Tipologia` varchar(50) NOT NULL,
  `Marca` varchar(256) NOT NULL,
  `Nome` varchar(256) NOT NULL,
  `Dimensioni` varchar(256) NOT NULL,
  `Potenza` varchar(20) NOT NULL,
  `Immagine` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `fiori`
--

CREATE TABLE `fiori` (
  `ID` int(11) NOT NULL,
  `Nome` varchar(256) DEFAULT NULL,
  `Tipologia` varchar(256) DEFAULT NULL,
  `Dimensioni` varchar(256) DEFAULT NULL,
  `AltezzaMassima` varchar(256) DEFAULT NULL,
  `Colore` varchar(256) DEFAULT NULL,
  `Espsizione` varchar(256) DEFAULT NULL,
  `PeriodoFioritura` varchar(256) DEFAULT NULL,
  `Profumo` varchar(2) DEFAULT NULL,
  `QuantitàAcqua` varchar(256) DEFAULT NULL,
  `ResistenzaGelo` varchar(256) DEFAULT NULL,
  `Costo` float DEFAULT NULL,
  `Immagine` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `mantoerboso`
--

CREATE TABLE `mantoerboso` (
  `ID` int(11) NOT NULL,
  `TipoManto` varchar(50) NOT NULL,
  `Terreno` varchar(50) NOT NULL,
  `ClimaIdeale` varchar(50) NOT NULL,
  `Colorazione` varchar(50) NOT NULL,
  `CostoMQuadro` double NOT NULL,
  `Immagine` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `pianta`
--

CREATE TABLE `pianta` (
  `ID` int(11) NOT NULL,
  `TipoPianta` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Dimensioni` varchar(50) NOT NULL,
  `AltezzaMassima` int(50) NOT NULL,
  `Crescita` varchar(50) NOT NULL,
  `Esposizione` varchar(50) NOT NULL,
  `Fioritura` varchar(50) NOT NULL,
  `PeriodoFioritura` varchar(50) NOT NULL,
  `DaFrutta` varchar(10) NOT NULL,
  `Profumo` varchar(50) NOT NULL,
  `QuantitaAcqua` varchar(50) NOT NULL,
  `ReistenzaGelo` int(11) NOT NULL,
  `Immagine` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `tipologiepiante`
--

CREATE TABLE `tipologiepiante` (
  `ID` int(11) NOT NULL,
  `TipoPianta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `barbecue`
--
ALTER TABLE `barbecue`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `mantoerboso`
--
ALTER TABLE `mantoerboso`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `pianta`
--
ALTER TABLE `pianta`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TipoPianta` (`TipoPianta`);

--
-- Indici per le tabelle `tipologiepiante`
--
ALTER TABLE `tipologiepiante`
  ADD PRIMARY KEY (`ID`,`TipoPianta`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `barbecue`
--
ALTER TABLE `barbecue`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `mantoerboso`
--
ALTER TABLE `mantoerboso`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `pianta`
--
ALTER TABLE `pianta`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tipologiepiante`
--
ALTER TABLE `tipologiepiante`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `pianta`
--
ALTER TABLE `pianta`
  ADD CONSTRAINT `RelazioneTipoPianta` FOREIGN KEY (`TipoPianta`) REFERENCES `tipologiepiante` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
