-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 27, 2015 at 07:11 PM
-- Server version: 5.5.43-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `UberHackathon`
--

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE IF NOT EXISTS `partners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `identity_number` int(13) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `cell_number` int(15) DEFAULT NULL,
  `licence_number` int(20) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `surname`, `identity_number`, `email`, `cell_number`, `licence_number`, `address`) VALUES
(1, 'Notshokovu', 'Pretty', 0, 'prettyn67@gmail.com', 0, 0, 'room 93 Ikwezi flats, Langa, 7455'),
(2, 'Notshokovu', 'Pretty', 0, 'pretty@projectcodex.co', 0, 0, 'room 93 Ikwezi flats, Langa, 7455'),
(3, 'Notshokovu', 'Pretty', NULL, 'pretty@projectcodex.co', NULL, NULL, 'room 93 Ikwezi flats, Langa, 7455'),
(4, 'Mfunda', 'Tassko', NULL, 'thandokazimfunda@gmail.com', NULL, NULL, 'brothers for all, langa 7455'),
(5, 'Masiko', 'Linkie', NULL, 'linkie@projectcodex.co', NULL, NULL, 'Makana square, langa 7455');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
