import { UserCreateInput, createUser, changeImageInput, changeImage } from "@/app/services/user-service";

export const userMutations = {
  createUser: (_: unknown, { input }: { input: UserCreateInput }) => createUser(input),
  changeImage: (_: unknown, { input }: { input: changeImageInput }) => changeImage(input),
};
