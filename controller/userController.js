const modeloUser = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require('config');
const jwt = require('jsonwebtoken');
const passport = require('../passport');

//Get all users
const getUsers = (req, res) => {
    modeloUser.find({}).then(user => {
        console.log("datos por consola: " + user);
        res.send(user);
    }).catch(err => { console.log("err: " + err); });
};

//Create a New User
/*
router.post('/', (req, res) => {
    const { username, password, profile } = req.body;  

    if(!username || !password || !profile){
        return res.status(400).json({ msg: 'Please enter all fields'}); 
    }

    modeloUser.findOne({ email })
    .then(user => {
        if(user)return res.status(400).json({ msg: 'Username already exists'});

        const newUser = new modeloUser({
            username,
            password,
            profile
        })
    })
})*/
const postUser = (req, res) => {
        
        const { username, password, profile } = req.body;

        //Check existing user
        modeloUser.findOne({ username })
            .then(user => {
                if (user) {
                    return res.status(400).json({ "username": "Username already exists" });
                } else {
                    const newUser = new modeloUser({
                        username,
                        password,
                        profile
                    })

                    //Create salt & hash
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) {
                                throw err
                            } else {
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => {

                                        jwt.sign(
                                            { id: user.id },
                                            config.get('jwtSecret'),
                                            {expiresIn: 3600 },
                                            (err, token) => {
                                                if(err) throw err;
                                                res.json({
                                                    token,
                                                    user: {
                                                        id: user.id,
                                                        username: user.username,
                                                        profile: user.profile
                                                    }
                                                })
                                            }
                                        )
                                  
                                    })
                            
                            }
                        })
                    })
                }
            })
    }

    //Google Redirect
    const userRedirect = (req, res) => {
        const payload = {
            id: req.user.id,
            username: req.user.username,
            // avatarPicture: user.avatarPath
        };
        const options = {expiresIn: 3600};
        
        jwt.sign(
        payload,
        config.get('jwtSecret'),
        options,
        (err, token) => {
            if(err){
             return res.json({
                payload:payload,
                success: false,
                token: "There was an error",
            });
            }else {
                // res.json({
                // payload: payload,
                // success: true,
                // token: token});
                // console.log(res)
                res.redirect(`http://localhost:3000/user/${token}`) 
            }
        }
        )
    };

    const getUserGoogle = (req,res) =>{
        let userRequested = req.params._id;  
        User
        .findOne({_id:userRequested})
        .then((user)=>{res.json(user).status(204)}
    )}; 
    

module.exports = { getUsers, postUser, userRedirect, getUserGoogle }

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
