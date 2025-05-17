//* importing installed dependencies.......
//* importing local created file..........
import cloudinary from "../lib/cloudinary.js"
import messageModel from "../model/message.model.js"
import userModel from "../model/user.model.js"

//! Get all User. who stored in database. without me.
const getUsersForSidebar = async (req, res) => {
    try {
        // Current login user...
        const loggedInUserId = req.user._id; //user its self..
        const filteredUsers = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        res.status(500).json({
            message: 'Internal sever error!',
            success: false,
            error: error.message,
        }) 
    }
} 
 
//! Get User messages.........
const getMessages = async (req, res) => {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;
    try {
        const messages = await messageModel.find({
            $or: [
                { senderId: myId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: myId }
            ]
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({
            message: 'Internal sever error!',
            success: false,
            error: error.message,
        })
    }
}

//! Send message to other user.......
const sendMessages = async (req, res) => {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    try {
        const senderId = req.user._id;
        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }
        const newMessage = new messageModel({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })
        await newMessage.save();

        // TODO: IMPLEMENT SOCKET IO TO SEND MESSAGE TO RECEIVER FOR REALTIME CHAT>>>>
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(500).json({
            message: 'Internal sever error!',
            success: false,
            error: error.message,
        })
    }
}

export { getMessages, getUsersForSidebar, sendMessages }