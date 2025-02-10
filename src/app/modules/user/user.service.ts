import { User } from "@prisma/client";
import prisma from "../../../../prisma";

//create user
const createUserToDB = async (payload: User) => {
  const { name, email, password } = payload;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      role: "USER",
    },
  });

  return user;
};

//get all user
const getAllUserFromDB = async () => {
  const allUsers = await prisma.user.findMany();

  return allUsers;
};

//get single user
const getSingleUserFromDB = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { email: true, id: true },
  });

  return user;
};

//update user
const updateUserToDB = async (id: string, payload: Partial<User>) => {
  const user = await prisma.user.update({
    where: { id },
    data: { ...payload, updatedAt: new Date() },
  });

  return user;
};

//delete user
const deleteUserToDB = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};

export const UserService = {
  createUserToDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserToDB,
  deleteUserToDB,
};
