import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.send(users);
};

export const getUser = (req, res) => {
  const id = req.params.id - 1;
  const user = users.find((u, index) => index == id);
  console.log(user, users);
  res.send(user);
};

export const addUser = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await userModel.findOne({ email: user.email });

    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await userModel.create(user);
      res.status(201).send({ message: "User added successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error adding user", error });
  }
};
