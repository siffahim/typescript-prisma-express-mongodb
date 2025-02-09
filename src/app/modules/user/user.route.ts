import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/create-user", UserController.createUser);

router
  .route("/:id")
  .get(UserController.getSingleUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

router.get("/", UserController.getAllUser);

export const UserRoutes = router;
