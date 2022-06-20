import type { EditSubDatabaseById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SubDatabaseForm from 'src/components/SubDatabase/SubDatabaseForm'

export const QUERY = gql`
  query EditSubDatabaseById($id: Int!) {
    subDatabase: subDatabase(id: $id) {
      id
      name
      ownerId
    }
  }
`
const UPDATE_SUB_DATABASE_MUTATION = gql`
  mutation UpdateSubDatabaseMutation($id: Int!, $input: UpdateSubDatabaseInput!) {
    updateSubDatabase(id: $id, input: $input) {
      id
      name
      ownerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ subDatabase }: CellSuccessProps<EditSubDatabaseById>) => {
  const [updateSubDatabase, { loading, error }] = useMutation(UPDATE_SUB_DATABASE_MUTATION, {
    onCompleted: () => {
      toast.success('SubDatabase updated')
      navigate(routes.subDatabases())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { ownerId: parseInt(input.ownerId), })
    updateSubDatabase({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit SubDatabase {subDatabase.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SubDatabaseForm subDatabase={subDatabase} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
