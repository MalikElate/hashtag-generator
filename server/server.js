const express = require('express');
const passport = require('passport'); 
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

// routes includes 
const loginRouter = require('./routes/login.router'); 

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);


// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Route */
app.use('/api/login', loginRouter);
// app.use('/api/request-feature', requestFeatureRouter); 
// app.use('/api/payment', paymentRouter);
// app.use('/api/contact', contactRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 4000;
 
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
