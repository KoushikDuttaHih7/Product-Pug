const path = require("path");

const express = require("express");

const rootDir = require("../utility/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // for pug
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS:true, productCSS:true, activeAddProduct: true});
});
// same path can be used it the method differs

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
