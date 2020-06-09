const express = require("express");
const router = express.Router();

const { createOrder , getAllOrder } = require("../controllers/order");

router.get("/order/create", getAllOrder);
router.post("orders", createOrder);


module.exports = router;