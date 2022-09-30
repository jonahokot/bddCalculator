const express = require('express');

const sub = require('../public/subtraction');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('calculator', {
    title: 'Calculator',
  });
});

router.get('/subtract', (req, res) => {
  const subAns = sub.subtract(req.body.num1, req.body.num2);
  res.render('calculator', {
    title: 'After Subtraction',
    subAns,
  });
});

module.exports = router;
