-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2019 at 02:16 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `safe_t`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_admin`
--

CREATE TABLE `data_admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `citizen_id` char(16) NOT NULL,
  `captured_id` text NOT NULL,
  `privilege_id` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_admin`
--

INSERT INTO `data_admin` (`id`, `name`, `password`, `email`, `citizen_id`, `captured_id`, `privilege_id`, `created`, `updated`) VALUES
(1, 'aldiw01', 'eincfn9a9wT49VcIzWBN6ZnV2TdZV+yiXEWxd0hSv+o=', 'aldiw01@gmail.com', '', '', '0', '2019-06-05 14:22:12', '2019-07-12 20:51:42'),
(2, 'sadam', '+bzBfGTMIz93h8vtAUJlpD1GQSd1UIJXim+ljUYmdwQ=', 'sadam@gmail.com', '', '', '0', '2019-06-05 14:22:12', '2019-06-27 09:26:37'),
(6, 'aldi', '+bzBfGTMIz93h8vtAUJlpD1GQSd1UIJXim+ljUYmdwQ=', 'aldiw@gmail.com', '', '', '0', '2019-06-05 14:22:12', '2019-06-27 09:26:40'),
(7, 'admin', '+bzBfGTMIz93h8vtAUJlpD1GQSd1UIJXim+ljUYmdwQ=', 'admin@gmail.com', '', '', '2', '2019-06-05 14:22:12', '2019-06-27 09:26:43'),
(18, 'Aldi W', 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'aldiw01@gmail.coms', '2477669718933280', '2019-06-20T08-44-22.694Z_My Certificate_2.jpg', '1', '2019-06-20 08:44:22', '2019-06-27 09:26:49');

-- --------------------------------------------------------

--
-- Table structure for table `data_kendaraan`
--

CREATE TABLE `data_kendaraan` (
  `id` int(11) NOT NULL,
  `owner` varchar(100) NOT NULL,
  `vehicle_id` varchar(15) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `build_year` year(4) NOT NULL,
  `color` varchar(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_kendaraan`
--

INSERT INTO `data_kendaraan` (`id`, `owner`, `vehicle_id`, `brand`, `type`, `build_year`, `color`, `created`, `updated`) VALUES
(1, 'Aldi Wiranata', 'A1001LW', 'Honda', 'Sepeda Motor', 2010, 'Merah', '2019-06-05 16:18:06', '2019-06-08 13:31:28'),
(2, 'Terrell Bondie', 'A1002LW', 'Honda', 'Mobil', 2011, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(3, 'Shelby Goin', 'A1003LW', 'Honda', 'Sepeda Motor', 2012, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(4, 'Aldo Doroski', 'A1004LW', 'Honda', 'Mobil', 2013, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(5, 'Tony Barnette', 'A1005LW', 'Honda', 'Sepeda Motor', 2014, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(6, 'Carter Rackliff', 'A1006LW', 'Honda', 'Mobil', 2015, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(7, 'Leonel Ritthaler', 'A1007LW', 'Honda', 'Sepeda Motor', 2016, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(8, 'Marlin Witsman', 'A1008LW', 'Honda', 'Mobil', 2017, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(9, 'Ramiro Salom', 'A1009LW', 'Honda', 'Sepeda Motor', 2018, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(10, 'Millard Begin', 'A1010LW', 'Honda', 'Mobil', 2019, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(11, 'Werner Blasco', 'A1011LW', 'Honda', 'Sepeda Motor', 2019, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(12, 'Derek Janoski', 'A1012LW', 'Honda', 'Mobil', 2018, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(13, 'Garret Potz', 'A1013LW', 'Honda', 'Sepeda Motor', 2017, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(14, 'Edward Woerth', 'A1014LW', 'Honda', 'Mobil', 2016, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(15, 'Gonzalo Marletta', 'A1015LW', 'Honda', 'Sepeda Motor', 2015, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(16, 'Monroe Patrias', 'A1016LW', 'Honda', 'Mobil', 2014, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(17, 'Tyrell Fasone', 'A1017LW', 'Honda', 'Sepeda Motor', 2013, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(18, 'Wilfredo Hrabak', 'A1018LW', 'Honda', 'Mobil', 2012, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(19, 'Quinn Geddings', 'A1019LW', 'Honda', 'Sepeda Motor', 2011, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(20, 'Hector Haise', 'A1020LW', 'Honda', 'Mobil', 2010, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(21, 'Nigel Leiman', 'A1021LW', 'Toyota', 'Sepeda Motor', 2010, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(22, 'Bret Mangun', 'A1022LW', 'Toyota', 'Mobil', 2011, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(23, 'Faustino Gellatly', 'A1023LW', 'Toyota', 'Sepeda Motor', 2012, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(24, 'Gabriel Maksymowicz', 'A1024LW', 'Toyota', 'Mobil', 2013, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(25, 'Benedict Caldarera', 'A1025LW', 'Toyota', 'Sepeda Motor', 2014, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(26, 'Antione Boxleitner', 'A1026LW', 'Toyota', 'Mobil', 2015, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(27, 'Josef Turben', 'A1027LW', 'Toyota', 'Sepeda Motor', 2016, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(28, 'Dudley Luster', 'A1028LW', 'Toyota', 'Mobil', 2017, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(29, 'Erasmo Cowlin', 'A1029LW', 'Toyota', 'Sepeda Motor', 2018, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(30, 'Florentino Daner', 'A1030LW', 'Toyota', 'Mobil', 2019, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(31, 'Gregorio Ladeau', 'A1031LW', 'Toyota', 'Sepeda Motor', 2019, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(32, 'Wesley Lytes', 'A1032LW', 'Toyota', 'Mobil', 2018, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(33, 'Micah Coveny', 'A1033LW', 'Toyota', 'Sepeda Motor', 2017, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(34, 'Vernon Reik', 'A1034LW', 'Toyota', 'Mobil', 2016, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(35, 'Wes Ferraioli', 'A1035LW', 'Toyota', 'Sepeda Motor', 2015, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(36, 'Stacy Hyre', 'A1036LW', 'Toyota', 'Mobil', 2014, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(37, 'Dominick Ramnarain', 'A1037LW', 'Toyota', 'Sepeda Motor', 2013, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(38, 'Brenton Winge', 'A1038LW', 'Toyota', 'Mobil', 2012, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(39, 'Scotty Daskalos', 'A1039LW', 'Toyota', 'Sepeda Motor', 2011, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(40, 'Boyce Boczkowski', 'A1040LW', 'Toyota', 'Mobil', 2010, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(41, 'Tyree Gahagan', 'A1041LW', 'Suzuki', 'Sepeda Motor', 2010, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(42, 'Eloy Shahidi', 'A1042LW', 'Suzuki', 'Mobil', 2011, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(43, 'Levi Wollney', 'A1043LW', 'Suzuki', 'Sepeda Motor', 2012, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(44, 'Hung Francke', 'A1044LW', 'Suzuki', 'Mobil', 2013, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(45, 'Wiley Caples', 'A1045LW', 'Suzuki', 'Sepeda Motor', 2014, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(46, 'Jorge Goodwillie', 'A1046LW', 'Suzuki', 'Mobil', 2015, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(47, 'Curtis Edgecomb', 'A1047LW', 'Suzuki', 'Sepeda Motor', 2016, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(48, 'Domingo Milliard', 'A1048LW', 'Suzuki', 'Mobil', 2017, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(49, 'Perry Youngberg', 'A1049LW', 'Suzuki', 'Sepeda Motor', 2018, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(50, 'Marc Sternad', 'A1050LW', 'Suzuki', 'Mobil', 2019, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(51, 'Reggie Angelos', 'A1051LW', 'Suzuki', 'Sepeda Motor', 2019, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(52, 'Lemuel Sheets', 'A1052LW', 'Suzuki', 'Mobil', 2018, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(53, 'Seymour Bloemer', 'A1053LW', 'Suzuki', 'Sepeda Motor', 2017, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(54, 'Saul Beak', 'A1054LW', 'Suzuki', 'Mobil', 2016, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(55, 'Kevin Harbron', 'A1055LW', 'Suzuki', 'Sepeda Motor', 2015, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(56, 'Reid Boekhoff', 'A1056LW', 'Suzuki', 'Mobil', 2014, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(57, 'Claude Ll', 'A1057LW', 'Suzuki', 'Sepeda Motor', 2013, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(58, 'Phillip Smedstad', 'A1058LW', 'Suzuki', 'Mobil', 2012, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(59, 'Quinn Mongo', 'A1059LW', 'Suzuki', 'Sepeda Motor', 2011, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(60, 'Irving Rutman', 'A1060LW', 'Suzuki', 'Mobil', 2010, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(61, 'Buddy Sholl', 'A1061LW', 'BMW', 'Sepeda Motor', 2010, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(62, 'Dee Laneville', 'A1062LW', 'BMW', 'Mobil', 2011, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(63, 'Michal Arpero', 'A1063LW', 'BMW', 'Sepeda Motor', 2012, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(64, 'Valentine Santilli', 'A1064LW', 'BMW', 'Mobil', 2013, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(65, 'Abraham Kuechenmeister', 'A1065LW', 'BMW', 'Sepeda Motor', 2014, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(66, 'Eusebio Belli', 'A1066LW', 'BMW', 'Mobil', 2015, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(67, 'Jay Paskus', 'A1067LW', 'BMW', 'Sepeda Motor', 2016, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(68, 'Rufus Steinbrook', 'A1068LW', 'BMW', 'Mobil', 2017, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(69, 'Humberto Reyez', 'A1069LW', 'BMW', 'Sepeda Motor', 2018, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(70, 'Emmitt Rinear', 'A1070LW', 'BMW', 'Mobil', 2019, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(71, 'Titus Iadarola', 'A1071LW', 'BMW', 'Sepeda Motor', 2019, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(72, 'Tyron Brezina', 'A1072LW', 'BMW', 'Mobil', 2018, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(73, 'William Gourlay', 'A1073LW', 'BMW', 'Sepeda Motor', 2017, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(74, 'Gene Lutman', 'A1074LW', 'BMW', 'Mobil', 2016, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(75, 'Tuan Schlau', 'A1075LW', 'BMW', 'Sepeda Motor', 2015, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(76, 'Robt Seago', 'A1076LW', 'BMW', 'Mobil', 2014, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(77, 'Phil Codington', 'A1077LW', 'BMW', 'Sepeda Motor', 2013, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(78, 'Kareem Jakubiak', 'A1078LW', 'BMW', 'Mobil', 2012, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(79, 'Joaquin Vy', 'A1079LW', 'BMW', 'Sepeda Motor', 2011, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(80, 'Emanuel Bogusch', 'A1080LW', 'BMW', 'Mobil', 2010, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(81, 'Heath Buckels', 'A1081LW', 'AUDI', 'Sepeda Motor', 2010, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(82, 'Lucio Romanic', 'A1082LW', 'AUDI', 'Mobil', 2011, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(83, 'Reid Landaker', 'A1083LW', 'AUDI', 'Sepeda Motor', 2012, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(84, 'Jefferey Doughan', 'A1084LW', 'AUDI', 'Mobil', 2013, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(85, 'Virgilio Subramani', 'A1085LW', 'AUDI', 'Sepeda Motor', 2014, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(86, 'Rolland Schrott', 'A1086LW', 'AUDI', 'Mobil', 2015, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(87, 'Mariano Azelton', 'A1087LW', 'AUDI', 'Sepeda Motor', 2016, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(88, 'Carmelo Fountain', 'A1088LW', 'AUDI', 'Mobil', 2017, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(89, 'Richie Duston', 'A1089LW', 'AUDI', 'Sepeda Motor', 2018, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(90, 'Cordell Loupe', 'A1090LW', 'AUDI', 'Mobil', 2019, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(91, 'Mose Bantug', 'A1091LW', 'AUDI', 'Sepeda Motor', 2019, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(92, 'Floyd Schenning', 'A1092LW', 'AUDI', 'Mobil', 2018, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(93, 'Dominick Nguyent', 'A1093LW', 'AUDI', 'Sepeda Motor', 2017, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(94, 'Jerome Baytops', 'A1094LW', 'AUDI', 'Mobil', 2016, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(95, 'Davis Turdik', 'A1095LW', 'AUDI', 'Sepeda Motor', 2015, 'Biru', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(96, 'Louis Gnoza', 'A1096LW', 'AUDI', 'Mobil', 2014, 'Hijau', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(97, 'Gerardo Shneyder', 'A1097LW', 'AUDI', 'Sepeda Motor', 2013, 'Merah', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(98, 'Jeff Takenaka', 'A1098LW', 'AUDI', 'Mobil', 2012, 'Hitam', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(99, 'Graig Mcgorry', 'A1099LW', 'AUDI', 'Sepeda Motor', 2011, 'Putih', '2019-06-05 16:18:06', '2019-06-05 16:18:06'),
(100, 'Hong Bachmann', 'A1100LW', 'AUDI', 'Mobil', 2010, 'Silver', '2019-06-05 16:18:06', '2019-06-05 16:18:06');

-- --------------------------------------------------------

--
-- Table structure for table `data_pelanggaran`
--

CREATE TABLE `data_pelanggaran` (
  `id` int(11) NOT NULL,
  `reporter_id` int(11) NOT NULL,
  `violator_id` int(11) DEFAULT NULL,
  `vehicle_id` varchar(15) DEFAULT NULL,
  `violation_type` int(11) NOT NULL,
  `detail` text NOT NULL,
  `incident_date` date NOT NULL,
  `documentation` text NOT NULL,
  `status` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_pelanggaran`
--

INSERT INTO `data_pelanggaran` (`id`, `reporter_id`, `violator_id`, `vehicle_id`, `violation_type`, `detail`, `incident_date`, `documentation`, `status`, `created`, `updated`) VALUES
(1, 2, 47, '', 1, 'knacker\'s Millikan\'s rat bedtime\'s Parthia militating Eratosthenes\'s', '2019-01-01', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(2, 53, 83, '', 2, 'obliterates views Acropolis succinctness\'s swath demolition racecourse airborne Johannesburg\'s forfeiture\'s dandruff Raoul Cornwall parleys Scaramouch\'s ferns cabooses', '2019-01-02', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(3, 3, 36, '', 3, 'pressure\'s inestimable sunfishes waned Icelandic Elena\'s conspiracy rectums bayberry\'s trillionth fogeys diatoms Lister\'s buzzer homemakers condemnation Geiger finales meets', '2019-01-03', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(4, 19, 6, '', 4, 'landings molding\'s chipper eyrie disinterest hideout bricklaying prolongation\'s keeper slinks incapacitated Shreveport\'s reupholster', '2019-01-04', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(5, 28, 74, '', 5, 'authenticity\'s shills nonplused darkness\'s untroubled', '2019-01-05', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(6, 25, 51, '', 1, 'handyman\'s interlinked tippling hypnotics reflexively disapprovingly seascapes freebee scarabs', '2019-01-06', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(7, 40, 55, '', 2, 'enormously Tate\'s mister calls bushwhack declared', '2019-01-07', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(8, 96, 40, '', 3, 'fronting trumpeted', '2019-01-08', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(9, 92, 51, '', 4, 'applicability', '2019-01-09', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(10, 9, 91, '', 5, 'depreciating estuaries unexceptional finks Cheyennes mating kind glitzy rabbinical silentest Capistrano sheltered', '2019-01-10', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(11, 97, 72, '', 1, 'Rhee\'s disjoints tablespoon blanket\'s Maurice\'s peephole Twila\'s Garfield antiwar poking anal browser\'s', '2019-01-11', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(12, 59, 45, '', 2, 'Glenn Pepys baleful mistletoe\'s Macon causation coachman underemployed Hellenize birthmarks indicator\'s Anaheim charade\'s illiteracy wake settable', '2019-01-12', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(14, 35, 77, '', 4, 'eyeliner circumcising allowed plasticity Lombard\'s blindsiding', '2019-01-14', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(15, 37, 51, '', 5, 'portable reciprocal', '2019-01-15', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(16, 90, 16, '', 1, 'overtone collaboratives splurged', '2019-01-16', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(17, 23, 4, '', 2, 'summonsed togetherness\'s sleepy Audrey', '2019-01-17', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(18, 53, 38, '', 3, 'swindled oculist\'s wattled', '2019-01-18', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(19, 67, 41, '', 4, 'pompoms duping d\'Arezzo retained excesses capaciousness lowbrow\'s', '2019-01-19', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(20, 85, 9, '', 5, 'reclaim malformations artefact\'s fez\'s cattail\'s rhapsodize prosiest strumming guiltless Denver ethnic halfback chamber\'s Minotaur moseyed bestiaries disinherit', '2019-01-20', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(21, 76, 31, '', 1, 'acetylene drizzlier', '2019-01-21', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(22, 12, 21, '', 2, 'downcast overheated respectable sins smiling statuesque typhus beast escapist foam\'s comae spitballs muddied', '2019-01-22', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(23, 22, 20, '', 3, 'stalagmite gauntness Tamra dwells Pygmies cereals tarot unconnected quenching irrelevant manner copier\'s', '2019-01-23', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(24, 26, 52, '', 4, 'roundabouts boo saxophones', '2019-01-24', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(25, 37, 85, '', 5, 'cabaret\'s immensely mastication accurately profusion\'s reinventing inwards misapply prevalents Ubangi\'s injure whistling\'s Australopithecus\'s backstroked pillowcases fa Miles', '2019-01-25', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(26, 98, 8, '', 1, 'Issachar\'s lea hitch short Onsager Cerf flagella\'s Oaxaca\'s mutilates Krishna delimiter Golgi Appomattox\'s', '2019-01-26', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(27, 9, 21, '', 2, 'Yakutsk\'s bothering offer peaches rattletrap\'s fiber sequestration\'s Lisa\'s sentinels farewell Meany\'s besots tassel\'s buggiest Volvo\'s Elwood\'s Instamatic\'s radioisotope\'s waxier', '2019-01-27', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(28, 23, 96, '', 3, 'Kwanzaas streakier Sutton\'s Lena\'s matchstick\'s Virginia', '2019-01-28', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(29, 22, 65, '', 4, 'steeplejack\'s trouts Wilton\'s strokes Berlin classics tams wale', '2019-01-29', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(30, 2, 32, '', 5, 'enamelled coeds attenuates infestation bootstraps reassert Normandy lived Savoy tow grievance curio\'s souvenir bookcase\'s dispatcher\'s reincarnates infections strategies Fahrenheit', '2019-01-30', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(31, 39, 6, '', 1, 'Osvaldo\'s Friedman persecutor\'s helping shaping sumach\'s', '2019-01-31', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(32, 18, 12, '', 2, 'Kant\'s coma masculine itch pieces thumbing turbots unsoundest shellfish German flatcar pepper\'s Lindsay\'s infest flange', '2019-02-01', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(33, 38, 73, '', 3, 'pregnant throat bunch\'s', '2019-02-02', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(34, 24, 16, '', 4, '', '2019-02-03', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(35, 55, 69, '', 5, 'venally gardening synergy\'s Cliff wholesome bastardizing huddles sculptors rancidity exists observation\'s howdah frankest McClure\'s', '2019-02-04', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(36, 98, 55, '', 1, 'Bright\'s Mameluke', '2019-02-05', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(37, 72, 35, '', 2, 'Newfoundlands Bella\'s savorier unconscionably securing musicology\'s papal Isfahan\'s giantess\'s physicians sanctimonious Kimberley referenda trauma leverage discovering Turin\'s St\'s', '2019-02-06', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(38, 9, 63, '', 3, 'writhed', '2019-02-07', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(39, 23, 84, '', 4, 'Inez percolation\'s ghoul hijacker colleen wiggler dehumidified exhibition\'s phraseology jested Arcadia Wake accompaniment grassier bucktooth\'s chilblain\'s stomach\'s accomplice\'s', '2019-02-08', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(40, 22, 41, '', 5, '', '2019-02-09', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(41, 92, 28, '', 1, 'preservers inconsiderate Mormons unseemlier Oshkosh\'s transshipment\'s quicksilver', '2019-02-10', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(42, 21, 39, '', 2, 'forfeit carouser betides Araucanian\'s Kirghistan\'s vicinity Olajuwon', '2019-02-11', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(43, 55, 35, '', 3, '', '2019-02-12', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(44, 16, 42, '', 4, 'congesting anthropology\'s Delores\'s bounces Parthia boardroom fledglings expresses desiccating subplot\'s aery violence\'s moat\'s Nicole jocundity\'s underarms palavering preceding', '2019-02-13', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(45, 24, 75, '', 5, 'Roland prank flaws unaccountably Idaho Virginia\'s acid\'s inductee\'s famously July', '2019-02-14', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(46, 61, 72, '', 1, 'stinginess Broadways canneries yawing Occident\'s brogan rivetting skulk congaed Lucia moiety\'s', '2019-02-15', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(47, 12, 45, '', 2, 'deified rhododendrons equivocating unutterable gigolos kingfishers egoist spunk shimmering trickiness', '2019-02-16', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(48, 99, 82, '', 3, 'complimented Kingstown ganglions Valparaiso pig slam tour dialysis\'s sniffle shrub\'s impermeable however reminiscing stiffed resurrecting county\'s oratorio counterproductive', '2019-02-17', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(49, 28, 64, '', 4, 'Hz reconsidering chili\'s figured Enrique\'s breaded wile believes Quasimodo laryngitis\'s kirk militarily student\'s flusher crease\'s palindrome\'s haiku\'s tranquilized undulations weathercock', '2019-02-18', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(50, 99, 64, '', 5, 'monochrome Canaries genuineness\'s earphone\'s ruinous blurting somewhats gel Canopus\'s', '2019-02-19', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(51, 95, 55, '', 1, 'hussy\'s goalie Alnilam pulsating zilch mollycoddling', '2019-02-20', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(52, 91, 36, '', 2, 'moorings immunology dinginess\'s courtyards treatment Dakota formation\'s punks ascendant handstand\'s Annette\'s', '2019-02-21', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(53, 15, 7, '', 3, 'stopped Rush mastodon codicils champagne interbreeds spirituous ferrets Kayla gerund Ares athlete\'s', '2019-02-22', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(54, 45, 1, '', 4, 'raid prairie mitigated Wehrmacht inking coddle', '2019-02-23', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(55, 26, 22, '', 5, 'cochleas hone\'s cancerous seaweed humiliating bareness\'s Steven prove contents', '2019-02-24', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(56, 30, 89, '', 1, 'melanges equipment decomposition adulating loggerhead\'s hassling severity\'s gimcracks Rainier harmlessness\'s ungentlemanly soot\'s drowsy washroom tempest\'s vocabulary\'s Mayflower\'s destructive umbrella\'s freeloader', '2019-02-25', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(57, 68, 37, '', 2, 'fertilizers hardball impugning Simenon solstice sanctity\'s', '2019-02-26', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(58, 73, 9, '', 3, '', '2019-02-27', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(59, 10, 66, '', 4, 'committal\'s switchboards', '2019-02-28', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(60, 55, 20, '', 5, 'narked clomps cloudier Loewi\'s Hawaiian bathrobe\'s Davenport Heaviside\'s interments throats unsurpassed ovulated', '2019-03-01', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(61, 26, 5, '', 1, 'photocopies loam gallant consultancy undertaker hackle\'s surges marquetry goldener recommence Agrippina sweeten shoo sander Kuwait\'s bobbling huddling quirkiest dangle obstinacy\'s', '2019-03-02', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(62, 78, 94, '', 2, 'removal\'s continent\'s Occidents concerts Ava gripping dreamers wardening quantifier\'s life\'s eschatology crannied pallid chessboard\'s informed representations protesters retracing', '2019-03-03', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(63, 43, 98, '', 3, 'Gamow', '2019-03-04', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(64, 93, 27, '', 4, 'pitcher lordship impasse\'s puffball proletariat browniest nÃ©e morsel\'s warhorse\'s dined disseminate depicts bristle readjustment Tsitsihar\'s offsprings dumbfounded cajoling', '2019-03-05', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(65, 76, 27, '', 5, 'idea\'s vivified dromedary duct\'s aroma\'s exaggerates romance\'s chased traverse monarchy hometown neighbor pointer\'s gaped deserves savants', '2019-03-06', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(66, 28, 92, '', 1, 'overlay towheaded elbows younger restitution tizzies experimenter\'s pending misstepping planet\'s cession Rhineland gimmick soppier fireproofing Rep\'s', '2019-03-07', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(67, 15, 57, '', 2, 'minuets', '2019-03-08', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(68, 72, 85, '', 3, 'Glenlivet', '2019-03-09', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(69, 94, 77, '', 4, 'petering analyzes acquisition\'s vacated Brunswick streakier precognition\'s hospital tomb viscount\'s embellishing oxbow altar copilot\'s sarcastic Orlando singularly jibe wanner brick', '2019-03-10', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(70, 78, 59, '', 5, 'transcendentalist regaling', '2019-03-11', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(71, 29, 95, '', 1, 'upping', '2019-03-12', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(72, 34, 31, '', 2, 'brandished throbs brave endearingly pectin deathlier fungicide\'s flamboyance\'s resting even mascots imperil basis\'s preventative capacitor\'s', '2019-03-13', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(73, 82, 24, '', 3, 'twelfths Russia solstices monograph\'s poise\'s phonying Rodolfo\'s position steed midweeks gloving carrot\'s jurisdictional welter Tad\'s beaning Mao\'s Tyree\'s', '2019-03-14', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(74, 63, 74, '', 4, 'McClain', '2019-03-15', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(75, 99, 89, '', 5, 'Pele\'s pleasings flagellates petrels informant Marci\'s', '2019-03-16', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(76, 70, 71, '', 1, 'inky intricacy\'s branch Keewatin\'s polluter\'s proposes chewer\'s summons lecturing inched testis pottage padre bits sapling\'s Eurasians', '2019-03-17', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(77, 78, 79, '', 2, 'unwieldiest likelihoods neutralization\'s smelts burgeoned concert kerosene\'s jogging', '2019-03-18', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(78, 62, 46, '', 3, 'governors hinting futility\'s orifice\'s', '2019-03-19', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(79, 42, 35, '', 4, 'scathingly', '2019-03-20', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(80, 67, 42, '', 5, 'bookmaker tipple cachet Masters refashion ageings Pissaro unscrambles goon resuscitate', '2019-03-21', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(81, 18, 53, '', 1, 'definitively goats rhapsody Shawn', '2019-03-22', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(82, 5, 58, '', 2, 'confidantes timely advantages crankest sermonized pings Kalmyk crippling commodious Wilder\'s parable\'s Criollo Elizabeth\'s', '2019-03-23', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(83, 40, 57, '', 3, 'bootblack sleazes minim Idahoes Nepal\'s introspection\'s untruth\'s wickerwork interludes uneventfully Taiping\'s encumbers Marin\'s', '2019-03-24', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(84, 39, 78, '', 4, 'Selassie syllogistic lacuna roughs barnstorms disharmonious', '2019-03-25', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(85, 88, 41, '', 5, 'sonata highway\'s interpretations fawns claimant\'s cancels seminarian\'s Rich\'s torus\'s stocking indecent ricks mimeographing Everest\'s settlement Canadian', '2019-03-26', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(86, 39, 66, '', 1, 'Buchenwald\'s maximums brasses sputters loveliness waistline\'s Estelle saint batch aerialists', '2019-03-27', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(87, 12, 86, '', 2, 'swims calcium appraise frostbiting pedagogy\'s Romeo electorates flotsam\'s Gropius\'s Damocles specimens indents clashed filigree\'s votes historian\'s fad\'s chartreuse\'s momentum\'s Fulton', '2019-03-28', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(88, 84, 30, '', 3, 'sneered righted Kilroy convexity\'s outsold hosts meltdown mildly Sammie steps Babbage maxilla Reese\'s aptness Lydia Cochabamba\'s schlepped begging', '2019-03-29', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(89, 29, 37, '', 4, 'mustering equinox\'s Mauser\'s twine\'s find firewalled enlistee\'s horrible reflexive farmland sandal\'s mimicked Lipton populate conserved Paraclete\'s Zomba dodger\'s subjunctive Hay', '2019-03-30', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(90, 55, 43, '', 5, 'introverted lingerie Iqaluit Orange fidget pedestrian lunch Beria unsettled sunks drudgery Glenna\'s plumbing\'s checker', '2019-03-31', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(91, 23, 2, '', 1, 'ethics modernists derivation vantage despair kohlrabies abjurations', '2019-04-01', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(92, 34, 87, '', 2, 'finches toddler\'s disparates McConnell\'s linguist\'s Arcturus aggressor\'s dittoed sabre babble Nabisco\'s plywood Myrna\'s correspondent\'s pedestals', '2019-04-02', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(93, 81, 59, '', 3, 'core Seaborg\'s shoddily redeploys psychopath\'s broken Ricky floater framework Bahamians Aimee\'s generalities naval bishops Caiaphas\'s off blueprint speedway\'s bordellos', '2019-04-03', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(94, 7, 8, '', 4, 'curtsy impoverishment Hapsburg outshine earned acculturation nonagenarian\'s carets', '2019-04-04', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(95, 28, 13, '', 5, 'immunity\'s neck', '2019-04-05', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(96, 2, 84, '', 1, 'metallurgy\'s explosiveness Ed\'s cheetah hearses Basie hiked hosting jewelry\'s scrambled besieging Rhenish unbinds treadle\'s filler\'s', '2019-04-06', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(97, 52, 31, '', 2, 'nectar perplexing commotions Valerie sordidly equalized assimilated termagants laddered profanity Polaris\'s boxer Earhart\'s', '2019-04-07', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(98, 96, 39, '', 3, 'minded freshmen Sadat slathers neck chairlift Adler sailboarding gal\'s Gillette crankier alb\'s embossed Stamford\'s Sylvia childbearing', '2019-04-08', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(99, 88, 23, '', 4, 'childlike Hamhung necessitate garrotting Selznick\'s aeon\'s ginseng\'s budgerigar Milwaukee\'s', '2019-04-09', 'test.jpg', '1', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(100, 27, 81, '', 5, 'upstages industries shabby attuned mayor ejects tides surplus Iva\'s McClellan\'s', '2019-04-10', 'test.jpg', '0', '2019-06-13 08:28:13', '2019-06-13 08:28:13'),
(101, 102, 7, 'A1007LW', 5, 'Pengendara tidak membawa kendaraan', '2019-07-12', '2019-07-12T17-59-33.323Z_agxJbNk6_700w_0.jpg', '1', '2019-07-12 17:59:33', '2019-07-12 21:42:48');

-- --------------------------------------------------------

--
-- Table structure for table `data_point`
--

CREATE TABLE `data_point` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `point` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `data_user`
--

CREATE TABLE `data_user` (
  `id` int(11) NOT NULL,
  `password` text NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `citizen_id` char(16) NOT NULL,
  `captured_id` text NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` text,
  `status` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_user`
--

INSERT INTO `data_user` (`id`, `password`, `name`, `email`, `phone`, `citizen_id`, `captured_id`, `gender`, `address`, `status`, `created`, `updated`) VALUES
(1, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Earle Timper', 'concurdevelopindestructibly@speakeasysliberalizes.info', '989-063-6422', '2477669718933280', 'test.jpg', 'Female', '6269 Burton Blvd', '1', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(2, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Denis Ambert', 'opaquingeschews@commandeered.org', '379-673-7200', '3352920291607080', 'test.jpg', 'Female', '2838 146th St', '1', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(3, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Randolph Prowse', 'aristocratsphilosopher@soften.org', '220-860-8082', '7889362640959980', 'test.jpg', 'Female', '6870 250 Ct', '1', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(4, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Alonso Jesch', 'sereneddecidedly@firedvendedfÃªtes.edu', '469-855-6049', '5486752313521050', 'test.jpg', 'Female', '8830 Leewood Ln', '1', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(5, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Landon Satsky', 'nearliestsmockeddetoxification@eastwardprecursors.info', '287-337-9149', '4493470005815240', 'test.jpg', 'Male', '96 Lincoln Rd', '1', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(6, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Erich Reinertson', 'kickedacademys@Elainesententedwellings.gov', '655-643-1012', '3760183050862730', 'test.jpg', 'Female', '6649 Cannongate Trl', '1', '2019-06-08 15:55:47', '2019-06-20 04:20:07'),
(7, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Cecil Karriem', 'Novgorodsgrimnesss@CsClaudius.net', '106-009-6800', '7781346182936900', 'test.jpg', 'Female', '1082 118th Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(8, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Chester Payea', 'firmwares@typhoons.edu', '710-051-9387', '4878079417862180', 'test.jpg', 'Female', '5980 Maxwell Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(9, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Issac Wheeless', 'proppingcircuiting@retiringEdselmuskmelon.info', '695-152-7383', '8397083831518030', 'test.jpg', 'Female', '9407 Applegate Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(10, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Christopher Commiskey', 'suggestiveemploystorso@swapthatchings.com', '210-062-2571', '9240331681103000', 'test.jpg', 'Male', '8053 Neckar Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(11, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Derek Feingold', 'Durhamsusesremittances@swellheadedbedspictographs.me', '582-954-4643', '3032858632609970', 'test.jpg', 'Male', '10606 Ripley Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(12, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Reyes Woodley', 'gazeramassing@DÃ¼rers.edu', '452-374-8979', '3702248212748560', 'test.jpg', 'Male', '9944 Center Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(13, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Keith Efford', 'seabedMerriam@EiffelMaalox.info', '391-589-0613', '7738496024409610', 'test.jpg', 'Male', '595 Easton Trl', '1', '2019-06-08 15:55:47', '2019-06-20 04:20:54'),
(14, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Hilton Wiedow', 'acquaintedspoofed@dustpanmaddened.gov', '699-486-9234', '3150233563701600', 'test.jpg', 'Female', '4207 Valley Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(15, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Chang Morinaka', 'reprehendskeletaltrainers@MiasLegree.net', '138-268-0282', '6341109093357420', 'test.jpg', 'Male', '9477 Garfield Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(16, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Craig Dinobile', 'outcryRockfordstoles@factunstudiedcrookedest.com', '966-027-5862', '7531514626256250', 'test.jpg', 'Female', '9675 Secretariat Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(17, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Nolan Halberstam', 'rallyingsacristans@Greenyearning.org', '472-942-9359', '7485585902175010', 'test.jpg', 'Female', '8718 Weststate Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(18, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Bennett Thornbrough', 'threshersnoisinesss@Senecacontinentsportering.org', '821-865-3981', '3625092604456950', 'test.jpg', 'Male', '4572 Longview Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(19, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Randell Mcauley', 'edificationsinclusion@sauerkrautsSoaveoilskins.me', '701-139-2634', '5457254221332870', 'test.jpg', 'Male', '6001 Tipmont Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(20, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Bennett Newball', 'indictsMabelsriflemans@cherootscaprices.me', '753-097-2893', '9142309862806660', 'test.jpg', 'Male', '2088 Production Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(21, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Javier Yasinski', 'categorizedcounterbalanced@misconducts.org', '702-009-2567', '2973362459714750', 'test.jpg', 'Male', '3226 Chesterfield Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(22, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Refugio Hogue', 'redistributesumpsvaguest@costingssoviets.edu', '341-595-1032', '9302587381887900', 'test.jpg', 'Male', '6652 Beeson Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(23, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Ty Kirrane', 'daemonsgratefulness@testatessubjects.info', '184-028-5659', '6868690962403700', 'test.jpg', 'Female', '4352 Hartman Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(24, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Bret Cutone', 'Marjoryrecopying@deceptionsnannysmanful.com', '493-279-5019', '4716683322925790', 'test.jpg', 'Female', '6001 106th Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(25, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Jerome Kalaf', 'Poonasorangemarionettes@ambidextrouslymetro.net', '950-542-2827', '5193319158128090', 'test.jpg', 'Female', '4389 Greenridge Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(26, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Carmen Pimlott', 'fiefscloses@gorgeousbalkyimaginative.edu', '494-116-2729', '5187270206090990', 'test.jpg', 'Female', '10182 Chippewa Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(27, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Aldo Daddezio', 'trashsVaseline@Liviasperishing.net', '218-700-0029', '9294681006604340', 'test.jpg', 'Male', '10854 Pierce Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(28, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Dana Boquet', 'mixturemahoganysbillfolds@sulfuricseismologys.net', '113-660-8179', '5537724504334430', 'test.jpg', 'Male', '7180 Venice Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(29, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Anthony Rottschafer', 'discreeterPfizerrerouted@fermentedreappearance.gov', '373-203-0740', '9128758977301260', 'test.jpg', 'Female', '7115 500 St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(30, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Lesley Gutches', 'tutoredrueshowpiece@injuriousJoshs.gov', '408-006-4339', '3284233938735140', 'test.jpg', 'Male', '10936 Ralph Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(31, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Refugio Wisker', 'gadflyanalogspotentiality@nonrefundable.edu', '156-499-2572', '9455470482720130', 'test.jpg', 'Female', '8755 Norwood Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(32, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Gus Tonoyan', 'coralslengthen@deadlockadumbrating.me', '878-392-6601', '5070029509155760', 'test.jpg', 'Male', '2748 Royston Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(33, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Donny Derenzo', 'debuggingperfumes@doubtfully.net', '243-973-1432', '6659241311266270', 'test.jpg', 'Female', '9498 Lost Creek Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(34, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Ted Yaney', 'dungeonIdahoansloots@fervorsuppurations.net', '332-022-4564', '6308887265450660', 'test.jpg', 'Female', '8147 132nd Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(35, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Quinton Blango', 'respirationssuicides@haemoglobin.info', '119-774-5140', '7476822150372570', 'test.jpg', 'Male', '1920 Beth Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(36, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Basil Sherbondy', 'malariasprincelier@unkempttroubleshoots.info', '741-844-0509', '8146943302469950', 'test.jpg', 'Male', '10791 Lucie Ann Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(37, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Armando Tsukada', 'biddendirectories@Vivekanandatyrannies.edu', '940-715-6150', '5148187230194080', 'test.jpg', 'Male', '236 Harry Baals Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(38, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Arnulfo Doppelt', 'exterminatordeviously@chirped.gov', '230-464-0102', '9162154593691700', 'test.jpg', 'Female', '1526 Archer Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(39, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Beau Ogles', 'capablertrailSadies@embryologistrepelled.com', '609-812-1076', '8561659444106970', 'test.jpg', 'Male', '31 Diedre Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(40, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Harold Volzer', 'wiriestlayovers@lodgeachievable.me', '309-520-8235', '8011813803118800', 'test.jpg', 'Female', '9287 Tilden Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(41, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Devon Ullrich', 'admiralshypochondriacs@requisitioningwrote.org', '396-717-4788', '6715544099040170', 'test.jpg', 'Male', '2968 Burk Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(42, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Trenton Farman', 'Johannesburgsspores@romanticAndresgrouped.info', '579-560-7371', '4262965450493660', 'test.jpg', 'Female', '2829 Watkins Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(43, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Myles Paton', 'salespeoplefishnets@demoralizations.info', '437-977-3765', '2391094802927530', 'test.jpg', 'Female', '4064 Northlawn Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(44, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Garland Kodak', 'invulnerabilitys@jinglingGregorian.com', '526-578-8856', '3767774050569060', 'test.jpg', 'Female', '7870 Emerson Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(45, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Cecil Pallesen', 'pluralaccredited@Hewlettssciatic.gov', '347-162-9952', '6013055965912010', 'test.jpg', 'Male', '5239 Belfast Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(46, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Jesse Reynoldson', 'perjurenoonedPadilla@perfectionists.com', '493-546-5142', '5738670051751410', 'test.jpg', 'Female', '1591 Pathway Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(47, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Douglass Canter', 'neutersdibblespimpernels@portagedwedgedcircumventing.me', '308-099-2351', '2366257201502310', 'test.jpg', 'Male', '6766 Mountain Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(48, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Quintin Ovalles', 'redoublespremarital@taupesroamsscandalously.gov', '331-752-3125', '7212558167597610', 'test.jpg', 'Male', '1869 Drury Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(49, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Carroll Klewicki', 'limelightslowbrows@hardenersbodys.edu', '385-943-0579', '4407911355730330', 'test.jpg', 'Female', '6511 Edna Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(50, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Freeman Shafer', 'limitsMinnsderegulates@contraventionNunavuts.edu', '410-525-1420', '8103928434953650', 'test.jpg', 'Male', '7445 Adeway Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(51, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Cordell Malczynski', 'expressiveness@filchunawaremetacarpal.com', '818-105-9717', '2714940544553500', 'test.jpg', 'Male', '5716 Meredith Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(52, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Todd Korzekwa', 'hastyTecumsehgoingbackfields@millracessocietys.net', '288-407-7416', '4186880905294260', 'test.jpg', 'Male', '7423 Floyd Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(53, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Porter Mullens', 'homestretches@inquirysmutinying.gov', '774-171-7008', '6327664622781220', 'test.jpg', 'Male', '1989 89th Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(54, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Vaughn Mccaffety', 'Aishacansregaledredid@deathbeds.edu', '515-934-4030', '6184177980988800', 'test.jpg', 'Male', '1504 Millboro St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(55, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Dean Vijarro', 'Cowardssirs@gorinesspotshot.com', '927-678-3678', '7079913235654960', 'test.jpg', 'Male', '5677 Seaview Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(56, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Josiah Blatcher', 'tiningdisdainfullylecherous@componentsPyotr.org', '600-123-1005', '3909206739984230', 'test.jpg', 'Male', '3095 Springfield Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(57, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Clifford Ortyl', 'designatingtrilling@Heraclituss.net', '307-221-8620', '7733420105818520', 'test.jpg', 'Female', '235 103rd St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(58, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Filiberto Sirles', 'Ivoryssynchronization@connedcolliesfopping.me', '893-543-8305', '5557241711845560', 'test.jpg', 'Male', '9955 Joshua Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(59, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Miguel Spreier', 'Antonykoshers@scramblersmultinationals.gov', '288-673-8541', '5371388880254000', 'test.jpg', 'Female', '3571 Haan Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(60, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Eduardo Knowlin', 'canalsreoccupygrandee@Finleys.edu', '977-076-3064', '5248391874574570', 'test.jpg', 'Male', '7322 Twin Oak Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(61, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Tyrell Lemmers', 'eurekaZieglers@randomly.gov', '879-813-3795', '7090836639491630', 'test.jpg', 'Male', '3581 Palma Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(62, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Forrest Dahlem', 'quietingcaliph@descriptionsbimboes.gov', '275-682-6701', '7283399057501690', 'test.jpg', 'Male', '2526 Vick Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(63, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Morton Caughell', 'acronymhumorists@violas.me', '256-673-5331', '8982947666046210', 'test.jpg', 'Male', '10732 Tacoma Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(64, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Terence Kochheiser', 'frenziedlyimmuresAustrian@Schnauzermidweekscompassions.org', '888-463-7739', '8090983109089760', 'test.jpg', 'Male', '7343 147th Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(65, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'German Frisch', 'eyesoresconsolingcopra@helpersTerrence.me', '586-037-0537', '8313034382528870', 'test.jpg', 'Female', '5320 Hudson St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(66, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Winfred Seckel', 'Brahmagupta@palettes.edu', '562-700-9461', '6446666971543030', 'test.jpg', 'Female', '9411 Franklin Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(67, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Devon Whittier', 'Dachausarmorcapsized@matrimony.me', '455-640-7688', '1124806764780680', 'test.jpg', 'Male', '7883 Us Highway 30 St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(68, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Paris Titchenell', 'dumpedGruss@knowledgehairpiece.com', '743-184-2404', '6170672305596880', 'test.jpg', 'Female', '688 Nutmeg Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(69, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Van Mcgurk', 'untruthploughed@rainyDexters.org', '915-991-2910', '1708828816054930', 'test.jpg', 'Female', '10037 Elizabeth Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(70, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Truman Bovenkamp', 'transparencies@Tsimshianstriplicated.edu', '723-755-1432', '4444781752423660', 'test.jpg', 'Male', '7250 300 Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(71, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Santo Schmidl', 'globesMuller@homeowner.net', '898-046-4179', '4099228340677020', 'test.jpg', 'Female', '1875 Puerto Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(72, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Hugh Soenksen', 'Hanoversblancmanges@hijackerdrowse.org', '697-319-5784', '4937745299457940', 'test.jpg', 'Female', '9110 Harvey Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(73, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Cameron Elacqua', 'Mansfieldsthugwarrings@aquanautannouncing.com', '392-050-5012', '5555218418708590', 'test.jpg', 'Male', '2594 Northwood Blvd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(74, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Sebastian Olthof', 'interlacesshipwrights@remarriespatrolwomen.com', '157-524-2063', '5462825745118740', 'test.jpg', 'Female', '10087 Carol Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(75, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Arnulfo Juhlin', 'griddlecakesthirstily@alluredinculcations.com', '153-024-2442', '4586406093066250', 'test.jpg', 'Female', '8505 Windsor Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(76, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Grady Gangl', 'Michelobpublicist@emancipators.info', '162-828-2128', '9140776744861720', 'test.jpg', 'Male', '4371 Northentry Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(77, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Derick Mounkes', 'impressionist@rattletraps.net', '718-696-7343', '5780944347676290', 'test.jpg', 'Male', '7159 Trace 1 Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(78, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Shannon Keenen', 'Jaguarsunbuckled@dieselsdiodesselectively.gov', '666-338-1205', '2524643566531540', 'test.jpg', 'Female', '8038 675 Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(79, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Leigh Lanphier', 'Corfutimestrekked@primrosing.net', '759-602-2446', '1672350603166920', 'test.jpg', 'Male', '6183 Old Town St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(80, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Eugenio Poull', 'liaiseurges@posthumouspeonyslayaway.gov', '956-031-4870', '6085745676146390', 'test.jpg', 'Female', '2505 Cass Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(81, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Raymon Payette', 'breathiestAntarcticvibrancy@aforesaiddoltsturnkeys.gov', '483-379-4975', '6802130513162600', 'test.jpg', 'Female', '9226 Whitlock Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(82, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Olen Ohern', 'viandsDecatur@confiningTuamotu.edu', '523-855-0350', '4922989855645890', 'test.jpg', 'Female', '6798 Firth Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(83, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Bradly Faimon', 'Boltonsbowling@Alishaorchestral.gov', '206-006-7889', '7600238002276330', 'test.jpg', 'Male', '4985 Hartman Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(84, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Bernardo Yousef', 'motionedgrinderssolstices@shortages.net', '921-297-4087', '5638865819128910', 'test.jpg', 'Male', '4597 Palmer Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(85, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Napoleon Mbah', 'stealthLemuelmilitancys@redsgulchsphotos.net', '129-826-2740', '5237211786509910', 'test.jpg', 'Female', '3520 Trick Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(86, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Teddy Pyka', 'afflictionBellamy@batenudists.info', '619-859-2877', '2227179292977510', 'test.jpg', 'Male', '5887 Austin Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(87, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Damien Delapuente', 'glopsPompeiis@skinniesthelpmates.edu', '484-525-6227', '3725983220956570', 'test.jpg', 'Female', '10103 Russell Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(88, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Wilber Amparo', 'ZeligRadcliffes@stupiditysadhering.gov', '671-349-4302', '7246027736844090', 'test.jpg', 'Female', '30 Robinhood Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(89, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Deangelo Mades', 'ErebussIvan@majesticallyfurthercoddle.me', '474-908-3282', '4288674274934160', 'test.jpg', 'Female', '170 Meridian Trl', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(90, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Matthew Delveaux', 'furnacesdrinking@mortars.info', '556-645-4515', '1878293141043300', 'test.jpg', 'Female', '5206 Clear View Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(91, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Jesse Nassif', 'ligaturedmercerize@cosignedrejoinder.info', '897-260-2426', '5117474024094770', 'test.jpg', 'Female', '5075 Kingston St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(92, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Brendan Pravecek', 'riverfrontsdisarranges@peonsconfessional.org', '392-752-9161', '9103700024613470', 'test.jpg', 'Female', '4652 Westmoreland St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(93, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Kerry Noel', 'cragsGoldbergs@bolaLeninist.org', '493-731-3601', '2178987288548310', 'test.jpg', 'Female', '5647 Four Corners Ct', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(94, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Chas Herron', 'insuredspinets@unconstitutionalGaines.org', '144-271-3735', '2321227798936570', 'test.jpg', 'Male', '931 Executive St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(95, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Louie Greig', 'MillsxylophonistTonis@scrimshawsdeflecting.net', '733-971-9422', '7885452808657380', 'test.jpg', 'Female', '7697 Liberty Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(96, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Nick Zanatta', 'beggaringfixityDomesday@buttthieving.me', '571-969-0109', '4452739959452110', 'test.jpg', 'Male', '10640 145th Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(97, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Ned Holibaugh', 'Penasshebangssnuffer@prowlmajortritercrewmans.me', '646-388-0572', '8073701235298060', 'test.jpg', 'Female', '8705 Mountainside Ln', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(98, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Douglas Angerer', 'schoolmistressesRumanias@GruyeresAntigone.gov', '578-564-3954', '9076529208000560', 'test.jpg', 'Male', '6282 Marilyn Rd', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(99, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Hong Schwender', 'waistingproperty@Sabreenervatingmazourka.info', '169-995-8864', '8903604700891050', 'test.jpg', 'Female', '9693 Caprice Ave', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(100, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Jamie Donoway', 'practicalitys@nutmiscellanies.com', '345-782-5305', '3803795468433300', 'test.jpg', 'Female', '8224 Devon St', '0', '2019-06-08 15:55:47', '2019-06-20 03:31:40'),
(101, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Aldi Wiranata', 'aldi_safet@gmail.com', '089678000631', '3173061009970007', '2019-06-13T16-58-45.574Z_New Doc 2018-01-22_2.jpg', 'Male', 'Bandung No.1', '1', '2019-06-13 16:58:45', '2019-07-12 17:50:28'),
(102, 'k4K5meDLZZ1IUDtqeWKgCVNirqawFSqCvp0XrsTsi4U=', 'Aldi Wiranata', 'aldiw01@gmail.com', '089678000631', '3173061010100007', '2019-06-23T18-36-26.482Z_My Certificate_22.jpg', 'Male', 'Kp.Pangkalan RT.006/RW.010 No.68, Jakarta', '1', '2019-06-23 18:36:26', '2019-07-12 19:53:47');

-- --------------------------------------------------------

--
-- Table structure for table `reset_password`
--

CREATE TABLE `reset_password` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(32) NOT NULL,
  `expired` bigint(20) NOT NULL,
  `status` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reset_password`
--

INSERT INTO `reset_password` (`id`, `email`, `token`, `expired`, `status`, `created`, `updated`) VALUES
(1, '', '7b771eda933a97fe11e608d4a21bb15b', 2147483647, '0', '2019-07-12 16:49:25', '2019-07-12 16:49:25'),
(2, '', '565497f08e1c5b09507c25769940b1f4', 2147483647, '0', '2019-07-12 16:51:36', '2019-07-12 16:51:36'),
(3, 'aldiw01@gmail.com', '46f11aa98ee5454e0dc4bcac7a1b79a3', 2147483647, '0', '2019-07-12 16:55:42', '2019-07-12 16:55:42'),
(4, 'aldiw01@gmail.com', '3e8576e01d2e052856553afa2f875133', 2147483647, '0', '2019-07-12 17:03:00', '2019-07-12 17:03:00'),
(5, 'aldiw01@gmail.com', 'b7b4ef642956d0b9a1cf4093d463ef4e', 2147483647, '0', '2019-07-12 17:06:50', '2019-07-12 17:06:50'),
(6, 'aldiw01@gmail.com', '586d6067498ae112388a4457231dd2d6', 2147483647, '0', '2019-07-12 17:07:46', '2019-07-12 17:07:46'),
(7, 'aldiw01@gmail.com', '03236c13e231fd05ad112738d7861b65', 2147483647, '0', '2019-07-12 17:07:48', '2019-07-12 17:07:48'),
(8, 'aldiw01@gmail.com', '334a93787ff39b416491a98303b7334d', 2147483647, '0', '2019-07-12 17:08:13', '2019-07-12 17:08:13'),
(9, 'aldiw01@gmail.com', '82388f0e3324cbdb0b6cc68f4611b8be', 2147483647, '0', '2019-07-12 17:08:14', '2019-07-12 17:08:14'),
(10, 'aldiw01@gmail.com', '58e11df48387da9ed30f56be6b3a10b8', 2147483647, '0', '2019-07-12 17:08:33', '2019-07-12 17:08:33'),
(11, 'aldiw01@gmail.com', '5172adccc30c1de316a6c608d526f3ba', 2147483647, '1', '2019-07-12 17:10:15', '2019-07-12 19:53:47'),
(12, 'aldiw01@gmail.com', 'de79d8628aee606221f20c8af54532e0', 1562974423651, '1', '2019-07-12 20:33:43', '2019-07-12 20:42:14'),
(13, 'aldiw01@gmail.com', '60b2b2e5e32c7ea9cf40484263712644', 1562975288220, '3', '2019-07-12 20:48:08', '2019-07-12 20:49:13'),
(14, 'aldiw01@gmail.com', '5ffaafcce101fce9fb806714e456a003', 1562975291551, '3', '2019-07-12 20:48:11', '2019-07-12 20:51:43');

-- --------------------------------------------------------

--
-- Table structure for table `verification_token`
--

CREATE TABLE `verification_token` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(32) NOT NULL,
  `status` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `verification_token`
--

INSERT INTO `verification_token` (`id`, `email`, `token`, `status`, `created`, `updated`) VALUES
(1, 'aldiw01@gmail.com', 'f8c29aa0478ab711871070ba29ef51ba', '1', '2019-06-23 18:36:26', '2019-06-23 19:07:28');

-- --------------------------------------------------------

--
-- Table structure for table `violation_list`
--

CREATE TABLE `violation_list` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `violation_list`
--

INSERT INTO `violation_list` (`id`, `type`) VALUES
(1, 'Lalu lintas'),
(2, 'Identitas Pengendara'),
(3, 'Atribut Kendaraan'),
(4, 'Atribut Berkendara'),
(5, 'Ugal-ugalan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_admin`
--
ALTER TABLE `data_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_kendaraan`
--
ALTER TABLE `data_kendaraan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_pelanggaran`
--
ALTER TABLE `data_pelanggaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reporter_id` (`reporter_id`),
  ADD KEY `violator_id` (`violator_id`),
  ADD KEY `violation_type` (`violation_type`);

--
-- Indexes for table `data_point`
--
ALTER TABLE `data_point`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `data_user`
--
ALTER TABLE `data_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reset_password`
--
ALTER TABLE `reset_password`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `verification_token`
--
ALTER TABLE `verification_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `violation_list`
--
ALTER TABLE `violation_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_admin`
--
ALTER TABLE `data_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `data_kendaraan`
--
ALTER TABLE `data_kendaraan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `data_pelanggaran`
--
ALTER TABLE `data_pelanggaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `data_point`
--
ALTER TABLE `data_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `data_user`
--
ALTER TABLE `data_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `reset_password`
--
ALTER TABLE `reset_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `verification_token`
--
ALTER TABLE `verification_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `violation_list`
--
ALTER TABLE `violation_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data_pelanggaran`
--
ALTER TABLE `data_pelanggaran`
  ADD CONSTRAINT `data_pelanggaran_ibfk_1` FOREIGN KEY (`reporter_id`) REFERENCES `data_user` (`id`),
  ADD CONSTRAINT `data_pelanggaran_ibfk_2` FOREIGN KEY (`violator_id`) REFERENCES `data_kendaraan` (`id`),
  ADD CONSTRAINT `data_pelanggaran_ibfk_3` FOREIGN KEY (`violation_type`) REFERENCES `violation_list` (`id`);

--
-- Constraints for table `data_point`
--
ALTER TABLE `data_point`
  ADD CONSTRAINT `data_point_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `data_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
