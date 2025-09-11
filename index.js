import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import cors from "cors";

//importing routes
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

import authenticateToken from "./middlewares/jwt.js";

connectDB();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/user", authenticateToken, userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
