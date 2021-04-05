const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(
  cors({
    origin: [`http://localhost:3000`, "http://localhost:5000"],
    credentials: true,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use("/auth", require("./routes/auth"));
app.use("/members", require("./routes/members"));
app.use("/team", require("./routes/team"));
app.use("/communication", require("./routes/communication"));
app.use("/news", require("./routes/news"));
app.use("/gallery", require("./routes/gallery"));
app.use("/polls", require("./routes/polls"));
app.use("/profile", require("./routes/profile"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
