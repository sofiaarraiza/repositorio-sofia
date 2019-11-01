const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.get("/", (req, res) => res.send("HELLO WORLD"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
app.get("/test", (req, res) => res.send("HOLA BB"));



