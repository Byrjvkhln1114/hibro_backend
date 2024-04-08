import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { UserTypeDefs } from "./user-schema";
import { PostTypeDefs } from "./post-schema";

export const typeDefs = mergeTypeDefs([UserTypeDefs, PostTypeDefs]);
