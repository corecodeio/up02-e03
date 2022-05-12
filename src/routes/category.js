const express = require('express');
const router = express.Router();

router.post('/category', (req, res, next) => {
  res.status(200).json({ message: 'POST - CATEGORY' });
});

router.get('/category', (req, res, next) => {
  res.status(200).json({ message: 'GET - CATEGORY' });
});

router.get('/category/:id', (req, res, next) => {
  res.status(200).json({ message: 'GET - CATEGORY ID' });
});

module.exports = router;
