const router = require('express').Router();
const ListRecipes = require('../../components/pages/ListRecipes');
const { Recipe } = require('../../db/models');

router.get('/list-recipes', async (req, res) => {
  const { username } = res.locals;
  const recipes = await Recipe.findAll({ raw: true });

  res.send(
    res.renderComponent(ListRecipes, {
      recipes,
      title: 'Рецепты блюд',
      username,
    })
  );
});

module.exports = router;
