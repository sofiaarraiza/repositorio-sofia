const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require ('./models/User');
const passport = require ("passport");
const config = require('config');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//Google Strategy
const GOOGLE_ID = config.get('GOOGLE_ID')
const GOOGLE_SECRET = config.get('GOOGLE_SECRET')

passport.use(new GoogleStrategy({
  //first param: options
    clientID: GOOGLE_ID,
    clientSecret: GOOGLE_SECRET,
    callbackURL: "/login/redirect"
  },
  //second param: cb function
  function(accessToken, refreshToken, profile, done) {
    // check if user already exists
    User.findOne({ googleID: profile.id })
    .then((currentUser) => {
        if (currentUser) {
          return done (null, currentUser); // already have this user, done
        } else { 
          //it doesn't exist, create it first, then done.
            new User({
                googleID: profile.id,
                username: profile.displayName
            })
            .save()
            .then((newUser) => {
                done(null, newUser)
              }
            );
        }
    })
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});