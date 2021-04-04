//GALLERY DATA HANDLER

//Importing
const pool = require("../database/dbPool");

//Get All Images
const getAllImages = async () => {};

const getAllYearImages = async (year) => {};

const postImage = async (imageData) => {
  let date = new Date();
  let sql = "insert into gallery(ImageFile, UploadDate) values(?,?)";
  try {
    await pool.query(sql, [imageData.File, date]);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getAllImages,
  getAllYearImages,
  postImage,
};
