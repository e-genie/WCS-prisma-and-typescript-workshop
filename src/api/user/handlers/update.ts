import { UserHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const updateUser: UserHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        password,
      },
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateUser;
