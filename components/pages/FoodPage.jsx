const React = require('react');
const Layout = require('../Layout');

module.exports = function FoodPage({ food, username }) {
  return (
    <Layout title={food.name} username={username}>
      <div className="food-container">
        <a href="/list-food" className="navigation-link_esc">
          <span className="navigation-link_text">
            &lt;- Вернуться к выбору продуктов
          </span>
        </a>
        <h2 className="food-title">{food.name}</h2>
        <div className="food-container__section_description">
          <span className="food-container__section_description_text">
            {food.description}
          </span>
        </div>
        <div className="food-container__section_picture">
          <img
            src={food.image}
            alt={food.title}
            className="food-container__section_picture_image"
          ></img>
        </div>
      </div>
    </Layout>
  );
};
