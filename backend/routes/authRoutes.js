import express from "express";
import { registerOwner, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register-owner", registerOwner);
router.post("/login", loginUser);

export default router;
