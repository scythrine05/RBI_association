//Importing 

const Router = require("router");
const express = require("express");
const gallery = require("../functions/handleGallery");
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
    
    //Get All Image with handleGallery(getAllImages function)
    res.json(gallery.getAllImages());
});

router.post('/', async(req, res)=>{
    
    //Post Communication handleGallery(postImage function)
    try{
        await gallery.postImage(req.body);
        res.sendStatus(200);
    }
    catch(e){
        res.sendStatus(401);
    }

});

module.exports = router;