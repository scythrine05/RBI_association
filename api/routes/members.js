//Importing
const Router = require('router');
const handleData = require('../functions/handleUserData');
const passport = require('passport');

const router = Router();

//Global Middlewares
router.use(passport.initialize());
router.use(passport.authenticate('jwt', {session: false}));
router.use((req,res, next)=>{
    if(req.user.type == 'A') next();
    else res.sendStatus(404);
});

//Routing
//Get all Approved Members
router.get('/approved', async(req, res) => {

    //Getting all the Approved Members with handleData(getAllApproved function)
    try{
        let requiredData = handleData.getAllApproved();
        res.json(requiredData);
    }
    catch(e){
        res.status(404).send(e);
    }
});

//Remove a Approved Member
router.post('/approved/remove/:id', async(req, res) => {
    
    //Remove a Approved Member with handleData(removeApproved function)
    try{
        handleData.removeApproved(req.params.id);
        res.status(200);
    }catch(e){
        res.status(404).send(e);
    }

});

//Get all Pending Members
router.get('/pending', async(req, res) => {  
    
    //Getting all the Pending Members with handleData(getAllPending function)
    try{
        let requiredData = handleData.getAllPending();
        res.json(requiredData);
    }
    catch(e){
        res.staus(404).send(e);
    }
});

//DisApproving a Pending Member
router.post('/pending/disapprove/:id', async(req, res) => {

    //DisApprove a Pending Member with handleData(disapprovePending function)
    try{
        handleData.disapprovePending(req.params.id);
        res.status(200);
    }catch(e){
        res.status(404).send(e);
    }

});

//Approving a Pending Member
router.post('/pending/approve/:id', async(req, res)=>{

    //Approve a Pending with handleData(approvePending function)
    try{
        handleData.approvePending(req.params.id);
        res.status(200);
    }catch(e){
        res.status(404).send(e);
    }

});

//Get all Admin Members
router.get('/admin', async(req, res) => {

    //Getting all the Admin Members with handleData(getAllAdmin function)
    try{
        let requiredData = handleData.getAllAdmin();
        res.json(requiredData);
    }
    catch(e){
        
        res.status(404).send(e);
    }
});


module.exports = router;