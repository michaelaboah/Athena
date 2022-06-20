import type { FindSubDatabases } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SubDatabases from 'src/components/SubDatabase/SubDatabases'

export const QUERY = gql`
  query FindSubDatabases {
    subDatabases {
      id
      name
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No subDatabases yet. '}
      <Link
        to={routes.newSubDatabase()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ subDatabases }: CellSuccessProps<FindSubDatabases>) => {
  return <SubDatabases subDatabases={subDatabases} />
}
