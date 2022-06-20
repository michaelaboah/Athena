import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const subDatabases: QueryResolvers['subDatabases'] = () => {
  return db.subDatabase.findMany()
}

export const subDatabase: QueryResolvers['subDatabase'] = ({ id }) => {
  return db.subDatabase.findUnique({
    where: { id },
  })
}

export const createSubDatabase: MutationResolvers['createSubDatabase'] = ({
  input,
}) => {
  return db.subDatabase.create({
    data: input,
  })
}

export const updateSubDatabase: MutationResolvers['updateSubDatabase'] = ({
  id,
  input,
}) => {
  return db.subDatabase.update({
    data: input,
    where: { id },
  })
}

export const deleteSubDatabase: MutationResolvers['deleteSubDatabase'] = ({
  id,
}) => {
  return db.subDatabase.delete({
    where: { id },
  })
}
