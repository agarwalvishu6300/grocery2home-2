const express = require("express");
const router = express.Router();

const { createOrder , getAllOrder } = require("../controllers/order");

router.post("/order/create", createOrder);
router.get("/orders", getAllOrder);


module.exports = router;