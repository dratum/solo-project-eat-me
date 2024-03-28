const router = require('express').Router();
const PrivatePage = require('../../components/pages/PrivatePage');
const {
  User_program,
  Program,
  User_recipe,
  Recipe,
} = require('../../db/models');

router.get('/private', async (req, res) => {
  const { username, id } = req.session.user;

  const programsArr = await User_program.findAll({
    where: { user_id: id },
    raw: true,
  });
  const userPrograms = await Program.findAll({
    where: { id: programsArr.map((program) => program.program_id) },
    raw: true,
  });
  const recipesArr = await User_recipe.findAll({
    where: { user_id: id },
    raw: true,
  });
  const userRecipes = await Recipe.findAll({
    where: { id: recipesArr.map((recipe) => recipe.recipe_id) },
    raw: true,
  });

  res.send(
    res.renderComponent(PrivatePage, {
      title: 'Личный кабинет',
      username,
      userPrograms,
      userRecipes,
    })
  );
});

module.exports = router;
