//NEWS DATA HANDLER

//Importing
const pool = require('../database/dbPool');

//Get All News
const getAllNews = async() => {

    let sql = 'select * from news order by Date desc';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
};


//Get All News of Particular Year
const getAllYearNews = async(year) => {

    let sql = 'select * from news where Year(Date) = ? order by Date desc';
    try{
        let requiredData = await pool.query(sql, [year]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }

};

//Post the Newz
const postNews = async(newsData) => {
    
}

module.exports = {
    getAllNews,
    getAllYearNews,
    postNews
}

