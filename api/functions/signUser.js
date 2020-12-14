//SIGNING USER 

//Importing
const handleData = require("./handleUserData");

const newUser = async (userData) => {

    try {
        //Creating New User with handleUserData(newUser function)
        handleData.newUser(userData);
        return;
    }
    catch(e){
        console.log(e);
        return new Error(e);
    }
}
const existingUser = async (userData) => {

    try{
        //Creating Existing with handleUserData(existingUser function)
        handleData.existingUser(userData);
        return;
    }
    catch(e){
        console.log(e);
        return new Error(e);
    }
    
}
module.exports  = {
    newUser,
    existingUser
}