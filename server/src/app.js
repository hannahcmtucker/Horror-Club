const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', process.env.PORT || 3000);
app.use(routes);

module.exports = app;