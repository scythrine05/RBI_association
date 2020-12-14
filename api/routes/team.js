//Importing
const Router = require("router");
const handleTeam = require("../functions/handleTeamData")

const router = Router();

//Routing

router.get('/front', (req, res)=>{

    //Get Front Team Members with hadleTeamData(getFTeams function)
    let FTeamData =  handleTeam.getFTeams();
    res.json(FTeamData);

});

//Get all Team Members 
router.get('/', (req, res) => {

    //Get all Team Members with hadleTeamData(getAllTeams function)
    let allTeamData =  handleTeam.getAllTeams();
    res.json(allTeamData);

});

module.exports = router;
