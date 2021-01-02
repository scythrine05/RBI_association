//SIGNUP Route

//Importing 
const express = require('express');
const Router = require('router');
const router = Router();
const handleData = require('../functions/handleUserData');
const signUser = require("../functions/signUser");

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended : true
}));

//Routing

router.get('/getemail', (req, res)=>{
    handleData.findApprovedById(req.body.SamadhanID).then((results)=> res.status(200).send(results[0].Email)).catch(e => res.status(404).send(e));
});

router.post("/newuser", (req, res)=>{

    signUser.newUser(req.body).then(() => res.sendStatus(200)).catch(e => res.status(404).send(e));

});

router.post("/existinguser", (req, res)=>{

     signUser.existingUser(req.body).then(() => res.sendStatus(200)).catch(e => res.status(404).send(e));
});

//Exporting
module.exports = router;
