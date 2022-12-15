import { UserHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deleteUser: UserHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deleteUser;
