const express =  require("express");
const router = express.Router();
const {getAllProducts, getProductByID} = require("../controller/productController")

router.get("/", getAllProducts);

router.get("/:id", getProductByID);

module.exports = router;

