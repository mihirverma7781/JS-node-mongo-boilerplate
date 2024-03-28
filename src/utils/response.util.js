class CustomResponse {
  constructor() {}

  send(response, statusCode, message, status, internalCode, data) {
    const responseObject = {
      message: message,
      status: status === true ? "SUCCESS" : "FAILED",
      internalCode: internalCode,
      data: data,
    };
    return responseObject;
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
}

module.exports = CustomResponse;
