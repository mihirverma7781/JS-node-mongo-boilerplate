const { cookie, validationResult } = require("express-validator");
const CustomResponse = require("../utils/response.util");
const TestService = require("../services/test.service");

class TestController {
  constructor() {
    this.testService = new TestService();
    this.response = new CustomResponse();
  }
  async testServerController(req, res) {
    try {
      const result = await this.testService.serverResponse(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async testPostServerController(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors
          .array()
          .map((error) => error.msg)
          .join(", ");
        throw this.response.badRequest(errorMessages);
      }
      const result = await this.testService.serverResponse(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TestController;
