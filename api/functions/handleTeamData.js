//TEAM DATA HANDLER

//Importing
const fs = require('fs');

//Get Front Team Members for Homepage
const getFTeams = () => {

    let rawTeamData = fs.readFileSync('./data/team.json');
    let jsonTeamData =  JSON.parse(rawTeamData);
    let fTeamData = jsonTeamData.filter((user) => user.status == 'T')
    return fTeamData;
}

//Get All Team Members
const getAllTeams = () => {

    let requiredData =  fs.readFileSync('./data/team.json');
    return JSON.parse(requiredData);
};

module.exports = {
   
    getAllTeams,
    getFTeams

}