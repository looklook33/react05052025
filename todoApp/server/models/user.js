const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});

module.exports = User;