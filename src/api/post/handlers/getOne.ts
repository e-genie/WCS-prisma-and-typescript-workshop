import prisma from "../../../../prisma/client";
import { PostHandlers } from "../interface";

const getOnePost: PostHandlers["getOne"] = async (req, res) => {
  const { id } = req.params;
  try {
    const getPost = await prisma.post.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.status(200).json(getPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getOnePost;
