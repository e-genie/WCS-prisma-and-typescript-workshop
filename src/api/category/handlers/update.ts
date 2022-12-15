import { CategoryHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const updateCategory: CategoryHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updateCategory = await prisma.category.update({
      where: {
        id: id,
      },
      data: { name },
    });
    res.status(200).json(updateCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updateCategory;
