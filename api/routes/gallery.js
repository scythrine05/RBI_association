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
    
    //Get All Images with handleGallery(getAllImages function)
    gallery.getAllImages().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

router.get('/year/:year', (req, res)=>{
    
    //Get All Images of Particular year with hadleGallery (getAllYearImages function)
      gallery.getAllYearImages(req.params.year).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
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