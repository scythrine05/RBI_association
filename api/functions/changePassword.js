//Importing

const bcrypt = require("bcrypt");
const handleUser = require("./handleUserData");
const pool = require("../database/dbPool");

const changeUserPassword = async (id, oldPassword, newPassword) => {
  try {
    let sql = "update approvedmember set Password = ? where SamadhanID = ?";
    let userData = await handleUser.findApprovedById(id);
    let match = await bcrypt.compare(oldPassword, userData[0].Password);
    if (match) {
      let hashedPassword = await bcrypt.hash(newPassword, 10);
      await pool.query(sql, [hashedPassword, id]);
      return;
    } else {
      throw new Error();
    }
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  changeUserPassword,
};
