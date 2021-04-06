//Importing

const Router = require("router");
const express = require("express");
const gallery = require("../functions/handleGallery");
const passport = require("passport");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

const router = Router();

//Multer setup

const spacesEndpoint = new aws.Endpoint("sgp1.digitaloceanspaces.com/gallery");
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.ACCESS_KEY_SECRET,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "rbioa",
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
router.use(passport.authenticate("jwt", { session: false }));

//Routing

router.get("/", (req, res) => {
  //Get All Images with handleGallery(getAllImages function)
  console.log("hey");
  gallery
    .getAllImages()
    .then((results) => res.status(200).json(results))
    .catch((e) => res.status(404).send(e));
});

router.get("/year/:year", (req, res) => {
  //Get All Images of Particular year with hadleGallery (getAllYearImages function)
  gallery
    .getAllYearImages(req.params.year)
    .then((results) => res.status(200).json(results))
    .catch((e) => res.status(404).send(e));
});

router.post("/", async (req, res) => {
  //Post Communication handleGallery(postImage function)
  try {
    await gallery.postImage(req.body);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(401);
  }
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
