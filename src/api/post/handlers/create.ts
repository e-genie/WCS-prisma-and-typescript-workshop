import { PostHandlers } from "./../interface";
import prisma from "../../../../prisma/client";

const createPost: PostHandlers["create"] = async (req, res) => {
  const { title, content, categoryId, authorId, isDisabled } = req.body;
  try {
    const createPost = await prisma.post.create({
      data: {
        title,
        content,
        categoryId,
        authorId,
        isDisabled,
      },
    });
    res.status(200).json(createPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default createPost;
