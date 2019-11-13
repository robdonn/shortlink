const { Shortlink } = require('../../database/models/Shortlink');

const redirectMiddleware = async (req, res, next) => {
  const { shortlink } = req.params;

  const shortlinkEntry = await Shortlink.findOne({ shortlink });

  if (!shortlinkEntry) {
    return next();
  }

  res.redirect(shortlinkEntry.url);
};

module.exports = {
  redirectMiddleware
};
