const router = require('express').Router();
const { Program } = require('../../db/models');
const ProgramPage = require('../../components/pages/ProgramPage');
const auth = require('../../middlewares/auth');
const { User_program } = require('../../db/models');

router.get('/programs/:id', auth, async (req, res) => {
  const programId = req.params.id;
  const { id } = res.locals;
  const usercheck = await User_program.findOne({
    where: { user_id: id, program_id: programId },
  });
  const program = await Program.findByPk(programId);
  res.send(res.renderComponent(ProgramPage, { program, usercheck }));
});

module.exports = router;
