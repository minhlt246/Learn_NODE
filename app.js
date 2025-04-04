var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var corsOptionsDelegate = function (req, callback) {
  var corsOptions= { origin: true };
  callback(null, corsOptions);
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categroryRouter = require('./routes/categrory');
var productsRouter = require('./routes/products');
var billRouter = require('./routes/bill');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors(corsOptionsDelegate));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/DANTSP')
    .then(() => console.log('Kết nối MongoDB thành công'))
    .catch((err) => console.log('Lỗi kết nối MongoDB:', err));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categrory',categroryRouter);
app.use('/products',productsRouter);
app.use('/bill',billRouter);

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
