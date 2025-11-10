import { UserModel } from "../models/user.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await UserModel.create(req.body);

    const token = generateToken({ id: user._id, email: user.email });

    res.status(201).json({
      message: "User created successfully",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    // Unique error code
    if (err.code === 11000) {
      res.status(400).json({ message: "Email already in use" });
    }

    next(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    res.status(400).json({ message: "Invalid email or password" });
  }

  const token = generateToken({ id: user.id, email: user.email });

  res.status(200).json({ message: "Logged in successfully", data: { token } });
};
