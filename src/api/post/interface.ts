import { ResponseError, TIdParam } from "./../../types/interfaces";
import { Post } from "@prisma/client";
import { RequestHandler } from "express";

type PostBodyCreate = Omit<Post, "id" | "createdAt" | "updatedAt">;
type PostBodyUpdate = Omit<Post, "id" | "createdAt" | "updatedAt">;

export interface PostHandlers {
  getAll: RequestHandler<null, Post[] | ResponseError, null>;
  getOne: RequestHandler<TIdParam, Post | ResponseError, null>;
  create: RequestHandler<TIdParam, Post | ResponseError, PostBodyCreate>;
  delete: RequestHandler<TIdParam, { message: string } | ResponseError>;
  update: RequestHandler<TIdParam, Post | ResponseError, PostBodyUpdate>;
}
