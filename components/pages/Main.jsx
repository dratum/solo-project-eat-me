const React = require('react');
const Layout = require('../Layout');

module.exports = function Main({ title, username }) {
  return (
    <Layout title={title} username={username}>
      <h1 className="mainpage-title">Eat me!</h1>
      <div className="catalog-container">
        <div className="catalog-container__programs">
          <img
            className="catalog-container__programs_image"
            src="https://trener24.by/wp-content/uploads/2022/10/3649429_1273.jpg"
            alt="programs-image"
          />
          <a href="/programs" className="catalog-container__link">
            <span className="catalog-container__link_text">
              Готовые программы питания
            </span>
          </a>
        </div>
        <div className="catalog-container__food">
          <img
            className="catalog-container__food_image"
            src="https://sect.ru/upload/information_system_4/0/0/2/group_2/group_2.jpg"
            alt="food-image"
          />
          <a href="/list-food" className="catalog-container__link">
            <span className="catalog-container__link_text">
              Список продуктов питания
            </span>
          </a>
        </div>
        <div className="catalog-container__recipes">
          <img
            className="catalog-container__recipes_image"
            src="https://kremlin-product.ru/upload/medialibrary/241/jfw6bequvf8s8mcum1npqc0jx1v1ngad/grilled_vegetables.jpg"
            alt="recipe-image"
          />
          <a href="/list-recipes" className="catalog-container__link">
            <span className="catalog-container__link_text">Поиск блюда</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};
