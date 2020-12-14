//Importing 

const Router = require("router");
const news = require('../functions/handleNews');
const passport = require('passport');


const router = Router();

//Global Middlewares
router.use(passport.initialize());
router.use(passport.authenticate('jwt', {session: false}));


//Routing

router.post('/', async(req, res)=>{


});

module.exports = router;