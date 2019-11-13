const redirectMiddleware = (req, res) => {
  const { shortUrl } = req.params;
  res.send(`Redirect - ${shortUrl}`);
};

module.exports = {
  redirectMiddleware
};
