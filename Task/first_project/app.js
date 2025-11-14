var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const dotEnv = require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', ()=> {
  console.log("Mongo connection succesful");
}).on('error', (err)=>{
  console.log("Error", err);
})

// Admin Intialise Routes
const adminRoute = [
  {path : "/login", routePath : "/login"},
  {path : "/dashboard", routePath : "/dashboard"},
];

adminRoute.forEach((x) => {
  app.use("/admin" + x.path, require("./routes/admin"+x.routePath));
});

// User Intialise Routes
const userRoute = [
  {path : "/login", routePath : "/login"},
  {path : "/dashboard", routePath : "/dashboard"},
];

userRoute.forEach((x) => {
  app.use("/user" + x.path, require("./routes/admin"+x.routePath));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
