const express = require("express");
const shortid = require("shortid");
const router = express.Router();

// router.use(logger)
const users_new = [
  { id: shortid.generate(), name: "Gavin" },
  { id: shortid.generate(), name: "Mark" },
];

router.get("/", (req, res) => {
    for (let user of users_new){
        console.log(user)
    }
  res.send(users_new);
});

// router.post("/", (req, res) => {
//   res.send("New User Created");
// });

router.get("/new", (req, res) => {
  res.render("users/new", { name: "" });
});

router.delete("/:id", (req, res) => {
  res.send(`Delete user with id ${req.params.id} `);
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


router.put("/:id", (req, res) => {
  res.send(`Updated user with id ${req.params.id} `);
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

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with Id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with Id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with Id ${req.params.id}`);
  });

const users = [{ name: "Mark" }, { name: "Gavin" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
module.exports = router;
