var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var publicacionRouter = require('./routes/rest_publicacion');
var eventoRouter = require('./routes/rest_evento');
var comentarioRouter = require('./routes/rest_comentario');
var likeRouter = require('./routes/rest_like');
var usuarioRouter = require('./routes/rest_usuario');

var app = express();

//   view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
  app.use('/rest/publicacion', publicacionRouter);
  app.use('/rest/evento', eventoRouter);
  app.use('/rest/comentario', comentarioRouter);
  app.use('/rest/like', likeRouter);
  app.use('/rest/usuario', usuarioRouter);
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
