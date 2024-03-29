const React = require('react');

module.exports = function Header({ username }) {
  return (
    <div className="header-container">
      <div className="header-container__navbar">
        <img
          src="https://asset.brandfetch.io/idpZw5e2vb/idgPbP0jBp.png"
          alt="logo"
          className="header-container__navbar_logo"
        />
        <div className="navbar__nav-item1">
          <a className="nav-link" href="/">
            Главная
          </a>
        </div>

        {username ? (
          <>
            <div className="navbar__nav-item2">
              <a className="nav-link" href="/private">
                Личный кабинет, {username}
              </a>
            </div>
            <div className="navbar__nav-item3">
              <a className="nav-link" href="/signout">
                Выйти
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="navbar__nav-item2">
              <a href="/signin" className="nav-link">
                Вход
              </a>
            </div>
            <div className="navbar__nav-item3">
              <a href="/signup" className="nav-link">
                Зарегистрироваться
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
