'use strict';

const { start } = require('./server');
const { sequelize } = require('./03-models/index');


sequelize.sync()
  .then(() => start(process.env.PORT))
  .catch(() => console.log(`Cant start the server check DB`));
