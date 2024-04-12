import { gql } from "graphql-tag";

export const PostTypeDefs = gql`
  type Post {
    id: String
    image: String
    uid: String
    location: [String]
    username: String
    userimage: String
  }
  input PostCreateInput {
    id: String!
    image: String
    uid: String
    location: [String]
    username: String
    userimage: String
  }

  type Mutation {
    createPost(input: PostCreateInput!): Post
  }
  type Query {
    getPostList: [Post]
    getPost(uid: String): [Post]
  }
`;
