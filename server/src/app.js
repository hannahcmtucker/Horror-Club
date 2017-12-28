const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const routes = require('./controllers/routes');
const app = express();
const queries = require('./controllers/queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

app.use(favicon(path.join(__dirname, '..', '..', 'client', 'dist', 'images', 'favicon.png')));

app.use('/dist', express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'))
})


app.set('port', process.env.PORT || 8000);



module.exports = app;