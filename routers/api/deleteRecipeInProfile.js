const router = require('express').Router();
const { User_recipe } = require('../../db/models');

router.delete('/delete-recipe', async (req, res) => {
  const { recipe_id } = req.body;
  try {
    await User_recipe.destroy({ where: { recipe_id } });
    res.json({ message: 'OK' });
  } catch (error) {
    res.status(401).json({ message: error });
  }
});
module.exports = router;
