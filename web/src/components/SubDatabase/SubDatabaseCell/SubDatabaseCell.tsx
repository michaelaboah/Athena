import type { FindSubDatabaseById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SubDatabase from 'src/components/SubDatabase/SubDatabase'

export const QUERY = gql`
  query FindSubDatabaseById($id: Int!) {
    subDatabase: subDatabase(id: $id) {
      id
      name
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SubDatabase not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ subDatabase }: CellSuccessProps<FindSubDatabaseById>) => {
  return <SubDatabase subDatabase={subDatabase} />
}
