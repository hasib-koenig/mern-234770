import express from "express";
// so that we can use environment variables from a .env file
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

console.log(process.env.PORT);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
