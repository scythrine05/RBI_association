//Importing
const Router = require("router");
const team = require("../functions/handleTeamData")

const router = Router();

//Routing

router.get('/front', (req, res)=>{

    //Get Front Team Members with hadleTeamData(getFTeams function)
    team.getFTeams().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

//Get all Team Members 
router.get('/', (req, res) => {

    //Get all Team Members with hadleTeamData(getAllTeams function)
    team.getAllTeams().then(results => res.status(200).json(results)).catch(e => res.status(404).send(e));
});

module.exports = router;
