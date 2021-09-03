//SIGNUP Route

//Importing
const express = require("express");
const Router = require("router");
const router = Router();
const handleData = require("../functions/handleUserData");
const signUser = require("../functions/signUser");

//Global Middlewares
router.use(express.json());
router.use(
  express.urlencoded({
    extended: false,
  })
);

//Routing
router.post("/checkid", (req, res) => {
  handleData
    .findApprovedById(req.body.SamadhanID)
    .then((results) => {
      if (results != null) {
        res.status(200).send(results);
      } else {
        res.status(200).send(null);
      }
    })
    .catch((e) => console.log(e));
});

router.post("/newuser", (req, res) => {
  signUser
    .newUser(req.body.userData)
    .then((r) => {
      if (r === 409) res.status(200).send("409");
      else res.sendStatus(200);
    })
    .catch((e) => console.log(e));
});

router.post("/existinguser", (req, res) => {
  signUser
    .existingUser(req.body.userData)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(404).send(e));
});

//Exporting
module.exports = router;
