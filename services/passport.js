const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setup options for jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// create jwt Strategy
const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }

  })
})

// tell passport to use this Strategy
passport.use(jwtLogin);
