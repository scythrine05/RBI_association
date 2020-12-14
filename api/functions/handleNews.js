//NEWS DATA HANDLER

//Importing
const fs = require('fs');

//Get All News
const getAllNews = () => {
    let requiredData =  fs.readFileSync('./data/news.json');
    return JSON.parse(requiredData);
};


const postNews = async(newsData) => {

    let rawNewsData = fs.readFileSync('./data/news.json');
    let jsonNewsData =  JSON.parse(rawNewsData);
    jsonNewsData.push(newsData);
    rawNewsData = JSON.stringify(jsonNewsData)
    fs.writeFile('./data/news.json', rawNewsData , (err)=>{
        if(err) throw err;
        else return;
    });
}

module.exports = {
    getAllNews,
    postNews
}

