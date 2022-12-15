import { PostHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const updatePost: PostHandlers["update"] = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId, authorId, isDisabled } = req.body;
  try {
    const updatePost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        categoryId,
        authorId,
        isDisabled,
      },
    });
    res.status(200).json(updatePost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default updatePost;
