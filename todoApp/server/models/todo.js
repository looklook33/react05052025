const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const User = require("./user");

const Todo = sequelize.define("Todo", {
  task: DataTypes.STRING,
  description: DataTypes.TEXT,
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  date: DataTypes.STRING,
});

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = Todo;