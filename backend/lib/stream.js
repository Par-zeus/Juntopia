import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

if(!apiKey || !apiSecret){
    console.error("Stream API key or secret not found");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData)=>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.log("Error upserting StreamUser: ",error);
    }
}

export const generateStreamToken = (userId)=>{
     try {
        // Ensure userId is string
        const userIDStr = String(userId);
        const token = streamClient.createToken(userIDStr);
        return token;
     } catch (error) {
        console.log("Error generating StreamToken: ",error);
     }
}