const router = require('express').Router();

router.get('/programs/:id', async (req, res) => {
  res.send('Какая-то программа с завтраком обедом и ужином :)');
});

module.exports = router;
