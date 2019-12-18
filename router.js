const express = require("express");
const api = express.Router();
const cityController = require("./controller/cityController");
const userController = require("./controller/userController");
const logController = require('./controller/logController');
const auth = require('./middleware/auth');
const passport = require('passport');

api.use("/cities/:id", cityController.getCitiesById);
api.use("/cities", cityController.getCities);

api.get("/users", userController.getUsers);
api.post("/users", userController.postUser);

api.post("/login", logController.logUser);
api.get("/user", auth, logController.currentUser);

//google callback route (JWT)
api.get("/login/redirect", passport.authenticate('google', { session: false}), userController.userRedirect )

//Google Auth Login
api.get("/login/google", passport.authenticate('google', // first param: strategy (passport knows it)
        {scope: ['profile']}, //second param: google info wanted
        {session: false }
    ));

api.get("/", (req, res) => res.send("HELLO WORLD"));
api.get("/test", (req, res) => res.send("HOLA BB"));

module.exports = api;


