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
      <div>
        <h1>Избранное</h1>
        <div className="profile-programs">
          <span>Программы питания</span>
          {userPrograms.map((program) => (
            <div key={program.id} className="program-in-profile">
              <a href={`/programs/${program.id}`}>{program.name}</a>
              <button data-id={program.id} className="delete-btn-program">
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="profile-recipes">
          <span>Рецепты</span>
          {userRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-in-profile">
              <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
              <button data-id={recipe.id} className="delete-btn-recipe">
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="profile-meal">
          <span>Продукты</span>
        </div>
      </div>
      <script defer src="/js/deleteProgram.js" />
      <script defer src="/js/deleteRecipe.js" />
    </Layout>
  );
};
