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
export const userList: User[] = [
  {
    id: "21318371937",
    friends: [],
    image:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    username: "Faze Tea",
  },
];
export const getUserList = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on getUserList");
  }
};
export const getUserById = async (id: String) => {
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
export const updateUser = (input: UserUpdateInput): User | undefined => {
  const user = userList.find((user) => user.id === input.id);
  if (!user) throw new GraphQLError("User not found");
  user.id = input.id;
  user.image = input.image;
  user.friends = input.friends;
  user.username = input.username;
  return user;
};
export const deleteUser = (id: String): User | undefined => {
  const index = userList.findIndex((user) => user.id === id);
  if (index === -1) throw new GraphQLError("User not found");
  return userList.splice(index, 1)[0];
};
