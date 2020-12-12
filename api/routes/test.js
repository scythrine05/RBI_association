//TEST ROUTE - test Resource route

//Importing 
const Router = require("router");
const passport = require("passport");
const handleData = require("../functions/handleData");

const router = Router();


//Global MiddleWares
router.use(passport.initialize());

//Routing
//JWT Passport Middleware to Validate the Access Token
router.get("/", passport.authenticate("jwt", {
    session : false
}), async(req, res) => {
    
    //Accessing Data and Responsing Stuffs
    let code = handleData.findById(req.user.id).code;
    res.send("Welcome " + req.user.name + ", your code is " + code);

});

//Exporting
module.exports = router;