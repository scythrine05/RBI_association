//USER DATA HANDLER

//Importing
const fs = require('fs');

//Get All Approved Members
const getAllApproved = () => {
let requiredData =  fs.readFileSync('./data/approvedMembers.json');
    return JSON.parse(requiredData);
};

//Get All Pending Members
const getAllPending = () => {
let requiredData =  fs.readFileSync('./data/pendingMembers.json');
    return JSON.parse(requiredData);
};

//Get All Admin Members
const getAllAdmin = () => {
let requiredData =  fs.readFileSync('./data/admin.json');
    return JSON.parse(requiredData);
};

//Create New User
const newUser = (newData) => {
    let rawData = fs.readFileSync('./data/pendingMembers.json');
    let jsonData = JSON.parse(rawData);
    jsonData.push(newData);
    let newRawData = JSON.stringify(jsonData);
    fs.writeFile('./data/pendingMembers.json', newRawData, (err)=>{
        if(err) throw err;
        else return;
    });
};

//Create Existing User
const existingUser = (newData) => {
    let rawData = fs.readFileSync('./data/approvedMembers.json');
    let jsonData = JSON.parse(rawData);
    jsonData.push(newData);
    let newRawData = JSON.stringify(jsonData);
    fs.writeFile('./data/approvedMembers.json', newRawData, (err)=>{
        if(err) throw err;
        else return;
    });
};


//Find Approved User by Id
const findApprovedById = (id) => {
    let rawData = fs.readFileSync('./data/approvedMembers.json');
    let jsonData = JSON.parse(rawData);
    let userData = jsonData.filter((user) => user.id == id);
    return userData[0];
}

//Find Pending User by Id
const findPendingById = (id) => {
    let rawData = fs.readFileSync('./data/pendingMembers.json');
    let jsonData = JSON.parse(rawData);
    let userData = jsonData.filter((user) => user.id == id);
    return userData[0];
}

//Find Approved User by Email
const findApprovedByEmail = (email) => {
    let rawData = fs.readFileSync('./data/approvedMembers.json');
    let jsonData = JSON.parse(rawData);
    let userData = jsonData.filter((user) => user.email == email);
    return userData[0];
}

//Find Pending User by Email
const findPendingByEmail = (email) => {
    let rawData = fs.readFileSync('./data/pendingMembers.json');
    let jsonData = JSON.parse(rawData);
    let userData = jsonData.filter((user) => user.email == email);
    return userData[0];
}

//Remove a Approved Member
const removeApproved = (id) => {
    let rawData = fs.readFileSync('./data/approvedMembers.json');
    let jsonData = JSON.parse(rawData);
    let newData = jsonData.filter((user) => user.id != id);
    let newRawData = JSON.stringify(newData);
    fs.writeFile('./data/approvedMembers.json', newRawData, (err)=>{
        if(err) throw err;
        else return;
    });
}

//Disapprove a Pending Member
const disapprovePending = (id) => {

    let rawData = fs.readFileSync('./data/pendingMembers.json');
    let jsonData = JSON.parse(rawData);
    let newData = jsonData.filter((user) => user.id != id);
    let newRawData = JSON.stringify(newData);
    fs.writeFile('./data/pendingMembers.json', newRawData, (err)=>{
        if(err) throw err;
        else return;
    });
}

//Approve a Pending Member 
const approvePending = (id) => {

    //Remove Approved member from Pending list
    let rawPendingData = fs.readFileSync('./data/pendingMembers.json');
    let jsonPendingData = JSON.parse(rawPendingData);
    let newPendingData = jsonPenidngData.filter((user) => user.id != id);
    let newPendingRawData = JSON.stringify(newPendingData);
    fs.writeFile('./data/pendingMembers.json', newPendingRawData, (err)=>{
        if(err) throw err;
    });

    //Filtering the New Approved User
    let newApprovedUser = jsonPendingData.filter((user) => user.id == id)[0];

    //Adding the New Approved member to Approved list
    let rawApprovedData = fs.readFileSync('./data/approvedMembers.json');
    let jsonApprovedData = JSON.parse(rawApprovedData);
    jsonApprovedData.push(newApprovedUser);
    let newApprovedRawData = JSON.stringify(jsonApprovedData);
    fs.writeFile('./data/approvedMembers.json', newApprovedRawData, (err)=>{
        if(err) throw err;
        else return;
    });
}

//Exporting
module.exports = { 
    getAllApproved,
    getAllPending,
    getAllAdmin,
    newUser,
    existingUser,
    findApprovedById,
    findPendingById,
    findApprovedByEmail,
    findPendingByEmail,
    removeApproved,
    disapprovePending,
    approvePending
}


