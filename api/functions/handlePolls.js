//NEWS POLLS HANDLER

//Importing
const fs = require('fs');

//Get All News
const getAllPolls = () => {
    let requiredData =  fs.readFileSync('./data/polls.json');
    return JSON.parse(requiredData);
};


const postPolls = async(pollsData) => {

    let rawPollsData = fs.readFileSync('./data/polls.json');
    let jsonPollsData =  JSON.parse(rawPollsData);
    jsonPollsData.push(pollsData);
    rawPollsData = JSON.stringify(jsonPollsData)
    fs.writeFile('./data/polls.json', rawPollsData , (err)=>{
        if(err) throw err;
        else return;
    });
}

module.exports = {
    getAllPolls,
    postPolls
}

