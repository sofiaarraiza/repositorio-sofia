const modeloUser = require("../models/User");
const bcrypt = require("bcryptjs");
// const validateRegister = require("../validation/registerValidation");

const getUsers = (req, res) => {
    modeloUser.find({}).then(user => {
        console.log("datos por consola: " + user);
        res.send(user);
    }).catch(err => { console.log("err: " + err); });

};
const postUser = (req, res) => {

    // const { errors, isValid } = validateRegister(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors)
    // } else {

        modeloUser.findOne({ username: req.body.username })
            .then(user => {
                if (user) {
                    return res.status(400).json({ "username": "Username already exists" });
                } else {
                    const newUser = new modeloUser({
                        username: req.body.username,
                        password: req.body.password,
                        profile: req.body.profile
                    })

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) {
                                throw err
                            } else {
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => {
                                        res.send(newUser);
                                    })
                                    .catch(err => {
                                        res.status(500).send("Server error")
                                    })
                            }
                        })
                    })
                }
            })
    }


module.exports = { getUsers, postUser }

  //     console.log("datos por consola: " + data);
    //     console.log(data)

    //     if (data.length > 0) {
    //         return res.send("El usuario ya existe")
    //     }

    //     newUser.save()
    //         .then(user => {
    //             res.send(newUser);
    //         })
    //         .catch(err => {
    //             res.status(500).send("Server error");
    //         });

    // }).catch(err => { console.log("err: " + err); });


/*modeloUser.create({}).then(user => {
    res.send(user);
}).catch(err => { console.log("err: " + err); })
*/


    // req.checkBody('username', 'Username field cannot be empty')
    //     .notEmpty();
    //  req.checkBody('username', 'Username must be between 4-15 characters long').len(4, 15);
    //  req.checkBody('password', 'Password must be between 8-100 characters long').len(4, 100);

    //  const errors = req.validationErrors();
    //  if (errors) {
    //      res.render('register', {title: 'Registration Error'});
    //  }
