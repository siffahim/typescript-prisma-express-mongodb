import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import config from "../../config";
import ApiError from "../../errors/ApiError";
import { errorLogger } from "../../shared/logger";

type IErrorMessage = {
  path: string;
  message: string;
};

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.node_env === "development"
    ? console.log("🚨 globalErrorHandler ~~ ", error)
    : errorLogger.error("🚨 globalErrorHandler ~~ ", error);

  let statusCode = 500;
  let message = "Something went wrong";
  let errorMessages: IErrorMessage[] = [];

  if (error.name === "TokenExpiredError") {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = "Session Expired";
    errorMessages = error?.message
      ? [
          {
            path: "",
            message:
              "Your session has expired. Please log in again to continue.",
          },
        ]
      : [];
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error.message
      ? [
          {
            path: "",
            message: error.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error.message;
    errorMessages = error.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env !== "production" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
