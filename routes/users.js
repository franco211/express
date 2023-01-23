const express = require("express");
const router = express.Router();
//router instance of the application
router.get("/", (req, res) => {
  res.send("user List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

module.exports = router;
