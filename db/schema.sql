CREATE DATABASE products_db;
USE products_db;

CREATE TABLE products
(
	id int AUTO_INCREMENT NOT NULL,
	product_name varchar(255) NOT NULL,
	department_name TEXT NOT NULL,
	price_ DECIMAL(10,2) NOT NULL,
	stock_quantity INT(10)NOT Null,
	PRIMARY KEY (id)
);
INSERT INTO products( product_name, department_name, price_, stock_quantity) VALUES
  ("Uncharted 4", "Video Games", 49.95, 150),
  ("DOOM", "Video Games", 59.99, 200),
  ("Crate of Spam", "Food and Drink", 24.50, 50),
  ("Cool Shades", "Apparel", 75.00, 5),
  ("Worn Denim Jeans", "Apparel", 54.25, 35),
  ("Survival Towel", "Necessities", 42.42, 42),
  ("Bill and Ted's Excellent Adventure", "Films", 15.00, 25),
  ("Mad Max: Fury Road", "Films", 25.50, 57),
  ("Monopoly", "Board Games", 30.50, 35),
  ("Yahtzee", "Board Games", 19.95, 23);


