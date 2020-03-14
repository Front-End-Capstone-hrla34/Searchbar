const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

module.exports = app;
