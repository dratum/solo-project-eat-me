const React = require('react');
const Layout = require('../Layout');

module.exports = function Private({ title, username, userPrograms = [] }) {
  return (
    <Layout title={title} username={username}>
      <div>
        Избранное:
        {userPrograms.map((program) => (
          <div key={program.id}>
            <a href={`/program/${program.id}`}>{program.name}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
