const express = require("express");
const jwt = require("jsonwebtoken");
const Todo = require("../models/todo");
const User = require("../models/user");

const router = express.Router();

const authenticate = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.userId = decoded.id;
    next();
  });
};

router.use(authenticate);

router.get("/", async (req, res) => {
  const todos = await Todo.findAll({ where: { UserId: req.userId } });
  res.json(todos);
});

router.post("/", async (req, res) => {
  const todo = await Todo.create({ ...req.body, UserId: req.userId });
  res.status(201).json(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findOne({
    where: { id: req.params.id, UserId: req.userId },
  });
  if (!todo) return res.status(404).send("Not found");
  await todo.update(req.body);
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  const count = await Todo.destroy({ // delete with this id number
    where: { id: req.params.id, UserId: req.userId },
  });
  res.sendStatus(count ? 204 : 404);
});

module.exports = router;
