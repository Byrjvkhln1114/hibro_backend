import { userMutations } from "./user-mutations";
import { postMutations } from "./post-mutations";
export const Mutation = { ...userMutations, ...postMutations };
