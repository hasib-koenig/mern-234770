import express from "express";

import { getUsers, addUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getUser);

export default router;
