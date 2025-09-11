import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(203).send("User Already Exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await userModel.create({ username, email, password: hashedPassword });

    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(505).send(error.message);
  }
};

export const login = async (req, res) => {
  console.log(jwt.verify(req.body.token, process.env.JWT_SECRET));
  res.send("sometihng");
};
