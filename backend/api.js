const express = require('express');

const Payment = require('./models/payment.js');

const router = express.Router();

router.get('/payments/quick-view', (req, res) => {
  res.json({ monthTotal: 10000 });
});

router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json({ payments });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to load pyments' });
  }
});

router.post('/payments/:id?', async (req, res) => {
  const now = new Date();
  const { id } = req.params;
  let payment = new Payment();

  if (id === undefined) {
    payment.createdAt = now;
  } else {
    try {
      payment = await Payment.findById(id);
    } catch (err) {
      return res.status(500).json({ message: `Failed to load pyment with ID ${id}`});
    }
  }

  if (payment === null) {
    return res.status(404).json({ message: `Payment with ID ${id} not found`});
  }

  try {
    payment.updatedAt = now;
    payment.title = req.body.title;
    payment.amount = req.body.amount;
    await payment.save();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.json({ payment });
});

module.exports = router;
