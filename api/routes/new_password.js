//Importing 

const Router = require("router");
const news = require('../functions/handleNews')

const router = Router();

//Global Middlewares
router.use(passport.authenticate('jwt', {session: false}));


//Routing

router.post('/', async(req, res)=>{


});

module.exports = router;