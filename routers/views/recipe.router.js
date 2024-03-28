const router = require('express').Router();
const { Recipe, User_recipe } = require('../../db/models');
const RecipePage = require('../../components/pages/RecipePage');

router.get('/recipes/:id', async (req, res) => {
  const recipeId = req.params.id;
  const { id, username } = res.locals;
  const recipe = await Recipe.findByPk(recipeId);

  if (id) {
    const usercheck = await User_recipe.findOne({
      where: { user_id: id, recipe_id: recipeId },
    });
    res.send(res.renderComponent(RecipePage, { recipe, usercheck, username }));
  } else {
    res.send(res.renderComponent(RecipePage, { recipe }));
  }
});

module.exports = router;
