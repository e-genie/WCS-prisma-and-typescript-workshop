import { PostHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const getAllPosts: PostHandlers["getAll"] = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getAllPosts;
