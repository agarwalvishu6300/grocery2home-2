const express = require("express");
const router = express.Router();

const { createProduct, getAllProduct} = require("../controllers/product");

router.get("/products",getAllProduct);
router.post("/product/create", createProduct );

module.exports = router;