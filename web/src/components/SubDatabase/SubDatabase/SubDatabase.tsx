import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SUB_DATABASE_MUTATION = gql`
  mutation DeleteSubDatabaseMutation($id: Int!) {
    deleteSubDatabase(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const SubDatabase = ({ subDatabase }) => {
  const [deleteSubDatabase] = useMutation(DELETE_SUB_DATABASE_MUTATION, {
    onCompleted: () => {
      toast.success('SubDatabase deleted')
      navigate(routes.subDatabases())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete subDatabase ' + id + '?')) {
      deleteSubDatabase({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">SubDatabase {subDatabase.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{subDatabase.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{subDatabase.name}</td>
            </tr><tr>
              <th>Owner id</th>
              <td>{subDatabase.ownerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSubDatabase({ id: subDatabase.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(subDatabase.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SubDatabase
