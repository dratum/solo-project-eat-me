const router = require('express').Router();
const ListProgram = require('../../components/pages/ListPrograms');
const { Program } = require('../../db/models');

router.get('/programs', async (req, res) => {
  const programs = await Program.findAll({ raw: true });

  res.send(res.renderComponent(ListProgram, { programs }));
});

module.exports = router;
