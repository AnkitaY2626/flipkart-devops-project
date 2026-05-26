const express = require('express');

console.log("Product Routes Loaded");

const router = express.Router();

const Product = require('../models/Product');

router.get('/test', (req, res) => {
  res.send("Test Route Working");
});

router.get('/products', async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.post('/products', async (req, res) => {

  try {

    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.json(savedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;