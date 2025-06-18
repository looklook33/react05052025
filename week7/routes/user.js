const express = require("express");
const shortid = require("shortid");
const router = express.Router();

const users_new = [
  { id: shortid.generate(), name: "Gavin" },
  { id: shortid.generate(), name: "Mark" },
];

router.get("/", (req, res) => {
  for (let user of users_new) {
    console.log(user);
  }
  res.send(users_new);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).send("Name is required");
  }

  const newUser = { id: shortid.generate(), name: name.trim() };
  users_new.push(newUser);

  res.status(201).json({ message: "User created", user: newUser });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = users_new.findIndex((user) => user.id === id);
  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users_new.splice(index, 1);
  res.send(`Delete user with id ${req.params.id} `);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).send("Name is required");
  }

  const user = users_new.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send(`User with id ${id} not found`);
  }

  user.name = name.trim();

  res.status(200).json({
    message: `User with id ${id} updated successfully`,
    user,
  });
});

router.get("/new", (req, res) => {
  res.render("users/new", { name: "" });
});

// router.get("/:id", (req, res) => {
//   res.send(`Get User with Id ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Update User with Id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete User with Id ${req.params.id}`);
// });

// router.use(logger)
// router
//   .route("/:id")
//   .get((req, res) => {
//     console.log(req.user);
//     res.send(`Get User with Id ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update User with Id ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delete User with Id ${req.params.id}`);
//   });

// const users = [{ name: "Mark" }, { name: "Gavin" }];
// router.param("id", (req, res, next, id) => {
//   req.user = users[id];
//   next();
// });

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }
module.exports = router;
