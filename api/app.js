const express = require("express");

const app = express();

app.use("/login", require("./login"));

app.get("/", (req, res) => {
  res.send("Welcome to RBIOA backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
