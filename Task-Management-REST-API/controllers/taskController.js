let tasks = [
  {
    id: 1,
    title: "Learn Express",
    description: "Learn how Express.js works",
    completed: false,
  },
  {
    id: 2,
    title: "Build REST API",
    description: "Build a simple Task Management API",
    completed: false,
  },
];

// GET all tasks
const getTasks = (req, res) => {
  res.json(tasks);
};

// GET one task
const getTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  res.json(task);
};

// CREATE a task
const createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(newTask);

  res.json(newTask);
};

// UPDATE a task
const updateTask = (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((task) => task.id === id);

  task.title = req.body.title;
  task.description = req.body.description;
  task.completed = req.body.completed;

  res.json(task);
};

// DELETE a task
const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter((task) => task.id !== id);

  res.json({
    message: "Task deleted",
  });
};

module.exports = {getTasks,getTask,createTask,updateTask,deleteTask,};