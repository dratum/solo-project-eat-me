const router = require('express').Router();
const PrivatePage = require('../../components/pages/PrivatePage');
const { User_program } = require('../../db/models');
const { Program } = require('../../db/models');

router.get('/private', async (req, res) => {
  const { username, id } = res.locals;

  const programsArr = await User_program.findAll({
    where: { user_id: id },
    raw: true,
  });
  const userPrograms = await Program.findAll({
    where: { id: programsArr.map((program) => program.program_id) },
    raw: true,
  });

  res.send(
    res.renderComponent(PrivatePage, {
      title: 'Личный кабинет',
      username,
      userPrograms,
    })
  );
});

module.exports = router;
