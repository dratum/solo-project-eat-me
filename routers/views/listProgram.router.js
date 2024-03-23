const router = require('express').Router();
const ListProgram = require('../../components/pages/ListPrograms');
const { Program } = require('../../db/models');
const auth = require('../../middlewares/auth');

router.get('/programs', auth, async (req, res) => {
  const programs = await Program.findAll({ raw: true });

  res.send(res.renderComponent(ListProgram, { programs }));
});

module.exports = router;
