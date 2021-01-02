//Importing 

const Router = require("router");
const express = require("express");
const polls = require('../functions/handlePolls')
const passport = require('passport');


const router = Router();

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));
// router.use(passport.initialize());
// router.use(passport.authenticate('jwt', {session: false}));


//Routing

router.get('/', (req, res)=>{
    
    //Get All Polls with hadlePolls(getAllPolls function)
    polls.getAllPolls().then(results => res.status(200).send(results)).catch(e => res.status(404).send(e));
    
});

router.get('/year/:year', (req, res)=>{
    
    //Get All Polls of Particular year with hadlePolls (getAllYearPolls function)
      polls.getAllYearPolls(req.params.year).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));

});


router.post('/',(req,res, next)=>{
    
    if(req.user.IsAdmin == 1) next();
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