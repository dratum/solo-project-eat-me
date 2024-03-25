const router = require('express').Router();
const { Program } = require('../../db/models');
const ProgramPage = require('../../components/pages/ProgramPage');
const ProgramPageForAnonym = require('../../components/pages/ProgramPageForAnonym');
const auth = require('../../middlewares/auth');
const { User_program } = require('../../db/models');

router.get('/programs/:id', async (req, res) => {
  const programId = req.params.id;
  const { id } = res.locals;
  const { username } = res.locals;
  const program = await Program.findByPk(programId);
  if (id) {
    const usercheck = await User_program.findOne({
      where: { user_id: id, program_id: programId },
    });
    res.send(
      res.renderComponent(ProgramPage, { program, usercheck, username })
    );
  } else {
    res.send(res.renderComponent(ProgramPageForAnonym, { program }));
  }
});

module.exports = router;
