const UserController = require("../controllers/user.controller");
// const { UserValidator } = require("./validators/index.validator");
const router = require("express").Router();

// INITILIZIND CORRESPONDING CONTROLLER
const userController = new UserController();
// const userValidator = new UserValidator();

router.post("/sendotp", async (req, res, next) => {
  try {
    const result = await userController.signupController(req, res);
    return result;
  } catch (error) {
    logger.error(`[ERROR ${req.path} ROUTE]: `, error);
    next(error);
  }
});

router.post("/verify", async (req, res, next) => {
  try {
    const result = await userController.verifyOtpController(req, res);
    return result;
  } catch (error) {
    logger.error(`[ERROR ${req.path} ROUTE]: `, error);
    next(error);
  }
});

module.exports = router;
