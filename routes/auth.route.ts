import express from "express";
import { AuthController } from "../controllers";
import {
  useLoginRateLimiter,
  useVerifyLimiter,
} from "../middlewares/rateLimiter";
import { useAuth } from "../middlewares";
import {
  useLoginSlowDown,
  useVerifySlowDown,
} from "../middlewares/rateSlowDown";

const authRouter = express.Router();

authRouter.post(
  "/login",
  [useLoginRateLimiter, useLoginSlowDown],
  AuthController.login
);

authRouter.post("/logout", [useAuth], AuthController.logout);
authRouter.post("/refresh-token", AuthController.generateAccessToken);

authRouter.post(
  "/verify-email",
  [useAuth, useVerifyLimiter, useVerifySlowDown],
  AuthController.verifyEmail
);

authRouter.get(
  "/confirm-email",
  [useVerifyLimiter, useVerifySlowDown],
  AuthController.confirmEmail
);

authRouter.post(
  "/forgot-password",
  [useVerifyLimiter, useVerifySlowDown],
  AuthController.forgotPassword
);
authRouter.post(
  "/reset-password",
  [useVerifyLimiter, useVerifySlowDown],
  AuthController.resetPassword
);

authRouter.put(
  "/change-password",
  [useVerifyLimiter, useVerifySlowDown],
  AuthController.changePassword
);
