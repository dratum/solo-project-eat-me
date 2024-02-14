const express = require('express');

const SignIn = require('../../components/auth/SignIn');
const SignUp = require('../../components/auth/SignUp');

const router = express.Router();

router
  .route('/signin')
  // Страница аутентификации пользователя
  .get((req, res) => {
    res.send(res.renderComponent(SignIn));
  });

router
  .route('/signup')
  // Страница регистрации пользователя
  .get((req, res) => {
    res.send(res.renderComponent(SignUp));
  });

router.get('/signout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie(req.app.get('session cookie name'));
    return res.redirect('/');
  });
});

module.exports = router;
