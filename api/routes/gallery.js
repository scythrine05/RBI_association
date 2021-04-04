//Importing

const Router = require("router");
const express = require("express");
const gallery = require("../functions/handleGallery");
const passport = require("passport");
const multer = require("multer");
const path = require("path");

const router = Router();

//Multer setup

const storage = multer.diskStorage({
  destination: "../client/public/uploads/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("file");

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|bmp/;
  const extname = filetypes.test(path.extname(file.originalname));

  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Images Only");
  }
}

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
