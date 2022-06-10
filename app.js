const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mahasiswaRoute = require('./routes/mahasiswa');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/mahasiswa', mahasiswaRoute);

app.use((req, res, next) => {
  const error = new Error('File tidak ditemukan');
  error .status = 404;
  next(error);
})

app.use ((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message:error.message
      }
    })
})
module.exports = app;
