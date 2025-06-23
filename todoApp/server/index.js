const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./models/index");
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => console.log("Server running at http://localhost:3001"));
});