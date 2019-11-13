const { Router } = require('express');

const { shortlinkRouter } = require('./shortlinkRouter');

const apiRouter = Router();

apiRouter.use('/shortlink', shortlinkRouter);

module.exports = {
  apiRouter
};
