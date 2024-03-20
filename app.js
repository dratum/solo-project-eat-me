require('@babel/register');

require('dotenv').config();
const express = require('express');

const serverConfig = require('./serverConfig/serverConfig');
const mainRouter = require('./routers/views/main.router');
const authRouter = require('./routers/views/auth');
const authApiRouter = require('./routers/api/auth');
const listProgramsRouter = require('./routers/views/listProgram.router');
const programRouter = require('./routers/views/program.router');

const app = express();

serverConfig(app);

app.use(
  '/',
  mainRouter,
  authRouter,
  authApiRouter,
  listProgramsRouter,
  programRouter
);

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log('Сервер запущен. Порт:', port);
});
