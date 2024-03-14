const { cookie, validationResult } = require("express-validator");
const CustomResponse = require("../utils/response.util");
const UserService = require("../services/user.service");

class UserController {
  constructor() {
    this.userService = new UserService();
    this.response = new CustomResponse();
  }

  async signupController(req, res) {
    try {
      const result = await this.userService.signupService(req, res);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
