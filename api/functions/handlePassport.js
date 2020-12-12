//PASSPORT CONFIGURATION

//Environment Variables
require("dotenv").config({ path: __dirname + "/../.env" });

//Importing
const handleData = require("./handleData");
const localStratergy = require("passport-local").Strategy;
const jwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

//Exporting
module.exports  = (passport) => {
    
    //Local Stratergy
    passport.use(new localStratergy({ usernameField : "email", passwordField : "password"},
    authenticateUser
    )
);

    passport.serializeUser((data, done) => done(null, data.Id));    
    passport.deserializeUser((id, done) => {
        return done(null, handleData.findById(id));
});

async function authenticateUser (email, password, done) {
    try{
    //Getting User Data with Email with handleData(findByEmail function)
    let userData = handleData.findByEmail(email);
    if(userData == null  || userData < 1)
        return done(null, false);
        //Comparing the password with Bcrypt
        if(await bcrypt.compare(password, userData.password)) return done(null, userData);
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

    passport.use(new jwtStratergy (opts, (jwt_payload, done) => {
                let userData = handleData.findById(jwt_payload.id);
                if(userData != null) return done(null, jwt_payload);
                else return done(null, false);
        })
    )
}
