const router = require('express').Router();
const { Food } = require('../../db/models');
const FoodPage = require('../../components/pages/FoodPage');

router.get('/food/:id', async (req, res) => {
  const foodId = req.params.id;
  const { username } = res.locals;
  const food = await Food.findByPk(foodId);

  res.send(res.renderComponent(FoodPage, { food, username }));
});

module.exports = router;
