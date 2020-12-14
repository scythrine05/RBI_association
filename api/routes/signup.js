//SIGNUP Route

//Importing 
const express = require('express');
const Router = require('router');
const router = Router();
const signUser = require("../functions/signUser");

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended : true
}));

//Routing

router.post("/newuser", async(req, res)=>{
    
    try{
    //Signing User with signUser function
        await signUser.newUser(req.body);
        res.status(201).send("User Created : " + req.body.name);
    }
    catch(e){
        res.status(403).send(e);
    }
});

router.post("/existinguser", async(req, res)=>{
    try{
    //Signing User with signUser function
        await signUser.existingUser(req.body);
        res.status(201).send("User Created");
    }
    catch(e){
        res.status(403).send(e);
    }
});

//Exporting
module.exports = router;
