import { getUserById, getUserList } from "@/app/services/user-service";

export const userQueries = {
  getUserList: () => getUserList(),
  getUser: (_: unknown, { id }: { id: string }) => getUserById(id),
};
