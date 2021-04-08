//Importing

const Router = require("router");
const express = require("express");
const polls = require("../functions/handlePolls");
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

//Routing

router.get("/", (req, res) => {
  //Get All Polls with hadlePolls(getAllPolls function)
  polls
    .getAllPolls(req.user.Id)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((e) => res.status(404).send(e));
});

router.post(
  "/",
  (req, res, next) => {
    if (req.user.IsAdmin == 1) next();
    else res.sendStatus(404);
  },
  (req, res) => {
    //Post Poll with handlePolls(postPolls function)
    polls
      .postPolls(req.user.Id, req.body.Question, req.body.Options)
      .then(() => res.sendStatus(200))
      .catch((e) => res.status(404).send(e));
  }
);

router.post("/vote", (req, res) => {
  //Vote Poll with handlePolls(votePolls function)
  polls
    .votePoll(req.user.Id, req.body)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(404).send(e));
});

module.exports = router;
