const { format, createLogger, transports } = require("winston");
const {
  combine,
  timestamp,
  label,
  printf,
  prettyPrint,
  errors,
  colorize,
  align,
} = format;
const { LOG_LEVEL, NODE_ENV } = require("../configs/server.config");

class Logger {
  #logLevel;
  #category;
  #logFormatter;

  constructor() {
    this.#logLevel = LOG_LEVEL;
    this.#category = NODE_ENV;
    this.#logFormatter = printf(
      ({ level, message, label, timestamp, stack, payload }) => {
        if (stack) {
          return `${timestamp} [${label}] ${level}:${message} - ${stack} ${payload ? "| " + payload : ""}`;
        } else {
          return `${timestamp} [${label}] ${level}:${message} ${payload ? "| " + payload : ""}`;
        }
      }
    );
  }

  devLoggerConfig() {
    return createLogger({
      level: this.#logLevel || "debug",
      format: combine(
        label({ label: this.#category }),
        colorize(),
        timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
        prettyPrint(),
        align(),
        this.#logFormatter
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: "development_server.log",
          dirname: "logs",
        }),
      ],
    });
  }

  prodLoggerConfig() {
    return createLogger({
      level: this.#logLevel || "info",

      format: combine(
        label({ label: this.#category }),
        errors({ stack: true }),
        timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
        prettyPrint(),
        align(),
        this.#logFormatter
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: "production_server.log",
          dirname: "logs",
        }),
      ],
    });
  }
}

module.exports = new Logger();
