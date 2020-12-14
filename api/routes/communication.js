//Importing 

const Router = require("router");
const express = require("express");
const comms = require('../functions/handleCommunication')

const router = Router();

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

//Routing
router.get('/front', (req, res)=>{

   //Get Front Communications with hadleCommunications(getFComms function)
    let FComms =  comms.getFComms();
    res.json(FComms);

    
});

//Global Middleware
router.use(passport.authenticate('jwt', {session: false}));

//Routing

router.get('/', (req, res)=>{
    
    //Get All Communications with hadleCommunication(getAllComms function)
    res.json(comms.getAllComms());
});

router.post('/',(req,res, next)=>{
    
    if(req.user.type == 'A') next();
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