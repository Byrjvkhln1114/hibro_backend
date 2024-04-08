import { gql } from "graphql-tag";
export const PostTypeDefs = gql`
  type Post {
    id: String
    image: String
    uid: String
    location: [String]
  }
  input PostCreateInput {
    id: String!
    image: String
    uid: String
    location: [String]
  }

  type Mutation {
    createPost(input: PostCreateInput!): Post
  }
  type Query {
    getPostList: [Post]
  }
`;
