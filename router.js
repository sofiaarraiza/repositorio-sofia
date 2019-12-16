const express = require("express");
const api = express.Router();
const cityController = require("./controller/cityController");
const userController = require("./controller/userController");
const logController = require('./controller/logController');

api.use("/cities/:id", cityController.getCitiesById);
api.use("/cities", cityController.getCities);

api.get("/users", userController.getUsers);
api.post("/users", userController.postUser);

api.post("/users/login", logController.logUser);

api.get("/", (req, res) => res.send("HELLO WORLD"));
api.get("/test", (req, res) => res.send("HOLA BB"));

module.exports = api;


