const ListFood = require('../../components/pages/ListFood');
const router = require('express').Router();
const { Food } = require('../../db/models');

router.get('/list-food', async (req, res) => {
  const { username } = res.locals;
  const foods = await Food.findAll({ raw: true });
  res.send(
    res.renderComponent(ListFood, {
      title: 'Продукты питания',
      foods,
      username,
    })
  );
});

module.exports = router;
