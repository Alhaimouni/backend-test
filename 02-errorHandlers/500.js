'use strict';

function errHandler(err, req, res, next) {
  res.status(500).send(
    {
      code: 500,
      message: `${err}`,
    }
  )
}


module.exports = { errHandler };