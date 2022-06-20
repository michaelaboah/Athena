export const schema = gql`
  type UsersJoinSubDatabases {
    id: Int!
    user: User!
    userId: Int!
    subdatabase: SubDatabase!
    subdatabaseId: Int!
  }

  type Query {
    usersJoinSubDatabaseses: [UsersJoinSubDatabases!]! @requireAuth
    usersJoinSubDatabases(id: Int!): UsersJoinSubDatabases @requireAuth
  }

  input CreateUsersJoinSubDatabasesInput {
    userId: Int!
    subdatabaseId: Int!
  }

  input UpdateUsersJoinSubDatabasesInput {
    userId: Int
    subdatabaseId: Int
  }

  type Mutation {
    createUsersJoinSubDatabases(
      input: CreateUsersJoinSubDatabasesInput!
    ): UsersJoinSubDatabases! @requireAuth
    updateUsersJoinSubDatabases(
      id: Int!
      input: UpdateUsersJoinSubDatabasesInput!
    ): UsersJoinSubDatabases! @requireAuth
    deleteUsersJoinSubDatabases(id: Int!): UsersJoinSubDatabases! @requireAuth
  }
`
