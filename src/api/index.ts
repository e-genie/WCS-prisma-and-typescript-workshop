import { Router } from "express";
import users from "./user/routes";
import posts from "./post/routes";
import categories from "./category/routes";

const router = Router();

router.use("/users", users);
router.use("/posts", posts);
router.use("/categories", categories);

export default router;
