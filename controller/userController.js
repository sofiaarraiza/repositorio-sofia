const modeloUser = require("../models/User");

const getUsers = (req, res) => {
    modeloUser.find({}).then(data => {
        console.log("datos por consola: " + data);
        res.send(data);
        // res.json(data);
    }).catch(err => { console.log("err: " + err); });

};

const postUser = (req, res) => {
    const newUser = new modeloUser ({
        _id: req.body._id,
        username: req.body.username,
        password: req.body.password,
        profile: req.body.profile
    })
    newUser.save()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send("Server error");
        });
}

module.exports = {getUsers, postUser}


/*modeloUser.create({}).then(user => {
    res.send(user);
}).catch(err => { console.log("err: " + err); })
*/
