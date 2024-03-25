const React = require('react');
const Layout = require('../Layout');

module.exports = function Main({ title, username }) {
  return (
    <Layout title={title} username={username}>
      <h1 className="">Eat me!</h1>

      <div className="catalog-container">
        <div className="full-product-card">
          <a href="/programs">Готовые программы питания</a>
        </div>
        <div className="product-list-card">
          <a href="/list-products">Список продуктов</a>
        </div>
        <div className="search-product">
          <a href="/search-products">Поиск блюда</a>
        </div>
      </div>
    </Layout>
  );
};
