const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const PORT = 5000;

// Allow JSON data
app.use(express.json());

// Task routes
app.use("/tasks", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});