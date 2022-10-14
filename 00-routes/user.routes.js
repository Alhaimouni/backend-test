'use strict';

const express = require('express');

const { usersTable } = require('../03-models/index');
const { checkUser } = require('../01-middlewares/checkUser');
const router = express.Router();


router.post('/signup', checkUser, handleSignUp);




async function handleSignUp(req, res, next) {
  try {
    usersTable.create(req.body)
      .then(() => res.send('done'))
      .catch(() => res.send('somthing bad'));
  } catch (e) {
    next(`inside handleSignUp function : ${e}`);
  }
}


module.exports = router;
