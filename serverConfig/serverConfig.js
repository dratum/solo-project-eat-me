const express = require('express');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const cors = require('cors');

const userMiddleware = require('../middlewares/user');
const errorMiddleware = require('../middlewares/error');
const ssr = require('../middlewares/ssr');

const FileStore = sessionFileStore(session);

const serverConfig = (app) => {
  // Запоминаем название куки для сессий
  app.set('session cookie name', 'sid');
  // Доверять первому прокси (для Heroku и прочих)
  app.set('trust proxy', 1);

  app.use(express.static('public'));
  app.use(express.json());
  app.use(
    session({
      name: app.get('session cookie name'),
      secret: process.env.SESSION_SECRET,
      store: new FileStore({
        // Шифрование сессии
        secret: process.env.SESSION_SECRET,
      }),
      // Если true, сохраняет сессию, даже если она не поменялась
      resave: false,
      // Если false, куки появляются только при установке req.session
      saveUninitialized: false,
      cookie: {
        // В продакшне нужно "secure: true" для HTTPS
        secure: process.env.NODE_ENV === 'production',
      },
    })
  );
  app.use(userMiddleware);
  app.use(ssr);
  app.use(errorMiddleware);
  app.use(cors());
};

module.exports = serverConfig;
