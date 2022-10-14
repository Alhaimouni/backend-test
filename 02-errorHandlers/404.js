'use strict';

function notFoundHandler(req, res, next) {
  res.status(404).send(
    {
      code: 404,
      message: `not found`,
    }
  );
}


module.exports = { notFoundHandler };