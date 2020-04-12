DROP TABLE IF EXISTS `todolistentries`;
DROP TABLE IF EXISTS `todolists`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `todolistentries` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `todo_list_id` int(11) NOT NULL,
  `title` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` enum('Planned','Completed') COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`entry_id`),
  UNIQUE KEY `entry_id` (`entry_id`)
);

CREATE TABLE `todolists` (
  `todo_list_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` enum('Planned','In-Progress','Completed','Discarded') COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  `modification_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`todo_list_id`),
  UNIQUE KEY `todo_list_id` (`todo_list_id`)
);

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` char(60) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
);