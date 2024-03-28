const ErrorCodes = require("../constants/error.constant");

// BASE ERROR CLASS
class BaseError extends Error {
  constructor(name, statusCode, description, data) {
    super(description);
    this.statusCode = statusCode;
    this.description = description;
    this.data = data;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  // CREATE INSTANCES USING THIS METHOD
  static generate(description, data = null) {
    return new this(description, data);
  }
}

// 500 INTERNAL SERVER ERROR
class APIError extends BaseError {
  constructor(description = "Internal Server", data) {
    super(
      "INTERNAL SERVER ERROR",
      ErrorCodes.INTERNAL_SERVER,
      description,
      data
    );
  }
}

// 400 BAD REQUEST ERROR
class BadRequestError extends BaseError {
  constructor(description = "Bad Request", data) {
    super("BAD REQUEST ERROR", ErrorCodes.BAD_REQUEST, description, data);
  }
}

// 403 UN_AUTHORIZED ERROR
class UnAuthorizError extends BaseError {
  constructor(description = "Un Authorized", data) {
    super("UNAUTHORIZED ERROR", ErrorCodes.UN_AUTHORIZED, description, data);
  }
}

// 404 NOT FOUND ERROR
class NotFoundError extends BaseError {
  constructor(description = "Not Found", data) {
    super("NOT FOUND ERROR", ErrorCodes.NOT_FOUND, description, data);
  }
}

// 502 NOT FOUND ERROR
class BadGatewayError extends BaseError {
  constructor(description = "Bad Gateway") {
    super("BAD GATEWAY ERROR", ErrorCodes.BAD_GATEWAY, description, data);
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
