import userModel from "../model/user.model.js";
import bcrypt from 'bcryptjs';


const signUp = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        if (!fullname || !email || !password) return res.status(400).json({ message: "All fields are required!" });
        if (password.length < 6) return res.status(400).json({ message: 'Password must be atleast 6 characters logn!' });
        const isExists = await userModel.findOne({ email });
        if (isExists) return res.status(400).json({ message: 'User already exists!' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            fullname,
            email,
            password: hashedPassword
        })
        // * Token is pendding.........
        await newUser.save();
        res.status(201).json({ message: 'Signup successfull', success: true, data: newUser })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}
const logIn = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}
const logOut = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}
const profileUpdate = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        })
    }
}

export { logIn, logOut, profileUpdate, signUp }