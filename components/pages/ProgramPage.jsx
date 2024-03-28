const React = require('react');
const Layout = require('../Layout');

module.exports = function ProgramPage({ program, usercheck, username }) {
  return (
    <Layout title={program.name} username={username}>
      <div id="wrap-program">
        <a href="/programs"> &lt;-- Назад к выбору программ питания</a>
        <div>Описание:{program.description}</div>
        <h2>План питания:</h2>
        <div>Завтрак: {program.breakfast}</div>
        <div>Обед:{program.lunch} </div>
        <div>Ужин:{program.dinner} </div>
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
