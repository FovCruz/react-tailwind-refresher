// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

/* =====================
   Middlewares
===================== */
app.use(cors());
app.use(express.json());

/* =====================
   Routes
===================== */
app.use("/api/auth", authRoutes);

/* =====================
   Config
===================== */
const PORT = process.env.PORT || 4000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://mongo:27017/refresherdb";

/* =====================
   Database + Server
===================== */
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
