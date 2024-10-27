const express = require("express");
const { createAOrder, getOrderByEmail } = require("./order.controller");

const router = express.Router();

// create order
router.post("/", createAOrder);

// get all orders by user email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
