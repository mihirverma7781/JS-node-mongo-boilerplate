const Logger = require("../utils/logger.util");
const { NODE_ENV } = require("./server.config");

let logger = null;

if (NODE_ENV === "production") {
  logger = Logger.prodLoggerConfig();
  global.logger = logger;
}

if (NODE_ENV === "development") {
  logger = Logger.devLoggerConfig();
  global.logger = logger;
}

module.exports = logger;
