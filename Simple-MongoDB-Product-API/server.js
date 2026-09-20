// Import Express
const express = require("express");

// Import MongoDB
const { MongoClient, ObjectId } = require("mongodb");

// Import dotenv
// dotenv allows us to use values from our .env file
require("dotenv").config();

// Create our Express app
const app = express();

// Allow our API to receive JSON
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);

// Start the server
async function startServer() {
  // Connect to MongoDB
  await client.connect();

  console.log("MongoDB connected");

  // Select our database
  const database = client.db("productDatabase");

  // Select the products collection
  const products = database.collection("products");

  // GET ALL PRODUCTS
  app.get("/products", async (req, res) => {
    // Get all products from MongoDB
    const allProducts = await products.find().toArray();

    // Send the products to the client
    res.json(allProducts);
  });

  // GET ONE PRODUCT
  app.get("/products/:id", async (req, res) => {
    // Get the ID from the URL
    const id = req.params.id;

    // Find the product
    const product = await products.findOne({
      _id: new ObjectId(id),
    });

    // Send the product
    res.json(product);
  });

  // CREATE PRODUCT
  app.post("/products", async (req, res) => {
    // Get product information from the request
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock,
    };

    // Save product in MongoDB
    const result = await products.insertOne(newProduct);

    // Send the new product back
    res.json({
      message: "Product created",
      id: result.insertedId,
    });
  });

  // UPDATE PRODUCT
  app.put("/products/:id", async (req, res) => {
    // Get the ID from the URL
    const id = req.params.id;

    // Update the product
    await products.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          category: req.body.category,
          inStock: req.body.inStock,
        },
      }
    );

    res.json({
      message: "Product updated",
    });
  });


  // DELETE PRODUCT
  app.delete("/products/:id", async (req, res) => {
    // Get the ID from the URL
    const id = req.params.id;

    // Delete the product
    await products.deleteOne({
      _id: new ObjectId(id),
    });

    res.json({
      message: "Product deleted",
    });
  });

  // START SERVER
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

// Run our server
startServer();