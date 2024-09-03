import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const encryptedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: encryptedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "A new user created",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser)
      return next(errorHandler(404, "No user is linked to this email !"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Password !"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: encryptedPassword, ...userwithoutPw } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(userwithoutPw);
  } catch (error) {
    next(error);
  }
};
