CREATE DATABASE bakerydb;

USE bakerydb;

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(500) NOT NULL
);

INSERT INTO Products (name, price, image) VALUES
('Chocolate Cake', 15.99, 'https://via.placeholder.com/150'),
('Blueberry Muffin', 3.99, 'https://via.placeholder.com/150'),
('Croissant', 2.99, 'https://via.placeholder.com/150');
