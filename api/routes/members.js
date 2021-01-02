//Importing
const Router = require('router');
const express = require('express');
const handleData = require('../functions/handleUserData');
const passport = require('passport');

const router = Router();

//Global Middlewares
router.use(express.json());
router.use(express.urlencoded({
    extended: true
}));

router.use(passport.initialize());
router.use(passport.authenticate('jwt', {session: false}));
router.use((req,res, next)=>{
    console.log(req.user);
    if(req.user.IsAdmin == 1) next();
    else res.sendStatus(404);
});

//Routing
//Get all Approved Members
router.get('/approved', (req, res) => {

    //Getting all the Approved Members with handleData(getAllApproved function)
    handleData.getAllApproved().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));

});

//Remove a Approved Member
router.post('/approved/remove/:id', (req, res) => {
    //Remove a Approved Member with handleData(removeApproved function)

    handleData.removeApproved(req.params.id).then( () => res.sendStatus(200)).catch(e => res.status(404).send(e));
});

//Get all Pending Members
router.get('/pending', (req, res) => {  
    
    //Getting all the Pending Members with handleData(getAllPending function)
    handleData.getAllPending().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));

});

//DisApproving a Pending Member
router.post('/pending/disapprove/:id',(req, res) => {

    //DisApprove a Pending Member with handleData(disapprovePending function)
    handleData.disapprovePending(req.params.id).then(() => res.sendStatus(200)).catch(e => res.status(404).send(e));

});

//Approving a Pending Member
router.post('/pending/approve/:id', (req, res)=>{

    //Approve a Pending with handleData(approvePending function)
    handleData.approvePending(req.params.id).then( () => res.sendStatus(200)).catch(e => res.status(404).send(e));

});

//Get all Admin Members
router.get('/admin', (req, res) => {

    //Getting all the Admin Members with handleData(getAllAdmin function)
    handleData.getAllAdmin().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

//Get all Admin Members with specific letter
router.get('/adminname', (req, res) => {
    
    //Getting all the Admin Members with handleData(getAllAdmin function)
    handleData.findAdminByName(req.body.letter).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

//Get all Approved Members with specific letter
router.get('/approvedname', (req, res) => {
    //Getting all the Admin Members with handleData(getAllAdmin function)
    handleData.findApprovedByName(req.body.letter).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

//Get all Pending Members with specific letter
router.get('/pendingname', (req, res) => {

    //Getting all the Admin Members with handleData(getAllAdmin function)
    handleData.findPendingByName(req.body.letter).then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

module.exports = router;