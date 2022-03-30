import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
    name: String!
    location: String
    avatarURL: String
    githubUserName: String
    createdAt: String!
    updatedAt: String!
  }

  type UserResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    createAccount(
      username: String!
      password: String!
      email: String!
      name: String!
      location: String
      avatarURL: String
      githubUserName: String
    ): UserResult
  }

  type Query {
    seeProfile(username: String!): User
  }
`;
