//PASSPORT CONFIGURATION

//Importing
const Router = require("router");
const handleData = require("./handleUserData");
const localStratergy = require("passport-local").Strategy;
const jwtStratergy = require("passport-jwt").Strategy;
const bcrypt = require("bcrypt");

const router = Router();
const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["accessToken"];
  }
  return token;
};
//Exporting
module.exports = (passport) => {
  //Local Stratergy
  passport.use(
    new localStratergy(
      { usernameField: "Email", passwordField: "Password" },
      authenticateUser
    )
  );

  passport.serializeUser((data, done) => done(null, data.Id));
  passport.deserializeUser(async (id, done) => {
    return done(null, await handleData.findApprovedById(id));
  });

  async function authenticateUser(email, password, done) {
    try {
      //Getting User Data with Email with handleUserData(findApprovedByEmail function)
      let userData = await handleData.findApprovedByEmail(email);
      if (userData == null || userData < 1) return done(null, false);
      //Comparing the password
      //let match = await bcrypt.compare(password, userData[0].Password);
      if (password == userData[0].Password) return done(null, userData[0]);
      else done(null, false);
    } catch (e) {
      return done(e);
    }
  }
  //JWT Stratergy
  const opts = {}; //JWT Stratergy Options
  opts.secretOrKey = process.env.ACCESS_TOKEN;
  opts.jwtFromRequest = cookieExtractor;

  passport.use(
    new jwtStratergy(opts, async (jwt_payload, done) => {
      let userData = await handleData.findApprovedById(jwt_payload.Id);
      if (userData != null) return done(null, jwt_payload);
      else return done(null, false);
    })
  );
};
