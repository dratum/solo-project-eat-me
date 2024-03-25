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
        {usercheck ? (
          <span>
            Уже добавлено в <a href="/private">Избранное</a>{' '}
          </span>
        ) : (
          <button data-id={program.id} id="addBtn">
            Добавить в Избранное
          </button>
        )}
      </div>
      <script defer src="/js/addToFav.js" />
    </Layout>
  );
};
