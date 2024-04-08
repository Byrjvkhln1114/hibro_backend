import { PostCreateInput, createPost } from "@/app/services/post-service";

export const postMutations = {
  createPost: (_: unknown, { input }: { input: PostCreateInput }) =>
    createPost(input),
};
