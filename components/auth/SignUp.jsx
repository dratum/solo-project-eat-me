const React = require('react');
const Layout = require('../Layout');

module.exports = function SignUp({ title }) {
  return (
    <Layout title={title}>
      <h1>Регистрация</h1>
      <form id="signupForm" method="POST" action="/signup">
        <div className="form-group">
          <label htmlFor="username">
            Логин:
            <input
              id="username"
              className="form-control"
              name="username"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength="4"
              title="Латинские буквы, цифры и _"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              id="email"
              className="form-control"
              name="email"
              type="email"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Пароль:
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
              minLength="5"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>

      <script defer src="/js/signup.js" />
    </Layout>
  );
};
