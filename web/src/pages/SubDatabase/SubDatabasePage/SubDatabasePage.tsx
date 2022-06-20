import SubDatabaseCell from 'src/components/SubDatabase/SubDatabaseCell'

type SubDatabasePageProps = {
  id: number
}

const SubDatabasePage = ({ id }: SubDatabasePageProps) => {
  return <SubDatabaseCell id={id} />
}

export default SubDatabasePage
