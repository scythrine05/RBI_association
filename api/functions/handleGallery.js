//GALLERY DATA HANDLER

//Importing
const fs = require('fs');

//Get All Images
const getAllImages = () => {
    let requiredData =  fs.readFileSync('./data/gallery.json');
    return JSON.parse(requiredData);
};

const postImage = async(imageData) => {

    let rawImageData = fs.readFileSync('./data/gallery.json');
    let jsonImageData =  JSON.parse(rawImageData);
    jsonImageData.push(imageData);
    rawImageData = JSON.stringify(jsonImageData)
    fs.writeFile('./data/gallery.json', rawImageData , (err)=>{
        if(err) throw err;
        else return;
    });
}

module.exports = {
    getAllImages,
    postImage
}

