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

module.exports = {
  makeAssetsMap
};
