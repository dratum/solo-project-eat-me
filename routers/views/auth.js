const express = require('express');

const SignIn = require('../../components/auth/SignIn');
const SignUp = require('../../components/auth/SignUp');

const router = express.Router();

router
  .route('/signin')
  // Страница аутентификации пользователя
  .get((req, res) => {
    res.send(res.renderComponent(SignIn, { title: 'Вход на сайт' }));
  });

router
  .route('/signup')
  // Страница регистрации пользователя
  .get((req, res) => {
    res.send(res.renderComponent(SignUp, { title: 'Регистрация на сайте' }));
  });

router.get('/signout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie(req.app.get('eat me'));
    return res.redirect('/');
  });
});

module.exports = router;
