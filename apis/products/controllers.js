const slugify = require("slugify");
const Product = require("../../database/models/Product");
// let products = require("../../data/chProducts");

exports.fetchProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addProductController = (req, res) => {
  const { name, image, description, color, quantity, price } = req.body;
  const id = products[products.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const product = {
    id,
    name,
    slug,
    image,
    description,
    color,
    quantity,
    price,
  };
  products = [...products, product];
  res.status(201).json({ msg: "product created", product });
};

exports.deleteProductController = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => +product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => +product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ msg: "not found" });
  }
};
