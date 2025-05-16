//* importing installed dependencies.......
import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import cors from "cors";

//* importing local created files.......
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//! Global Middleware................
app.use(express.json());
app.use(cookieparser());
connectDB();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://chat-app-liart-three-49.vercel.app",
    ],
    credentials: true,
  })
);

//! Routes...................
app.use("/api", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
