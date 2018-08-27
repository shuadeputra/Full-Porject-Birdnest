-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2018 at 11:11 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `premium_birdnest`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutus`
--

CREATE TABLE `aboutus` (
  `id` int(11) NOT NULL,
  `useradmin_id` int(11) NOT NULL,
  `how_it_all_began` varchar(500) NOT NULL,
  `who_we_are` varchar(500) NOT NULL,
  `we_care` varchar(500) NOT NULL,
  `fast_delivery` varchar(500) NOT NULL,
  `your_security` varchar(500) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aboutus`
--

INSERT INTO `aboutus` (`id`, `useradmin_id`, `how_it_all_began`, `who_we_are`, `we_care`, `fast_delivery`, `your_security`, `date`) VALUES
(1, 1, 'As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. ', 'As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.', 'As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.', 'As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.', 'As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.', '2018-08-08 09:14:12');

-- --------------------------------------------------------

--
-- Table structure for table `address_customer`
--

CREATE TABLE `address_customer` (
  `id` int(11) NOT NULL,
  `user_customer_id` int(11) NOT NULL,
  `First_Name` varchar(300) NOT NULL,
  `Last_Name` varchar(300) NOT NULL,
  `Email_Address` varchar(300) NOT NULL,
  `Street` varchar(500) NOT NULL,
  `City` varchar(300) NOT NULL,
  `ZIP` varchar(300) NOT NULL,
  `State` varchar(300) NOT NULL,
  `Country` varchar(500) NOT NULL,
  `Phone_Number` varchar(500) NOT NULL,
  `Company` varchar(500) NOT NULL,
  `waktu_dibuat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address_customer`
--

INSERT INTO `address_customer` (`id`, `user_customer_id`, `First_Name`, `Last_Name`, `Email_Address`, `Street`, `City`, `ZIP`, `State`, `Country`, `Phone_Number`, `Company`, `waktu_dibuat`) VALUES
(1, 1, 'Ade123', 'putra', 'shuadeputra@gmail.com', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', 'otocentral.com', '2018-08-24 09:25:44'),
(2, 2, 'Dewi', 'indra', 'dewi@gmail.com', 'jl.syahdan gang u', 'Jakarta', '22480', '12345', 'Indonesia', '081231238123', 'Oitobook', '2018-07-26 15:03:09'),
(3, 3, 'Ricky', 'Anderson', 'aderson@gmail.com', 'jl.apa aja', 'Jakarta', '11480', '23235', 'Indonesia', '0812345678', 'Ricky tower', '2018-07-26 15:07:28'),
(4, 4, 'Ricky', 'cuy', 'rickycuy@gmail.com', 'jl.Apa aja yang penting happy', 'indonesia', '11480', '23456', 'Indonesia', '0812465879', 'Jakartanoodebook', '2018-07-26 15:12:19'),
(6, 6, 'Adeade', 'putraputra', 'adeade@gmail.com', 'jl.hajihaji', 'Jakarta', '11480', '23234', 'Indonesia', '0812567832', 'Jakartabooksoks', '2018-07-26 15:19:05'),
(7, 7, 'asd', 'asd', 'asd', '123', 'asd', '123', '12312', 'asdasd', '123123', 'asd', '2018-07-26 15:24:24'),
(8, 8, 'asd', 'asd', '123@gmail.com', 'asd', 'asd', '123', '123', 'asdasd', '1231231', 'asdasd', '2018-07-27 14:03:16'),
(9, 9, 'asdasd', 'asdasd', 'asdasd', 'asdasdas', 'asdasd', '123123', '123123', 'asdasdas', '1231231', 'asdadsasd', '2018-07-27 14:04:14'),
(10, 10, 'asdasd', 'asdasdasdas', 'asdasd@gmail.com', 'sasad123', 'acasd123', '123123', '123', 'Indonesia', '123123', 'asasd', '2018-07-27 17:14:46'),
(11, 11, 'asdasd', 'asdasdasdas', 'asdasd@gmail.com', 'sasad123', 'acasd123', '123123', '123', 'Indonesia', '123123', 'asasd', '2018-07-27 17:15:32'),
(12, 12, 'asdasd', 'asdasdasdas', 'asdasd@gmail.com', 'sasad123', 'acasd123', '123123', '123', 'Indonesia', '123123', 'asasd', '2018-07-27 17:16:02'),
(13, 13, 'vincent', 'jomblo', 'vincent@gmail.com', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', 'jomblo dong', '2018-08-02 03:49:56'),
(14, 14, 'ade', 'ade', 'test@gmail.com', 'ade123', 'Jakarta', '123', '123', 'Indonesia', '07808080123', 'abc', '2018-08-17 04:25:10'),
(15, 15, 'asd', 'asd', 'asd', 'asd', 'asd', '123', '122', '123', '123', '123', '2018-08-24 06:19:15'),
(16, 16, 'coba', 'coba', 'coba@gmail.com', 'coba', 'coba', '123', '121', 'indonesja', '01928310293', 'indonesia', '2018-08-27 06:49:49');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `useradmin_id` int(11) NOT NULL,
  `meta_tittle` varchar(500) NOT NULL,
  `meta_dsc` varchar(500) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `image` varchar(500) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `useradmin_id`, `meta_tittle`, `meta_dsc`, `title`, `description`, `image`, `date`) VALUES
(2, 1, 'Harga,Jual,Sarang,Burung,Walet,terbaru,hargaburung,hargasarang', 'Sudah dari satu abad yang lalu sarang walet sudah dimanfaatkan karena mempunyai kandungan yang bermanfaat yang sangat besar sekali.', 'Harga Jual Sarang Burung Walet Terbaru', '<p>Sudah pernahkah Anda mendengar tentang sarang walet? Sarang walet yang alami nilainya terkenal cukup mahal, dan mungkin masih banyak orang di antara kita yang baru melihatnya tetapi belum pernah memakannya.</p><p><br></p><p>Sarang yang berwarna keruh ini pada umumnya diambil dari gua-gua di tepi pantai. Sarang dari tempat alami ini lebih kenyal dan tidak cepat pecah saat dimasak. Sedangkan orang Cina dan Indonesia lebih menyukai warna sarang burung walet yang putih bersih.</p><p><br></p><p>Warna yang putih bersih inilah yang membuat pedagang bermain mata. Mereka membersihkan sarang burung walet dengn pemutih. Akhirnya hal ini diketahui oleh pembeli yang berpengalaman. Yang terjadi adalah harga sarang burung walet dari beberapa daerah di Indonesia menjadi turun. Yang awalnya mencapai 17 juta per kilo, kini mungkin hanya sekira 7-8 juta sahja per kilo. Hal ini tentu saja merugikan para penjual sarang burung walet yang jujur.</p><p><br></p><p>Biaya pemeliharaan dan penjagaan untuk satu gedung tidak murah. Bahkan karena gedung sarang burung walet ini sangat berharga, pemasangan cctv dan peralatan keamanan lainnya dipasang di sekitar gedung. Ada juga yang malah tinggal di gedung yang sama. Tingkat pertama dan kedua untuk rumah tinggal dan untuk berbisnis yang lainnya, seperti membuka toko kelontong, sedangkan tingkat tiga hingga lima, dibuat khusus untuk membudidayakan sarang burung walet.</p><p><br></p><p>Sarang yang berwarna keruh ini pada umumnya diambil dari gua-gua di tepi pantai. Sarang dari tempat alami ini lebih kenyal dan tidak cepat pecah saat dimasak. Sedangkan orang Cina dan Indonesia lebih menyukai warna sarang burung walet yang putih bersih.</p><p><br></p><p>Warna yang putih bersih inilah yang membuat pedagang bermain mata. Mereka membersihkan sarang burung walet dengn pemutih. Akhirnya hal ini diketahui oleh pembeli yang berpengalaman. Yang terjadi adalah harga sarang burung walet dari beberapa daerah di Indonesia menjadi turun. Yang awalnya mencapai 17 juta per kilo, kini mungkin hanya sekira 7-8 juta sahja per kilo. Hal ini tentu saja merugikan para penjual sarang burung walet yang jujur.</p><p><br></p><p>Biaya pemeliharaan dan penjagaan untuk satu gedung tidak murah. Bahkan karena gedung sarang burung walet ini sangat berharga, pemasangan cctv dan peralatan keamanan lainnya dipasang di sekitar gedung. Ada juga yang malah tinggal di gedung yang sama. Tingkat pertama dan kedua untuk rumah tinggal dan untuk berbisnis yang lainnya, seperti membuka toko kelontong, sedangkan tingkat tiga hingga lima, dibuat khusus untuk membudidayakan sarang burung walet.</p>', '9lc5c1ue0jl6o4u1q.jpeg', '2018-08-24 04:24:46'),
(4, 1, 'Jenis,Sarang,Walet,disukaiburung,walet,sarangburung ', 'Pembuatan sarang yang bisa mencapai 80 hari membuat para pemilik gedung walet bersabar menanti panen. Bila tidak sabar, maka harga sarang burung bisa jatuh.', 'Jenis Sarang Walet yang Disukai ', '<p><strong>Jenis Sarang Walet yang Disukai -</strong> Pembuatan sarang yang bisa mencapai 80 hari membuat para pemilik gedung walet bersabar menanti panen. Bila tidak sabar, maka harga sarang burung bisa jatuh. Jenis sarang burung walet ini bermacam-macam. Ada yang warnanya tidak bersih. Malahan mengandung lumut. Tapi jenis sarang walet ini disukai oleh orang Singapura dan Malaysia.</p><p><br></p><p>&nbsp;</p><p>Sarang yang berwarna keruh ini pada umumnya diambil dari gua-gua di tepi pantai. Sarang dari tempat alami ini lebih kenyal dan tidak cepat pecah saat dimasak. Sedangkan orang Cina dan Indonesia lebih menyukai warna sarang burung walet yang putih bersih.&nbsp;</p><p><br></p><p>Warna yang putih bersih inilah yang membuat pedagang bermain mata. Mereka membersihkan sarang burung walet dengn pemutih. Akhirnya hal ini diketahui oleh pembeli yang berpengalaman. Yang terjadi adalah harga sarang burung walet dari beberapa daerah di Indonesia menjadi turun. Yang awalnya mencapai 17 juta per kilo, kini mungkin hanya sekira 7-8 juta sahja per kilo. Hal ini tentu saja merugikan para penjual sarang burung walet yang jujur.</p><p><br></p><p>Biaya pemeliharaan dan penjagaan untuk satu gedung tidak murah. Bahkan karena gedung sarang burung walet ini sangat berharga, pemasangan cctv dan peralatan keamanan lainnya dipasang di sekitar gedung. Ada juga yang malah tinggal di gedung yang sama. Tingkat pertama dan kedua untuk rumah tinggal dan untuk berbisnis yang lainnya, seperti membuka toko kelontong, sedangkan tingkat tiga hingga lima, dibuat khusus untuk membudidayakan sarang burung walet.</p><p><br></p><p>Tentu saja suara burung walet yang sangat berisik itu menjadi salah satu kendala bagi yang membutuhkan ketenangan dalam bekerja. Banyaknya nyamuk juga menjadi satu hal yang harus ditangani dengan baik. Apalagi ketika merebaknya isu virus flu burung. Banyak juga orang yang khawatir terutama yang tinggal dekat arah melintasnya burung walet.</p><p><br></p><p>Perlu diketahui bahwa membuat gedung untuk burung walet ini bukan perkara gampang. Pemilik gedung harus tahu perlintasan burung walet agar burung-burung itu mau masuk ke dalam gedung. Bentuk gedung dan pencahayaan juga harus diperhatikan dengan saksama.</p>', '9lc5c1ue0jl6o7ga7.jpeg', '2018-08-23 15:42:55'),
(7, 1, 'Sarang Burung Walet Menjadi Obat ', 'Cara Mengolah Sarang Burung Walet Menjadi Obat - Hallo, selamat datang di blog kami yang akan memberikan informasi seputar kesehatan. Pada kesempatan ini saya akan membahas tentang cara mengolah sarang burung walet, simak ulasan berikut ini.', 'Sarang Burung Walet Menjadi Obat ', '<p>Cara Mengolah Sarang Burung Walet Menjadi Obat - Hallo, selamat datang di blog kami yang akan memberikan informasi seputar kesehatan. Pada kesempatan ini saya akan membahas tentang cara mengolah sarang burung walet, simak ulasan berikut ini.</p><p><br></p><p>Tahukah Anda bahwa sarang burung walet ini merupakan sarang burung yang paling mahal di dunia (sejauh yang kita ketahui). Bayangkan saja 1 ons sarang burung walet yang kurang lebih terdiri dari 10 buah sarang dengan kualitas baik bisa dijual dengan harga 1,4 juta rupiah! Dan katanya lagi, orang rela membayar mahal karena sarang burung walet ini dipercayai memiliki khasiat mampu menyembuhkan berbagai penyakit kronis maupun non kronis.</p><p><br></p><p>Umumnya, sarang burung walet disajikan dalam bentuk sup. Dan dapat kita temukan di restoran - restoran Cina. Sebenarnya, pengkonsumsian sarang burung walet ini bukanlah hal yang baru. Malah, sudah sejak abad 14, sarang burung ini dimanfaatkan sebagai makanan. Di Cina, sup sarang burung walet (birdnest soup) merupakan makanan favorit para raja dan bangsawan. Dan menurut cerita yang masih beredar sampe sekarang (mitos kali..) kaisar Ming sangat menggemari sup yang satu ini. Mungkin karena cerita atau mitosnya itulah, maka sup sarang burung walet dijadikan simbol makanan yang mewah dan bergengsi dan sangat mahal harganya.</p><p><br></p><p>Tetapi, pengkonsumsian sarang burung walet di Indonesia bisa dikatakan tergolong rendah, hampir 90% sarang burung walet diekspor ke luar negri. Pengkonsumsian sarang burung walet inipun masih ada bedanya. Kalo di Singapore dan Malaysia, lebih menyukai sarang burung yang mengandung lumut (moss nest), yang biasanya diambil dari gua - gua karang di tepi pantai. Sehingga warnanya pun tidak sebersih sarang burung walet yang dibudidayakan di atap - atap rumah. Katanya, rasanya lebih kenyal dan tidak cepat pecah saat dimasak. Sedangkan Cina dan Indonesia lebih menyukai sarang burung yang putih bersih.</p><p><br></p><p>Untuk menentukan kualitas dari sarang burung walet, ada syarat - syarat tertentu yang harus dipenuhi, misalnya ketebalan sarang. Seperti yang kita ketahui, sarang burung itu dibuat dari air liur burung walet tersebut. Setiap hari, sepasang walet betina dan jantan bergantian membuat sehelai sarang dengan cara mengoleskan air liur mereka ke dinding gua, dinding tebing, ataupun atap rumah. Ingat..satu hari hanya mengoleskan satu helai sarang aja. Jadi jangan heran, untuk membuat sarang saja dibutuhkan waktu sekitar 33-41 hari. Malah, pada saat musim kemarau, pembuatan sarang bisa lebih lama, sekitar 80 hari.</p><p><br></p><p>Kualitas itulah yang menentukan harga atau nilai dari sarang burung walet tersebut. Sarang burung dengan kualitas sempurna yakni memiliki bentuk seperti mangkuk, dindingnya tebal, kuat dengan tinggi kira - kira 5 cm, serta bersih tidak tercemar kotoran, bisa dijual dengan harga yang cukup tinggi. Sebaliknya, sarang burung yang kualitasnya rendah, yaitu yang serat - seratnya tidak utuh, k', '9lc5c1ue0jl6nlvbl.jpeg', '2018-08-23 15:43:17'),
(8, 1, 'Memasak Sarang Burung Walet, Sarang Burung Walet,Walet', 'Salah satu hidangan istimewa yang cukup banyak peminatnya oleh orang-orang dari berbagai negara di belahan dunia ini adalah masakan dari sarang walet. Sarang walet telah menjadi hidangan spesial bahkan dari ratusan tahun yang lalu.', ' Cara Memasak Sarang Burung Walet', '<p>Salah satu hidangan istimewa yang cukup banyak peminatnya oleh orang-orang dari berbagai negara di belahan dunia ini adalah masakan dari sarang walet. Sarang walet telah menjadi hidangan spesial bahkan dari ratusan tahun yang lalu.</p><p><br></p><p>Sarang walet sangat digemari oleh masyarakat China, bahkan sangat terkenal di kawasan kerajaan. Sarang walet biasanya dijadikan sebuah sup yang telah menjadi populer bahkan sampai ke banyak negara.</p><p><br></p><p>Sarang walet memiliki banyak manfaat yang luar biasa bagi tubuh dan sangat berkhasiat untuk menyehatkan kecantikan kulit. Dengan mengkonsumsi sarang walet dipercaya dapat menjauhkan tubuh dari berbagai penyakit dan memperpanjang umur.</p><p><br></p><p>Di China sejak dulu masakan dari sarang walet sudah menjadi hidangan yang memiliki nilai yang tinggi. Makanan ini aslinya memiliki rasa yang agak hambar, meski demikian sarang walet menjadi makanan yang banyak digemari karena kandungan gizinya yang sangat banyak.</p><p><br></p><p>Olahan dari sarang walet cenderung memiliki harga yang cukup mahal, karena memang harga dari sarang walet itu sendiri sudah cukup tinggi. Harga sarang walet per kilogramnya bisa mencapai puluhan juta rupiah. Karena itu tidak semua orang mampu merasakan masakan dari sarang walet.</p><p><br></p><p>Jika ingin merasakan manfaat sarang walet secara maksimal, Anda harus mengkonsumsi sarang walet tersebut secara rutin dan teratur. Jika hanya sekali mengkonsumsinya tidak akan memberikan banyak efek pada tubuh.</p><p><br></p><p>Jika ingin memasak sarang walet, hal pertama yang kita lakukan adalah memastikan sarang tersebut sudah dalam keadaan bersih bebas dari kotoran burung walet dan juga dari bulu-bulunya. Jika sarang walet masih kotor kita perlu membersihkan dan mencucinya.</p><p><br></p><p>Cara membersihkan sarang walet cukup sulit, oleh sebab itu disarankan jika Anda ingin memasak sarang walet, belilah sarang yang sudah bersih yang telah melalui proses pembersihan. Sarang bersih tersebut biasanya sudah dikemas dengan bentuk kepingan.</p><p><br></p><p>Perlu diperhatikan jika akan memasak sarang walet dari kemasan, disarankan untuk tidak membiarkan kemasannya terbuka cukup lama, apalagi hingga berjam-jam lamanya. Sebab hal itu dapat mengurangi manfaat dan khasiat yang terkandung dalam sarang walet tersebut.</p><p><br></p><p><strong>Langkah memasak sarang walet:</strong></p><p><br></p><ol><li>Hal pertama yang dilakukan adalah membuka 1 buah kemasan sarang walet bersih untuk satu porsi.</li><li>Rendam sarang walet tersebut dengan menggunakan air jernih dengan suhu normal (bukan air panas maupun air es) selama 90 menit. Sarang walet dapat ditinggalkan selama perendaman.</li><li>Setelah 90 menit berlangsung, kemudian tiriskan sarang walet tersebut.</li><li>Masukkan 400 ml air ke panci untuk menyeduh sarang walet. Kemudian seduh sarang walet dan masak dengan api kecil</li><li>Masukkan gula batu ke dalam panci tersebut.</li><li>Setelah air mendidih dan gula batu tersebut larut ', '9lc5c1ue0jl6orufv.jpeg', '2018-08-23 15:42:30'),
(9, 1, '3 Manfaat,Kesehatan Sarang Burung Walet, Kesehatan, sarang ,burung walet, keuntungan', 'Sarang burung walet telah lama diolah menjadi makanan eksotis yang memiliki harga jual fantastis. Namun tunggu dulu. Selain rasanya yang lezat, sarang walet ternyata juga memiliki beragam manfaat untuk tubuh.', '3 Manfaat Kesehatan Sarang Burung Walet', '<p>Sarang burung walet telah lama diolah menjadi makanan eksotis yang memiliki harga jual fantastis. Namun tunggu dulu. Selain rasanya yang lezat, sarang walet ternyata juga memiliki beragam manfaat untuk tubuh. Apa saja manfaat sarang burung walet untuk kesehatan? Yuk, simak ulasannya berikut ini.</p><p><br></p><p><strong>Sarang burung walet terbuat dari apa?</strong></p><p><br></p><p>Burung walet membuat sarang untuk tempat bertelur dari air liurnya yang mengeras. Liur burung walet juga berfungsi merekatkan sarang ke langit-langit gua atau tempat di mana burung tinggal.</p><p><br></p><p>Liur burung walet terbuat dari protein, yang juga tinggi kandungan kalsium, zat besi, kalium, and magnesium. Itu sebabnya banyak orang yang mengganggap bahwa sarang burung walet bermanfaat bagi kesehatan.</p><p><br></p><p><strong>Apa manfaat sarang burung walet bagi kesehatan?</strong></p><p><br></p><p>ilmu pengobatan Cina percaya bahwa memakan sarang burung walet dapat menangkal penuaan, melawan kanker, hingga&nbsp;meningkatkan konsentrasi. Namun di samping itu, masih banyak manfaat sarang burung walet lainnya lain yang sayang untuk dilewatkan.</p><p><br></p><p><strong>1. Mengandung asam amino penting</strong></p><p><br></p><p>Liur untuk membuat sarang terbuat dari protein khusus yang terbuat dari berbagai macam asam amino, seperti:</p><ul><li>Asam aspartat dan prolin yang berguna untuk regenerasi sel</li><li>Sistein dan fenilalanin, untuk meningkatkan kerja memori, kerja impuls saraf, dan kerja penyerapan vitamin D dari sinar matahari</li><li>Tirosin, untuk mempercepat pemulihan setelah sakit</li><li>Glukosamin, untuk membantu proses pemulihan tulang rawan</li></ul><p><br></p><p>Beberapa di antaranya merupakan asam amino yang tidak dapat diproduksi oleh tubuh dan harus diperoleh dari sumber makanan. Sup sarang burung walet menjadi pilihan yang tepat untuk memenuhi kebutuhan asam amino Anda.</p><p><br></p><p>Selain asam amino, sarang walet juga mengandung glikoprotein, jenis protein yang lebih mudah larut, serta kandungan antioksidan yang lebih tinggi dibanding kandungan dalam sup ayam dan ikan.</p><p><br></p><p><strong>2. Merupakan sumber mineral yang baik</strong></p><p><br></p><p>Manfaat sarang burung walet juga diperkaya akan berbagai mineral yang diperlukan tubuh, di antaranya mineral mangan, tembaga, serta seng yang berfungsi untuk meningkatkan kerja memori dan saraf; serta kromium untuk membantu penyerapan nutrisi di usus.</p><p><br></p><p>Selebihnya juga terdapat mineral kalsium, zat besi, kalium, serta magnesium yang tak kalah banyak jumlahnya dalam sarang burung walet. Fungsi dari masing-masing mineral ini sangat penting bagi tubuh untuk membentuk sistem kekebalan alami serta membantu melawan peradangan.</p><p><br></p><p><strong>3. Mencegah resistensi insulin</strong></p><p><br></p><p>?Sebuah studi menemukan bahwa konsumsi rutin dari sarang walet dapat mencegah terjadinya resistensi insulin pada orang-orang yang memiliki pola makan tinggi lemak. Kandu', '9lc5c1ue0jl6p0cdt.jpeg', '2018-08-23 15:42:21'),
(10, 1, 'Khasiat dan Manfaat Sarang Walet,Khasiat Walet, Sarang Walet, Harga Walet', 'Sarang dari burung walet yang merupakan burung dari keluarga Apodidae ini memiliki banyak sekali keistimewaan, yaitu di dalamnya terkandung berbagai gizi yang bermanfaat untuk kesehatan dan mengobati berbagai penyakit.', 'Khasiat dan Manfaat Sarang Walet', '<p>Sarang dari burung walet yang merupakan burung dari keluarga Apodidae ini memiliki banyak sekali keistimewaan, yaitu di dalamnya terkandung berbagai gizi yang bermanfaat untuk kesehatan dan mengobati berbagai penyakit.</p><p><br></p><p>Burung walet memiliki bentuk seperti layang-layang. Burung walet tidak memiliki hubungan sama sekali dengan spesies burung pengicau. Burung walet termasuk ke dalam ordo Apodiformes. Tidak banyak keistimewaan yang dimiliki burung walet ini, namun sarang yang dibuat dari air liurnya tersebut memiliki keistimewaan tersendiri yang mengandung banyak sekali kandungan gizi yang bermanfaat.</p><p><br></p><p>Sarang walet terbuat dari air liur burung walet itu sendiri (saliva), dengan tekstur menyerupai agar-agar (gelatin). Warna dari sarang walet ini aslinya adalah putih, namun karena kadang ada campuran seperti bulu-bulu burung walet tersebut warnanya seakan tampak hitam, kemudian ada juga yang terbuat dari campuran rerumputan, lumut, dan lain sebagainya.</p><p><br></p><p>Khasiat dari sarang burung walet sudah terkenal semenjak ratusan tahun yang lalu. Sarang walet telah dikonsumsi sejak 1000 tahun lebih, sangat populer di China dari masyarakat biasa dan bahkan hingga di keluarga kerajaan juga sangat menggemari masakan dari sarang walet.</p><p><br></p><p>Karena khasiatnya yang luar biasa, lambat laun sarang walet di kenal meluas di seluruh dunia. Hingga kini banyak masyarakat dari berbagai belahan dunia banyak yang memanfaatkan sarang walet sebagai makanan bergizi tinggi untuk meningkatkan kesehatan.</p><p><br></p><p>Di dunia kesehatan sendiri meyakini bahwa sarang burung walet mempunyai banyak sekali khasiat untuk kesehatan. Hal ini dikarenakan sangat tingginya kandungan yang terdapat dalam sarang walet.</p><p><br></p><p>Dari banyak penelitian yang telah dilakukan, menyatakan bahwa sarang burung walet dapat berguna untuk mengobati berbagai penyakit. Berikut ini beberapa manfaat dan khasiat dari sarang burung walet untuk tubuh kita:</p><ol><li>Sarang walet yang mengandung 200 glikonutrien ini berkhasiat untuk meningkatkan sistem reproduksi serta regenerasi sel-sel tubuh.</li><li>Melawan radikal bebas, kandungan dalam sarang walet dapat meningkatkan sistem kekebalan tubuh, sehingga radikal bebas penyebab penyakit dapat dilawan dan tubuh akan terlindungi.</li><li>Menyehatkan paru-paru dan ginjal, dengan mengonsumsi sarang walet secara rutin akan dapat menambah pasokan oksigen dalam paru-paru, sehingga paru-paru akan kembali sehat serat sangat baik untuk kesehatan ginjal.</li><li>Meningkatkan nafsu makan, dengan mengkonsumsi sarang walet secara rutin akan dapat meningkatkan nafsu makan.</li><li>Meningkatkan kinerja jantung, sarang walet yang kaya akan kandungan bermanfaat tersebut dapat meningkatkan dan mengoptimalkan kinerja jantung serta menyehatkan jantung.</li><li>Mengobati hipertensi, kandungan dalam sarang walet dapat digunakan untuk mengobati tekanan darah tinggi, tidak hanya itu namun juga akan memperlancar peredar', '9lc5c1ue0jl6p67hj.jpeg', '2018-08-23 15:43:07'),
(11, 1, 'sp walet indonesia,suara burung walet ,suara walet ,suara walet 9,suara walet andalan , suara walet asli alam ,suara walet indonesia,suara walet ratu kodok / triple 9 suara walet ,walet adalah ,walet andal ,walet budidaya , walet china , walet muda , walet ori ,walet sulawesi , walet super ', 'sp walet indonesia,suara burung walet ,suara walet ,suara walet 9,suara walet andalan , suara walet asli alam ,suara walet indonesia,suara walet ratu kodok / triple 9 suara walet ,walet adalah ,walet andal ,walet budidaya , walet china , walet muda , walet ori ,walet sulawesi , walet super ', 'Penyebab Burung Walet Pindah Dari Gedung', '<p>Apa yang akan terjadi bila gedung/rumah walet yang telah susah payah kita buat, tentu akan sangat menyakitkan. Penyebab-penyebab walet pindah dapat kita amati degan melihat perilaku walet pada gedung/rumah walet kita, karena setiap rumah walet pada daerah geografis tertentu tidak sama kondisi dan lingkungannya.Burung walet yang hendak akan membikin sarang, umumnya akan melalui observasi terlebih dahulu. Walet akan memilih tempat yang menurutnya aman dan nyaman.</p><p><br></p><p>Jika walet sudah memutuskan satu tempat tertentu, maka segera ia membangun sarangnya secara perlahan lahan.Tetapi kenapa sarang yang telah dibangunnya ditinggal pergi? Kadang kita melihat leletan liur walet di papan sirip atau fondasi sarang yang tidak diteruskan. Pada papan sirip yang lain kadang kita melihat juga sarang walet yang sudah jadi, tapi tak ada penghuninya.Ini bisa diketahui karena di bawahnya tidak terdapat kotoran walet. Atau jika ada kotoran, namun sudah kering. Kondisi seperti ini bisa disebut sebagai sarang tidak aktif, yaitu keadaan dimana ada sarangnya, tetapi tidak ada burungnya.</p><p><br></p><p>Beberapa faktor penyebab pindahnya walet bisa dikelompokkan menjadi dua, yaitu faktor internal dan faktor eksternal.</p><p><br></p><p><strong>Faktor Internal</strong></p><p><strong>Faktor internal merupakan penyebab perginya walet yang berasal dari dalam gedung/rumah walet itu sendiri:</strong></p><ul><li>Adanya predator yang membuat burung walet merasa tidak aman.</li><li>Papan sirip yang semula kering, namun karena terjadi kebocoran pada dak/plafon, lalu rembesan airnya membasahi bidang papan sirip. Walet lalu akan pindah ke papan sirip lain. Sirip yang basah akan membuat daya rekat liur walet menjadi berkurang. Walet merasa tidak aman membangun sarang di tempat basah. Walet khawatir kekuatan sarangnya tidak tahan lama dan mudah lepas.</li><li>Ada kemungkinan salah satu pasangan mati sehingga walet harus memilih pasangan baru dan memilih tempat baru.</li><li>Walet terganggu karena ada predator, misalnya tikus, tokek, cicak, atau kecoak. Walet kurang nyaman lagi, atau terancam jiwanya.</li><li>Kelembaban ruangan/gedung yang semula, misalnya 85% karena air yang ada di kolam/banyak kering, akhirnya kelembaban turun menjadi 50% sehingga ruangan menjadi kering. Walet merasa tak nyaman lagi membikin sarang di tempat kering. Air liurnya susah keluar dari tenggorokannya.</li><li>Twiter di papan sirip mati, atau sound system suara rekaman walet rusak sehingga tak ada bunyi suara walet. Pada gedung baru, bukanlah walet masuk gedung karena ada suara rekaman walet dan walet menginap karena ada suara elektronik itu? Jika suara tak ada lagi, walet akan pindah ke gedung? yang ada bunyi suara walet meskipun hanya berupa rekaman.</li><li>Selain hal tersebut di atas, penanganan panen yang salah juga mengakibatkan burung walet stres dan pergi dari gedung/rumah walet.</li></ul><p><br></p><p><strong>Faktor Eksternal</strong></p><p>Faktor eksternal yang merupakan penyebab perg', '9lc5c1ue0jl6piqbz.jpeg', '2018-08-23 15:13:28'),
(12, 16, 'asd', 'asd', 'coba aja', '<p>lkas;ldk;asldka;lsd</p><p>aalskdhalskhdlaksdhalksdjaslkjdlaksd</p><ol><li>asljkdhaksjldhakjsdasjdhaskjd</li><li>as;kdjlaksdj</li><li>aslkdhaksjd</li><li>assdlaskdlaksd</li><li><br></li></ol>', '9lc5c1te4jlbxnwr3.png', '2018-08-27 07:00:17');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `user_customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity_cart` int(200) NOT NULL,
  `price` varchar(300) NOT NULL,
  `total_price` int(200) NOT NULL,
  `delivery_method` varchar(300) NOT NULL,
  `payment_method` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `nama_category` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `nama_category`) VALUES
(1, 'Dried Bird\'s Nest'),
(2, 'Bottled Bird\'s Nest'),
(3, 'Brid\'s Gifts');

-- --------------------------------------------------------

--
-- Table structure for table `condition`
--

CREATE TABLE `condition` (
  `id` int(11) NOT NULL,
  `nama_condition` varchar(300) NOT NULL,
  `class` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `condition`
--

INSERT INTO `condition` (`id`, `nama_condition`, `class`) VALUES
(1, 'Fresh', 'ribbon ribbon-info text-uppercase'),
(2, 'Sold', 'ribbon ribbon-danger text-uppercase'),
(3, 'Sale', 'ribbon ribbon-primary text-uppercase'),
(4, 'New', 'ribbon ribbon-success text-uppercase');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `useradmin_id` int(11) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `address` varchar(300) NOT NULL,
  `callcenter` varchar(200) NOT NULL,
  `electronic_support` varchar(300) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `useradmin_id`, `content`, `address`, `callcenter`, `electronic_support`, `date`) VALUES
(2, 1, 'Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh.', '13/25 New Avenue New Heaven, 45Y 73J England, Great Britain ', 'This number is toll free if calling from Great Britain otherwise we advise you to use the electronic form of communication. +33 555 444 333', 'Please feel free to write an email to us or to use our electronic ticketing system. info@fakeemail.com Ticketio - our ticketing support platform', '2018-08-08 09:03:15');

-- --------------------------------------------------------

--
-- Table structure for table `contact_form`
--

CREATE TABLE `contact_form` (
  `id` int(11) NOT NULL,
  `first_name` varchar(300) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `massage` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `view` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_form`
--

INSERT INTO `contact_form` (`id`, `first_name`, `last_name`, `email`, `massage`, `time`, `view`) VALUES
(1, 'asd', 'asss', 'shuadeputra@gmail.com', 'asdasd', '2018-08-19 08:22:44', '1'),
(2, 'asdas', 'asdasd', 'shuadeputra@gmail.com', 'asdasdasd', '2018-08-19 10:08:03', '1'),
(5, 'asdasd', 'asdasd', 'asdasd@gmail.coom', 'asdasd', '2018-08-21 14:05:25', '1'),
(6, 'asdas', 'asd', 'shuadeputra@gmail.com', 'asdasdasd', '2018-08-25 05:58:36', '1'),
(7, 'asda', 'asdas', 'shuadeputra@gmail.com', 'asdasdas', '2018-08-19 08:48:21', '1'),
(8, 'ade', 'putra', 'shuadeputra@gmail.com', 'mantap sekali', '2018-08-27 06:57:16', '1'),
(9, 'ade', 'putra', 'shuadeputra@gmail.com', 'test aja', '2018-08-27 06:56:22', '1');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_method`
--

CREATE TABLE `delivery_method` (
  `id` int(11) NOT NULL,
  `delivery` varchar(300) NOT NULL,
  `desc` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delivery_method`
--

INSERT INTO `delivery_method` (`id`, `delivery`, `desc`) VALUES
(1, 'JNE', 'Get it right on next day - fastest option possible.'),
(2, 'GOJEK', 'Get it right on today day'),
(3, 'SI CEPAT', 'Get it right on next day - fastest option possible.'),
(4, 'POS', 'Get it right on one weeks day - fastest option possible.');

-- --------------------------------------------------------

--
-- Table structure for table `front_home`
--

CREATE TABLE `front_home` (
  `id` int(11) NOT NULL,
  `useradmin_id` int(11) NOT NULL,
  `picture_slide` varchar(300) NOT NULL,
  `content_picture_slide` varchar(300) NOT NULL,
  `picture_picks1` varchar(300) NOT NULL,
  `content_picture_picks1` varchar(300) NOT NULL,
  `picture_picks2` varchar(300) NOT NULL,
  `content_picture_picks2` varchar(300) NOT NULL,
  `picture_picks3` varchar(300) NOT NULL,
  `content_picture_picks3` varchar(300) NOT NULL,
  `content_shipping` varchar(300) NOT NULL,
  `content_money` varchar(300) NOT NULL,
  `content_phone` varchar(300) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `front_home`
--

INSERT INTO `front_home` (`id`, `useradmin_id`, `picture_slide`, `content_picture_slide`, `picture_picks1`, `content_picture_picks1`, `picture_picks2`, `content_picture_picks2`, `picture_picks3`, `content_picture_picks3`, `content_shipping`, `content_money`, `content_phone`, `date`) VALUES
(1, 1, '9lc5c1w5sjlbyamcv.jpeg', 'About Us', '9lc5c15sgjl9jmud9.jpeg', 'Dried brid\'s nest', '9lc5c15sgjl9jmy5l.jpeg', 'Bottled Bird\'s Nest', '9lc5c15sgjl9jn2zv.jpeg', 'Brid\'s Gifts', 'Free Shipping over $30', '30 Days Money Back Guarantee', '0812-4962-1499', '2018-08-27 07:17:57');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(30) NOT NULL,
  `invoice_number` varchar(300) NOT NULL,
  `user_customerid` int(11) NOT NULL,
  `delivery` varchar(300) NOT NULL,
  `status` varchar(300) NOT NULL,
  `color` varchar(300) NOT NULL,
  `payment` varchar(300) NOT NULL,
  `total_price` varchar(300) NOT NULL,
  `Street` varchar(300) NOT NULL,
  `City` varchar(300) NOT NULL,
  `ZIP` varchar(300) NOT NULL,
  `State` varchar(300) NOT NULL,
  `Contry` varchar(300) NOT NULL,
  `Phone_Number` varchar(300) NOT NULL,
  `confirmation` varchar(300) NOT NULL,
  `confirmation_image` varchar(300) NOT NULL,
  `confirmation_name` varchar(300) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `invoice_number`, `user_customerid`, `delivery`, `status`, `color`, `payment`, `total_price`, `Street`, `City`, `ZIP`, `State`, `Contry`, `Phone_Number`, `confirmation`, `confirmation_image`, `confirmation_name`, `date`) VALUES
(12, 'INV0000011', 1, 'GOJEK', 'Received', 'badge badge-success', 'BCA', '2306', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', 'Pay', '9lc5c16kkjki4c0o3.jpeg', 'Ade putra', '2018-08-17 07:27:36'),
(13, 'INV0000012', 1, 'SI CEPAT', 'Received', 'badge badge-success', 'BCA', '2306', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', 'Pay', '2arc5gc7w4jkxob5pg.jpeg', 'Albert', '2018-08-26 16:11:52'),
(14, 'INV0000013', 1, 'SI CEPAT', 'Received', 'badge badge-success', 'BCA', '166', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', 'Pay', '9lc5c1ppsjl7r7si5.jpeg', 'Putra Ade', '2018-08-24 08:48:43'),
(15, 'INV0000014', 1, 'JNE', 'Received', 'badge badge-success', 'MEGA', '166', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', 'Pay', '', '', '2018-08-27 07:01:15'),
(16, 'INV0000015', 1, 'JNE', 'Received', 'badge badge-success', 'MEGA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', 'Pay', '9lc5c1wgkjl9o9xt8.jpeg', 'Putra Ade', '2018-08-25 17:01:56'),
(17, 'INV0000016', 1, 'JNE', 'Being prepared', 'badge badge-info', 'BCA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-06 07:07:55'),
(18, 'INV0000017', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BCA', '270', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(19, 'INV0000018', 1, 'JNE', 'Being prepared', 'badge badge-info', 'MEGA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-06 07:08:09'),
(20, 'INV0000019', 1, 'JNE', 'Being prepared', 'badge badge-info', 'MEGA', '350', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-06 07:08:36'),
(34, 'INV0000020', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'MEGA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(35, 'INV0000021', 1, 'JNE', 'Action needed', 'badge badge-warning', 'BNI', '114', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(36, 'INV0000022', 1, 'JNE', 'Action needed', 'badge badge-warning', 'BNI', '422', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(37, 'INV0000023', 1, 'GOJEK', 'Being prepared', 'badge badge-info', 'Mandiri', '110', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-06 06:28:14'),
(38, 'INV0000024', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BNI', '162', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(39, 'INV0000025', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BCA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(40, 'INV0000026', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BCA', '114', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(41, 'INV0000027', 1, 'JNE', 'Action needed', 'badge badge-warning', 'MEGA', '82', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(42, 'INV0000028', 1, 'SI CEPAT', 'Being prepared', 'badge badge-info', 'Mandiri', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-06 06:28:22'),
(43, 'INV0000029', 1, 'SI CEPAT', 'Received', 'badge badge-success', 'Mandiri', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-06 07:13:09'),
(44, 'INV0000030', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BCA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(45, 'INV0000031', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(46, 'INV0000032', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '162', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(47, 'INV0000033', 1, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(48, 'INV0000034', 1, 'GOJEK', 'Action needed', 'badge badge-warning', 'BCA', '62', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '11480', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(49, 'INV0000035', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '114', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(50, 'INV0000036', 1, 'POS', 'Action needed', 'badge badge-warning', 'Mandiri', '270', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-04 17:00:00'),
(51, 'INV0000037', 13, 'JNE', 'Action needed', 'badge badge-warning', 'BCA', '212', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(52, 'INV0000038', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '330', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(53, 'INV0000039', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BCA', '382', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(54, 'INV0000040', 13, 'JNE', 'Action needed', 'badge badge-warning', 'BNI', '121', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(55, 'INV0000041', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '266', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(56, 'INV0000042', 13, 'POS', 'Action needed', 'badge badge-warning', 'Mandiri', '264', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(57, 'INV0000043', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '330', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(58, 'INV0000044', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '218', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(59, 'INV0000045', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'BNI', '266', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(60, 'INV0000046', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'BNI', '264', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(61, 'INV0000047', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '264', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(62, 'INV0000048', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '394', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(63, 'INV0000049', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '266', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(64, 'INV0000050', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'BCA', '370', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(65, 'INV0000051', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '264', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(66, 'INV0000052', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '416', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(67, 'INV0000053', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '314', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(68, 'INV0000054', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'BCA', '402', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(69, 'INV0000055', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '333', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(70, 'INV0000056', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '177', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(71, 'INV0000057', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'MEGA', '271', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(72, 'INV0000058', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '368', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(73, 'INV0000059', 13, 'JNE', 'Action needed', 'badge badge-warning', 'MEGA', '216', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(74, 'INV0000060', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '314', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(75, 'INV0000061', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '454', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(76, 'INV0000062', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'BNI', '316', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(77, 'INV0000063', 13, 'GOJEK', 'Action needed', 'badge badge-warning', 'BNI', '318', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(78, 'INV0000064', 13, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '1126', 'jl.ga tau', 'jakarta', '123', '123', 'Indonesia', '080808080808', '', '', '', '2018-08-04 17:00:00'),
(79, 'INV0000065', 1, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '200', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-17 16:26:35'),
(80, 'INV0000066', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '102', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-24 08:40:58'),
(81, 'INV0000067', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '160', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-24 08:47:27'),
(82, 'INV0000068', 1, 'GOJEK', 'Action needed', 'badge badge-warning', 'Mandiri', '166', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-26 15:12:24'),
(83, 'INV0000069', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '160', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-26 15:30:05'),
(84, 'INV0000070', 1, 'SI CEPAT', 'Action needed', 'badge badge-warning', 'Mandiri', '110', 'jl.khsayhdan, kosan anggur', 'Jakarta Barat', '114801', 'Jakarta', 'Indoneisa', '081249621499', '', '', '', '2018-08-26 15:43:46'),
(85, 'INV0000071', 16, 'GOJEK', 'Action needed', 'badge badge-warning', 'BCA', '530', 'coba', 'coba', '123', '121', 'indonesja', '01928310293', 'Pay', '9lc5c1y40jlbxc6ie.png', 'Lintang', '2018-08-27 06:51:10');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id` int(11) NOT NULL,
  `invoiceid` varchar(300) NOT NULL,
  `total_price` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `price` varchar(300) NOT NULL,
  `quantity` varchar(300) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice_detail`
--

INSERT INTO `invoice_detail` (`id`, `invoiceid`, `total_price`, `product_name`, `price`, `quantity`, `date`) VALUES
(18, 'INV0000011', '2196', 'DRIED BLOOD RED', '549', '4', '2018-07-25 04:40:02'),
(19, 'INV0000011', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-07-25 04:40:02'),
(20, 'INV0000011', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-07-25 04:40:02'),
(21, 'INV0000012', '2196', 'DRIED BLOOD RED', '549', '4', '2018-07-25 06:03:59'),
(22, 'INV0000012', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-07-25 06:03:59'),
(23, 'INV0000012', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-07-25 06:03:59'),
(24, 'INV0000013', '156', 'GINSENG B\'NEST (6*75ML)', '52', '3', '2018-07-25 06:05:59'),
(25, 'INV0000014', '156', 'GINSENG B\'NEST (6*75ML)', '52', '3', '2018-07-25 07:00:18'),
(26, 'INV0000015', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 07:02:18'),
(27, 'INV0000016', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 07:04:15'),
(28, 'INV0000017', '104', 'GINSENG B\'NEST (6*75ML)', '52', '2', '2018-07-25 07:05:57'),
(29, 'INV0000017', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 07:05:57'),
(30, 'INV0000017', '104', 'GINSENG B\'NEST (6*75ML)', '52', '2', '2018-07-25 07:05:57'),
(31, 'INV0000018', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 07:07:41'),
(32, 'INV0000019', '144', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '2', '2018-07-25 07:08:47'),
(33, 'INV0000019', '144', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '2', '2018-07-25 07:08:47'),
(34, 'INV0000019', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 07:08:47'),
(54, 'INV0000020', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:04:23'),
(55, 'INV0000021', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-07-25 08:06:11'),
(56, 'INV0000022', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-07-25 08:07:26'),
(57, 'INV0000022', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-07-25 08:07:26'),
(58, 'INV0000022', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-07-25 08:07:26'),
(59, 'INV0000022', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-07-25 08:07:26'),
(60, 'INV0000023', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-07-25 08:09:41'),
(61, 'INV0000024', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-07-25 08:16:58'),
(62, 'INV0000024', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:16:58'),
(63, 'INV0000025', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:17:17'),
(64, 'INV0000026', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:23:54'),
(65, 'INV0000026', '52', 'GINSENG B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:23:54'),
(66, 'INV0000027', '72', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '1', '2018-07-25 08:36:37'),
(67, 'INV0000028', '52', 'GINSENG B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:50:25'),
(68, 'INV0000029', '52', 'GINSENG B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:51:13'),
(69, 'INV0000030', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 08:59:33'),
(70, 'INV0000031', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 09:00:22'),
(71, 'INV0000032', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 09:20:03'),
(72, 'INV0000032', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-07-25 09:20:03'),
(73, 'INV0000032', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-07-25 09:20:03'),
(74, 'INV0000033', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 11:03:10'),
(75, 'INV0000034', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-07-25 14:25:19'),
(76, 'INV0000035', '104', 'GINSENG B\'NEST (6*75ML)', '52', '2', '2018-08-01 13:13:54'),
(77, 'INV0000036', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 04:01:46'),
(78, 'INV0000036', '104', 'GINSENG B\'NEST (6*75ML)', '52', '2', '2018-08-02 04:01:46'),
(79, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:40:29'),
(80, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:40:29'),
(81, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:46:35'),
(82, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:46:35'),
(83, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:47:42'),
(84, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:47:42'),
(85, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:49:27'),
(86, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:49:28'),
(87, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:52:01'),
(88, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:52:01'),
(89, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:53:01'),
(90, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:53:01'),
(91, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:53:23'),
(92, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:53:23'),
(93, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:55:40'),
(94, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:55:40'),
(95, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:56:00'),
(96, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:56:00'),
(97, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:56:59'),
(98, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:56:59'),
(99, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:57:08'),
(100, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:57:08'),
(101, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:58:01'),
(102, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:58:02'),
(103, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:58:20'),
(104, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:58:20'),
(105, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:58:50'),
(106, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:58:50'),
(107, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:59:05'),
(108, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:59:05'),
(109, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 06:59:30'),
(110, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 06:59:30'),
(111, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:00:38'),
(112, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:00:38'),
(113, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:01:07'),
(114, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:01:07'),
(115, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:02:27'),
(116, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:02:27'),
(117, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:03:35'),
(118, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:03:35'),
(119, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:04:13'),
(120, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:04:13'),
(121, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:04:37'),
(122, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:04:37'),
(123, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:05:28'),
(124, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:05:28'),
(125, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:05:54'),
(126, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:05:54'),
(127, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:06:35'),
(128, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:06:35'),
(129, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:07:51'),
(130, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:07:51'),
(131, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:08:29'),
(132, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:08:29'),
(133, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:09:15'),
(134, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:09:15'),
(135, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:09:48'),
(136, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:09:48'),
(137, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:11:49'),
(138, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:11:50'),
(139, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:11:50'),
(140, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:11:50'),
(141, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:12:19'),
(142, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:12:19'),
(143, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:13:06'),
(144, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:13:06'),
(145, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:13:41'),
(146, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:13:41'),
(147, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:15:36'),
(148, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:15:36'),
(149, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:16:21'),
(150, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:16:21'),
(151, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:18:06'),
(152, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:18:06'),
(153, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:18:56'),
(154, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:18:56'),
(155, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:19:56'),
(156, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:19:56'),
(157, 'INV0000037', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-02 07:25:12'),
(158, 'INV0000037', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 07:25:12'),
(159, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:29:42'),
(160, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:29:42'),
(161, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:30:12'),
(162, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:30:12'),
(163, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:30:28'),
(164, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:30:28'),
(165, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:31:03'),
(166, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:31:04'),
(167, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:31:21'),
(168, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:31:21'),
(169, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:31:31'),
(170, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:31:31'),
(171, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:31:34'),
(172, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:31:34'),
(173, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:32:38'),
(174, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:32:38'),
(175, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:33:31'),
(176, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:33:31'),
(177, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:33:45'),
(178, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:33:45'),
(179, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:34:03'),
(180, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:34:03'),
(181, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:35:43'),
(182, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:35:43'),
(183, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:37:04'),
(184, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:37:05'),
(185, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:37:28'),
(186, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:37:28'),
(187, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:38:48'),
(188, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:38:48'),
(189, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:39:30'),
(190, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:39:30'),
(191, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:41:30'),
(192, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:41:30'),
(193, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:42:17'),
(194, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:42:17'),
(195, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:42:52'),
(196, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:42:53'),
(197, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:43:02'),
(198, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:43:02'),
(199, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:44:26'),
(200, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:44:26'),
(201, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:45:03'),
(202, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:45:03'),
(203, 'INV0000038', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 07:46:13'),
(204, 'INV0000038', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:46:13'),
(205, 'INV0000039', '156', 'GINSENG B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:49:16'),
(206, 'INV0000039', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 07:49:16'),
(207, 'INV0000040', '42', 'ROCK SUGAR BIRDNEST (170ML)', '21', '2', '2018-08-02 07:52:22'),
(208, 'INV0000040', '69', 'GINSENG BIRDNEST (170ML)', '23', '3', '2018-08-02 07:52:22'),
(209, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:54:46'),
(210, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:54:46'),
(211, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:55:40'),
(212, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:55:40'),
(213, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:56:29'),
(214, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:56:29'),
(215, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:57:17'),
(216, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:57:17'),
(217, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:57:19'),
(218, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:57:19'),
(219, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:57:42'),
(220, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:57:42'),
(221, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:58:58'),
(222, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:58:58'),
(223, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 07:59:19'),
(224, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 07:59:19'),
(225, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:02:18'),
(226, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:02:18'),
(227, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:02:34'),
(228, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:02:34'),
(229, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:05:14'),
(230, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:05:58'),
(231, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:06:16'),
(232, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:06:51'),
(233, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:07:12'),
(234, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:07:12'),
(235, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:07:37'),
(236, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:07:37'),
(237, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:08:20'),
(238, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:08:20'),
(239, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:08:47'),
(240, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:08:47'),
(241, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:10:33'),
(242, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:10:33'),
(243, 'INV0000041', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:10:50'),
(244, 'INV0000041', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:10:50'),
(245, 'INV0000042', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:12:09'),
(246, 'INV0000042', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:12:09'),
(247, 'INV0000042', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:12:31'),
(248, 'INV0000042', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:12:31'),
(249, 'INV0000043', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:13:35'),
(250, 'INV0000043', '216', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '3', '2018-08-02 08:13:35'),
(251, 'INV0000044', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:14:38'),
(252, 'INV0000044', '52', 'GINSENG B\'NEST (6*75ML)', '52', '1', '2018-08-02 08:14:39'),
(253, 'INV0000045', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:15:51'),
(254, 'INV0000045', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:15:51'),
(255, 'INV0000045', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:16:03'),
(256, 'INV0000045', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:16:03'),
(257, 'INV0000045', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:16:20'),
(258, 'INV0000045', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:16:21'),
(259, 'INV0000046', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:18:20'),
(260, 'INV0000046', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:18:20'),
(261, 'INV0000047', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:21:03'),
(262, 'INV0000047', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:21:03'),
(263, 'INV0000047', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:22:06'),
(264, 'INV0000047', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:22:06'),
(265, 'INV0000047', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:23:26'),
(266, 'INV0000047', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:23:27'),
(267, 'INV0000048', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:25:42'),
(268, 'INV0000048', '156', 'GINSENG B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:25:42'),
(269, 'INV0000048', '72', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '1', '2018-08-02 08:25:42'),
(270, 'INV0000048', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:28:03'),
(271, 'INV0000048', '156', 'GINSENG B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:28:04'),
(272, 'INV0000048', '72', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '1', '2018-08-02 08:28:04'),
(273, 'INV0000048', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:35:07'),
(274, 'INV0000048', '156', 'GINSENG B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:35:07'),
(275, 'INV0000048', '72', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '1', '2018-08-02 08:35:07'),
(276, 'INV0000049', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:36:48'),
(277, 'INV0000049', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:36:48'),
(278, 'INV0000050', '260', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '5', '2018-08-02 08:37:41'),
(279, 'INV0000050', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 08:37:41'),
(280, 'INV0000051', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:40:12'),
(281, 'INV0000051', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 08:40:12'),
(282, 'INV0000052', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:41:27'),
(283, 'INV0000052', '250', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '5', '2018-08-02 08:41:27'),
(284, 'INV0000053', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:42:24'),
(285, 'INV0000053', '200', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '4', '2018-08-02 08:42:24'),
(286, 'INV0000054', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:47:32'),
(287, 'INV0000054', '288', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '4', '2018-08-02 08:47:32'),
(288, 'INV0000054', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:48:43'),
(289, 'INV0000054', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:49:05'),
(290, 'INV0000054', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:49:31'),
(291, 'INV0000054', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:50:24'),
(292, 'INV0000054', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:52:03'),
(293, 'INV0000054', '288', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '4', '2018-08-02 08:52:03'),
(294, 'INV0000055', '260', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '5', '2018-08-02 08:53:20'),
(295, 'INV0000055', '63', 'ROCK SUGAR BIRDNEST (170ML)', '21', '3', '2018-08-02 08:53:20'),
(296, 'INV0000056', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 08:54:46'),
(297, 'INV0000056', '63', 'ROCK SUGAR BIRDNEST (170ML)', '21', '3', '2018-08-02 08:54:46'),
(298, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:55:50'),
(299, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:55:50'),
(300, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:56:15'),
(301, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:56:15'),
(302, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:56:34'),
(303, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:56:34'),
(304, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:56:47'),
(305, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:56:47'),
(306, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:57:03'),
(307, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:57:03'),
(308, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:58:51'),
(309, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:58:51'),
(310, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:59:06'),
(311, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:59:07'),
(312, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:59:19'),
(313, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:59:19'),
(314, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 08:59:51'),
(315, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 08:59:51'),
(316, 'INV0000057', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 09:00:21'),
(317, 'INV0000057', '105', 'ROCK SUGAR BIRDNEST (170ML)', '21', '5', '2018-08-02 09:00:22'),
(318, 'INV0000058', '208', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '4', '2018-08-02 09:03:35'),
(319, 'INV0000058', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 09:03:35'),
(320, 'INV0000059', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 09:04:26'),
(321, 'INV0000059', '50', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '1', '2018-08-02 09:04:26'),
(322, 'INV0000060', '104', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '2', '2018-08-02 09:05:11'),
(323, 'INV0000060', '200', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '4', '2018-08-02 09:05:11'),
(324, 'INV0000061', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 09:06:20'),
(325, 'INV0000061', '288', 'ROCK SUGAR B\'NEST (4*150ML)', '72', '4', '2018-08-02 09:06:20'),
(326, 'INV0000062', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-02 09:07:12'),
(327, 'INV0000062', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-02 09:07:12'),
(328, 'INV0000063', '208', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '4', '2018-08-02 09:12:17'),
(329, 'INV0000063', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-02 09:12:17'),
(330, 'INV0000064', '552', 'DRIED YANTIAO', '138', '4', '2018-08-02 09:17:16'),
(331, 'INV0000064', '564', 'DRIED TRIANGLE', '188', '3', '2018-08-02 09:17:16'),
(332, 'INV0000065', '52', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '1', '2018-08-17 16:26:35'),
(333, 'INV0000065', '138', 'DRIED YANTIAO', '138', '1', '2018-08-17 16:26:35'),
(334, 'INV0000066', '92', 'GINSENG BIRDNEST VARIAN', '23', '4', '2018-08-24 08:40:58'),
(335, 'INV0000067', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-24 08:47:27'),
(336, 'INV0000068', '156', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '3', '2018-08-26 15:12:24'),
(337, 'INV0000069', '150', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '3', '2018-08-26 15:30:05'),
(338, 'INV0000070', '100', 'ROCK SUGAR B\'NEST (6*75ML)', '50', '2', '2018-08-26 15:43:46'),
(339, 'INV0000071', '520', 'FLOWER SERIES B\'NEST (6*75ML)', '52', '10', '2018-08-27 06:50:30');

-- --------------------------------------------------------

--
-- Table structure for table `measure`
--

CREATE TABLE `measure` (
  `id` int(11) NOT NULL,
  `name_measure` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `measure`
--

INSERT INTO `measure` (`id`, `name_measure`) VALUES
(1, 'Box'),
(2, 'Pcs');

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL,
  `name_payment` varchar(300) NOT NULL,
  `number_payment` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`id`, `name_payment`, `number_payment`) VALUES
(1, 'Mandiri', '5271219572'),
(2, 'BCA', '5271219572'),
(3, 'BNI', '52525252'),
(4, 'MEGA', '12121212');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `useradmin_id` int(11) NOT NULL,
  `nama_product` varchar(300) NOT NULL,
  `price` varchar(100) NOT NULL,
  `quantity` varchar(300) NOT NULL,
  `category_id` int(100) NOT NULL,
  `Unit_measure_id` int(11) NOT NULL,
  `condition_id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `useradmin_id`, `nama_product`, `price`, `quantity`, `category_id`, `Unit_measure_id`, `condition_id`, `description`) VALUES
(27, 1, 'GINSENG BIRDNEST VARIAN', '23', '56', 2, 1, 1, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'),
(28, 1, 'DRIED YANTIAO', '138', '25', 1, 1, 1, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'),
(29, 1, 'DRIED TRIANGLE', '188', '42', 1, 1, 2, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'),
(30, 1, 'DRIED WHITE', '97', '30', 1, 2, 1, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'),
(31, 1, 'DRIED GOLDEN ORANGE', '499', '300', 1, 1, 3, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'),
(32, 1, 'DRIED BLOOD RED', '549', '200', 1, 1, 1, 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. '),
(35, 1, 'ROCK SUGAR BIRDNEST (170ML)', '21', '198', 2, 2, 4, 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
(36, 1, 'GINSENG BIRDNEST (170ML)', '23', '198', 2, 2, 3, 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
(37, 1, 'ROCK SUGAR B\'NEST (4*150ML)', '72', '245', 2, 1, 4, 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
(38, 1, 'GINSENG B\'NEST (6*75ML)', '52', '245', 3, 1, 1, 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
(39, 1, 'ROCK SUGAR B\'NEST (6*75ML)', '50', '192', 2, 1, 3, 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'),
(40, 0, 'FLOWER SERIES B\'NEST (6*75ML)', '52', '234', 2, 1, 4, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_images` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`id`, `product_id`, `product_images`) VALUES
(14, 40, '9lc5c1aqgjjqkl5no.png'),
(15, 39, '9lc5c1aqgjjqkoi97.png'),
(16, 38, '9lc5c1aqgjjqkp9o7.png'),
(17, 37, '9lc5c1aqgjjqkr7ba.png'),
(18, 36, '9lc5c1aqgjjqkua6h.png'),
(19, 35, '9lc5c1aqgjjqkwksj.png'),
(20, 32, '9lc5c1aqgjjqkz2z5.png'),
(21, 31, '9lc5c1aqgjjql26ri.png'),
(23, 30, '9lc5c1aqgjjql5gux.png'),
(24, 29, '9lc5c1aqgjjql7toh.png'),
(25, 28, '9lc5c1aqgjjql9h6h.png'),
(26, 27, '9lc5c1aqgjjqlcjeh.png'),
(27, 28, '9lc5c1ey0jky5frr6.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `sending_contact_email`
--

CREATE TABLE `sending_contact_email` (
  `id` int(100) NOT NULL,
  `to` varchar(300) NOT NULL,
  `subject` varchar(300) NOT NULL,
  `massage` varchar(500) NOT NULL,
  `replay_massage_before` varchar(500) NOT NULL,
  `customer_firstname` varchar(300) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sending_contact_email`
--

INSERT INTO `sending_contact_email` (`id`, `to`, `subject`, `massage`, `replay_massage_before`, `customer_firstname`, `time`) VALUES
(5, 'shuadeputra@gmail.com', 'COba aja', '<p>Persatuan indonesia</p><ol><li>lalala</li><li>lulu</li><li>lili</li></ol>', 'asdasd', 'asd', '2018-08-19 10:07:05'),
(6, 'reyzandrean@gmail.com', 'test aja', '<p>Mantap sekali</p><ul><li>selamat</li><li>berjuang</li><li>untuk besok</li></ul><p>thanks </p>', 'asdasd', 'asd', '2018-08-27 04:04:29'),
(7, 'shuadeputra@gmail.com', 'test aja', '<ol><li>Purwadhikaa</li><li>asdasd</li><li>asdasda</li><li>a</li></ol><p>asdasdasd</p>', 'test aja', 'ade', '2018-08-27 06:56:50'),
(8, 'shuadeputra@gmail.com', 'test aja', '<ol><li>Purwadhikaa</li><li>asdasd</li><li>asdasda</li><li>a</li></ol><p>asdasdasd</p>', 'test aja', 'ade', '2018-08-27 06:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin`
--

CREATE TABLE `user_admin` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `waktu_dibuat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image_profile` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_admin`
--

INSERT INTO `user_admin` (`id`, `name`, `password`, `waktu_dibuat`, `image_profile`) VALUES
(1, 'ade', 'ade123', '2018-08-22 14:52:52', '9lc5c1lwsjl57kml1.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin_ditel`
--

CREATE TABLE `user_admin_ditel` (
  `id` int(11) NOT NULL,
  `useradmin_id` int(11) NOT NULL,
  `full_name` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `gender` varchar(300) NOT NULL,
  `address` varchar(300) NOT NULL,
  `skils` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_admin_ditel`
--

INSERT INTO `user_admin_ditel` (`id`, `useradmin_id`, `full_name`, `email`, `phone`, `gender`, `address`, `skils`) VALUES
(1, 1, 'Ade putra', 'shuadeputra@gmail.com', '081249621499', 'Boy', 'jl.khsyandan, kosan 10z', 'FrontEnd Developer');

-- --------------------------------------------------------

--
-- Table structure for table `user_customer`
--

CREATE TABLE `user_customer` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `waktu_dibuat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_customer`
--

INSERT INTO `user_customer` (`id`, `name`, `password`, `waktu_dibuat`) VALUES
(1, 'Coba', '123', '2018-08-17 08:08:14'),
(2, 'Dewi', '123', '2018-07-26 15:03:09'),
(3, 'Ricky', '123', '2018-07-26 15:07:27'),
(4, 'Rickycuy', '123', '2018-07-26 15:12:19'),
(6, 'ade123', '123', '2018-07-26 15:19:05'),
(7, 'asd', '123', '2018-07-26 15:24:24'),
(8, 'coba', '123', '2018-07-27 14:03:16'),
(9, 'asdas', '123123', '2018-07-27 14:04:14'),
(10, 'asdasdasd', '123123', '2018-07-27 17:14:46'),
(11, 'asdasdasd', '123123', '2018-07-27 17:15:32'),
(12, 'asdasdasd', '123123', '2018-07-27 17:16:01'),
(13, 'vincent', '1111', '2018-08-02 04:37:55'),
(14, 'test123', '123', '2018-08-17 04:25:10'),
(15, 'Cobaade', 'asd', '2018-08-24 06:19:14'),
(16, 'Lintang', '1234', '2018-08-27 06:54:47');

-- --------------------------------------------------------

--
-- Table structure for table `user_customer_ditel`
--

CREATE TABLE `user_customer_ditel` (
  `id` int(11) NOT NULL,
  `sex` varchar(300) NOT NULL,
  `phone` varchar(300) NOT NULL,
  `First_Name` varchar(300) NOT NULL,
  `Last_Name` varchar(300) NOT NULL,
  `Email_Address` varchar(300) NOT NULL,
  `image` varchar(300) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_customer_ditel`
--

INSERT INTO `user_customer_ditel` (`id`, `sex`, `phone`, `First_Name`, `Last_Name`, `Email_Address`, `image`, `date`) VALUES
(1, 'man', '882929', 'ade123', 'putra', 'ade@gmail.com', '9lc5c1nxojlazu5uj.png', '2018-08-26 15:13:22'),
(2, 'women', '081231238123', 'Dewi', 'indra', 'dewi@gmail.com', '2arc5gc88ojk4bf8ez.png', '2018-07-27 18:23:35'),
(3, 'undefined', '0812345678', 'Ricky', 'Anderson', 'aderson@gmail.com', 'Karakter 1.png', '2018-07-26 15:07:28'),
(4, 'male', '0812465879', 'Ricky', 'cuy', 'rickycuy@gmail.com', 'Karakter 2.png', '2018-07-26 15:12:19'),
(6, 'male', '0812567832', 'Adeade', 'putraputra', 'adeade@gmail.com', 'Karakter 4.png', '2018-07-26 15:19:05'),
(7, 'male', '123123', 'asd', 'asd', 'asd', 'lcon.png', '2018-07-27 18:23:12'),
(8, 'male', '1231231', 'asd', 'asd', '123@gmail.com', 'Karakter 38.png', '2018-07-27 14:03:16'),
(9, 'male', '1231231', 'asdasd', 'asdasd', 'asdasd', 'Karakter 40.png', '2018-07-27 14:04:14'),
(10, 'male', '123123', 'asdasd', 'asdasdasdas', 'asdasd@gmail.com', '2arc5gcc68jk48yqb0.png', '2018-07-27 17:14:46'),
(11, 'male', '123123', 'asdasd', 'asdasdasdas', 'asdasd@gmail.com', '2arc5gc1pgjk48zpm1.png', '2018-07-27 17:15:32'),
(12, 'male', '123123', 'asdasd', 'asdasdasdas', 'asdasd@gmail.com', '2arc5gc3ncjk490cfe.png', '2018-07-27 17:16:02'),
(13, 'male', '080808080808', 'vincent', 'jomblo', 'vincent@gmail.com', '9lc5c13cojkc0ut91.png', '2018-08-02 03:49:56'),
(14, 'male', '07808080123', 'ade', 'ade', 'test@gmail.com', '2arc5gc7w4jkxigfc9.jpeg', '2018-08-17 04:45:47'),
(15, 'male', '123', 'asd', 'asd', 'asd', '9lc5c1qtsjl7lvkep.jpeg', '2018-08-24 06:19:14'),
(16, 'male', '01928310293', 'coba123', 'coba', 'coba', '9lc5c1y40jlbxf4ei.png', '2018-08-27 06:53:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutus`
--
ALTER TABLE `aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address_customer`
--
ALTER TABLE `address_customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `condition`
--
ALTER TABLE `condition`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_form`
--
ALTER TABLE `contact_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_method`
--
ALTER TABLE `delivery_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `front_home`
--
ALTER TABLE `front_home`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `measure`
--
ALTER TABLE `measure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sending_contact_email`
--
ALTER TABLE `sending_contact_email`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_admin`
--
ALTER TABLE `user_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_admin_ditel`
--
ALTER TABLE `user_admin_ditel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_customer`
--
ALTER TABLE `user_customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_customer_ditel`
--
ALTER TABLE `user_customer_ditel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutus`
--
ALTER TABLE `aboutus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `address_customer`
--
ALTER TABLE `address_customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `condition`
--
ALTER TABLE `condition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `contact_form`
--
ALTER TABLE `contact_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `delivery_method`
--
ALTER TABLE `delivery_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `front_home`
--
ALTER TABLE `front_home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=340;
--
-- AUTO_INCREMENT for table `measure`
--
ALTER TABLE `measure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `sending_contact_email`
--
ALTER TABLE `sending_contact_email`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user_admin`
--
ALTER TABLE `user_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user_admin_ditel`
--
ALTER TABLE `user_admin_ditel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user_customer`
--
ALTER TABLE `user_customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `user_customer_ditel`
--
ALTER TABLE `user_customer_ditel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
