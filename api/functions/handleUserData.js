//USER DATA HANDLER

//Importing
const pool = require("../database/dbPool");
const handleMail = require("./hadleMailSystem");
const bcrypt = require("bcrypt");
const crypto = require('crypto');

//Get All Approved Members
const getAllApproved = async() => {

    let sql = 'select * from approvedmember';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
};

//Get All Pending Members
const getAllPending = async() => {

    let sql = 'select * from pendingmember';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
};

//Get All Admin Members
const getAllAdmin = async() => {

    let sql = 'select * from approvedmember where IsAdmin = 1';
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }

};

//Create New User
const newUser = async(newData) => {
    
    let sql = 'insert into pendingmember values(?, ?, ?, ?)';
    try{
        await pool.query(sql,[newData.SamadhanID , newData.Email, newData.Name, newData.OfficeLocation]);
        return;
    }
    catch(e){
        return new Error(e);
    }
};

//Create Existing User
const existingUser = async(newData) => {
    
    let sql = 'update approvedmember set Name = ? , OfficeLocation = ?, Password = ? where SamadhanID = ?';
    try{
        await pool.query(sql,[newData.Name, newData.OfficeLocation, newData.Password, newData.SamadhanID]);
        return;
    }
    catch(e){
        return new Error(e);
    }
};

//Find Approved User by Id
const findApprovedById = async(id) => {
    
    let sql = 'select * from approvedmember where SamadhanID = ?';
    try{
        let requiredData = await pool.query(sql,[id]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
    
}

//Find Pending User by Id
const findPendingById = async(id) => {
    let sql = 'select * from pendingmemeber where SamadhanID = ?';
    try{
        let requiredData = await pool.query(sql,[id]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Find Approved User by Email
const findApprovedByEmail = async(email) => {
    
    let sql = 'select * from approvedmember where Email = ?';
    try{
        let requiredData = await pool.query(sql,[email]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Find Pending User by Email
const findPendingByEmail = async(email) => {
    
    let sql = 'select * from pendingmember where Email = ?';
    try{
        let requiredData = await pool.query(sql,[email]);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }

}

//Remove a Approved Member
const removeApproved = async(id) => {
    
    let sql = 'delete from approvedmember where SamadhanID = ?';
    try{
        let results =  await findApprovedById(id);
        let email = results[0].Email; 
        await pool.query(sql, [id]);
        await handleMail.removeExistingUserEmail(email);
        return;
    }
    catch(e){
        return new Error(e);
    }
}

//Disapprove a Pending Member
const disapprovePending = async(id) => {

    let sql = 'delete from pendingmember where SamadhanID = ?';
    try{
        let results = await findPendingById(id);
        await pool.query(sql,[id]);
        await handleMail.newUserEmailDisapproved(results[0].Email);
        return;
    }
    catch(e){
        return new Error(e);
    }
}

//Approve a Pending Member 
const approvePending = async(id) => {

    let sql = 'insert into approvedmember(SamadhanID, Email, Name, OfficeLocation,Password) select SamadhanID, Email, Name, OfficeLocation, ? from pendingmember where SamadhanID = ?';
    let sql2 = 'delete from pendingmember where SamadhanID = ?';
    try{
        let Password = crypto.randomBytes(8).toString('hex');
        let hashedPassword = await bcrypt.hash(Password, 10);
        let results = await findPendingById(id);
        await pool.query(sql, [hashedPassword,id]);
        await pool.query(sql2, [id]);
        await handleMail.newUserEmailApproved(results[0].Email, Password);
        return;
    }
    catch(e){
        return new Error(e);
    }
}
//Find Name of Approved
const findApprovedByName = async(letter) => {
    
    let sql = `select * from approvedmember where Name like '${letter}%'`;
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Find Name of Pending
const findPendingByName = async(letter) => {
    
    let sql = `select * from pendingmember where Name like '${letter}%'`;
    try{
        let requiredData = await pool.query(sql);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
    
}

//Find Name of Admin
const findAdminByName = async(letter) => {
    
    let sql = `select * from approvedmember where isAdmin = 1 and Name like '${letter}%'`;
    try{
        let requiredData = await pool.query(sql);
        console.log(requiredData);
        return requiredData;
    }
    catch(e){
        return new Error(e);
    }
}

//Exporting
module.exports = { 
    getAllApproved,
    getAllPending,
    getAllAdmin,
    newUser,
    existingUser,
    findApprovedById,
    findPendingById,
    findApprovedByEmail,
    findPendingByEmail,
    removeApproved,
    disapprovePending,
    approvePending,
    findAdminByName,
    findPendingByName,
    findApprovedByName
}