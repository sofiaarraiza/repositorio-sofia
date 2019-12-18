// const modeloUser = require("../models/User");
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const bcrypt = require("bcryptjs");

// const googleLogIn = (req, res) => {
//     const { username, password } = req.body;

//     if(!username || !password) {
//         return res.status(400).json({ msg: "Please enter all fields"});
//     }else{
    
//     //Check for user
//     modeloUser.findOne({ username })
//         .then(user => {
//              if (!user) res.status(400).json({ msg: "Username does not exist" });
            
//             //Validate Password
//             bcrypt.compare(password, user.password)
//                 .then(isMatch => {
//                     if (!isMatch) return res.status(400).json({ msg: "Invalid password"});

//                     jwt.sign(
//                         { id: user.id },
//                         config.get('jwtSecret'),
//                         {expiresIn: 3600 },
//                         (err, token) => {
//                             if(err) throw err;
//                             res.json({
//                                 token,
//                                 user: {
//                                     id: user.id,
//                                     username: user.username,
//                                     profile: user.profile
//                                 }
//                             });
//                         }
//                     )
//                 })

//                })
//             }
//         }

//             //GET to current logged user
//             const currentUser = (req, res) => {
//                 modeloUser.findById(req.user.id)
//                 .select('-password')
//                 .then(user => res.json(user));
//             }

//      module.exports = { logUser, currentUser }