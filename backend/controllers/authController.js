import { comparePassword, hashPassword } from "../helper/authConfig.js";
import User from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  const { name, email, phone, password, address } = req.body;

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res
        .status(400)
        .send({ error: "User Already Exists Please Login" });
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      address,
    });

    loginController(req, res);
  } catch (error) {
    res.status(500).send({ error: "An error occurred during registration" });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res
        .status(500)
        .send({ message: "User Does Not Exist Please Register" });

    const passwordCheck = await comparePassword(password, user.password);

    if (passwordCheck) {
      const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });

      user.token = token;
      await user.save();

      return res.send({
        message: "Login Successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        },
        token: token,
      });
    } else
      return res
        .status(500)
        .send({ message: "Invalid Credentials Please try again" });
  } catch (error) {
    res.status(500).send({ error: "An error occurred during login" });
  }
};

export const authenticate = async (req, res) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET_KEY
    );
    res.send({
      message: "authenticated",
    });
  } catch (error) {
    res.status(500).send({
      message: "error",
    });
  }
};
