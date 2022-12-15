import { TIdParam, ResponseError } from "./../../types/interfaces";
import { Category } from "@prisma/client";
import { RequestHandler } from "express";

type CategoryBodyCreate = Omit<Category, "id" | "createdAt" | "updatedAt">;
type CategoryBodyUpdate = Omit<Category, "id" | "createdAt" | "updatedAt">;

export interface CategoryHandlers {
  getAll: RequestHandler<null, Category[] | ResponseError, null>;
  getOne: RequestHandler<TIdParam, Category | ResponseError, null>;
  create: RequestHandler<
    TIdParam,
    Category | ResponseError,
    CategoryBodyCreate
  >;
  delete: RequestHandler<TIdParam, { message: string } | ResponseError>;
  update: RequestHandler<
    TIdParam,
    Category | ResponseError,
    CategoryBodyUpdate
  >;
}
