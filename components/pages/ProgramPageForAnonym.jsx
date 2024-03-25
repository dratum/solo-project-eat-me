const React = require('react');
const Layout = require('../Layout');

module.exports = function ProgramPageForAnonym({ program }) {
  return (
    <Layout title={program.name}>
      <div id="wrap-program">
        <a href="/programs"> &lt;-- Назад к выбору программ питания</a>
        <div>Описание:{program.description}</div>
        <h2>План питания:</h2>
        <div>Завтрак: {program.breakfast}</div>
        <div>Обед:{program.lunch} </div>
        <div>Ужин:{program.dinner} </div>
      </div>
    </Layout>
  );
};
