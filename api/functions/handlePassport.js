//PASSPORT CONFIGURATION

//Environment Variables
require("dotenv").config({ path: __dirname + "/../.env" });

//Importing
const handleData = require("./handleUserData");
const localStratergy = require("passport-local").Strategy;
const jwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require('bcrypt');

//Exporting
module.exports  = (passport) => {

    //Local Stratergy
    passport.use(new localStratergy({ usernameField : "Email", passwordField : "Password"},
    authenticateUser
    )
);

    passport.serializeUser((data, done) => done(null, data.Id));    
    passport.deserializeUser( async(id, done) => {
    return done(null, await handleData.findApprovedById(id));
});

async function authenticateUser (email, password, done) {
    try{
    //Getting User Data with Email with handleUserData(findApprovedByEmail function)
    let userData = await handleData.findApprovedByEmail(email);
    if(userData == null  || userData < 1)
        return done(null, false);
        //Comparing the password
        let match = await bcrypt.compare(password,userData[0].Password); 
        if(match) return done(null, userData[0]);
        else done(null, false);
    }
    catch(e){
        return done(e);
    }
} 
   //JWT Stratergy
    const opts = {}; //JWT Stratergy Options 
    opts.secretOrKey = process.env.ACCESS_TOKEN;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    
    passport.use(new jwtStratergy (opts, async(jwt_payload, done) => {

        let userData = await handleData.findApprovedById(jwt_payload.Id);
        if(userData != null) return done(null, jwt_payload);
        else return done(null, false);
        })
    )
}
