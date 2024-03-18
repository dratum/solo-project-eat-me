const React = require('react');
const Layout = require('./Layout');

module.exports = function ListPrograms({ title, username, programs = [] }) {
  return (
    <Layout title={title} username={username}>
      <h2>Доступные программы питания:</h2>
      <div>{programs.map((program) => ())}</div>
    </Layout>
  );
};
