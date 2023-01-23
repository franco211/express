const express = require("express"); //create server
const app = express(); //set up server

app.set("view engine", "ejs"); //view engine
app.use(logger);

app.get("/", (req, res) => {
  console.log("Here"); //run code to access url
  //res.sendStatus(500).json({ Message: "Error" }); //status with a message
  // res.send("hi") //send message to the user
  // res.download("server.js"); //send file to download
  res.render("index", { text: "World" }); //rendering a file
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000); //server run
