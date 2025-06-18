import express from "express"
import { protectRoute } from '../middlewares/auth.middleware.js';
import { acceptFriendRequest, getFriendRequest, getMyFriends, getOutgoingFriendRequest, getRecommendedUsers, sendFriendRequest } from "../controllers/user.controller.js";


const userRouter = express.Router();

// apply auth middleware to all routes
userRouter.use(protectRoute);

userRouter.get("/",getRecommendedUsers);
userRouter.get("/friends",getMyFriends);

userRouter.post("/friend-request/:id",sendFriendRequest);
userRouter.put("/accept-friend-request/:id",acceptFriendRequest);

userRouter.get("/friend-requests",getFriendRequest);
userRouter.get("/outgoing-friend-requests",getOutgoingFriendRequest);

export default userRouter;