import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

const loginUser = catchAsync(async (req: Request, res: Response) => {});

export const AuthController = {
  loginUser,
};
