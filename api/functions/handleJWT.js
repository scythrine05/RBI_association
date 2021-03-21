//JWT CONFIGURATION

//Environment Variables
require("dotenv").config({ path: __dirname + "/../.env" });

//Importing
const jwt = require("jsonwebtoken");

//Get Access Token
const getAccessToken = async (userData) => {
  try {
    return await jwt.sign(userData, process.env.ACCESS_TOKEN, {
      expiresIn: "1d",
    });
  } catch (e) {
    return new Error(e);
  }
};

//Exporting
module.exports = {
  getAccessToken,
};
