//USER DATA HANDLER

//Importing
const pool = require("../database/dbPool");
const handleMail = require("./hadleMailSystem");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//Get All Pending Members
const getAllPending = async () => {
  let sql = "select Email, Name, SamadhanID from pendingmember";
  try {
    let requiredData = await pool.query(sql);
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Create New User
const newUser = async (newData) => {
  let sql = "insert into pendingmember values(?, ?, ?, ?)";
  try {
    await pool.query(sql, [
      newData.SamadhanID,
      newData.Email,
      newData.Name,
      newData.OfficeLocation,
    ]);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

//Create Existing User
const existingUser = async (newData) => {
  let sql =
    "update approvedmember set  Password = ?, Name = ? , Email=?, OfficeLocation = ? where SamadhanID = ?";
  try {
    await pool.query(sql, [
      newData.Password,
      newData.Name,
      newData.Email,
      newData.OfficeLocation,
      newData.SamadhanID,
    ]);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

//Find Approved User by Id
const findApprovedById = async (id) => {
  let sql = "select * from approvedmember where SamadhanID = ?";
  try {
    let requiredData = await pool.query(sql, [id]);
    if (requiredData.length <= 0) return null;
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Find Pending User by Id
const findPendingById = async (id) => {
  let sql = "select * from pendingmember where SamadhanID = ?";
  try {
    let requiredData = await pool.query(sql, [id]);
    if (requiredData.length <= 0) return null;
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Find Approved User by Email
const findApprovedByEmail = async (email) => {
  let sql = "select * from approvedmember where Email = ?";
  try {
    let requiredData = await pool.query(sql, [email]);
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Find Pending User by Email
const findPendingByEmail = async (email) => {
  let sql = "select * from pendingmember where Email = ?";
  try {
    let requiredData = await pool.query(sql, [email]);
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Disapprove a Pending Member
const disapprovePending = async (id) => {
  let sql = "delete from pendingmember where SamadhanID = ?";
  try {
    let results = await findPendingById(id);
    await pool.query(sql, [id]);
    await handleMail.newUserEmailDisapproved(results[0].Email);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

//Approve a Pending Member
const approvePending = async (id) => {
  let sql =
    "insert into approvedmember(SamadhanID, Email, Name, OfficeLocation,Password) select SamadhanID, Email, Name, OfficeLocation, ? from pendingmember where SamadhanID = ?";
  let sql2 = "delete from pendingmember where SamadhanID = ?";
  try {
    let Password = crypto.randomBytes(8).toString("hex");
    let hashedPassword = await bcrypt.hash(Password, 10);
    let results = await findPendingById(id);
    await pool.query(sql, [hashedPassword, id]);
    await pool.query(sql2, [id]);
    await handleMail.newUserEmailApproved(results[0].Email, Password);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

//Exporting
module.exports = {
  getAllPending,
  newUser,
  existingUser,
  findApprovedById,
  findPendingById,
  findApprovedByEmail,
  findPendingByEmail,
  disapprovePending,
  approvePending,
};
