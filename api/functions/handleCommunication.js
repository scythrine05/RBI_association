//COMMUNICATION DATA HANDLER

//Importing
const pool = require("../database/dbPool");

//Get All Communication
const getAllComms = async () => {
  let sql = "select * from communication order by Date desc";
  try {
    let requiredData = await pool.query(sql);
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Get All Communication of Particular Year
const getAllYearComms = async (year) => {
  let sql =
    "select * from communication where Year(Date) = ? order by Date desc";
  try {
    let requiredData = await pool.query(sql, [year]);
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Get Front Communication for Homepage
const getFComms = async () => {
  let sql = "select * from communication order by Date desc limit 3"; // latest three communication
  try {
    let requiredData = await pool.query(sql);
    return requiredData;
  } catch (e) {
    throw new Error(e);
  }
};

//Post the Communication
const postComms = async (Id, commsData) => {
  let date = new Date();
  let sql =
    "insert into communication(Date, AuthorID, Heading, Body, Attach) values(?,?,?,?,?)";
  try {
    await pool.query(sql, [
      date,
      Id,
      commsData.Heading,
      commsData.Body,
      commsData.File,
    ]);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getAllComms,
  getAllYearComms,
  getFComms,
  postComms,
};
