const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type StolenCar {
    id: ID!
    make: String!
    model: String!
    year: Int
    color: String
    licensePlate: String!
    VIN: String
    dateStolen: String!
    location: String!
    description: String
    status: String!
    ownerLastName: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getStolenCars: [StolenCar]
    getStolenCar(id: ID!): StolenCar
  }

  type Mutation {
    addStolenCar(
      make: String!
      model: String!
      year: Int
      color: String
      licensePlate: String!
      VIN: String
      dateStolen: String!
      location: String!
      description: String
      status: String
      ownerLastName: String
    ): StolenCar

    updateStolenCar(
      id: ID!
      make: String
      model: String
      year: Int
      color: String
      licensePlate: String
      VIN: String
      dateStolen: String
      location: String
      description: String
      status: String
      ownerLastName: String
    ): StolenCar

    deleteStolenCar(id: ID!): Boolean!
  }
`;

module.exports = { typeDefs };
