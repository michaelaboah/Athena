import type {
  QueryResolvers,
  MutationResolvers,
  UsersJoinSubDatabasesResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const usersJoinSubDatabaseses: QueryResolvers['usersJoinSubDatabaseses'] =
  () => {
    return db.usersJoinSubDatabases.findMany()
  }

export const usersJoinSubDatabases: QueryResolvers['usersJoinSubDatabases'] = ({
  id,
}) => {
  return db.usersJoinSubDatabases.findUnique({
    where: { id },
  })
}

export const createUsersJoinSubDatabases: MutationResolvers['createUsersJoinSubDatabases'] =
  ({ input }) => {
    return db.usersJoinSubDatabases.create({
      data: input,
    })
  }

export const updateUsersJoinSubDatabases: MutationResolvers['updateUsersJoinSubDatabases'] =
  ({ id, input }) => {
    return db.usersJoinSubDatabases.update({
      data: input,
      where: { id },
    })
  }

export const deleteUsersJoinSubDatabases: MutationResolvers['deleteUsersJoinSubDatabases'] =
  ({ id }) => {
    return db.usersJoinSubDatabases.delete({
      where: { id },
    })
  }

export const UsersJoinSubDatabases: UsersJoinSubDatabasesResolvers = {
  user: (_obj, { root }) =>
    db.usersJoinSubDatabases.findUnique({ where: { id: root.id } }).user(),
  subdatabase: (_obj, { root }) =>
    db.usersJoinSubDatabases
      .findUnique({ where: { id: root.id } })
      .subdatabase(),
}
