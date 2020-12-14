//COMMUNICATION DATA HANDLER

//Importing
const fs = require('fs');

//Get All Communication
const getAllComms = () => {
    let requiredData =  fs.readFileSync('./data/communication.json');
    return JSON.parse(requiredData);
};

//Get Front Communication for Homepage
const getFComms = () => {

    let rawCommsData = fs.readFileSync('./data/communication.json');
    let jsonCommsData =  JSON.parse(rawCommsData);
    let fCommsData = jsonCommsData.filter((user) => user.status == 'T')
    return fCommsData;
}

const postComms = async(commsData) => {

    let rawCommsData = fs.readFileSync('./data/communication.json');
    let jsonCommsData =  JSON.parse(rawCommsData);
    jsonCommsData.push(commsData);
    rawCommsData = JSON.stringify(jsonCommsData)
    fs.writeFile('./data/communication.json', rawCommsData , (err)=>{
        if(err) throw err;
        else return;
    });
}

module.exports = {

    getAllComms,
    getFComms,
    postComms
}

