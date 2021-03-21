//Importing

const Router = require("router");
const handleUser = require("../functions/handleUserData");
const passport = require("passport");

const router = Router();

//Global Middlewares
router.use(passport.initialize());
router.use("/new_password", require("./new_password"));
router.use(passport.authenticate("jwt", { session: false }));

//Routing

router.get("/", (req, res) => {
  handleUser
    .findApprovedById(req.user.Id)
    .then((results) => {
      newResults = {
        Name: results[0].Name,
        Email: results[0].Email,
        IsAdmin: results[0].IsAdmin,
      };
      res.status(200).json(newResults);
    })
    .catch((e) => res.status(404).send(e));
});

module.exports = router;
