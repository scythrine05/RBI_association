//Importing

const Router = require("router");
const express = require("express");
const passport = require("passport");
const changePassword = require("../functions/changePassword");

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

//Routing

router.post("/", (req, res) => {
  changePassword
    .changeUserPassword(req.user.Id, req.body.oldPass, req.body.newPass)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(404).send(e));
});

module.exports = router;
