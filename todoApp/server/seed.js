const bcrypt = require("bcryptjs");
const { sequelize } = require("./models/index");
const User = require("./models/user");
const Todo = require("./models/todo");

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates all tables

    const passwordHash = await bcrypt.hash("pass123", 10);
    const user = await User.create({ username: "alice", password: passwordHash });

    await Todo.bulkCreate([
      {
        task: "Buy groceries",
        description: "Milk, eggs, bread",
        date: "2025-06-20",
        completed: false,
        UserId: user.id,
      },
      {
        task: "Read book",
        description: "Finish chapter 4 of novel",
        date: "2025-06-21",
        completed: true,
        UserId: user.id,
      },
    ]);

    console.log("✅ Seed data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seed();