app.use("/getUser", (req, res) => {
// try {
throw new Error("gfdgf");
res.send("user Data sent");
// } catch (err) {
// res.status(500).send("Page not found");
// }
});

app.use("/", (err, req, res, next) => {
if (err) {
res.status(404).send("something went wrong");
}
});

// const { isAuth, isUser } = require("./middlewares/auth");

// app.use("/admin", isAuth);

// app.get("/admin/getAllData", (req, res) => {
// res.send("Get all data");
// });

// app.get("/admin/deleteData", (req, res) => {
// res.send("Delete Data");
// });

// app.post("/user/login", (req, res) => {
// res.send("user login");
// });

// app.get("/user", isUser, (req, res) => {
// res.send("UserData");
// });

// app.use(
// "/user",
// (req, res, next) => {
// // res.send("Namaste");
// next();
// },
// (req, res, next) => {
// console.log("handling routes 2nd");
// res.send("2nd Namaste");
// next();
// }
// );

// This will only handle GET request for /user
// app.get("/user", (req, res) => {
// res.send({ firstname: "Himanshu", lastname: "Adhana" });
// });

// //This will only handle POST request for / user
// app.post("/user", (req, res) => {
// res.send("Sending user data to DB");
// });

// // This will handle DELETE request
// app.delete("/user", (req, res) => {
// res.send("Delete user Data");
// });

// // update the entire resource
// app.put("/users/:id", (req, res) => res.send(`PUT user ${req.params.id}`));

// // update the partial data of a resource
// app.patch("/users/:id", (req, res) => res.send(`PATCH user ${req.params.id}`));

// routes based on string patterns
// app.get("/ab?cd", (req, res) => {
// res.send("ab?cd");
// });
