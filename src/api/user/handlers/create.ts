import { UserHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createUser: UserHandlers["create"] = async (req, res) => {
  const { name, password } = req.body;
  try {
    const createUser = await prisma.user.create({
      data: {
        name,
        password,
      },
    });
    res.status(200).json(createUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createUser;
