import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


// Register owner
export const registerOwner = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const owner = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "owner",
      mobile,
    });

    res.status(201).json({
      _id: owner._id,
      name: owner.name,
      email: owner.email,
      role: owner.role,
      token: generateToken(owner._id, owner.role),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login (for both owner and customer)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
