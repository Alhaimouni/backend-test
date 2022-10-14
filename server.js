'use strict';
const express = require('express');
const cors = require('cors');
const { notFoundHandler } = require('./02-errorHandlers/404');
const { errHandler } = require('./02-errorHandlers/500');
const userRoutes = require('./00-routes/user.routes');
require('dotenv').config();
const app = express();


app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Main route');
})



app.use(errHandler);
app.use(notFoundHandler);

function start(port) {
  app.listen(port, () => { console.log(`starting at ${port}`) });
};

module.exports = { start };