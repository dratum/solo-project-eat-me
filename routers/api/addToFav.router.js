const router = require('express').Router();
const { User_program, User_recipe } = require('../../db/models');

router.post('/addToFav', async (req, res) => {
  const { programId, recipeId } = req.body;
  const { id } = res.locals;
  if (programId) {
    try {
      await User_program.create({ user_id: id, program_id: programId });
      res.status(201).json({ text: 'Успешное добавление в избранное' });
    } catch (error) {
      res.json(error.message);
    }
  } else {
    try {
      await User_recipe.create({ user_id: id, recipe_id: recipeId });
      res.status(201).json({ text: 'Успешное добавление в избранное' });
    } catch (error) {
      res.json(error.message);
    }
  }
});

module.exports = router;
