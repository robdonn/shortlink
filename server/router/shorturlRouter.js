const { Router } = require('express');

const { shorturlNewMiddleware } = require('../middleware/shorturl/shorturlNewMiddleware');

const shorturlRouter = Router();

shorturlRouter.post('/new', shorturlNewMiddleware);

module.exports = {
  shorturlRouter
};
