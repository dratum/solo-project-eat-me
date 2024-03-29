const React = require('react');
const Layout = require('../Layout');

module.exports = function SignUp({ title, username }) {
  return (
    <Layout title={title} username={username}>
      <h3>Регистрация</h3>
      <form
        id="signupForm"
        className="signup-form"
        method="POST"
        action="/signup"
      >
        <label htmlFor="username">
          Логин:
          <input
            id="username"
            className="signup-form__input-login"
            name="username"
            type="text"
            required
            pattern="[A-Za-z]\w+"
            minLength="4"
            title="Латинские буквы, цифры и _"
            placeholder="Придумайте логин"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            className="signup-form__input-email"
            name="email"
            type="email"
            required
            placeholder="Введите e-mail"
          />
        </label>
        <label htmlFor="password">
          Пароль:
          <input
            id="password"
            className="signup-form__input-password"
            name="password"
            type="password"
            required
            minLength="5"
            placeholder="Придумайте пароль"
          />
        </label>
        <button type="submit" className="signup-form__button btn btn-primary">
          Зарегистрироваться
        </button>
      </form>

      <script defer src="/js/signup.js" />
    </Layout>
  );
};
