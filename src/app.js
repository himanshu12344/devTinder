const express = require("express");

const app = express();

// app.use("/test", (req, res) => {
//   res.send("Namaste");
// });

// This will only handle GET request for /user
app.get("/user", (req, res) => {
  res.send({ firstname: "Himanshu", lastname: "Adhana" });
});

//This will only handle POST request for / user
app.post("/user", (req, res) => {
  res.send("Sending user data to DB");
});

// This will handle DELETE request
app.delete("/user", (req, res) => {
  res.send("Delete user Data");
});

app.listen(7777, () => {
  console.log("Server listening on port 7777");
});
