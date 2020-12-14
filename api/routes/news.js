//Importing 

const Router = require("router");
const express = require("express");
const news = require('../functions/handleNews')
const passport = require('passport');


const router = Router();

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));
router.use(passport.initialize());
router.use(passport.authenticate('jwt', {session: false}));


//Routing

router.get('/', (req, res)=>{

    //Get All News with hadleNews(getAllNews function)
    res.json(news.getAllNews());

});

router.post('/', (req,res, next)=>{
    
    if(req.user.type == 'A') next();
    else res.sendStatus(404);
    
    } ,async(req, res)=>{

    //Post News with hadleNews(postNews function)
    try{
        await news.postNews(req.body);
        res.sendStatus(200);
    }
    catch(e){
        res.sendStatus(401);
    }

});

module.exports = router;