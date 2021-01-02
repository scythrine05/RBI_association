//Importing 

const Router = require("router");
const express = require("express");
const comms = require('../functions/handleCommunication')
const passport = require('passport');

const router = Router();

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));
router.use(passport.initialize());

//Routing
router.get('/front',(req, res)=>{
   
    //Get Front Communications with hadleCommunications(getFComms function)
    comms.getFComms().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));

});
//Global Middleware
router.use(passport.authenticate('jwt', {session: false}));

//Routing

router.get('/', (req, res)=>{
    
    //Get All Communications with hadleCommunication(getAllComms function)
      comms.getAllComms().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

router.get('/year/:year', (req, res)=>{
    
    //Get All Communications of Particular year with hadleCommunication(getAllYearComms function)
      comms.getAllYearComms(req.params.year).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

router.post('/',(req,res, next)=>{
    
    //MiddleWare to check if user is Admin
    if(req.user.IsAdmin == 1) next();
    else res.sendStatus(404);
    }  , async(req, res)=>{

    //Post Communication hadleCommunication(postComms function)
    try{
        await comms.postComms(req.body);
        res.sendStatus(200);
    }
    catch(e){
        res.sendStatus(401);
    }
});

module.exports = router;