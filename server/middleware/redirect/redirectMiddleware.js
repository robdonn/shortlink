const { Shortlink } = require('../../database/models/Shortlink');

const redirectMiddleware = async (req, res, next) => {
  try {
    const { shortlink } = req.params;

    const shortlinkEntry = await Shortlink.findOne({ shortlink });

    if (!shortlinkEntry) {
      return next();
    }

    res.redirect(shortlinkEntry.url);

    await Shortlink.updateOne(
      {
        _id: shortlinkEntry._id
      },
      {
        $set: {
          visitCount: shortlinkEntry.visitCount + 1,
          dateUpdated: Date.now()
        },
        $push: {
          visits: Date.now()
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  redirectMiddleware
};
