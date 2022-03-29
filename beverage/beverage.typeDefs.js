import { gql } from "apollo-server";

export default gql`
  type Beverage {
    id: Int!
    name: String!
    price: Int!
    type: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    beverages: [Beverage]
    beverage: Beverage
  }

  type Mutation {
    createBeverage(name: String!, price: Int!, type: String): Beverage
    updateBevarage(id: Int!, price: Int!): Beverage
    deleteBevarage(id: Int!): Beverage
  }
`;
