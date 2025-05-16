import userModel from "../model/user.model.js";


export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ message: 'Unauthorized Request: Please Login!' });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ message: 'Unauthorized Request: Invalid Token!' });
        const user = await userModel.findById(decoded.userId).select("-password");
        if (!user) return res.status(401).json({ message: 'User not found!' });
        res.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error!',
            error: error.message,
            success: false,
        })
    }
}