const modeloCity = require("../models/City");
const modeloItinerary = require("../models/Itinerary");
var ObjectId = require('mongoose').Types.ObjectId;

/*GET CITIES*/
const getCities = (req, res) => {
    modeloCity.find({}).then(data => {
        console.log("datos por consola: " + data);
        res.send(data);
        // res.json(data);
    }).catch(err => { console.log("err: " + err); });
}

//this is how you implement a city route by specific city
const getCitiesById = (req, res) => {
let cityRequested = req.params.id;

console.log(cityRequested);
modeloItinerary.find({ city: new ObjectId(cityRequested)})
    .then(city => {
        res.send(city)
        
    })
    .catch(err => console.log(err));
};


const postCity = (req, res) =>{
    //haces lo que necesites
}

module.exports = { getCities, getCitiesById, postCity }