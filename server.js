const express = require("express"); //create server
const app = express(); //set up server

app.get("/", (req, res) => {
  console.log("Here"); //run code to access url
  res.sendStatus(500).json({ Message: "Error" }); //status with a message
  // res.send("hi") //send message to the user
});

app.listen(3000); //server run
