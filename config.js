require('dotenv').config();

module.exports = {
  port: process.env.PORT || '8080', // defaults to 8080
  apiRoot: process.env.API_ROOT || '0.0.0.0', // defaults to 0.0.0.0
};
