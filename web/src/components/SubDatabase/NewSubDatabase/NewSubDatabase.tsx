import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SubDatabaseForm from 'src/components/SubDatabase/SubDatabaseForm'

const CREATE_SUB_DATABASE_MUTATION = gql`
  mutation CreateSubDatabaseMutation($input: CreateSubDatabaseInput!) {
    createSubDatabase(input: $input) {
      id
    }
  }
`

const NewSubDatabase = () => {
  const [createSubDatabase, { loading, error }] = useMutation(CREATE_SUB_DATABASE_MUTATION, {
    onCompleted: () => {
      toast.success('SubDatabase created')
      navigate(routes.subDatabases())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { ownerId: parseInt(input.ownerId), })
    createSubDatabase({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SubDatabase</h2>
      </header>
      <div className="rw-segment-main">
        <SubDatabaseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSubDatabase
