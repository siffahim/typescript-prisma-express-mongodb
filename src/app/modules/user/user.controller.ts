import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const user = await UserService.createUserToDB({ ...req.body });

  res.status(200).json({
    success: true,
    message: "User register successfully",
    data: user,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const user = await UserService.getAllUserFromDB();

  res.status(200).json({
    success: true,
    message: "All User retrieved successfully",
    data: user,
  });
};

const getSingleUser = async (req: Request, res: Response) => {
  const user = await UserService.getSingleUserFromDB(req.params.id);

  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
};

const updateUser = async (req: Request, res: Response) => {
  const user = await UserService.updateUserToDB(req.params.id, { ...req.body });

  res.status(200).json({
    success: true,
    message: "User update successfully",
    data: user,
  });
};

const deleteUser = async (req: Request, res: Response) => {
  const user = await UserService.deleteUserToDB(req.params.id);

  res.status(200).json({
    success: true,
    message: "User delete successfully",
    data: user,
  });
};

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
