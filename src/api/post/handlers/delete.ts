import { PostHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const deletePost: PostHandlers["delete"] = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "post deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default deletePost;
