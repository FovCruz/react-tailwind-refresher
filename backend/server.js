// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URI || "mongodb://mongo:27017/refresherdb";

mongoose.connect(MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => 
	console.log(`Server running on port ${PORT}`)
);
  })
  .catch(err => console.error("Mongo connection error", err));
