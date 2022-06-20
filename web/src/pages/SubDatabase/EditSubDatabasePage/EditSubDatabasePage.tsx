import EditSubDatabaseCell from 'src/components/SubDatabase/EditSubDatabaseCell'

type SubDatabasePageProps = {
  id: number
}

const EditSubDatabasePage = ({ id }: SubDatabasePageProps) => {
  return <EditSubDatabaseCell id={id} />
}

export default EditSubDatabasePage
