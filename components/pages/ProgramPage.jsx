const React = require('react');
const Layout = require('../Layout');

module.exports = function ProgramPage({ program, usercheck, username }) {
  return (
    <Layout title={program.name} username={username}>
      <a href="/programs" className="navigation-link_esc">
        {' '}
        &lt;-- Назад к выбору программ питания
      </a>
      <div id="wrap-program" className="program-block">
        <div className="program-block__description">
          Описание: <br />
          {program.description}
        </div>
        <h2 className="program-block__title">
          Примерный план питания на один день:
        </h2>
        <div className="program-block__breakfast">
          Завтрак: <br />
          {program.breakfast}
        </div>
        <div className="program-block__lunch">
          Обед:
          <br />
          {program.lunch}{' '}
        </div>
        <div className="program-block__dinner">
          Ужин:
          <br />
          {program.dinner}{' '}
        </div>
        {!username ? (
          <></>
        ) : usercheck ? (
          <span className="notification-text">
            Уже добавлено в{' '}
            <a href="/private" className="notification-text__link">
              Избранное
            </a>{' '}
          </span>
        ) : (
          <button
            data-id={program.id}
            id="addBtn"
            className="btn-for-add-to-fav"
          >
            <span className="btn-for-add-to-fav__text">
              Добавить в Избранное
            </span>
          </button>
        )}
      </div>
      <script defer src="/js/addToFavProgram.js" />
    </Layout>
  );
};
