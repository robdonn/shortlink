const HttpStatus = require('http-status-codes');

const notFoundErrorHandler = (req, res) => {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
};

const methodNotAllowed = (req, res) => {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED)
    }
  });
};

/* eslint-disable-next-line no-unused-vars */
const genericErrorHandler = (err, req, res, next) => {
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
    error: {
      code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
      message: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  });
};

module.exports = {
  notFoundErrorHandler,
  methodNotAllowed,
  genericErrorHandler
};
