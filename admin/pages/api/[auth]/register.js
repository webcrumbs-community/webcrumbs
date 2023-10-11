import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { name, email, password } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email" });
      return;
    }

    if (!password) {
      res
        .status(422)
        .json({ message: "Password Cannot be Empty or Undefined" });
      return;
    }

    if (!name) {
      res.status(422).json({ message: "Name Cannot be Empty or Undefined" });
      return;
    }

    await connectMongoDB();

    const checkExisting = await User.findOne({ email: email });

    if (checkExisting) {
      res.status(422).json({ message: "User Data Already Exist" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User Created" });
    return;
  } else {
    return res
      .status(500)
      .json({ message: "An error occurred while registering the user." });
  }
}

export default handler;
