
/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
 
const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
 
require("dotenv").config();

const authRouter = require("./auth");

// Server initialization
const app = express();
app.set('port', process.env.PORT || 3000); //if a port already exists, use it. if not, use 3000
require('./database');

/**
 * Session Configuration 
 */

const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
};
  
if (app.get("env") === "production") {
    // Serve secure cookies, requires HTTPS
    session.cookie.secure = true;
}


/**
 * Passport Configuration 
 */

const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
},
function(accessToken, refreshToken, extraParams, profile, done) {
      /**
       * Access tokens are used to authorize users to an API
       * (resource server)
       * accessToken is the token to call the Auth0 API
       * or a secured third-party API
       * extraParams.id_token has the JSON Web Token
       * profile has all the information from the user
       */
      return done(null, profile);
    }
);


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
 
app.use(expressSession(session));
 
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
 
passport.serializeUser((user, done) => {
   done(null, user);
});
 
passport.deserializeUser((user, done) => {
   done(null, user);
});

// Router mounting
app.use("/", authRouter);

//Middlewares



//Routes
// using this we can put the rest of the code inside the folder "routes"
app.get("/", (req, res) =>{
    res.send("<h1>Hello World</h1>");
});
//app.use(require('./routes/index'));
//app.use(require('./routes/meteors'));
//app.use(require('./routes/users'));


//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});