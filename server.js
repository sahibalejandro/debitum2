const path = require('path');
const express = require('express');

function makeAssetsMap() {
  const map = { js: [] };

  if (process.env.NODE_ENV !== 'production') {
    return map;
  }

  const manifest = require('./dist/manifest.json');

  for (key of Object.keys(manifest)) {
    if (key.indexOf('_') === 0) continue;
    map.js.push(manifest[key].file);
  }

  return map;
}

const assetsMap = makeAssetsMap();
const app = express();

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
