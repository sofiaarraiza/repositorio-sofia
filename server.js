const express = require("express");
const mongoose = require('mongoose');
const app = express();
const modelo = require('./models/City.js');
const cors = require('cors');

app.get("/", (req, res) => res.send("HELLO WORLD"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/test", (req, res) => res.send("HOLA BB"));
let uri = "mongodb+srv://desaUser:asd123@cluster0-3yxfd.mongodb.net/cities?retryWrites=true&w=majority"; 

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }).then( res => {console.log("Connected to DB")}).catch( err => {console.log("err: " + err)});


app.get('/cities', cors(), async (req, res) => {

        if (res.status(200)){
            modelo.find( {}).then (data => {
                console.log("datos por consola: " + data);
                res.json(data);
    }).catch( err => {console.log("err: " + err);});
}
});


//mongodb+srv://sofiaarraiza:<password>@cluster0-3yxfd.mongodb.net/test?retryWrites=true&w=majority

