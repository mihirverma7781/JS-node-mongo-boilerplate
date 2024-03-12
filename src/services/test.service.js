const RESPONSE_CODES = require("../constants/response.constant");
const { BadRequestError } = require("../utils/error.util");
const CustomResponse = require("../utils/response.util");

class TestService {
  constructor() {
    this.response = new CustomResponse();
    this.statusCode = RESPONSE_CODES;
  }
  async serverResponse(req, res) {
    try {
      const message = "Server is running";
      const data = [
        {
          name: "Alt Carbon",
          stage: "seed",
        },
      ];

    //   throw this.response.sendError(
    //     this.statusCode.BAD_REQUEST,
    //     "You are not member of alt carbon",
    //     false,
    //     201,
    //     null
    //   );

      return this.response.send(
        res,
        this.statusCode.SUCCESS,
        message,
        true,
        200,
        data
      );
    } catch (error) {
      logger.error("[TEST SERVICE]:", error);
      throw error;
    }
  }
}

module.exports = TestService;
