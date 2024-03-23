const React = require('react');

module.exports = function Layout({ title, username, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body>
        <ul className="nav">
          <li className="nav-item1">
            <a className="nav-link" href="/">
              Eat me!
            </a>
          </li>
          {username ? (
            <>
              <span className="nav-item2">
                <a className="nav-link" href="/private">
                  Личный кабинет - {username}
                </a>
              </span>
              <li className="nav-item3">
                <a className="nav-link" href="/signout">
                  Выйти
                </a>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <div className="container-main">{children}</div>
      </body>
    </html>
  );
};
