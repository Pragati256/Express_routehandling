const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/user1", (req, res) => {
  res.send("Hello pragati");
});
//let's send some JSON
app.get("/user2", (req, res) => {
  res.json({ username: "Hello shivani", age: "22", city: "Heart" });
});

app.get("/user3", (req, res) => {
  res.send("Hello ritu");
});

app.listen(3000, () => console.log("The application is running on port 3000"));
module.exports = express;
