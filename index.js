const app = require("./src/app");
const logger = require("./src/configs/logger.config");
const { PORT } = require("./src/configs/server.config");

require("dotenv").config({ path: `.env.${PORT}` });

app.listen(PORT, () => {
  logger.info(`listening to the port ${PORT}`);
  logger.info(`Your server available at http://localhost:${PORT}`);
});
