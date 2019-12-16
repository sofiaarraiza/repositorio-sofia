const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const router = require("./router");
/*const passport = require ('./passport');*/

// const expressValidator = require('express-validator');

app.listen(port, () => console.log(`Server running on port ${port}`));

let uriCities = "mongodb+srv://desaUser:asd123@cluster0-3yxfd.mongodb.net/cities?retryWrites=true&w=majority";

/*Conectar con Cities*/
mongoose.connect(uriCities, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => { console.log("Connected to DB") })
    .catch(err => { console.log("err: " + err) });

/*app.use(passport.initialize())*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));
// app.use(expressValidator());
app.use(cors());
app.use('/', router);



//---------------------------------------


// const modeloCity = require('./models/City.js');
// const modeloItinerary = require('./models/Itinerary.js')
// const modeloUser = require('./models/User');
// var ObjectId = require('mongoose').Types.ObjectId;

// app.get("/test", (req, res) => res.send("HOLA BB"));
// app.get("/", (req, res) => res.send("HELLO WORLD"));

// mongoose.connect(uriItinerary, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(res => { console.log("Connected to DB") })
//     .catch(err => { console.log("err: " + err) });

// /*Conectar con Users*/
// mongoose.connect(uriUsers, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(res => { console.log("Connected to DB") })
//     .catch(err => { console.log("err: " + err) });

// app.use(cors());

// /*GET CITIES*/
// app.get('/cities', (req, res) => {
 
//         modeloCity.find({}).then(data => {
//             console.log("datos por consola: " + data);
//             res.send(data);
//             // res.json(data);
//         }).catch(err => { console.log("err: " + err); });
 
// });

// //this is how you implement a city route by specific city
// app.get('/cities/:id', (req, res) => {
//     let cityRequested = req.params.id;
//     console.log(cityRequested);
//     // modeloItinerary.findOne({  city: cityRequested })
//     modeloItinerary.find({ city: new ObjectId(cityRequested)})
//         .then(city => {
//             res.send(city)
            
//         })
//         .catch(err => console.log(err));
// });

// /*Get Users*/
// app.get('/users', (req, res) => {

//         modeloUser.find({}).then(data => {
//             console.log("datos por consola: " + data);
//             res.send(data);
//             // res.json(data);
//         }).catch(err => { console.log("err: " + err); });
 
// });

//mongodb+srv://sofiaarraiza:<password>@cluster0-3yxfd.mongodb.net/test?retryWrites=true&w=majority

