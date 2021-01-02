//TEAM DATA HANDLER

//Importing
const pool = require('../database/dbPool')

//Get Front Team Members for Homepage
const getFTeams = async() => {

      let sql = 'select a.SamadhanID, a.Email, a.Name  from approvedmember a inner join team on team.MemberID = a.SamadhanID limit 4';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Get All Team Members
const getAllTeams = async() => {

      let sql = 'select a.SamadhanID, a.Email, a.Name  from approvedmember a inner join team on team.MemberID = a.SamadhanID';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
};

module.exports = {
   
    getAllTeams,
    getFTeams

}