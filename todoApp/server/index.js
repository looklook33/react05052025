const express = require("express");
const cors = require("cors");
const shortid = require("shortid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = require("./middleware/auth");

const app = express();
const PORT = 3001;
const SECRET = process.env.ACCESS_TOKEN_SECRET;

// Middlewares
app.use(cors());
app.use(express.json());
//enables Express to parse incoming application/json payloads (like the ones sent by Postman or your React frontend).

let todos = [
  {
    id: "1",
    task: "Buy milk and appple",
    completed: false,
    date: "2025-06-06",
    description: "Pick up 2% milk from grocery store and apple",
  },
  {
    id: "2",
    task: "Finish React project",
    completed: false,
    date: "2025-06-07",
    description: "Complete UI and connect to Redux store",
  },
  {
    id: "3",
    task: "Call Mom",
    completed: true,
    date: "2025-06-05",
    description: "Check in and talk about summer plans",
  },
  {
    id: "4",
    task: "Workout - legs",
    completed: false,
    date: "2025-06-06",
    description: "Deadlifts, lunges, squats",
  },
  {
    id: "5",
    task: "Pay electricity bill",
    completed: true,
    date: "2025-06-03",
    description: "Use online banking to pay before 5 PM",
  },
  {
    id: "6",
    task: "Read 30 pages",
    completed: false,
    date: "2025-06-08",
    description: "Continue reading 'Atomic Habits'",
  },
  {
    id: "7",
    task: "Clean kitchen",
    completed: false,
    date: "2025-06-07",
    description: "Wipe counters, mop floor, take out trash",
  },
  {
    id: "8",
    task: "Email Professor",
    completed: false,
    date: "2025-06-06",
    description: "Ask about office hours and thesis topic",
  },
  {
    id: "9",
    task: "Renew library books",
    completed: true,
    date: "2025-06-01",
    description: "Done via library app",
  },
  {
    id: "10",
    task: "Grocery shopping",
    completed: false,
    date: "2025-06-09",
    description: "Buy eggs, bread, spinach, chicken",
  },
  {
    id: "b1e0",
    task: "Workout - uperbody",
    completed: false,
    date: "2025-06-26",
    description: "pull-up, push-up",
  },
];

let users = [
  {
    username: "user1",
    password: 123456,
  },
  {
    username: "user2",
    password: 123456,
  },
];

// Signup route
app.post("/auth/signup", async (req, res) => {
  const { username, password } = req.body;
  const exists = users.find((u) => u.username === username);
  if (exists) return res.status(400).json({ error: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = { id: shortid(), username, password: hashed };
  users.push(user);
  console.log(users);
  const token = jwt.sign({ id: user.id, username }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ user: { id: user.id, username: user.username }, token });
});

// Login route
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ user: { id: user.id, username: user.username }, token });
});

app.post("/auth/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

//Get todo by Id
app.get("/todos/:id", authenticateToken, (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  todo ? res.json(todo) : res.status(404).send("Todo not found");
});

//Post new todo
app.post("/todos", authenticateToken,(req, res) => {
  const newTodo = { ...req.body, id: shortid.generate() };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

//put update todo
app.put("/todos/:id", authenticateToken, (req, res) => {
  const index = todos.findIndex((t) => t.id === req.params.id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    res.json(todos[index]);
  } else {
    res.status(404).send("Todo not found");
  }
});

//delete todo
app.delete("/todos/:id", authenticateToken,(req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).send(`Delete todo with id ${req.params.id}`);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
