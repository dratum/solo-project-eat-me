const React = require('react');
const Layout = require('../Layout');

module.exports = function Private({ title, username, userPrograms = [] }) {
  return (
    <Layout title={title} username={username}>
      <div>
        <h1>Избранное</h1>
        <div className="profile-programs">
          <span>Программы питания</span>
          {userPrograms.map((program) => (
            <div key={program.id} className="program-in-profile">
              <a href={`/programs/${program.id}`}>{program.name}</a>
              <button data-id={program.id} className="delete-btn">
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="profile-recipes">
          <ul>
            <span>Рецепты</span>
          </ul>
        </div>
        <div className="profile-meal">
          <ul>
            <span>Продукты</span>
          </ul>
        </div>
      </div>
      <script defer src="/js/deleteProgram.js" />
    </Layout>
  );
};
