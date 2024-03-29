const React = require('react');
const Layout = require('../Layout');

module.exports = function Private({
  title,
  username,
  userRecipes = [],
  userPrograms = [],
}) {
  return (
    <Layout title={title} username={username}>
      <h1 className="title-private">Избранное</h1>
      <div className="profile-container">
        <div className="profile-container__programs">
          <span className="profile-container__text">Программы питания</span>
          {userPrograms.map((program) => (
            <div
              key={program.id}
              className="profile-container__programs_in-profile"
            >
              <img
                className="profile__image"
                src="https://optim.tildacdn.com/tild6330-3037-4362-a534-643030353664/-/format/webp/_.jpg"
                alt=""
              />
              <a href={`/programs/${program.id}`} className="text-name">
                {program.name}
              </a>
              <button data-id={program.id} className="delete-btn-program">
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="profile-container__recipes">
          <span className="profile-container__text">Рецепты</span>
          {userRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="profile-container__recipes_in-profile"
            >
              <img
                className="profile__image"
                src={recipe.image}
                alt="recipe-image"
              />
              <a href={`/recipes/${recipe.id}`} className="text-name">
                {recipe.title}
              </a>
              <button data-id={recipe.id} className="delete-btn-recipe">
                Удалить
              </button>
            </div>
          ))}
        </div>
      </div>
      <script defer src="/js/deleteProgram.js" />
      <script defer src="/js/deleteRecipe.js" />
    </Layout>
  );
};
