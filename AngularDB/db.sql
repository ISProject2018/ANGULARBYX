-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2018 at 10:21 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular_store`
--
CREATE DATABASE IF NOT EXISTS `angular_store` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `angular_store`;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `Order_id` int(10) NOT NULL,
  `Order_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Order_surname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Order_email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Order_tel` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Order_address` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`Order_id`, `Order_name`, `Order_surname`, `Order_email`, `Order_tel`, `Order_address`) VALUES
(41, 'ปฐมพงศ์', 'อารีสุข', 'pathompong_ex@hotmail.co.th', '0916421161', '86/467 ถ.นิพัทธ์สงเคราะห์ 5 ซอย 9 อ.หาดใหญ่ จ.สงขลา'),
(42, 'ชัยเนตร', 'เสรีศรีสกุล', 'chainetdsereesrisakul@gmail.com', '0824342223', '25 คชฤทธิ์ อ.เบตง จ.ยะลา'),
(43, 'ชัยเนตร', 'เสรีศรีสกุล', 'chainet@goma', '082555555', '25');

-- --------------------------------------------------------

--
-- Table structure for table `orders_detail`
--

CREATE TABLE `orders_detail` (
  `Product_id` int(10) NOT NULL,
  `Order_id` int(10) NOT NULL,
  `Product_amout` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders_detail`
--

INSERT INTO `orders_detail` (`Product_id`, `Order_id`, `Product_amout`) VALUES
(6, 41, 5),
(10, 41, 1),
(7, 41, 3),
(7, 42, 3),
(6, 42, 1),
(10, 42, 1),
(8, 43, 3),
(7, 43, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Product_id` int(10) NOT NULL,
  `Product_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Product_img` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Product_desc` text COLLATE utf8_unicode_ci NOT NULL,
  `Product_price` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Product_id`, `Product_name`, `Product_img`, `Product_desc`, `Product_price`) VALUES
(6, 'ข้าวผัดกระเพราหมูสับไข่ดาว', '1.jpg', 'ข้าวสวยร้อนๆผัดกับหมูสับชั้นดีบวกไข่ดาวรสเริศ', 1000),
(7, 'เค้ก', '2.jpeg', 'เค้กเนื้อนุ่มใส่วิปคริปแสนละมุนอร่อยไม่รู้จบด้วยสตอเบอรี่ภาคเหนือ', 200),
(8, 'ซูชิ', '3.jpg', 'ซูชิชุดใหญ่ส่งตรงจากญี่ปุ่นผลิตโดยกุ๊กระดับ5ดาวจากแดนปลาดิบ', 4500),
(9, 'สเต็ก', '4.jpg', 'สเต็กหมู ย่างด้วยความใส่ใจ หมักด้วยวัตถุดิบชั้นเลิศละลายในปากและเงินในกระเป๋า', 3000),
(10, 'ข้าวเหนียวมะม่วง', '5.jpg', 'ข้าวเหนียวจากอีสาน มะม่วงจากคนข้างบ้าน สอยอย่างระมัดระวัง เดี๋ยวเจ้าของจับได้ มีความเสี่ยงสูง ราคาจึงแพง', 350),
(11, 'บิงซู', '6.jpg', 'น้ำแข็งใส่จากช่อง Freeze ในตู้เย็น โรยหน้าด้วยใบสมุนไพรเกรดพรีเมี่ยม ประกอบกับมะม่วงที่เหลือจาก ข้าวเหนียวมะม่วง', 550);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Order_id`);

--
-- Indexes for table `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD KEY `Product_id` (`Product_id`),
  ADD KEY `orders_detail_ibfk_1` (`Order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `Order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD CONSTRAINT `orders_detail_ibfk_1` FOREIGN KEY (`Order_id`) REFERENCES `orders` (`Order_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_detail_ibfk_2` FOREIGN KEY (`Product_id`) REFERENCES `product` (`Product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
