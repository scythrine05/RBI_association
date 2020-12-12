//SIGNING USER 

//Importing
const handleData = require("./handleData");
const bcrypt = require("bcrypt");

//Exporting
module.exports = async function signUser(userData) {
    try {
        //Hashing Password usign Bcrypt
        let hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        //Creating New User with handleData(newUser function)
        handleData.newUser(userData);
        return;
    }
    catch(e){
        console.log(e);
        return new Error(e);
    }
}