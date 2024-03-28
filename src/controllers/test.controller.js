const { cookie, validationResult } = require("express-validator");
const CustomResponse = require("../utils/response.util");
const { TestService } = require("../services/index.service");

class TestController {
  constructor() {
    this.testService = new TestService();
    this.response = new CustomResponse();
  }
  
  async testServerController(request, res) {
    try {
      const result = await this.testService.serverResponse({
        body: request.body,
        query: request.query,
        params: request.params,
        auth: request.auth,
      });
      return response.status(result.statusCode).json({
        message: result.message,
        status: result.status,
        internalCode: 200,
        data: result.data,
      });
    } catch (error) {
      throw error;
    }
  }

  async testPostServerController(request, response) {
    try {
      // VALIDATING BODY
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        const errorMessages = errors
          .array()
          .map((error) => error.msg)
          .join(", ");
        throw this.response.badRequest(errorMessages);
      }

      // CALLING SERVICE
      const result = await this.testService.serverResponse({
        body: request.body,
        query: request.query,
        params: request.params,
        auth: request.auth,
      });

      // RETURNING RESPONSE
      return response.status(result.statusCode).json({
        message: result.message,
        status: result.status === true ? "SUCCESS" : "FAILED",
        internalCode: 200,
        data: result.data,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TestController;
