import prisma from "../../../../prisma/client";
import { UserHandlers } from "../interface";

const getOneUser: UserHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await prisma.user.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOneUser;
