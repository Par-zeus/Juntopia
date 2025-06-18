import FriendRequest from "../models/FriendRequest.js";
import User from "../models/User.js";




export const getRecommendedUsers = async (req,res)=>{
    try {
        const currentUserId = req.user._id;
        const currentUser = await User.findById(currentUserId);

        const recommendedUsers = await User.find({
            $and: [
                {_id: { $ne:currentUserId }}, // exclude current user
                {$id: { $nin:currentUser.friends }}, // exclude current user's friends
                {isOnboarded: true}, // exclude users who are not onboarded
            ]
        })

        res.status(200).json(recommendedUsers);
    } catch (error) {
        console.log("Error in getRecommendedUsers controller: ",error);
        res.status(500).json({message:error.message});
    }
}

export const getMyFriends = async (req,res)=>{
    try {
        const currentUserId = req.user._id;
        const currentUser = await User.findById(currentUserId)
        .select("friends")
        .populate("friends","fullName profilePic nativeLanguage, learningLanguage");

        // const friends = await User.find({
        //     _id: { $in:currentUser.friends }
        // })

        // res.status(200).json({success:true, friends});
        res.status(200).json(currentUser.friends);
    } catch (error) {
        console.log("Error in getMyFriends controller: ",error);
        res.status(500).json({message:error.message});
    }
}

export const sendFriendRequest = async (req,res)=>{
    try {
        const senderId = req.user._id;
        const {id:recipientId} = req.params;

        // prevent sending request to yourself
        if(senderId === recipientId){
            return res.status(400).json({message:"Cannot send friend request to yourself"});
        }

        // Check if recipient exists
        const recipient = await User.findById(recipientId);
        if(!recipient){
            return res.status(404).json({message:"Recipient not found"});
        }

        // Check if already friends
        if(recipient.friends.includes(senderId)){
            return res.status(400).json({message:"Already friends with the user"});
        }

        // Check if req already exists
        const existingRequest = await FriendRequest.findOne({
            $or:[
                {sender:senderId, recipient:recipientId},
                {sender:recipientId, recipient:senderId}
            ]
        })        

        if(existingRequest){
            return res.status(400).json({message:"Friend request already exists"});
        }

        const newRequest = await FriendRequest.create({
            sender:senderId,
            recipient:recipientId,
        })

        res.status(201).json(newRequest);
    } catch (error) {
        console.log("Error in sendFriendRequest controller: ",error);
        res.status(500).json({message:error.message});
    }
}

export const acceptFriendRequest = async (req,res)=>{
    try {
        const {id:requestId} = req.params;
        
        const friendRequest = await FriendRequest.findById(requestId);
        if(!friendRequest){
            return res.status(404).json({message:"Friend request not found"});
        }

        // Verify the current user is the recipient
        if(req.user._id !== friendRequest.recipient.toString()){
            return res.status(401).json({message:"Unauthorized"});
        }

        // Update the friend request status
        friendRequest.status = "accepted";
        await friendRequest.save();        

        // Update the friends list of both users
        await User.findByIdAndUpdate(friendRequest.sender, {
            $addToSet: { friends: friendRequest.recipient }
        });
        await User.findByIdAndUpdate(friendRequest.recipient, {
            $addToSet: { friends: friendRequest.sender }
        });

        res.status(200).json({success:true, message:"Friend request accepted"});
    } catch (error) {
        console.log("Error in acceptFriendRequest controller: ",error);
        res.status(500).json({message:error.message});
    }
}

export const getFriendRequest = async (req,res)=>{
    try {
        const incomingRequests = await FriendRequest.find({
            recipient:req.user._id,
            status:"pending",
        }).populate("sender","fullName profilePic nativeLanguage learningLanguage");

        const acceptRequests = await FriendRequest.find({
            recipient:req.user._id,
            status:"accepted",
        }).populate("sender","fullName profilePic");

        res.status(200).json({incomingRequests, acceptRequests});
    } catch (error) {
        console.log("Error in getFriendRequest controller: ",error);
        res.status(500).json({message:error.message});
    }
}

export const getOutgoingFriendRequest = async (req,res)=>{
    try {
        const outgoingRequests = await FriendRequest.find({
            sender:req.user._id,
            status:"pending",
        }).populate("recipient","fullName profilePic nativeLanguage learningLanguage");

        res.status(200).json(outgoingRequests);
    } catch (error) {
        console.log("Error in getOutgoingFriendRequest controller: ",error);
        res.status(500).json({message:error.message});
    }
}