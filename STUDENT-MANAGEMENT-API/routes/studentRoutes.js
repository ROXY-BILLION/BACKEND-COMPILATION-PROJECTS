const express = require("express");

const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// POST /students
router.post("/", createStudent);

// GET /students
router.get("/", getStudents);

// GET /students/:id
router.get("/:id", getStudent);

// PUT /students/:id
router.put("/:id", updateStudent);

// DELETE /students/:id
router.delete("/:id", deleteStudent);

module.exports = router;