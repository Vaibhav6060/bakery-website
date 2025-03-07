const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
app.use(cors());
app.use(express.json());

// Database setup
const sequelize = new Sequelize("bakerydb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

// Define Product Model
const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
  Product.bulkCreate([
    { name: "Chocolate Cake", price: 15.99, image: "https://via.placeholder.com/150" },
    { name: "Blueberry Muffin", price: 3.99, image: "https://via.placeholder.com/150" },
    { name: "Croissant", price: 2.99, image: "https://via.placeholder.com/150" },
  ]);
});

app.get("/products", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.listen(5000, () => console.log("Server running on port 5000"));
