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
    news.getAllNews().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));

});

router.get('/year/:year', (req, res)=>{
    
    //Get All News of Particular year with hadleNews(getAllYearNews function)
      news.getAllYearNews(req.params.year).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

router.post('/', (req,res, next)=>{
    
    //Check if user is Admin
    if(req.user.IsAdmin == 1) next();
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