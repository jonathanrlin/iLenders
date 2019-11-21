const userRouter = require('./user');
const itemRouter = require('./item');

module.exports = function (app) {
  app.use('/api/user', userRouter);
  app.use('/api/item', itemRouter);
};