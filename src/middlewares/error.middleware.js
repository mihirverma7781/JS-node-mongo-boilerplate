class ErrorMiddleware {
  constructor() {}

  errorMiddleware(error, req, res, next) {
    const statusCode = error.statusCode;
    const message = error.message;
    const data = error.data;
    const internalCode = error.internalCode || 201;
    const status = error.status || "failed";

    return res.status(statusCode).json({
      status: status,
      message: message,
      data: data,
      internalCode: internalCode,
    });
  }
}

module.exports = ErrorMiddleware;
