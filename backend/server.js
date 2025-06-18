import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true, // allow frontend to send cookies
    }
));

// Routes
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/chat",chatRouter);

app.listen(PORT, ()=>{
    console.log("Server is running on PORT: " + PORT);
    connectDB();
}); 