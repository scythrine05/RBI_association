//Importing

const Router = require("router");
const express = require("express");
const passport = require("passport");

const router = Router();

//Global Middlewares
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

router.use(passport.initialize());
router.use(passport.authenticate("jwt", { session: false }));

router.get("/", (req, res) => {
  res.send(req.user);
});

module.exports = router;
