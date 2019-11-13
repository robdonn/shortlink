const { Shortlink } = require('../../database/models/Shortlink');

const shorturlNewMiddleware = async (req, res, next) => {
  try {
    const { url } = req.body;

    const shortlinkModel = new Shortlink({
      url
    });

    await shortlinkModel.save();

    res.status(200).json({
      shortlink: shortlinkModel.shortlink,
      url: shortlinkModel.url,
      dateCreated: shortlinkModel.dateCreated
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  shorturlNewMiddleware
};
