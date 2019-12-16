const modeloUser = require("../models/User");
const jwt = require('jsonwebtoken');
const key = require('./secretKey');
const bcrypt = require("bcryptjs");

const logUser = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    console.log("entro")

    modeloUser.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                res.status(400).json({ "username": "username does not exist" })
            } else {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        id: user.id,
                        username: user.username
                    };
                    const options = { expiresIn: '2592000' };
                    jwt.sign(payload,
                        key.secretOrKey,
                        options,
                        (err, token) => {
                            if (err) {
                                res.json({
                                    success: false,
                                    token: "There was an error"
                                });
                            } else {
                                return res.json({
                                    success: true,
                                    token: token
                                });
                            }
                        }
                    )
                } else {
                    return res.status(400).jon({ "password": "Incorrect Password" });

                }
            }
        })
        .catch(err => {
            return res.send("El error es " + err)
        })
    }

    module.exports = { logUser }