const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.use("/test", (req, res) => {
  res.send("Namaste");
});

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
