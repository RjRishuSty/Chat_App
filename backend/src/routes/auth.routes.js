import { Router } from "express";
import { checkAuth, logIn, logOut, profileUpdate, signUp } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/login", logIn)
router.post("/signup", signUp)
router.post("/logout", logOut)
router.put("/profile-update", protectRoute, profileUpdate);

router.get("/check", protectRoute, checkAuth);


export default router;