const envConfigs = require('dotenv');

envConfigs.config({ path: `${__dirname}/../.env` });

const serverConfig = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || "3001",
};

module.exports = {
  serverConfig,
};
