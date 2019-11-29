const express = require("express");
const api = express.Router();
const cityController = require("./controller/cityController");
const userController = require("./controller/userController");

api.use("/cities/:id", cityController.getCitiesById);
api.use("/cities", cityController.getCities);

api.get("/users", userController.getUsers);
api.post("/users", userController.postUser);

api.get("/", (req, res) => res.send("HELLO WORLD"));
api.get("/test", (req, res) => res.send("HOLA BB"));



module.exports = api;


