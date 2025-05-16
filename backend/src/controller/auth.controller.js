import userModel from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/utils.js";

const signUp = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        if (!fullname || !email || !password)
            return res.status(400).json({ message: "All fields are required!" });
        if (password.length < 6)
            return res
                .status(400)
                .json({ message: "Password must be atleast 6 characters logn!" });
        const isExists = await userModel.findOne({ email });
        if (isExists)
            return res.status(400).json({ message: "User already exists!" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            fullname,
            email,
            password: hashedPassword,
        });
        // * Token is .........
        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
        } else {
            res
                .status(201)
                .json({ message: "Somethings went wrong: Try again!", success: false });
        }
        res
            .status(201)
            .json({ message: "Signup successfull", success: true, data: newUser });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message,
        });
    }
};

// !LOgin Controller..........
const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password)
            return res.status(400).json({ message: "All fields are required!" });
        const isUser = await userModel.findOne({ email });
        if (!isUser)
            return res.status(400).json({ message: "Invalid credentials!" });
        const isPasswordCurrect = await bcrypt.compare(password, isUser.password);
        if (!isPasswordCurrect)
            return res.status(400).json({ message: "Invalid credentials" });
        // Generate Token .......
        generateToken(isUser._id, res);
        res
            .status(200)
            .json({ message: "Login successful", success: true, data: isUser });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message,
        });
    }
};
const logOut = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: 'Logout successfull' });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message,
        });
    }
};
const profileUpdate = async (req, res) => {
    const { profilePic } = req.body;
    try {
        const userId = req.user._id;
        if (!profilePic) return res.status(400).json({ message: "Profile picture is required!" });
        //! Now Upload photo in cloudinary (cloudinary mothed is  cloudinary.uploader.upload(profilePic)) and return one url
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        conosle.log("For Cloudinary", uploadResponse)

        //! Now Update Profile pic...........
        const updatedUser = await userModel.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true })

        res.status(200).json({ message: "Profile picture update successfully!", success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message,
        });
    }
};

const checkAuth = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message,
            success: false,
        })
    }
}

export { logIn, logOut, profileUpdate, signUp, checkAuth };
