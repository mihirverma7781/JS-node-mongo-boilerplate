const RESPONSE_CODES = require("../constants/response.constant");
const { BadRequestError } = require("../utils/error.util");
const CustomResponse = require("../utils/response.util");

class TestService {
  constructor() {}

  async serverResponse({ body, query, params, auth }) {
    try {
      const message = "Server is running";
      const data = true;

      throw BadRequestError.generate("this is an new error", false);

      return {
        message: message,
        statusCode: RESPONSE_CODES.SUCCESS,
        status: true,
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TestService;
