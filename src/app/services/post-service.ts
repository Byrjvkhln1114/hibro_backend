import { GraphQLError } from "graphql";
import { prisma } from "@/utils/prisma";

export type Post = {
  id: String;
  image: String;
  uid: String;
  location: [String];
  username: String;
  userimage: String;
};
export type PostCreateInput = {
  id: String;
  image: String;
  uid: String;
  location: [String];
  username: String;
  userimage: String;
};
export type PostUpdateInput = {
  id: String;
  image: String;
  uid: String;
  location: [String];
  username: String;
  userimage: String;
};
export const getPostList = async () => {
  try {
    const result = await prisma.post.findMany();
    return result.reverse();
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on getPostList");
  }
};
export const createPost = async (input: any) => {
  try {
    const { id, ...restInput } = input;
    const result = await prisma.post.create({ data: restInput });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on createPost");
  }
};

export const getPostByUid = async (uid: string) => {
  try {
    const result = await prisma.post.findMany({ where: { uid } });
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on getUserById");
  }
};
