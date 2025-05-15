import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, requried: true, minlength: 6 },
    profilePic: { type: String, default: "" }

}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);

export default userModel;