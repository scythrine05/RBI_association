//NEWS POLLS HANDLER

//Importing
const pool = require('../database/dbPool');

//Get All Polls
const getAllPolls = async() => {

    let sql = 'select polls.PollsID, polls.Question, pollsoption.Answer, polls.Date, polls.AuthorID from polls inner join (select PollsID,  JSON_ARRAYAGG(JSON_OBJECT ("option", PollsOptions, "votes", Votes)) Answer from pollsoption group by PollsID) pollsoption on polls.PollsID = pollsoption.PollsID order by Date desc';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
};

//Get All Polls with Specific Year
const getAllYearPolls = async(year) => {

    let sql = 'select polls.PollsID, polls.Question, pollsoption.Answer, polls.Date, polls.AuthorID from polls inner join (select PollsID,  JSON_ARRAYAGG(JSON_OBJECT ("option", PollsOptions, "votes", Votes)) Answer from pollsoption group by PollsID) pollsoption on polls.PollsID = pollsoption.PollsID where Year(Date) = ?  order by Date desc';
     try{
        let requiredData = await pool.query(sql, [year]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Post poll
const postPolls = async(pollsData) => {
    
}

module.exports = {
    getAllPolls,
    getAllYearPolls,
    postPolls
}

