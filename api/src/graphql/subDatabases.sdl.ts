export const schema = gql`
  type SubDatabase {
    id: Int!
    name: String!
    ownerId: Int!
  }

  type Query {
    subDatabases: [SubDatabase!]! @requireAuth
    subDatabase(id: Int!): SubDatabase @requireAuth
  }

  input CreateSubDatabaseInput {
    name: String!
    ownerId: Int!
  }

  input UpdateSubDatabaseInput {
    name: String
    ownerId: Int
  }

  type Mutation {
    createSubDatabase(input: CreateSubDatabaseInput!): SubDatabase! @requireAuth
    updateSubDatabase(id: Int!, input: UpdateSubDatabaseInput!): SubDatabase!
      @requireAuth
    deleteSubDatabase(id: Int!): SubDatabase! @requireAuth
  }
`
