//SIGNING USER

//Importing
const handleData = require("./handleUserData");
//const crypto = require("crypto");
const handleMail = require("./hadleMailSystem");
//const bcrypt = require("bcrypt");

const newUser = async (userData) => {
  try {
    //Creating New User with handleUserData(newUser function)
    let d1 = await handleData.findApprovedById(userData.SamadhanID);
    let d2 = await handleData.findPendingById(userData.SamadhanID);
    if (d1 == null && d2 == null) {
      await handleData.newUser(userData);
      await handleMail.newUserEmail(userData.Email);
    } else return 409;
    return;
  } catch (e) {
    throw new Error(e);
  }
};
// const existingUser = async (userData) => {
//   let Password = crypto.randomBytes(8).toString("hex");
//   console.log(Password);
//   try {
//     Creating Existing with handleUserData(existingUser function)
//     let hashedPassword = await bcrypt.hash(Password, 10);
//     userData.Password = hashedPassword;
//     await handleData.existingUser(userData);
//     await handleMail.existingUserEmail(userData.Email, Password);
//     return;
//   } catch (e) {
//     console.log(e);
//     throw new Error(e);
//   }
// };

module.exports = {
  newUser,
  // existingUser,
};
