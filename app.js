require('@babel/register');

require('dotenv').config();
const express = require('express');

const serverConfig = require('./serverConfig/serverConfig');
const mainRouter = require('./routers/views/main.router');
const authRouter = require('./routers/views/auth');
const authApiRouter = require('./routers/api/auth');
const listProgramsRouter = require('./routers/views/listProgram.router');
const programRouter = require('./routers/views/program.router');
const privateRouter = require('./routers/views/private.router');
const addFavRouter = require('./routers/api/addToFav.router');
const deleteProgramRouter = require('./routers/api/deleteProgramInProfile');
const listProductsRouter = require('./routers/views/listProducts.router');
const listRecipeRouter = require('./routers/views/listRecipes.router');
const recipeRouter = require('./routers/views/recipe.router');
const deleteRecipeRouter = require('./routers/api/deleteRecipeInProfile');

const app = express();

serverConfig(app);

app.use(
  '/',
  mainRouter,
  authRouter,
  authApiRouter,
  listProgramsRouter,
  programRouter,
  privateRouter,
  listProductsRouter,
  listRecipeRouter,
  recipeRouter
);
app.use('/api', addFavRouter, deleteProgramRouter, deleteRecipeRouter);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log('Сервер запущен. Порт:', port);
});
