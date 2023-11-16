import Joi from "joi";
import { Request, Response } from "express";
import { response } from "../utils/";

class AuthController {
  static async login(req: Request, res: Response) {
    return response(res, 200, "Login success");
  }

  static async logout(req: Request, res: Response) {
    return response(res, 200, "Logout success");
  }

  static async verifyEmail(req: Request, res: Response) {
    return response(res, 200, "Verify email success");
  }

  static async confirmEmail(req: Request, res: Response) {
    return response(res, 200, "Confirm email success");
  }

  static async forgotPassword(req: Request, res: Response) {
    return response(res, 200, "Forgot password success");
  }

  static async resetPassword(req: Request, res: Response) {
    return response(res, 200, "Reset password success");
  }

  static async changePassword(req: Request, res: Response) {
    return response(res, 200, "Change password success");
  }

  static async generateAccessToken(req: Request, res: Response) {
    return response(res, 200, "Generate access token success");
  }
}

export default AuthController