const React = require('react');
const Layout = require('../Layout');

module.exports = function ProgramPage({ title, breakfast, lunch, dinner }) {
  return (
    <Layout title={title}>
      <div>
        <h2>План питания:</h2>
        <div>Завтрак: {breakfast}</div>
        <div>Обед:{lunch} </div>
        <div>Ужин:{dinner} </div>
      </div>
    </Layout>
  );
};

// TODO: Писать сиды для наполнения программ приемами пищи
