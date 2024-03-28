const router = require('express').Router();
const ListProgram = require('../../components/pages/ListPrograms');
const { Program } = require('../../db/models');

router.get('/programs', async (req, res) => {
  const { username } = res.locals;
  const programs = await Program.findAll({ raw: true });

  res.send(
    res.renderComponent(ListProgram, {
      programs,
      title: 'Программы питания',
      username,
    })
  );
});

module.exports = router;
