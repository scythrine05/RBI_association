//Importing

const Router = require("router");
const express = require("express");
const comms = require("../functions/handleCommunication");
const passport = require("passport");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const router = Router();

//Multer setup

const spacesEndpoint = new aws.Endpoint(
  "sgp1.digitaloceanspaces.com/Attachments"
);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.ACCESS_KEY_SECRET,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "rbioa-assets",
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
}).single("file");

//Global Middlewares
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);
router.use(passport.initialize());

//Routing
router.get("/front", (req, res) => {
  //Get Front Communications with hadleCommunications(getFComms function)
  comms
    .getFComms()
    .then((results) => res.status(200).json(results))
    .catch((e) => res.status(404).send(e));
});
//Global Middleware
router.use(passport.authenticate("jwt", { session: false }));

//Routing

router.get("/", (req, res) => {
  //Get All Communications with hadleCommunication(getAllComms function)
  comms
    .getAllComms()
    .then((results) => res.status(200).json(results))
    .catch((e) => res.status(404).send(e));
});

// router.get("/year/:year", (req, res) => {
//   //Get All Communications of Particular year with hadleCommunication(getAllYearComms function)
//   comms
//     .getAllYearComms(req.params.year)
//     .then((results) => res.status(200).json(results))
//     .catch((e) => res.status(404).send(e));
// });

router.use((req, res, next) => {
  //Check if user is Admin
  if (req.user.IsAdmin == 1) next();
  else res.sendStatus(404);
});

router.post("/", (req, res) => {
  //Post Communication hadleCommunication(postComms function)
  comms
    .postComms(req.user.Id, req.body)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(404).send(e));
});

router.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = router;
