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
export type changeImageInput = {
  id: String;
  image: String;
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
export const changeImage = async (input: changeImageInput) => {
  try {
    console.log(input.id);

    const user = await prisma.user.findUnique({
      where: {
        id: `${input.id}`,
      },
    });
    //@ts-ignore
    user.image = input.image;
    return user;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on changeImage");
  }
};
