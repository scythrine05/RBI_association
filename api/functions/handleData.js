//DATA HANDLER

//Importing
const fs = require('fs');

//Get All Users
const getAllUsers = () => {
fs.readFile('../data/userData.json', (err, data)=>{
    if (err) throw err;
    return console.log(JSON.parse(data));
});
};

//Create New User
const newUser = (newData) => {
    let rawData = fs.readFileSync('./data/userData.json');
    let jsonData = JSON.parse(rawData);
    jsonData.push(newData);
    let newRawData = JSON.stringify(jsonData);
     fs.writeFile('./data/userData.json', newRawData, (err)=>{
        if(err) throw err;
        else return;
    });
};

//Find User by Id
const findById = (id) => {
    let rawData = fs.readFileSync('./data/userData.json');
    let jsonData = JSON.parse(rawData);
    let userData = jsonData.filter((user) => user.id == id);
    return userData[0];
}

//Find User by Email
const findByEmail = (email) => {
    let rawData = fs.readFileSync('./data/userData.json');
    let jsonData = JSON.parse(rawData);
    let userData = jsonData.filter((user) => user.email == email);
    return userData[0];
}

//Exporting
module.exports = { 
    getAllUsers,
    newUser,
    findById,
    findByEmail
}


