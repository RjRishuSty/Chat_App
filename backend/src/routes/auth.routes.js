import { Router } from "express";
import { logIn, logOut, profileUpdate, signUp } from "../controller/auth.controller.js";

const router = Router();

router.post("/login", logIn)
router.post("/signup", signUp)
router.post("/logout", logOut)
router.put("/profile-update", profileUpdate);


export default router;