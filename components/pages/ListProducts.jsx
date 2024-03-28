const React = require('react');
const Layout = require('../Layout');

module.exports = function ListProducts({ title, username }) {
  return (
    <Layout title={title} username={username}>
      <div className="food-container"></div>
      <script defer src="/js/getFoodApi.js" />
    </Layout>
  );
};
//  Дописать фетч логику получения продуктов
