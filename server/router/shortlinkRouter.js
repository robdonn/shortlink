const { Router } = require('express');

const { shortlinkNewMiddleware } = require('../middleware/shortlink/shortlinkNewMiddleware');

const shortlinkRouter = Router();

shortlinkRouter.post('/new', shortlinkNewMiddleware);

module.exports = {
  shortlinkRouter
};
