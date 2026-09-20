const mongoose = require("mongoose");

// Schema describes the structure of our student data
const studentSchema = new mongoose.Schema(
  {
    // Student's name
    name: {
      type: String,
      required: true,
    },

    // Student's age
    age: {
      type: Number,
      required: true,
    },

    // Student's email
    email: {
      type: String,
      required: true,
      unique: true,
    },

    // Student's course
    course: {
      type: String,
      required: true,
    },

    // Whether the student is currently active
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt
    timestamps: true,
  }
);

// Model allows us to work with the students collection
const Student = mongoose.model("Student", studentSchema);

// Export the model
module.exports = Student;