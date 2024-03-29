const React = require('react');
const Layout = require('../Layout');

module.exports = function SignIn({ username, title }) {
  return (
    <Layout username={username} title={title}>
      <h3 className="title-of-signin-form">Войдите, чтобы продолжить:</h3>
      <form
        id="signinForm"
        className="signin-form"
        method="POST"
        action="/signin"
      >
        <label htmlFor="username">
          Логин:
          <br />
          <input
            id="username"
            className="signin-form__input-login"
            name="username"
            type="text"
            required
            pattern="[A-Za-z]\w+"
            minLength="4"
            title="Латинские буквы, цифры и _"
            placeholder="Введите логин"
          />
        </label>

        <label htmlFor="password">
          Пароль:
          <br />
          <input
            className="signin-form__input-password"
            id="password"
            name="password"
            type="password"
            required
            minLength="5"
            placeholder="Введите пароль"
          />
        </label>

        <button type="submit" className="signin-form__button btn btn-primary">
          Войти
        </button>
      </form>
      <span className="text-question">Впервые на сайте?</span>
      <a href="/signup" className="signup-link">
        <span className="signup-link__text">Зарегистрироваться</span>
        <br />
      </a>

      <script defer src="/js/signin.js" />
    </Layout>
  );
};
