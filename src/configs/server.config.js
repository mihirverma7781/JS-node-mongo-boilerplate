require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT;
const LOG_LEVEL = process.env.LOG_LEVEL;
const NODE_ENV = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL;
const NODE_COOKIE_SIGNED_KEY = process.env.NODE_COOKIE_SIGNED_KEY;
const NODE_CLIENT_APP_URI = process.env.NODE_CLIENT_APP_URI;
const NODE_API_VERSION = process.env.NODE_API_VERSION;

module.exports = {
  PORT,
  LOG_LEVEL,
  NODE_ENV,
  DATABASE_URL,
  NODE_COOKIE_SIGNED_KEY,
  NODE_CLIENT_APP_URI,
  NODE_API_VERSION,
};
