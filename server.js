const express = require("express");
const mongoose = require('mongoose');
const app = express();
const modeloCity = require('./models/City.js');
const modeloItinerary = require('./models/Itinerary.js')
const cors = require('cors');
const port = process.env.PORT || 5000;
var ObjectId = require('mongoose').Types.ObjectId;

app.get("/", (req, res) => res.send("HELLO WORLD"));
app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/test", (req, res) => res.send("HOLA BB"));

let uriCities = "mongodb+srv://desaUser:asd123@cluster0-3yxfd.mongodb.net/cities?retryWrites=true&w=majority";
let uriItinerary = "mongodb+srv://desaUser:asd123@cluster0-3yxfd.mongodb.net/itineraries?retryWrites=true&w=majority";

/*Conectar con Cities*/
mongoose.connect(uriCities, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => { console.log("Connected to DB") })
    .catch(err => { console.log("err: " + err) });

/*Conectar con Itineraries*/
mongoose.connect(uriItinerary, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => { console.log("Connected to DB") })
    .catch(err => { console.log("err: " + err) });

app.get('/cities', cors(), async (req, res) => {
    if (res.status(200)) {
        modeloCity.find({}).then(data => {
            console.log("datos por consola: " + data);
            res.json(data);
        }).catch(err => { console.log("err: " + err); });
    }
});

//this is how you implement a city route by specific city
app.get('/cities/:id', cors(), async (req, res) => {
    let cityRequested = req.params.id;
    console.log(cityRequested);
    // modeloItinerary.findOne({  city: cityRequested })
    modeloItinerary.find({ city: new ObjectId(cityRequested)})
        .then(city => {
            res.send(city)
            
        })
        .catch(err => console.log(err));
});

//mongodb+srv://sofiaarraiza:<password>@cluster0-3yxfd.mongodb.net/test?retryWrites=true&w=majority

