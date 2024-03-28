const React = require('react');
const Layout = require('../Layout');

module.exports = function Main({ title, username }) {
  return (
    <Layout title={title} username={username}>
      <h1 className="mainpage-title">Eat me!</h1>
      <div className="catalog-container">
        <div className="catalog-container__programs">
          <a href="/programs" className="catalog-container__link">
            <span className="catalog-container__link_text">
              Готовые программы питания
            </span>
          </a>
        </div>
        <div className="catalog-container__products">
          <a href="/list-products" className="catalog-container__link">
            <span className="catalog-container__link_text">
              Список продуктов
            </span>
          </a>
        </div>
        <div className="catalog-container__recipes">
          <a href="/list-recipes" className="catalog-container__link">
            <span className="catalog-container__link_text">Поиск блюда</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};
