const React = require('react');

module.exports = function Layout({ title, username, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
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
              <li className="nav-item2">
                <a className="nav-link" href="/private">
                  Личный кабинет - {username}
                </a>
              </li>
              <li className="nav-item3">
                <a className="nav-link" href="/signout">
                  Выйти
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item2">
                <a href="/signin" className="nav-link">
                  Вход
                </a>
              </li>
              <li className="nav-item3">
                <a href="/signup" className="nav-link">
                  Зарегистрироваться
                </a>
              </li>
            </>
          )}
        </ul>
        <div className="container-main">{children}</div>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
};
