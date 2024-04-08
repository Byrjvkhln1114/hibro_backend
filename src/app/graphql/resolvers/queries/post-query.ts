import { getPostList } from "@/app/services/post-service";

export const postQuery = {
  getPostList: () => getPostList(),
};
