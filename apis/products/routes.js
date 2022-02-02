const express = require("express");
const {
  addProductController,
  fetchProductsController,
  deleteProductController,
} = require("./controllers");

const productRouter = express.Router();

productRouter.post("/", addProductController);

productRouter.get("/", fetchProductsController);

productRouter.delete("/:productId", deleteProductController);

module.exports = productRouter;
