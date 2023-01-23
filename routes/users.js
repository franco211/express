const express = require("express");
const router = express.Router();

router.use(logger);

//router instance of the application
router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("user List");
});

router.get("/new", (req, res) => {
  //   res.send("User New Form");
  res.render("users/new");
});

router.post("/", (req, res) => {
  //   res.send("Create User");
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send("hi");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

const users = [{ name: "kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

//middle wear function.
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
