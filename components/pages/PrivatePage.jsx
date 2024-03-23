const React = require('react');
const Layout = require('../Layout');

module.exports = function Private({ title, username, programs = [] }) {
  return (
    <Layout title={title} username={username}>
      <div>
        Избранное:
        {programs.map((program) => (
          <div>
            <a href={`/program/${program.id}`}>{program.name}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
