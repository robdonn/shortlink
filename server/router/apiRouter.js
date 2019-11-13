const { Router } = require('express');

const { shorturlRouter } = require('./shorturlRouter');

const apiRouter = Router();

apiRouter.use('/shorturl', shorturlRouter);

module.exports = {
  apiRouter
};
