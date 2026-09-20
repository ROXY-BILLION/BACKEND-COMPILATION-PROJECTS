const Student = require("../models/studentModel");

// CREATE STUDENT
const createStudent = async (req, res) => {
  try {
    // Create a new student using the request data
    const student = await Student.create({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      course: req.body.course,
      active: req.body.active,
    });

    // 201 means something was successfully created
    res.status(201).json(student);
  } catch (error) {
    // 400 means the request contains invalid data
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET ALL STUDENTS
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ONE STUDENT
const getStudent = async (req, res) => {
  try {
    // Find a student using the ID from the URL
    const student = await Student.findById(req.params.id);

    // If no student exists
    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      message: "Invalid student ID",
    });
  }
};

// UPDATE STUDENT
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,

      {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        course: req.body.course,
        active: req.body.active,
      },

      {
        // Return the updated student
        new: true,

        // Run schema validation when updating
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


// DELETE STUDENT
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid student ID",
    });
  }
};

// Export all controller functions
module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};