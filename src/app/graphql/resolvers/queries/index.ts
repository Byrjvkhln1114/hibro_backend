import { userQueries } from "./user-query";
import { postQuery } from "./post-query";
export const Query = { ...userQueries, ...postQuery };
