const ErrorCodes = require("../constants/error.constant");

// BASE ERROR CLASS
class BaseError extends Error {
  constructor(name, statusCode, description) {
    super(description);
    this.statusCode = statusCode;
    this.description = description;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  // CREATE INSTANCES USING THIS METHOD
  static generate(description) {
    return new this(description);
  }
}

// 500 INTERNAL SERVER ERROR
class APIError extends BaseError {
  constructor(description = "Internal Server") {
    super("INTERNAL SERVER ERROR", ErrorCodes.INTERNAL_SERVER, description);
  }
}

// 400 BAD REQUEST ERROR
class BadRequestError extends BaseError {
  constructor(description = "Bad Request") {
    super("BAD REQUEST ERROR", ErrorCodes.BAD_REQUEST, description);
  }
}

// 403 UN_AUTHORIZED ERROR
class UnAuthorizError extends BaseError {
  constructor(description = "Un Authorized") {
    super("UNAUTHORIZED ERROR", ErrorCodes.UN_AUTHORIZED, description);
  }
}

// 404 NOT FOUND ERROR
class NotFoundError extends BaseError {
  constructor(description = "Not Found") {
    super("NOT FOUND ERROR", ErrorCodes.NOT_FOUND, description);
  }
}

// 502 NOT FOUND ERROR
class BadGatewayError extends BaseError {
  constructor(description = "Bad Gateway") {
    super("BAD GATEWAY ERROR", ErrorCodes.BAD_GATEWAY, description);
  }
}

module.exports = {
  BaseError,
  APIError,
  BadRequestError,
  UnAuthorizError,
  NotFoundError,
  BadGatewayError,
};
