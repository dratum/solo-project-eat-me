const router = require('express').Router();
const PrivatePage = require('../../components/pages/PrivatePage');

router.get('/private', async (req, res) => {
  const programs = [];
  const { username } = res.locals;

  res.send(
    res.renderComponent(PrivatePage, {
      title: 'Личный кабинет',
      username,
      programs,
    })
  );
});

module.exports = router;
