//Importing 

const Router = require("router");
const handleUser = require('../functions/handleUserData')

const router = Router();

//Global Middlewares
router.use("/new_password", require('./new_password'));
router.use(passport.authenticate('jwt', {session: false}));

//Routing

router.get('/', (req, res)=>{

    res.json(handleUser.findApprovedById(req.user.id));

});

module.exports = router;