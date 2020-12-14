const express = require("express");

const app = express();

app.use("/login", require("./routes/login"));
app.use('/signup', require("./routes/signup"));
app.use('/refresh', require('./routes/refresh'));
app.use('/members', require('./routes/members'));
app.use('/team', require('./routes/team'));
app.use('/communication', require('./routes/communication'));
app.use('/news', require('./routes/news'));
app.use('/gallery', require('./routes/gallery'));
app.use('/polls', require('./routes/polls'));
app.use('/profile', require('./routes/profile'))

app.get("/", (req, res) => {
  res.send("Welcome to RBIOA backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
