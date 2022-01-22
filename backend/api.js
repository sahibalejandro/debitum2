const express = require('express');
const router = express.Router();

router.get('/payments/quick-view', (req, res) => {
  res.json({ monthTotal: 10000 });
});

router.get('/payments', (req, res) => {
  res.json({
    payments: [
      { _id: '123', amount: 12300 },
      { _id: '456', amount: 45600 },
    ]
  });
});

module.exports = router;
