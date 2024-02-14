const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ title, username }) {
  return (
    <Layout title={title} username={username}>
      <h1 className="">Приветствуем!</h1>
      {username ? (
        <div className="catalog-container">
          <h2 className="title-choise">Выберите, что Вам нужно:</h2>
          <div className="full-product-card">Готовые рационы</div>
          <div className="product-list-card">Список продуктов</div>
          <div className="search-product">Поиск блюда</div>
        </div>
      ) : (
        <>
          <div className="btn-auth">
            <button type="submit" className="sign-in">
              <a href="/signin" className="a-sign-in">
                Вход
              </a>
            </button>
            <button className="sign-up">
              <a href="/signup" className="a-sign-up">
                Регистрация
              </a>
            </button>
          </div>
        </>
      )}
    </Layout>
  );
};
