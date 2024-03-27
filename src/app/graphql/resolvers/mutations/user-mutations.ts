import {
  User,
  updateUser,
  UserCreateInput,
  UserUpdateInput,
  deleteUser,
  createUser,
} from "@/app/services/user-service";

export const userMutations = {
  createUser: (_: unknown, { input }: { input: UserCreateInput }) =>
    createUser(input),
  updateUser: (_: unknown, { input }: { input: UserUpdateInput }) =>
    updateUser(input),
  deleteUser: (_: unknown, { id }: { id: string }) => deleteUser(id),
};
