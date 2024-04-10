const express = require('express');
const app = express();

// Import dependencies
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const dotenv = require('dotenv');

// Load environment variables
// dotenv.config();

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// app.use(csurf());

// Routes
// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);

// // Error handling
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     error: {
//       message: err.message
//     }
//   });
// });

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
