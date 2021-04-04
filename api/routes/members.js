//Importing
const Router = require("router");
const express = require("express");
const handleData = require("../functions/handleUserData");
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

// check if the user is Admin
router.use((req, res, next) => {
  if (req.user.IsAdmin == 1) next();
  else res.sendStatus(404);
});

//Routing

//Get all Pending Members
router.get("/pending", (req, res) => {
  //Getting all the Pending Members with handleData(getAllPending function)
  handleData
    .getAllPending()
    .then((results) => res.status(200).json(results))
    .catch((e) => res.status(404).send(e));
});

//DisApproving a Pending Member
router.post("/pending/disapprove", (req, res) => {
  //DisApprove a Pending Member with handleData(disapprovePending function)
  handleData
    .disapprovePending(req.body.Id)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(404).send(e));
});

//Approving a Pending Member
router.post("/pending/approve", (req, res) => {
  //Approve a Pending with handleData(approvePending function)
  handleData
    .approvePending(req.body.Id)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(404).send(e));
});

module.exports = router;
