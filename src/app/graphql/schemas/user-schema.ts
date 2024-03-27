import { gql } from "graphql-tag";
export const UserTypeDefs = gql`
  type User {
    id: String!
    friends: [String]!
    image: String
    username: String
  }
  input UserCreateInput {
    id: String!
    friends: [String]!
    image: String
    username: String
  }
  input UserUpdateInput {
    id: String!
    friends: [String]!
    image: String
    username: String
  }
  type Query {
    getUserList: [User]
    getUser(id: String): User
  }
  type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(input: UserUpdateInput!): User
    deleteUser(id: String!): User
  }
`;
