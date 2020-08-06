const Router = require("router");
const bodyParser = require("body-parser");

const router = Router();
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
