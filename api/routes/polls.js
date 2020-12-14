//Importing 

const Router = require("router");
const express = require("express");
const polls = require('../functions/handlePolls')

const router = Router();

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));
router.use(passport.authenticate('jwt', {session: false}));

//Routing

router.get('/', (req, res)=>{

    //Get All Polls with hadlePolls(getAllPolls function)
    res.json(polls.getAllPolls());

});

router.post('/',(req,res, next)=>{
    
    if(req.user.type == 'A') next();
    else res.sendStatus(404);
    
    } , async(req, res)=>{
    //Post Poll with hadlePolls(postPolls function)
    try{
        await polls.postPolls(req.body);
        res.sendStatus(200);
    }
    catch(e){
        res.sendStatus(401);
    }

});

module.exports = router;