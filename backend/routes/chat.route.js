import express from "express"
import { getStreamToken } from "../controllers/chat.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const chatRouter = express.Router();

chatRouter.get("/token",protectRoute,getStreamToken);

export default chatRouter;