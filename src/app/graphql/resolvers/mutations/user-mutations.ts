import { UserCreateInput, createUser } from "@/app/services/user-service";

export const userMutations = {
  createUser: (_: unknown, { input }: { input: UserCreateInput }) =>
    createUser(input),
};
