const express = require("express");
const router = express.Router();

router.use(logger);

//router instance of the application
router.get("/", (req, res) => {
  res.send("user List");
});

router.get("/new", (req, res) => {
  //   res.send("User New Form");
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.user);
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
module.exports = router;
