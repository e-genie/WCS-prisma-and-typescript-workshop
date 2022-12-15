import { TIdParam, ResponseError } from "./../../types/interfaces";
import { User } from "@prisma/client";
import { RequestHandler } from "express";

type UserBodyCreate = Omit<User, "id" | "createdAt" | "updatedAt">;
type UserBodyUpdate = Omit<User, "id" | "createdAt" | "updatedAt">;

export interface UserHandlers {
  getAll: RequestHandler<null, User[] | ResponseError, null>;
  getOne: RequestHandler<TIdParam, User | ResponseError, null>;
  create: RequestHandler<TIdParam, User | ResponseError, UserBodyCreate>;
  delete: RequestHandler<TIdParam, { message: string } | ResponseError>;
  update: RequestHandler<TIdParam, User | ResponseError, UserBodyUpdate>;
}
