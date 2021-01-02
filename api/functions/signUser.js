//SIGNING USER 

//Importing
const handleData = require('./handleUserData');
const crypto = require('crypto'); 
const handleMail = require('./hadleMailSystem');
const bcrypt = require('bcrypt');

const newUser = async (userData) => {

    try {
        //Creating New User with handleUserData(newUser function)
        await handleData.newUser(userData);
        return;
    }
    catch(e){
        console.log(e);
        return new Error(e);
    }
}
const existingUser = async (userData) => {

    let Password = crypto.randomBytes(8).toString('hex');
    try{
        //Creating Existing with handleUserData(existingUser function)
        let hashedPassword = await bcrypt.hash(Password, 10);
        userData.Password = hashedPassword;  
        await handleData.existingUser(userData);
        await handleMail.existingUserEmail(userData.Email, Password);
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