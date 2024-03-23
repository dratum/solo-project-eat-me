const router = require('express').Router();
const { User_program } = require('../../db/models');

router.post('/addToFav', async (req, res) => {
  const { programId } = req.body;
  const { id } = res.locals;
  try {
    await User_program.create({ user_id: id, program_id: programId });
    res.status(201).json({ text: 'Успешное добавление в избранное' });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
