const path = require('path');
const express = require('express');
const { makeAssetsMap } = require('./backend/utils.js');

const app = express();
const assetsMap = makeAssetsMap();

// Static files
app.use(express.static('dist'));
app.use(express.static('public'));

// Views engine
app.set('views', path.resolve(__dirname));
app.engine('html', require('ejs').__express);

// Routes
app.get('*', (_req, res) => {
  res.render('index.html', { assets: assetsMap });
});

app.listen(process.env.PORT, function () {
  console.log(`HTTP Server listening on port: ${process.env.PORT}`);
});
