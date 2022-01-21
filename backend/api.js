const express = require('express');
const router = express.Router();

router.get('/payments/quick-view', (req, res) => {
  res.json({ monthTotal: 10000 });
});

module.exports = router;
