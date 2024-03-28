const React = require('react');
const Layout = require('../Layout');

module.exports = function RecipePage({ recipe, usercheck, username }) {
  return (
    <Layout title={recipe.title} username={username}>
      <div className="recipe-container">
        <a href="/list-recipes" className="navigation-link_esc">
          <span className="navigation-link_text">
            &lt;- Вернуться к выбору рецептов
          </span>
        </a>
        <h2 className="recipe-title">{recipe.title}</h2>
        <div className="recipe-container__section_description">
          <span className="recipe-container__section_description_text">
            {recipe.description}
          </span>
          {!username ? (
            <></>
          ) : usercheck ? (
            <span className="notification-text">
              Уже добавлено в{' '}
              <a href="/private" className="notification-text__link">
                Избранное
              </a>{' '}
            </span>
          ) : (
            <button
              data-id={recipe.id}
              id="addBtn"
              className="btn-for-add-to-fav"
            >
              <span className="btn-for-add-to-fav__text">
                Добавить в Избранное
              </span>
            </button>
          )}
        </div>
        <div className="recipe-container__section_picture">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-container__section_picture_image"
          ></img>
        </div>
      </div>
      <script defer src="/js/addToFavRecipe.js" />
    </Layout>
  );
};
