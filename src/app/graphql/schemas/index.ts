import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { UserTypeDefs } from "./user-schema";

export const typeDefs = mergeTypeDefs([UserTypeDefs]);
