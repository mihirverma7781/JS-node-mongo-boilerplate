const { body } = require("express-validator");

class TestValidator {
  constructor() {}

  postServerValidator() {
    return [
      body("name")
        .trim()
        .exists({
          values: "falsy",
        })
        .withMessage("Please enter a valid name"),
      body("number")
        .trim()
        .exists({
          values: "falsy",
        })
        .withMessage("Number is required")
        .toInt()
        .isNumeric()
        .withMessage("Number must be a number"),
    ];
  }
  
}

module.exports = TestValidator;
