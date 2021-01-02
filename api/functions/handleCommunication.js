//COMMUNICATION DATA HANDLER

//Importing
const pool = require('../database/dbPool');

//Get All Communication
const getAllComms = async() => {

    let sql = 'select * from communication order by Date desc';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
};

//Get All Communication of Particular Year
const getAllYearComms = async(year) => {

    let sql = 'select * from communication where Year(Date) = ? order by Date desc';
    try{
        let requiredData = await pool.query(sql, [year]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }

};

//Get Front Communication for Homepage
const getFComms = async() => {
    
    let sql = 'select * from communication order by Date desc limit 3'; // latest three communication
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Post the Communication 
const postComms = async(commsData) => {
    
}

module.exports = {

    getAllComms,
    getAllYearComms,
    getFComms,
    postComms
}

