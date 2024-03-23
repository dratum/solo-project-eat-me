module.exports = (req, res, next) => {
  res.locals.username = req.session.user?.username;
  res.locals.id = req.session.user?.id;
  next();
};
