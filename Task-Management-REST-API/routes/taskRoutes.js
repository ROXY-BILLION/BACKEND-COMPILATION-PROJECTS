const express = require("express");

const router = express.Router();

const {getTasks,getTask,createTask,updateTask,deleteTask,} = require("../controllers/taskController");

// GET all tasks
router.get("/", getTasks);

// GET one task
router.get("/:id", getTask);

// CREATE task
router.post("/", createTask);

// UPDATE task
router.put("/:id", updateTask);

// DELETE task
router.delete("/:id", deleteTask);

module.exports = router;