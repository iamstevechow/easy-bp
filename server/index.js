const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const passport = require('passport');
const session = require('express-session');
const db = require('./db/database');
// const SequelizeStore = require('connect-session-sequelize')(session.Store)
// const sessionStore = new SequelizeStore({db})
const User = require('./db/models/User');

//Checks env, if in dev, requires secrets
// if (process.env.NODE_ENV !== 'production') require('../secrets')

//Passport Registration
// passport.serializeUser((user, done) => {
//   done(null, user.id)
// })

// passport.deserializeUser(async (id, done) => {
//   try{
//     const user = await User.findByPk(id)
//     done(null, user)
//   } catch(err){
//     done(err)
//   }
// })

//Logging MiddleWare
app.use(morgan('dev'));

//BodyParsing MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Session MiddleWare with Passport
// app.use(session({
//   cookieName: 'session',
//   secret: process.env.SESSION_SECRET,
//   store: sessionStore,
//   resave: false,
//   saveUninitialized: false,
// }))

// app.use(passport.initialize())
// app.use(passport.session())

//Static Middleware
app.use(express.static(path.join(__dirname, '..', '/client/public')));

//Api Routes
app.use('/authenticate', require('./authenticate'));
app.use('/api', require('./api'));

// Redirects to homepage when no API reqs match
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/client/public/'));
});

//Handles 500 Errs
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || 'Internal Server Err. Whoops!');
});

module.exports = { app };
