-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2022 a las 17:23:57
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `digital-wallet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wallets`
--

CREATE TABLE `wallets` (
  `idWallet` int(11) NOT NULL,
  `isFavourite` tinyint(4) NOT NULL,
  `firstTransaction` date NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `address` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `wallets`
--

INSERT INTO `wallets` (`idWallet`, `isFavourite`, `firstTransaction`, `dateCreated`, `address`) VALUES
(1, 1, '2022-02-12', '2022-06-03 19:10:55', '0xe4cfaff112b5d2211318023a62352fedd8b22685'),
(2, 1, '2022-04-25', '2022-05-13 14:37:15', '0x4d010be4615d2766b2e248d0a563020117117af9'),
(3, 0, '2021-05-12', '2022-06-03 19:18:13', '0x4C79f8e47da0649c778cc52CB268cEc06fA9a776'),
(4, 0, '2022-02-01', '2022-06-03 19:05:52', '0x7f268357A8c2552623316e2562D90e642bB538E5'),
(5, 0, '2021-02-19', '2022-06-06 18:17:22', '0xf5C04A1ADe013816Ab2d6FBB6eD1CfD4DA5bE995'),
(6, 0, '2021-05-13', '2022-06-06 18:18:50', '0xEF2743855Ce5d1F0138bB16D98C469d1287C24f2'),
(7, 0, '2021-05-11', '2022-06-06 18:24:25', '0xF4343a5aFFB939a87C2357A113aFEAE87F90CfaC'),
(8, 0, '2021-06-07', '2022-06-06 18:25:04', '0x8C8D7C46219D9205f056f28fee5950aD564d7465');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`idWallet`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wallets`
--
ALTER TABLE `wallets`
  MODIFY `idWallet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
