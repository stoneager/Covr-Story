import express from "express";
import { protect, ownerOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Example protected route for owner dashboard
router.get("/dashboard", protect, ownerOnly, (req, res) => {
  res.json({ message: "Welcome Owner Dashboard", user: req.user });
});

export default router;
