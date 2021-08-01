const Product = require("../model/Product");

const getAllProducts = async (req,res) => {
  try {
    const Products = await Product.find({});
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({message: "Sever error"});
  }
}

const getProductByID = async (req,res) => {
  const Products = await Product.findById(req.params.id);
  try {
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({message: "Sever error"});
  }
}

module.exports = {
  getAllProducts,
  getProductByID
}