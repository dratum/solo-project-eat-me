const React = require('react');
const Layout = require('../Layout');

module.exports = function ListFood({ title, username, foods = [] }) {
  return (
    <Layout title={title} username={username}>
      <a href="/" className="navigation-link_esc">
        &lt;- Вернуться в главное меню
      </a>
      <h2 className="title-food">Доступные продукты питания:</h2>
      <div className="food-list">
        {foods.map((food) => (
          <div key={food.id} className="food-card">
            <a href={`/food/${food.id}`} className="food-card__link">
              {food.name}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
