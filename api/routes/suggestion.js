//Importing
const Router = require("router");
const express = require("express");
const handleMail = require("../functions/hadleMailSystem");
const handleUser = require("../functions/handleUserData");
const passport = require("passport");

const router = Router();

//Global Middlewares
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

router.post("/contact", (req, res) => {
  handleMail
    .contact(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.status(404).send(e);
    });
});

router.use(passport.initialize());
router.use(passport.authenticate("jwt", { session: false }));

//Suggestion
router.post("/", (req, res) => {
  handleMail
    .suggestion(req.user.Id, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.status(404).send(e);
    });
});

router.get("/data", (req, res) => {
  handleUser
    .findApprovedById(req.user.Id)
    .then((results) => {
      res.status(200).json(results[0]);
    })
    .catch(() => {
      res.status(404).send(e);
    });
});

module.exports = router;
