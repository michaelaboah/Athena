import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SubDatabase/SubDatabasesCell'

const DELETE_SUB_DATABASE_MUTATION = gql`
  mutation DeleteSubDatabaseMutation($id: Int!) {
    deleteSubDatabase(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const SubDatabasesList = ({ subDatabases }) => {
  const [deleteSubDatabase] = useMutation(DELETE_SUB_DATABASE_MUTATION, {
    onCompleted: () => {
      toast.success('SubDatabase deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete subDatabase ' + id + '?')) {
      deleteSubDatabase({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Owner id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {subDatabases.map((subDatabase) => (
            <tr key={subDatabase.id}>
              <td>{truncate(subDatabase.id)}</td>
              <td>{truncate(subDatabase.name)}</td>
              <td>{truncate(subDatabase.ownerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.subDatabase({ id: subDatabase.id })}
                    title={'Show subDatabase ' + subDatabase.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSubDatabase({ id: subDatabase.id })}
                    title={'Edit subDatabase ' + subDatabase.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete subDatabase ' + subDatabase.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(subDatabase.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubDatabasesList
