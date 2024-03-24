const router = require('express').Router();
const { User_program } = require('../../db/models');

router.delete('/delete-program', async (req, res) => {
  const { program_id } = req.body;
  try {
    await User_program.destroy({ where: { program_id } });
    res.json({ message: 'OK' });
  } catch (error) {
    res.status(401).json({ message: error });
  }
});
module.exports = router;
