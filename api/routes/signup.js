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
router.get("/", (req, res)=>{
    res.send("Welcome New User");
});

router.post("/", async(req, res)=>{
    
    try{
    //New Object to store in userData
        let newData = {
            id : Date.now(),
            name : req.body.name,
            password : req.body.password,
            code : req.body.code,
            email : req.body.email,
            type : "E"
    };

    //Signing User with signUser function
        await signUser(newData);
        res.status(201).send("User Created");
    }
    catch(e){
        res.status(403).send(e);
    }
    
});

//Exporting
module.exports = router;
