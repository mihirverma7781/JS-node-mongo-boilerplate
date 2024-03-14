const { Otp } = require("../database/models/index.model");
const { hashItem } = require("../utils/bcrypt.util");
const logger = require("../configs/logger.config");

class OtpDao {
  async saveOtp(number, OTP) {
    try {
      const otpCreated = new Otp({
        number: number,
        otp: OTP,
      });
      otpCreated.otp = await hashItem(otpCreated.otp);
      const result = await otpCreated.save();

      if (!result) {
        throw new Error("otp creation failed");
      } else {
        return {
          message: "Otp created successfully",
          data: result,
          status: "success",
          code: 200,
        };
      }
    } catch (error) {
      logger.error("[OTP DAO]: ", error);
      throw error;
    }
  }

  async getOtpByNumber(number) {
    try {
      const otp = await Otp.find({
        number: number,
      });
      return {
        message: "Otp fetched successfully",
        data: otp,
        status: "success",
        code: 200,
      };
    } catch (error) {
      logger.error("[OTP DAO]: ", error);
      throw error;
    }
  }

  async deleteAllOtp(number) {
    try {
      const deleteAllOtp = await Otp.deleteMany({
        number: number,
      });
      return {
        message: "Otp deleted successfully",
        data: deleteAllOtp,
        status: "success",
        code: 200,
      };
    } catch (error) {
      logger.error("[OTP DAO]: ", error);
      throw error;
    }
  }
}

module.exports = OtpDao;
