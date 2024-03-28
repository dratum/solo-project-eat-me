const ListProducts = require('../../components/pages/ListProducts');

const router = require('express').Router();

router.get('/list-products', async (req, res) => {
  const { username } = res.locals;
  res.send(
    res.renderComponent(ListProducts, { title: 'Продукты питания', username })
  );
});

module.exports = router;
