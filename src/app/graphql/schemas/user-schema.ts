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
  input changeImageInput {
    id: String!
    image: String
  }
  type Query {
    getUserList: [User]
    getUser(id: String): User
  }
  type Mutation {
    createUser(input: UserCreateInput!): User
    changeImage(input: changeImageInput!): User
    deleteUser(id: String!): User
  }
`;
