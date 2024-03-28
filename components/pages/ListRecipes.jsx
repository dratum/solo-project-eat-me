const React = require('react');
const Layout = require('../Layout');

module.exports = function ListRecipes({ title, username, recipes = [] }) {
  return (
    <Layout title={title} username={username}>
      <a href="/" className="navigation-link_esc">
        &lt;- Вернуться в главное меню
      </a>
      <h2 className="title-recipes">Доступные рецепты блюд:</h2>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <a href={`/recipes/${recipe.id}`} className="recipe-card__link">
              {recipe.title}
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};
