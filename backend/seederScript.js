require("dotenv").config;
const connectDb = require("./config/db");
const Product = require("./model/Product");
const ProductData = require("./data/products");

connectDb();

const seedData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(ProductData);

     console.log('Data imported successfully!');
     process.exit();
  } catch (error) {
    console.log('Data imported failed!', error);
     process.exit(1);
  }
}

seedData();