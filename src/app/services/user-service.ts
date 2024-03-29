import { GraphQLError } from "graphql";
import { prisma } from "@/utils/prisma";
export type User = {
  id: String;
  friends: String[];
  image: String;
  username: String;
};
export type UserCreateInput = {
  id: String;
  friends: String[];
  image: String;
  username: String;
};
export type UserUpdateInput = {
  id: String;
  friends: String[];
  image: String;
  username: String;
};

export const getUserList = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on getUserList");
  }
};
export const getUserById = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on getUserById");
  }
};

export const createUser = async (input: any) => {
  try {
    const result = await prisma.user.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on createUser");
  }
};
