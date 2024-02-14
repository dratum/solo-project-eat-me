const express = require('express');

const Main = require('../../components/Main');

const router = express.Router();

router.get('/', async (req, res) => {
  const { username } = res.locals;
  res.send(res.renderComponent(Main, { title: 'Главная', username }));
});

module.exports = router;
