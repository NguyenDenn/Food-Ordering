import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("MongoDB connected successfully");
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
