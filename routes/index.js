const express = require('express');
const {isLoggedIn} = require('../middlewares/isLoggedIn');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { error: '' });
});


router.get('/shop', isLoggedIn, async (req, res) => {
  try {
    const products = await productModel.find(); 

    res.render('shop', { products: products });  
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching products');
  }
});


module.exports = router;
