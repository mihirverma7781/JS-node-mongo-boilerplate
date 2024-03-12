class CustomResponse {
  constructor() {}

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
      statusCode: statusCode || 500,
      message: message || "Internal Server Error",
      status: status === true ? "SUCCESS" : "FAILED",
      internalCode: internalCode || 201,
      data: data || null,
    };
  }

  badRequest(message, data) {
    return {
      statusCode: 400,
      message: message || "Bad Request",
      status: "FAILED",
      internalCode: 201,
      data: data || null,
    };
  }
}

module.exports = CustomResponse;
