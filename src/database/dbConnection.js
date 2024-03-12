const mongoose = require("mongoose");
const { DATABASE_URL } = require("../configs/server.config");

const { APIError } = require("../utils/error.util");

class Database {
  #databaseUrl;

  constructor() {
    this.#databaseUrl = DATABASE_URL;
  }

  async connectDB() {
    try {
      const connection = await mongoose.connect(this.#databaseUrl);
      logger.info(`Database connected with => ${connection.connection.host}`);
    } catch (error) {
      logger.error("DB connection error:", error);
      throw APIError.generate(error.message);
    }
  }
}

module.exports = Database;
