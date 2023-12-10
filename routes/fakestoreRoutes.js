const express = require("express");
const router = express.Router();

const fakestoreController = require("../controllers/fakestore");

router.get("/products/:category", fakestoreController.getProductsByCategory);

module.exports = router;
