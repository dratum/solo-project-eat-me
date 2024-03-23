const React = require('react');
const Layout = require('../Layout');

module.exports = function ListPrograms({ title, username, programs = [] }) {
  return (
    <Layout title={title} username={username}>
      <a href="/">&lt;- Вернуться в главное меню</a>
      <h2>Доступные программы питания:</h2>
      <div>
        {programs.map((program) => (
          <div key={program.id}>
            <a href={`/programs/${program.id}`}>{program.name}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
