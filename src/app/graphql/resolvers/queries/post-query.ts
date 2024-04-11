import { getPostByUid, getPostList } from "@/app/services/post-service";

export const postQuery = {
  getPostList: () => getPostList(),
  getPost: (_: unknown, { uid }: { uid: string }) => getPostByUid(uid),
};
