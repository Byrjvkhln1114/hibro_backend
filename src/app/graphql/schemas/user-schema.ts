import { gql } from "graphql-tag";
export const UserTypeDefs = gql`
  type User {
    id: string!
    friends: [string]!
    image: string
    username: string
  }
  input UserCreateInput {
    id: string!
    friends: [string]!
    image: string
    username: string
  }
  input UserUpdateInput {
    id: string!
    friends: [string]!
    image: string
    username: string
  }
  type Query {
    getUserList: [User]
    getUser(id: string): User
  }
  type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(input: UserUpdateInput!): User
    deleteUser(id: string!): User
  }
`;
