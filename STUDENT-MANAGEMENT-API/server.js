const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const studentRoutes = require("./routes/studentRoutes");

// Load .env variables
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Allow Express to receive JSON
app.use(express.json());

// Student routes
app.use("/students", studentRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Start server after MongoDB connects
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed");
    console.log(error);
  });