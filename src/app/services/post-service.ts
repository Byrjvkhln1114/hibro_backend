import { GraphQLError } from "graphql";
import { prisma } from "@/utils/prisma";

export type Post = {
  id: String;
  image: String;
  uid: String;
  location: [String];
};
export type PostCreateInput = {
  id: String;
  image: String;
  uid: String;
  location: [String];
};
export const getPostList = async () => {
  try {
    const result = await prisma.post.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on getPostList");
  }
};
export const createPost = async (input: any) => {
  try {
    console.log(input);

    const result = await prisma.post.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error on createPost");
  }
};
