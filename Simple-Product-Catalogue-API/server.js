const express = require("express");

const app = express();

const PORT = 5000;

// Allow Express to receive JSON
app.use(express.json());

// Products
let products = [
  {
    id: 1,
    name: "Laptop",
    price: 450000,
  },
  {
    id: 2,
    name: "Phone",
    price: 250000,
  },
  {
    id: 3,
    name: "Headphones",
    price: 35000,
  },
];

// Home route
app.get("/", (req, res) => {
  res.send("Product Catalogue API");
});

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET one product
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  res.json(product);
});

// POST a new product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);

  res.json(newProduct);
});

// PUT/update a product
app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  product.name = req.body.name;
  product.price = req.body.price;

  res.json(product);
});

// DELETE a product
app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((product) => product.id !== id);

  res.json({
    message: "Product deleted",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});