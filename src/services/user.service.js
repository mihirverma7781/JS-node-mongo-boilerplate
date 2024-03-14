const RESPONSE_CODES = require("../constants/response.constant");
const OtpDao = require("../daos/otp.dao");
const { BadRequestError } = require("../utils/error.util");
const CustomResponse = require("../utils/response.util");

class UserService {
  constructor() {
    this.response = new CustomResponse();
    this.statusCode = RESPONSE_CODES;
    this.otpDao = new OtpDao();
  }
  async signupService(req, res) {
    try {
      let { number } = req.body;
      let OTP;

      OTP = Math.floor(100000 + Math.random() * 900000);
      console.log("🚀 ~ UserService ~ signupService ~ OTP:", OTP);

      // TODO: number to be replaced with variable
      //   const sendOTP = await sendSMS(number, OTP);
      const sendOTP = {
        data: {
          MessageId: "testmessageid",
        },
      };
      if (sendOTP.data && sendOTP.data.MessageId) {
        await this.otpDao.saveOtp(number, OTP);

        return this.response.send(
          res,
          this.statusCode.SUCCESS,
          "OTP sent successfully",
          true,
          200,
          sendOTP.data.MessageId
        );
      }
    } catch (error) {
      logger.error("[USER SERVICE]:", error);
      throw error;
    }
  }
}

module.exports = UserService;
