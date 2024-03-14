const RESPONSE_CODES = require("../constants/response.constant");

class CustomResponse {
  constructor() {
    this.status = RESPONSE_CODES
  }

  send(response, statusCode, message, status, internalCode, data) {
    const responseObject = {
      message: message,
      status: status === true ? "SUCCESS" : "FAILED",
      internalCode: internalCode,
      data: data || null,
    };
    return response.status(statusCode).json(responseObject);
  }

  sendError(statusCode, message, status, internalCode, data) {
    return {
      statusCode: statusCode || this.status.INTERNAL_SERVER,
      message: message || "Internal Server Error",
      status: status === true ? "SUCCESS" : "FAILED",
      internalCode: internalCode || 201,
      data: data || null,
    };
  }

  badRequest(message, data) {
    return {
      statusCode: this.status.BAD_REQUEST,
      message: message || "Bad Request",
      status: "FAILED",
      internalCode: 201,
      data: data || null,
    };
  }

  InternalServerError(message, data) {
    return {
      statusCode: this.status.INTERNAL_SERVER,
      message: message || "INTERNAL SERVER ERROR",
      status: "FAILED",
      internalCode: 500,
      data: data || null,
    };
  }

  unAuthorizedError(message, data) {
    return {
      statusCode: this.status.UN_AUTHORIZED,
      message: message || "UNAUTHORIZED ERROR",
      status: "FAILED",
      internalCode: 403,
      data: data || null,
    };
  }

  notFound(message, data) {
    return {
      statusCode: this.status.NOT_FOUND,
      message: message || "NOT FOUND",
      status: "FAILED",
      internalCode: 404,
      data: data || null,
    };
  }

  badGateway(message, data) {
    return {
      statusCode: this.status.BAD_GATEWAY,
      message: message || "BAD GATEWAY",
      status: "FAILED",
      internalCode: 502,
      data: data || null,
    };
  }
}

module.exports = CustomResponse;