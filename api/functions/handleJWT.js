//JWT CONFIGURATION

//Environment Variables
require("dotenv").config({path: __dirname + "/../.env"});

//Importing
const jwt = require("jsonwebtoken");

//Get Access Token 
const getAccessToken = async(userData) => {
    try{
    return await jwt.sign(userData, process.env.ACCESS_TOKEN, { expiresIn : "20s" });
    }
    catch(e){
        return new Error(e);
    }
}

//Get Refresh Token
const getRefreshToken = async(userData) => {
    try{
    return await  jwt.sign(userData, process.env.REFRESH_TOKEN);
    }
    catch(e){
        return new Error(e);
    }
}

//Validate Refresh Token
const validateRefreshToken = (refreshToken) => {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
}

//Exporting
module.exports = {
    getAccessToken,
    getRefreshToken,
    validateRefreshToken

} 