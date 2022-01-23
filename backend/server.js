require('console-stamp')(console);
const express = require('express');
const mongoose = require('mongoose');

const api = require('./api.js');
const { makeAssetsMap } = require('./utils.js');

const app = express();
const assetsMap = makeAssetsMap();

// Static files
app.use(express.static('./dist'));
app.use(express.static('./public'));

// Views engine
app.set('views', './');
app.engine('html', require('ejs').__express);

// Routes
app.use('/api', api);

app.get('*', (_req, res) => {
  res.render('index.html', { assets: assetsMap });
});

// Connect with MongoDB
mongoose.connect('mongodb://mongo:27017/debitum2', function (err) {
  const message = 'Connecting with MongoDB:';

  if (err) {
    console.error(message, err.message);
    process.exit(1);
  }

  console.log(message, 'OK');
});

// Start HTTP server
app.listen(process.env.HTTP_PORT, function () {
  console.log(`HTTP Server listening on port ${process.env.HTTP_PORT}`);
});
