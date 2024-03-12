const TestController = require("../controllers/test.controller");
const { TestValidator } = require("./validators/index.validator");
const router = require("express").Router();

// INITILIZIND CORRESPONDING CONTROLLER
const testController = new TestController();
const testValidator = new TestValidator();

router.get("/test-server", async (req, res, next) => {
  try {
    const result = await testController.testServerController(req, res);
    return result;
  } catch (error) {
    logger.error(`[ERROR ${req.path} ROUTE]: `, error);
    next(error);
  }
});

router.post(
  "/test-post-server",
  testValidator.postServerValidator(),
  async (req, res, next) => {
    try {
      const result = await testController.testPostServerController(req, res);
      return result;
    } catch (error) {
      logger.error(`[ERROR ${req.path} ROUTE]: `, error);
      next(error);
    }
  }
);

module.exports = router;
