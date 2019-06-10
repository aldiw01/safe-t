-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2019 at 07:08 PM
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
  `status` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_admin`
--

INSERT INTO `data_admin` (`id`, `name`, `password`, `email`, `citizen_id`, `captured_id`, `status`, `created`, `updated`) VALUES
(1, 'aldiw01', '5ca84f76248879aa583755ab2041ad16', 'aldiw01@gmail.com', '', '', '', '2019-06-05 14:22:12', '2019-06-05 14:22:13'),
(2, 'sadam', '017a21e8c346798e4ea882b6b06d36e6', 'sadam@gmail.com', '', '', '', '2019-06-05 14:22:12', '2019-06-05 14:22:13'),
(6, 'aldi', 'a4e5d0b683250b56b896f308d8524139', 'aldiw@gmail.com', '', '', '', '2019-06-05 14:22:12', '2019-06-05 14:22:13'),
(7, 'admin', '15188e245acc1ccd907f955aaadce503', 'admin@gmail.com', '', '', '', '2019-06-05 14:22:12', '2019-06-05 14:22:13'),
(8, 'aldiwira', '5ca84f76248879aa583755ab2041ad16', 'aldiw@gmail.com', '', '', '', '2019-06-10 09:21:50', '2019-06-10 09:21:50'),
(9, 'aldiwira', '5ca84f76248879aa583755ab2041ad16', 'aldiw@gmail.com', '', '', '', '2019-06-10 09:22:56', '2019-06-10 09:22:56'),
(10, 'asdfgh', '5ccfe0867c1837d22385b22f669b0398', 'admins@gmail.com', '', '', '', '2019-06-10 09:24:40', '2019-06-10 09:24:40'),
(11, 'zxcvbnm', '5ccfe0867c1837d22385b22f669b0398', 'aldiw01@gmail.coms', '', '', '', '2019-06-10 09:30:22', '2019-06-10 09:30:22'),
(12, 'zxcvbnm', '5ccfe0867c1837d22385b22f669b0398', 'aldiw01s@gmail.com', '', '', '', '2019-06-10 09:36:26', '2019-06-10 09:36:26'),
(13, 'asdfgh', '5ccfe0867c1837d22385b22f669b0398', 'aldiw01@gmail.coms', '', '', '', '2019-06-10 09:39:33', '2019-06-10 09:39:33'),
(14, 'asdfgh', '5ccfe0867c1837d22385b22f669b0398', 'aldiw0s1@gmail.com', '', '', '', '2019-06-10 11:32:48', '2019-06-10 11:32:48'),
(15, 'Aldi Wiranata', '5ccfe0867c1837d22385b22f669b0398', 'aldiw01@gmail.coma', '2477669718933281', '2019-06-10T12-44-02.326Z_My Certificate_22.jpg', '', '2019-06-10 12:44:02', '2019-06-10 12:44:02'),
(16, 'safe-t', '8c9a53701916d1e3e6bd82faebcead0c', 'aldiw@gmail.com', '2477669718933282', '2019-06-10T14-58-28.236Z_Akta_Kelahiran.jpg', '', '2019-06-10 14:58:28', '2019-06-10 14:58:28'),
(17, 'safe-t', '8c9a53701916d1e3e6bd82faebcead0c', 'aldiw01@gmail.coma', '2477669718933280', '2019-06-10T16-58-27.808Z_Akta_Kelahiran.jpg', '', '2019-06-10 16:58:28', '2019-06-10 16:58:28');

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
(1, 2, 47, '', 1, 'knacker\'s Millikan\'s rat bedtime\'s Parthia militating Eratosthenes\'s', '2019-01-01', 'http://snottedmurks.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(2, 53, 83, '', 2, 'obliterates views Acropolis succinctness\'s swath demolition racecourse airborne Johannesburg\'s forfeiture\'s dandruff Raoul Cornwall parleys Scaramouch\'s ferns cabooses', '2019-01-02', 'http://rockersbruins.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(3, 3, 36, '', 3, 'pressure\'s inestimable sunfishes waned Icelandic Elena\'s conspiracy rectums bayberry\'s trillionth fogeys diatoms Lister\'s buzzer homemakers condemnation Geiger finales meets', '2019-01-03', 'http://stuffinesss.net', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(4, 19, 6, '', 4, 'landings molding\'s chipper eyrie disinterest hideout bricklaying prolongation\'s keeper slinks incapacitated Shreveport\'s reupholster', '2019-01-04', 'http://hobnailsimpishnesss.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(5, 28, 74, '', 5, 'authenticity\'s shills nonplused darkness\'s untroubled', '2019-01-05', 'http://Ebeneezersdiscriminants.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(6, 25, 51, '', 1, 'handyman\'s interlinked tippling hypnotics reflexively disapprovingly seascapes freebee scarabs', '2019-01-06', 'http://discontinuation.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(7, 40, 55, '', 2, 'enormously Tate\'s mister calls bushwhack declared', '2019-01-07', 'http://windfallsuncork.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(8, 96, 40, '', 3, 'fronting trumpeted', '2019-01-08', 'http://apostate.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(9, 92, 51, '', 4, 'applicability', '2019-01-09', 'http://Niccolos.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(10, 9, 91, '', 5, 'depreciating estuaries unexceptional finks Cheyennes mating kind glitzy rabbinical silentest Capistrano sheltered', '2019-01-10', 'http://commandsPablumravels.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(11, 97, 72, '', 1, 'Rhee\'s disjoints tablespoon blanket\'s Maurice\'s peephole Twila\'s Garfield antiwar poking anal browser\'s', '2019-01-11', 'http://hardballnilsupstarted.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(12, 59, 45, '', 2, 'Glenn Pepys baleful mistletoe\'s Macon causation coachman underemployed Hellenize birthmarks indicator\'s Anaheim charade\'s illiteracy wake settable', '2019-01-12', 'http://succumbs.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(13, 63, 90, '', 3, 'converges simplified equipped grossness\'s Leicester\'s gorillas tripos\'s enjoy compulsories Mongols miniature unclear roomful\'s sociopath\'s Ned propagandizing mated Sybil\'s', '2019-01-13', 'http://poredindemnities.info', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(14, 35, 77, '', 4, 'eyeliner circumcising allowed plasticity Lombard\'s blindsiding', '2019-01-14', 'http://glidingNobelssurcharges.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(15, 37, 51, '', 5, 'portable reciprocal', '2019-01-15', 'http://quivercosmonautbagpipes.gov', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(16, 90, 16, '', 1, 'overtone collaboratives splurged', '2019-01-16', 'http://reshuffling.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(17, 23, 4, '', 2, 'summonsed togetherness\'s sleepy Audrey', '2019-01-17', 'http://specializeentomology.edu', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(18, 53, 38, '', 3, 'swindled oculist\'s wattled', '2019-01-18', 'http://ridgesseredlacunascaparisons.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(19, 67, 41, '', 4, 'pompoms duping d\'Arezzo retained excesses capaciousness lowbrow\'s', '2019-01-19', 'http://housebreaking.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(20, 85, 9, '', 5, 'reclaim malformations artefact\'s fez\'s cattail\'s rhapsodize prosiest strumming guiltless Denver ethnic halfback chamber\'s Minotaur moseyed bestiaries disinherit', '2019-01-20', 'http://instinctivetroublemakers.gov', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(21, 76, 31, '', 1, 'acetylene drizzlier', '2019-01-21', 'http://Templarsspigotsappals.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(22, 12, 21, '', 2, 'downcast overheated respectable sins smiling statuesque typhus beast escapist foam\'s comae spitballs muddied', '2019-01-22', 'http://switchboards.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(23, 22, 20, '', 3, 'stalagmite gauntness Tamra dwells Pygmies cereals tarot unconnected quenching irrelevant manner copier\'s', '2019-01-23', 'http://monikersThames.edu', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(24, 26, 52, '', 4, 'roundabouts boo saxophones', '2019-01-24', 'http://bauxitespoorslocalling.gov', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(25, 37, 85, '', 5, 'cabaret\'s immensely mastication accurately profusion\'s reinventing inwards misapply prevalents Ubangi\'s injure whistling\'s Australopithecus\'s backstroked pillowcases fa Miles', '2019-01-25', 'http://redevelopsoufflÃ©s.net', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(26, 98, 8, '', 1, 'Issachar\'s lea hitch short Onsager Cerf flagella\'s Oaxaca\'s mutilates Krishna delimiter Golgi Appomattox\'s', '2019-01-26', 'http://BehansoverdoingCarlin.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(27, 9, 21, '', 2, 'Yakutsk\'s bothering offer peaches rattletrap\'s fiber sequestration\'s Lisa\'s sentinels farewell Meany\'s besots tassel\'s buggiest Volvo\'s Elwood\'s Instamatic\'s radioisotope\'s waxier', '2019-01-27', 'http://shrimps.gov', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(28, 23, 96, '', 3, 'Kwanzaas streakier Sutton\'s Lena\'s matchstick\'s Virginia', '2019-01-28', 'http://FermatsDuisburgs.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(29, 22, 65, '', 4, 'steeplejack\'s trouts Wilton\'s strokes Berlin classics tams wale', '2019-01-29', 'http://Russellbeltways.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(30, 2, 32, '', 5, 'enamelled coeds attenuates infestation bootstraps reassert Normandy lived Savoy tow grievance curio\'s souvenir bookcase\'s dispatcher\'s reincarnates infections strategies Fahrenheit', '2019-01-30', 'http://Moreguessers.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(31, 39, 6, '', 1, 'Osvaldo\'s Friedman persecutor\'s helping shaping sumach\'s', '2019-01-31', 'http://chrysanthemumswittily.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(32, 18, 12, '', 2, 'Kant\'s coma masculine itch pieces thumbing turbots unsoundest shellfish German flatcar pepper\'s Lindsay\'s infest flange', '2019-02-01', 'http://agilelysteppesgorilla.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(33, 38, 73, '', 3, 'pregnant throat bunch\'s', '2019-02-02', 'http://Siamesebootstraps.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(34, 24, 16, '', 4, '', '2019-02-03', 'http://tabernaclesexcretion.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(35, 55, 69, '', 5, 'venally gardening synergy\'s Cliff wholesome bastardizing huddles sculptors rancidity exists observation\'s howdah frankest McClure\'s', '2019-02-04', 'http://Cyrilswhelpinggrove.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(36, 98, 55, '', 1, 'Bright\'s Mameluke', '2019-02-05', 'http://yukkedbloodiestHungary.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(37, 72, 35, '', 2, 'Newfoundlands Bella\'s savorier unconscionably securing musicology\'s papal Isfahan\'s giantess\'s physicians sanctimonious Kimberley referenda trauma leverage discovering Turin\'s St\'s', '2019-02-06', 'http://plantainsmagisterially.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(38, 9, 63, '', 3, 'writhed', '2019-02-07', 'http://refulgentroomiest.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(39, 23, 84, '', 4, 'Inez percolation\'s ghoul hijacker colleen wiggler dehumidified exhibition\'s phraseology jested Arcadia Wake accompaniment grassier bucktooth\'s chilblain\'s stomach\'s accomplice\'s', '2019-02-08', 'http://Crookesscounterclaimed.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(40, 22, 41, '', 5, '', '2019-02-09', 'http://leverages.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(41, 92, 28, '', 1, 'preservers inconsiderate Mormons unseemlier Oshkosh\'s transshipment\'s quicksilver', '2019-02-10', 'http://constrictorsismjungle.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(42, 21, 39, '', 2, 'forfeit carouser betides Araucanian\'s Kirghistan\'s vicinity Olajuwon', '2019-02-11', 'http://Chesters.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(43, 55, 35, '', 3, '', '2019-02-12', 'http://saucers.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(44, 16, 42, '', 4, 'congesting anthropology\'s Delores\'s bounces Parthia boardroom fledglings expresses desiccating subplot\'s aery violence\'s moat\'s Nicole jocundity\'s underarms palavering preceding', '2019-02-13', 'http://inspectingtownsmen.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(45, 24, 75, '', 5, 'Roland prank flaws unaccountably Idaho Virginia\'s acid\'s inductee\'s famously July', '2019-02-14', 'http://trundledtassel.info', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(46, 61, 72, '', 1, 'stinginess Broadways canneries yawing Occident\'s brogan rivetting skulk congaed Lucia moiety\'s', '2019-02-15', 'http://radioisotopesfingerprinted.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(47, 12, 45, '', 2, 'deified rhododendrons equivocating unutterable gigolos kingfishers egoist spunk shimmering trickiness', '2019-02-16', 'http://McCartneyssettinggunners.info', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(48, 99, 82, '', 3, 'complimented Kingstown ganglions Valparaiso pig slam tour dialysis\'s sniffle shrub\'s impermeable however reminiscing stiffed resurrecting county\'s oratorio counterproductive', '2019-02-17', 'http://madameThompsons.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(49, 28, 64, '', 4, 'Hz reconsidering chili\'s figured Enrique\'s breaded wile believes Quasimodo laryngitis\'s kirk militarily student\'s flusher crease\'s palindrome\'s haiku\'s tranquilized undulations weathercock', '2019-02-18', 'http://preemptschlemielsfossilized.edu', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(50, 99, 64, '', 5, 'monochrome Canaries genuineness\'s earphone\'s ruinous blurting somewhats gel Canopus\'s', '2019-02-19', 'http://monstersmutinously.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(51, 95, 55, '', 1, 'hussy\'s goalie Alnilam pulsating zilch mollycoddling', '2019-02-20', 'http://seaweedengravingsorderings.info', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(52, 91, 36, '', 2, 'moorings immunology dinginess\'s courtyards treatment Dakota formation\'s punks ascendant handstand\'s Annette\'s', '2019-02-21', 'http://compulsively.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(53, 15, 7, '', 3, 'stopped Rush mastodon codicils champagne interbreeds spirituous ferrets Kayla gerund Ares athlete\'s', '2019-02-22', 'http://unceasing.edu', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(54, 45, 1, '', 4, 'raid prairie mitigated Wehrmacht inking coddle', '2019-02-23', 'http://monograms.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(55, 26, 22, '', 5, 'cochleas hone\'s cancerous seaweed humiliating bareness\'s Steven prove contents', '2019-02-24', 'http://screwballsthrived.gov', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(56, 30, 89, '', 1, 'melanges equipment decomposition adulating loggerhead\'s hassling severity\'s gimcracks Rainier harmlessness\'s ungentlemanly soot\'s drowsy washroom tempest\'s vocabulary\'s Mayflower\'s destructive umbrella\'s freeloader', '2019-02-25', 'http://Kaabahelpingsautonomys.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(57, 68, 37, '', 2, 'fertilizers hardball impugning Simenon solstice sanctity\'s', '2019-02-26', 'http://unicornaeons.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(58, 73, 9, '', 3, '', '2019-02-27', 'http://nepotismfreeloaderLenoirs.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(59, 10, 66, '', 4, 'committal\'s switchboards', '2019-02-28', 'http://labjinnnest.net', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(60, 55, 20, '', 5, 'narked clomps cloudier Loewi\'s Hawaiian bathrobe\'s Davenport Heaviside\'s interments throats unsurpassed ovulated', '2019-03-01', 'http://Menelik.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(61, 26, 5, '', 1, 'photocopies loam gallant consultancy undertaker hackle\'s surges marquetry goldener recommence Agrippina sweeten shoo sander Kuwait\'s bobbling huddling quirkiest dangle obstinacy\'s', '2019-03-02', 'http://EbertsSinkiang.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(62, 78, 94, '', 2, 'removal\'s continent\'s Occidents concerts Ava gripping dreamers wardening quantifier\'s life\'s eschatology crannied pallid chessboard\'s informed representations protesters retracing', '2019-03-03', 'http://PrensasCotopaxi.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(63, 43, 98, '', 3, 'Gamow', '2019-03-04', 'http://villagerspinked.edu', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(64, 93, 27, '', 4, 'pitcher lordship impasse\'s puffball proletariat browniest nÃ©e morsel\'s warhorse\'s dined disseminate depicts bristle readjustment Tsitsihar\'s offsprings dumbfounded cajoling', '2019-03-05', 'http://slopeschoresKiels.info', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(65, 76, 27, '', 5, 'idea\'s vivified dromedary duct\'s aroma\'s exaggerates romance\'s chased traverse monarchy hometown neighbor pointer\'s gaped deserves savants', '2019-03-06', 'http://defected.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(66, 28, 92, '', 1, 'overlay towheaded elbows younger restitution tizzies experimenter\'s pending misstepping planet\'s cession Rhineland gimmick soppier fireproofing Rep\'s', '2019-03-07', 'http://mosquestherapiesdogfishes.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(67, 15, 57, '', 2, 'minuets', '2019-03-08', 'http://wearisomeprostrations.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(68, 72, 85, '', 3, 'Glenlivet', '2019-03-09', 'http://fuelsAmericanizing.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(69, 94, 77, '', 4, 'petering analyzes acquisition\'s vacated Brunswick streakier precognition\'s hospital tomb viscount\'s embellishing oxbow altar copilot\'s sarcastic Orlando singularly jibe wanner brick', '2019-03-10', 'http://diplomatic.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(70, 78, 59, '', 5, 'transcendentalist regaling', '2019-03-11', 'http://thymusesprosy.info', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(71, 29, 95, '', 1, 'upping', '2019-03-12', 'http://diocesandemagogue.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(72, 34, 31, '', 2, 'brandished throbs brave endearingly pectin deathlier fungicide\'s flamboyance\'s resting even mascots imperil basis\'s preventative capacitor\'s', '2019-03-13', 'http://noninterventions.info', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(73, 82, 24, '', 3, 'twelfths Russia solstices monograph\'s poise\'s phonying Rodolfo\'s position steed midweeks gloving carrot\'s jurisdictional welter Tad\'s beaning Mao\'s Tyree\'s', '2019-03-14', 'http://meringuegirlfriends.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(74, 63, 74, '', 4, 'McClain', '2019-03-15', 'http://cosmologysspoonerisms.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(75, 99, 89, '', 5, 'Pele\'s pleasings flagellates petrels informant Marci\'s', '2019-03-16', 'http://birdingdestiny.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(76, 70, 71, '', 1, 'inky intricacy\'s branch Keewatin\'s polluter\'s proposes chewer\'s summons lecturing inched testis pottage padre bits sapling\'s Eurasians', '2019-03-17', 'http://Mororeportedstagflations.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(77, 78, 79, '', 2, 'unwieldiest likelihoods neutralization\'s smelts burgeoned concert kerosene\'s jogging', '2019-03-18', 'http://confess.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(78, 62, 46, '', 3, 'governors hinting futility\'s orifice\'s', '2019-03-19', 'http://ricedartless.info', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(79, 42, 35, '', 4, 'scathingly', '2019-03-20', 'http://Jeffreysastrology.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(80, 67, 42, '', 5, 'bookmaker tipple cachet Masters refashion ageings Pissaro unscrambles goon resuscitate', '2019-03-21', 'http://fightsroomfulsreupholstered.info', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(81, 18, 53, '', 1, 'definitively goats rhapsody Shawn', '2019-03-22', 'http://diminishedtotalitarianism.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(82, 5, 58, '', 2, 'confidantes timely advantages crankest sermonized pings Kalmyk crippling commodious Wilder\'s parable\'s Criollo Elizabeth\'s', '2019-03-23', 'http://illustrators.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(83, 40, 57, '', 3, 'bootblack sleazes minim Idahoes Nepal\'s introspection\'s untruth\'s wickerwork interludes uneventfully Taiping\'s encumbers Marin\'s', '2019-03-24', 'http://airliftlapwings.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(84, 39, 78, '', 4, 'Selassie syllogistic lacuna roughs barnstorms disharmonious', '2019-03-25', 'http://Occidentspicky.net', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(85, 88, 41, '', 5, 'sonata highway\'s interpretations fawns claimant\'s cancels seminarian\'s Rich\'s torus\'s stocking indecent ricks mimeographing Everest\'s settlement Canadian', '2019-03-26', 'http://inquirerstrophys.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(86, 39, 66, '', 1, 'Buchenwald\'s maximums brasses sputters loveliness waistline\'s Estelle saint batch aerialists', '2019-03-27', 'http://declivitycredenzas.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(87, 12, 86, '', 2, 'swims calcium appraise frostbiting pedagogy\'s Romeo electorates flotsam\'s Gropius\'s Damocles specimens indents clashed filigree\'s votes historian\'s fad\'s chartreuse\'s momentum\'s Fulton', '2019-03-28', 'http://pessimistsTessa.org', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(88, 84, 30, '', 3, 'sneered righted Kilroy convexity\'s outsold hosts meltdown mildly Sammie steps Babbage maxilla Reese\'s aptness Lydia Cochabamba\'s schlepped begging', '2019-03-29', 'http://templatesDelawaresfertilization.me', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(89, 29, 37, '', 4, 'mustering equinox\'s Mauser\'s twine\'s find firewalled enlistee\'s horrible reflexive farmland sandal\'s mimicked Lipton populate conserved Paraclete\'s Zomba dodger\'s subjunctive Hay', '2019-03-30', 'http://unscrambled.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(90, 55, 43, '', 5, 'introverted lingerie Iqaluit Orange fidget pedestrian lunch Beria unsettled sunks drudgery Glenna\'s plumbing\'s checker', '2019-03-31', 'http://consistpitchMulligan.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(91, 23, 2, '', 1, 'ethics modernists derivation vantage despair kohlrabies abjurations', '2019-04-01', 'http://grizzled.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(92, 34, 87, '', 2, 'finches toddler\'s disparates McConnell\'s linguist\'s Arcturus aggressor\'s dittoed sabre babble Nabisco\'s plywood Myrna\'s correspondent\'s pedestals', '2019-04-02', 'http://squiddedslapsmasochisms.info', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(93, 81, 59, '', 3, 'core Seaborg\'s shoddily redeploys psychopath\'s broken Ricky floater framework Bahamians Aimee\'s generalities naval bishops Caiaphas\'s off blueprint speedway\'s bordellos', '2019-04-03', 'http://glazierauthoritarian.me', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(94, 7, 8, '', 4, 'curtsy impoverishment Hapsburg outshine earned acculturation nonagenarian\'s carets', '2019-04-04', 'http://companySolzhenitsyns.org', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(95, 28, 13, '', 5, 'immunity\'s neck', '2019-04-05', 'http://astigmatismstraumatizing.edu', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(96, 2, 84, '', 1, 'metallurgy\'s explosiveness Ed\'s cheetah hearses Basie hiked hosting jewelry\'s scrambled besieging Rhenish unbinds treadle\'s filler\'s', '2019-04-06', 'http://Mandarin.gov', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(97, 52, 31, '', 2, 'nectar perplexing commotions Valerie sordidly equalized assimilated termagants laddered profanity Polaris\'s boxer Earhart\'s', '2019-04-07', 'http://chummiestSandras.gov', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(98, 96, 39, '', 3, 'minded freshmen Sadat slathers neck chairlift Adler sailboarding gal\'s Gillette crankier alb\'s embossed Stamford\'s Sylvia childbearing', '2019-04-08', 'http://Moisesheadfirst.com', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(99, 88, 23, '', 4, 'childlike Hamhung necessitate garrotting Selznick\'s aeon\'s ginseng\'s budgerigar Milwaukee\'s', '2019-04-09', 'http://Kalihighboys.com', '1', '2019-06-08 15:47:30', '2019-06-08 15:47:30'),
(100, 27, 81, '', 5, 'upstages industries shabby attuned mayor ejects tides surplus Iva\'s McClellan\'s', '2019-04-10', 'http://ralliesHÃ©loisesconundrums.edu', '0', '2019-06-08 15:47:30', '2019-06-08 15:47:30');

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
  `gender` varchar(10) DEFAULT NULL,
  `address` text,
  `status` char(1) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_user`
--

INSERT INTO `data_user` (`id`, `password`, `name`, `email`, `phone`, `citizen_id`, `gender`, `address`, `status`, `created`, `updated`) VALUES
(1, 'ead7f26254db2f1c', 'Earle Timper', 'concurdevelopindestructibly@speakeasysliberalizes.info', '989-063-6422', '2477669718933280', 'Female', '6269 Burton Blvd', '1', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(2, '05e8b9ea8093413e', 'Denis Ambert', 'opaquingeschews@commandeered.org', '379-673-7200', '3352920291607080', 'Female', '2838 146th St', '1', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(3, '9dd5c6daf91d2e50', 'Randolph Prowse', 'aristocratsphilosopher@soften.org', '220-860-8082', '7889362640959980', 'Female', '6870 250 Ct', '1', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(4, '06664f9b6bb70011', 'Alonso Jesch', 'sereneddecidedly@firedvendedfÃªtes.edu', '469-855-6049', '5486752313521050', 'Female', '8830 Leewood Ln', '1', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(5, '793157d731220746', 'Landon Satsky', 'nearliestsmockeddetoxification@eastwardprecursors.info', '287-337-9149', '4493470005815240', 'Male', '96 Lincoln Rd', '1', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(6, '32d90d6d3efe8dcd', 'Erich Reinertson', 'kickedacademys@Elainesententedwellings.gov', '655-643-1012', '3760183050862730', 'Female', '6649 Cannongate Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(7, 'b42a080d83fac642', 'Cecil Karriem', 'Novgorodsgrimnesss@CsClaudius.net', '106-009-6800', '7781346182936900', 'Female', '1082 118th Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(8, '0e22d96dd2366791', 'Chester Payea', 'firmwares@typhoons.edu', '710-051-9387', '4878079417862180', 'Female', '5980 Maxwell Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(9, 'df7465e0dd3df48f', 'Issac Wheeless', 'proppingcircuiting@retiringEdselmuskmelon.info', '695-152-7383', '8397083831518030', 'Female', '9407 Applegate Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(10, '8b8e68e7102a8946', 'Christopher Commiskey', 'suggestiveemploystorso@swapthatchings.com', '210-062-2571', '9240331681103000', 'Male', '8053 Neckar Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(11, '35ce4a6f4130c973', 'Derek Feingold', 'Durhamsusesremittances@swellheadedbedspictographs.me', '582-954-4643', '3032858632609970', 'Male', '10606 Ripley Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(12, 'fc8b7e7ca351522e', 'Reyes Woodley', 'gazeramassing@DÃ¼rers.edu', '452-374-8979', '3702248212748560', 'Male', '9944 Center Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(13, '21f075ca915398fc', 'Keith Efford', 'seabedMerriam@EiffelMaalox.info', '391-589-0613', '7738496024409610', 'Male', '595 Easton Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(14, '220b2e4a31e6cf7a', 'Hilton Wiedow', 'acquaintedspoofed@dustpanmaddened.gov', '699-486-9234', '3150233563701600', 'Female', '4207 Valley Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(15, '1bf25b9f9d22c134', 'Chang Morinaka', 'reprehendskeletaltrainers@MiasLegree.net', '138-268-0282', '6341109093357420', 'Male', '9477 Garfield Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(16, 'c65cb2ecd37d4007', 'Craig Dinobile', 'outcryRockfordstoles@factunstudiedcrookedest.com', '966-027-5862', '7531514626256250', 'Female', '9675 Secretariat Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(17, 'f5f840dc20a01cf5', 'Nolan Halberstam', 'rallyingsacristans@Greenyearning.org', '472-942-9359', '7485585902175010', 'Female', '8718 Weststate Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(18, '43034328d8d220ed', 'Bennett Thornbrough', 'threshersnoisinesss@Senecacontinentsportering.org', '821-865-3981', '3625092604456950', 'Male', '4572 Longview Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(19, '1cd28a897cceab0b', 'Randell Mcauley', 'edificationsinclusion@sauerkrautsSoaveoilskins.me', '701-139-2634', '5457254221332870', 'Male', '6001 Tipmont Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(20, 'fe88e390a0b6d210', 'Bennett Newball', 'indictsMabelsriflemans@cherootscaprices.me', '753-097-2893', '9142309862806660', 'Male', '2088 Production Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(21, '441721d4f96e8e04', 'Javier Yasinski', 'categorizedcounterbalanced@misconducts.org', '702-009-2567', '2973362459714750', 'Male', '3226 Chesterfield Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(22, '7127b836bc1fd7d1', 'Refugio Hogue', 'redistributesumpsvaguest@costingssoviets.edu', '341-595-1032', '9302587381887900', 'Male', '6652 Beeson Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(23, '5368d3b16d3bbdce', 'Ty Kirrane', 'daemonsgratefulness@testatessubjects.info', '184-028-5659', '6868690962403700', 'Female', '4352 Hartman Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(24, '41c5d26f91870685', 'Bret Cutone', 'Marjoryrecopying@deceptionsnannysmanful.com', '493-279-5019', '4716683322925790', 'Female', '6001 106th Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(25, '6566e116b3fe781a', 'Jerome Kalaf', 'Poonasorangemarionettes@ambidextrouslymetro.net', '950-542-2827', '5193319158128090', 'Female', '4389 Greenridge Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(26, '49fc1465b0022e76', 'Carmen Pimlott', 'fiefscloses@gorgeousbalkyimaginative.edu', '494-116-2729', '5187270206090990', 'Female', '10182 Chippewa Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(27, 'cc1e83b18317bbfd', 'Aldo Daddezio', 'trashsVaseline@Liviasperishing.net', '218-700-0029', '9294681006604340', 'Male', '10854 Pierce Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(28, 'a2f95e8238ab172e', 'Dana Boquet', 'mixturemahoganysbillfolds@sulfuricseismologys.net', '113-660-8179', '5537724504334430', 'Male', '7180 Venice Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(29, 'a1b1e3992df8ce57', 'Anthony Rottschafer', 'discreeterPfizerrerouted@fermentedreappearance.gov', '373-203-0740', '9128758977301260', 'Female', '7115 500 St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(30, '5e69e039a2091c6a', 'Lesley Gutches', 'tutoredrueshowpiece@injuriousJoshs.gov', '408-006-4339', '3284233938735140', 'Male', '10936 Ralph Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(31, 'cf0407076ddf0da5', 'Refugio Wisker', 'gadflyanalogspotentiality@nonrefundable.edu', '156-499-2572', '9455470482720130', 'Female', '8755 Norwood Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(32, '021a2ef0f82b561b', 'Gus Tonoyan', 'coralslengthen@deadlockadumbrating.me', '878-392-6601', '5070029509155760', 'Male', '2748 Royston Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(33, 'd24fc18ae02fc2c2', 'Donny Derenzo', 'debuggingperfumes@doubtfully.net', '243-973-1432', '6659241311266270', 'Female', '9498 Lost Creek Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(34, '273ad1546eb7bd58', 'Ted Yaney', 'dungeonIdahoansloots@fervorsuppurations.net', '332-022-4564', '6308887265450660', 'Female', '8147 132nd Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(35, '139df969e3a1b09a', 'Quinton Blango', 'respirationssuicides@haemoglobin.info', '119-774-5140', '7476822150372570', 'Male', '1920 Beth Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(36, '8b2d08690e70be7d', 'Basil Sherbondy', 'malariasprincelier@unkempttroubleshoots.info', '741-844-0509', '8146943302469950', 'Male', '10791 Lucie Ann Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(37, '7c758458ea9d4dc6', 'Armando Tsukada', 'biddendirectories@Vivekanandatyrannies.edu', '940-715-6150', '5148187230194080', 'Male', '236 Harry Baals Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(38, '7a62a0c12bc93c8d', 'Arnulfo Doppelt', 'exterminatordeviously@chirped.gov', '230-464-0102', '9162154593691700', 'Female', '1526 Archer Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(39, '511e9811241b4bbd', 'Beau Ogles', 'capablertrailSadies@embryologistrepelled.com', '609-812-1076', '8561659444106970', 'Male', '31 Diedre Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(40, '7b7ab4e330c0b422', 'Harold Volzer', 'wiriestlayovers@lodgeachievable.me', '309-520-8235', '8011813803118800', 'Female', '9287 Tilden Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(41, 'f84b3709ceb25566', 'Devon Ullrich', 'admiralshypochondriacs@requisitioningwrote.org', '396-717-4788', '6715544099040170', 'Male', '2968 Burk Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(42, '810ea377ad8872a4', 'Trenton Farman', 'Johannesburgsspores@romanticAndresgrouped.info', '579-560-7371', '4262965450493660', 'Female', '2829 Watkins Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(43, 'bcaacae8f83aedd4', 'Myles Paton', 'salespeoplefishnets@demoralizations.info', '437-977-3765', '2391094802927530', 'Female', '4064 Northlawn Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(44, 'd8b2f230e11f7d92', 'Garland Kodak', 'invulnerabilitys@jinglingGregorian.com', '526-578-8856', '3767774050569060', 'Female', '7870 Emerson Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(45, '41eb2908c2a7a339', 'Cecil Pallesen', 'pluralaccredited@Hewlettssciatic.gov', '347-162-9952', '6013055965912010', 'Male', '5239 Belfast Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(46, '132ef9733d71fccc', 'Jesse Reynoldson', 'perjurenoonedPadilla@perfectionists.com', '493-546-5142', '5738670051751410', 'Female', '1591 Pathway Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(47, '247a382f8cf4f8ea', 'Douglass Canter', 'neutersdibblespimpernels@portagedwedgedcircumventing.me', '308-099-2351', '2366257201502310', 'Male', '6766 Mountain Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(48, '8e3a4546b4c90f81', 'Quintin Ovalles', 'redoublespremarital@taupesroamsscandalously.gov', '331-752-3125', '7212558167597610', 'Male', '1869 Drury Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(49, 'fec55b9f8802cd7f', 'Carroll Klewicki', 'limelightslowbrows@hardenersbodys.edu', '385-943-0579', '4407911355730330', 'Female', '6511 Edna Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(50, 'e8bbcbc5735bfde3', 'Freeman Shafer', 'limitsMinnsderegulates@contraventionNunavuts.edu', '410-525-1420', '8103928434953650', 'Male', '7445 Adeway Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(51, 'b26f77284ead3179', 'Cordell Malczynski', 'expressiveness@filchunawaremetacarpal.com', '818-105-9717', '2714940544553500', 'Male', '5716 Meredith Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(52, '278cf9d1aa6e336e', 'Todd Korzekwa', 'hastyTecumsehgoingbackfields@millracessocietys.net', '288-407-7416', '4186880905294260', 'Male', '7423 Floyd Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(53, '4d211b2fd8e5d403', 'Porter Mullens', 'homestretches@inquirysmutinying.gov', '774-171-7008', '6327664622781220', 'Male', '1989 89th Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(54, '318966760e928354', 'Vaughn Mccaffety', 'Aishacansregaledredid@deathbeds.edu', '515-934-4030', '6184177980988800', 'Male', '1504 Millboro St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(55, 'dfc555c04fe7ed1c', 'Dean Vijarro', 'Cowardssirs@gorinesspotshot.com', '927-678-3678', '7079913235654960', 'Male', '5677 Seaview Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(56, 'c75b46e3d0213fe7', 'Josiah Blatcher', 'tiningdisdainfullylecherous@componentsPyotr.org', '600-123-1005', '3909206739984230', 'Male', '3095 Springfield Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(57, '03cf692734bec864', 'Clifford Ortyl', 'designatingtrilling@Heraclituss.net', '307-221-8620', '7733420105818520', 'Female', '235 103rd St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(58, '0f0de33987ea4b85', 'Filiberto Sirles', 'Ivoryssynchronization@connedcolliesfopping.me', '893-543-8305', '5557241711845560', 'Male', '9955 Joshua Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(59, '91b38dc03123a495', 'Miguel Spreier', 'Antonykoshers@scramblersmultinationals.gov', '288-673-8541', '5371388880254000', 'Female', '3571 Haan Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(60, 'deb8e223eedbc56e', 'Eduardo Knowlin', 'canalsreoccupygrandee@Finleys.edu', '977-076-3064', '5248391874574570', 'Male', '7322 Twin Oak Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(61, 'c3b5dfafeadadba2', 'Tyrell Lemmers', 'eurekaZieglers@randomly.gov', '879-813-3795', '7090836639491630', 'Male', '3581 Palma Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(62, '120437882a88ab22', 'Forrest Dahlem', 'quietingcaliph@descriptionsbimboes.gov', '275-682-6701', '7283399057501690', 'Male', '2526 Vick Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(63, 'd6e12dbd8fae1da3', 'Morton Caughell', 'acronymhumorists@violas.me', '256-673-5331', '8982947666046210', 'Male', '10732 Tacoma Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(64, '728b5c433e5e1bf2', 'Terence Kochheiser', 'frenziedlyimmuresAustrian@Schnauzermidweekscompassions.org', '888-463-7739', '8090983109089760', 'Male', '7343 147th Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(65, '3bc8d0048467eee1', 'German Frisch', 'eyesoresconsolingcopra@helpersTerrence.me', '586-037-0537', '8313034382528870', 'Female', '5320 Hudson St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(66, '19d207be7ae93b17', 'Winfred Seckel', 'Brahmagupta@palettes.edu', '562-700-9461', '6446666971543030', 'Female', '9411 Franklin Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(67, '34afeae82ee2b77d', 'Devon Whittier', 'Dachausarmorcapsized@matrimony.me', '455-640-7688', '1124806764780680', 'Male', '7883 Us Highway 30 St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(68, '4a077d6b763eb47d', 'Paris Titchenell', 'dumpedGruss@knowledgehairpiece.com', '743-184-2404', '6170672305596880', 'Female', '688 Nutmeg Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(69, 'e5f92f789a8d1bea', 'Van Mcgurk', 'untruthploughed@rainyDexters.org', '915-991-2910', '1708828816054930', 'Female', '10037 Elizabeth Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(70, '589ef069cc2d1e06', 'Truman Bovenkamp', 'transparencies@Tsimshianstriplicated.edu', '723-755-1432', '4444781752423660', 'Male', '7250 300 Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(71, '30ac052db319e4ad', 'Santo Schmidl', 'globesMuller@homeowner.net', '898-046-4179', '4099228340677020', 'Female', '1875 Puerto Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(72, 'a4891c0ca87f2ef2', 'Hugh Soenksen', 'Hanoversblancmanges@hijackerdrowse.org', '697-319-5784', '4937745299457940', 'Female', '9110 Harvey Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(73, 'c86cac1e1c2e0a92', 'Cameron Elacqua', 'Mansfieldsthugwarrings@aquanautannouncing.com', '392-050-5012', '5555218418708590', 'Male', '2594 Northwood Blvd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(74, '8e6a450cab35de5b', 'Sebastian Olthof', 'interlacesshipwrights@remarriespatrolwomen.com', '157-524-2063', '5462825745118740', 'Female', '10087 Carol Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(75, '64c79359ca95fa3a', 'Arnulfo Juhlin', 'griddlecakesthirstily@alluredinculcations.com', '153-024-2442', '4586406093066250', 'Female', '8505 Windsor Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(76, 'c07ad6ef62556d5f', 'Grady Gangl', 'Michelobpublicist@emancipators.info', '162-828-2128', '9140776744861720', 'Male', '4371 Northentry Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(77, '2f9e74444f911d43', 'Derick Mounkes', 'impressionist@rattletraps.net', '718-696-7343', '5780944347676290', 'Male', '7159 Trace 1 Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(78, 'f1fd414e397d24fe', 'Shannon Keenen', 'Jaguarsunbuckled@dieselsdiodesselectively.gov', '666-338-1205', '2524643566531540', 'Female', '8038 675 Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(79, '98442b642a951ad6', 'Leigh Lanphier', 'Corfutimestrekked@primrosing.net', '759-602-2446', '1672350603166920', 'Male', '6183 Old Town St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(80, 'a96813dfad1ddad6', 'Eugenio Poull', 'liaiseurges@posthumouspeonyslayaway.gov', '956-031-4870', '6085745676146390', 'Female', '2505 Cass Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(81, '82bb32bd9704d3ef', 'Raymon Payette', 'breathiestAntarcticvibrancy@aforesaiddoltsturnkeys.gov', '483-379-4975', '6802130513162600', 'Female', '9226 Whitlock Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(82, 'cf237e9c50343702', 'Olen Ohern', 'viandsDecatur@confiningTuamotu.edu', '523-855-0350', '4922989855645890', 'Female', '6798 Firth Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(83, '5a5ad132c02d5313', 'Bradly Faimon', 'Boltonsbowling@Alishaorchestral.gov', '206-006-7889', '7600238002276330', 'Male', '4985 Hartman Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(84, 'a64a5f2964d96d43', 'Bernardo Yousef', 'motionedgrinderssolstices@shortages.net', '921-297-4087', '5638865819128910', 'Male', '4597 Palmer Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(85, '72e1234aa4bc6128', 'Napoleon Mbah', 'stealthLemuelmilitancys@redsgulchsphotos.net', '129-826-2740', '5237211786509910', 'Female', '3520 Trick Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(86, 'baf633e0aea2912f', 'Teddy Pyka', 'afflictionBellamy@batenudists.info', '619-859-2877', '2227179292977510', 'Male', '5887 Austin Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(87, 'd03beb56725f39a0', 'Damien Delapuente', 'glopsPompeiis@skinniesthelpmates.edu', '484-525-6227', '3725983220956570', 'Female', '10103 Russell Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(88, 'a4468153f99c242f', 'Wilber Amparo', 'ZeligRadcliffes@stupiditysadhering.gov', '671-349-4302', '7246027736844090', 'Female', '30 Robinhood Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(89, 'a8632d9a8c3e38f6', 'Deangelo Mades', 'ErebussIvan@majesticallyfurthercoddle.me', '474-908-3282', '4288674274934160', 'Female', '170 Meridian Trl', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(90, '09d75043d1dd4acb', 'Matthew Delveaux', 'furnacesdrinking@mortars.info', '556-645-4515', '1878293141043300', 'Female', '5206 Clear View Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(91, 'f12110dac727c81f', 'Jesse Nassif', 'ligaturedmercerize@cosignedrejoinder.info', '897-260-2426', '5117474024094770', 'Female', '5075 Kingston St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(92, '358ac0ecb2ee0c68', 'Brendan Pravecek', 'riverfrontsdisarranges@peonsconfessional.org', '392-752-9161', '9103700024613470', 'Female', '4652 Westmoreland St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(93, 'a2943dd53008d0d9', 'Kerry Noel', 'cragsGoldbergs@bolaLeninist.org', '493-731-3601', '2178987288548310', 'Female', '5647 Four Corners Ct', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(94, 'cf9178e8c88cd717', 'Chas Herron', 'insuredspinets@unconstitutionalGaines.org', '144-271-3735', '2321227798936570', 'Male', '931 Executive St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(95, 'c58567e0cfe920a5', 'Louie Greig', 'MillsxylophonistTonis@scrimshawsdeflecting.net', '733-971-9422', '7885452808657380', 'Female', '7697 Liberty Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(96, '28073695d5f79520', 'Nick Zanatta', 'beggaringfixityDomesday@buttthieving.me', '571-969-0109', '4452739959452110', 'Male', '10640 145th Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(97, '547c02dfb426d1c0', 'Ned Holibaugh', 'Penasshebangssnuffer@prowlmajortritercrewmans.me', '646-388-0572', '8073701235298060', 'Female', '8705 Mountainside Ln', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(98, '557b49108ea4ad85', 'Douglas Angerer', 'schoolmistressesRumanias@GruyeresAntigone.gov', '578-564-3954', '9076529208000560', 'Male', '6282 Marilyn Rd', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(99, 'eafe59dd12528180', 'Hong Schwender', 'waistingproperty@Sabreenervatingmazourka.info', '169-995-8864', '8903604700891050', 'Female', '9693 Caprice Ave', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47'),
(100, 'efb46d07884a6448', 'Jamie Donoway', 'practicalitys@nutmiscellanies.com', '345-782-5305', '3803795468433300', 'Female', '8224 Devon St', '0', '2019-06-08 15:55:47', '2019-06-08 15:55:47');

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
-- Indexes for table `data_user`
--
ALTER TABLE `data_user`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `data_kendaraan`
--
ALTER TABLE `data_kendaraan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `data_pelanggaran`
--
ALTER TABLE `data_pelanggaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `data_user`
--
ALTER TABLE `data_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
