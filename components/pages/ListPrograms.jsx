const React = require('react');
const Layout = require('../Layout');

module.exports = function ListPrograms({ title, username, programs = [] }) {
  return (
    <Layout title={title} username={username}>
      <a href="/" className="navigation-link_esc">
        &lt;- Вернуться в главное меню
      </a>
      <h2 className="title-recipes">Доступные программы питания:</h2>
      <div className="programs-list">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <a href={`/programs/${program.id}`} className="program-card__link">
              {program.name}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
