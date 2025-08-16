import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  label: String,
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: String
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["owner", "customer", "staff"], default: "customer" },
  mobile: String,
  gender: { type: String, enum: ["male", "female", "other"] },
  addresses: [addressSchema],
}, { timestamps: true });

export default mongoose.model("User", userSchema);
